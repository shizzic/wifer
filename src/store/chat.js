import { defineStore } from "pinia"
import { navJS } from "@/store/nav"
import { clearInterval, setInterval } from 'worker-timers'

export const chatJS = defineStore("chat", {
    state: () => ({
        open: false,
        show: null,
        server: null,
        ping_pong: null,
        target: null,
        messages: {},
        newMessages: {},

        lastUsername: "",
        lastSearch: false,
        roomsLeft: true,
        order: [],
        rooms: {},
    }),
    actions: {
        start() {
            if (!this.server) {
                this.server = new WebSocket(import.meta.env.VITE_WEBSOCKET_PROTOCOL + "://" + import.meta.env.VITE_SERVER_DOMAIN_NAME + "chat")

                this.server.onmessage = (e) => {
                    this.onMessage(e.data)
                }

                this.server.onopen = () => {
                    this.open = true
                    this.ping_pong = setInterval(this.sendPing, 10000) // отправляю пинг
                }

                this.server.onclose = () => {
                    clearInterval(this.ping_pong) // прекращаю отправление пинга на разорванное соединение
                    this.$reset()
                }
            }
        },

        close() {
            if (this.server)
                this.server.close()
        },

        onMessage(data) {
            data = JSON.parse(data)
            this.addTarget(data.user)

            switch (data.api) {
                case "message":
                    data.viewed = false
                    this.addRoom(data, true, "text")
                    this.rooms[data.user].typing = false
                    this.rooms[data.user].viewed = false

                    if (Number.isInteger(this.rooms[data.user].news))
                        this.rooms[data.user].news += 1
                    else
                        this.rooms[data.user].news = 1

                    this.rooms[data.user].user = data.user

                    this.messages[data.user].typing = false
                    if (this.newMessages && data.user in this.newMessages)
                        this.newMessages[data.user].unshift(data)

                    if (!this.lastSearch)
                        this.changeOrder(data.user)
                    else {
                        let reg = new RegExp(this.lastUsername, "gi")

                        if (data.username.match(reg))
                            this.changeOrder(data.user)
                    }
                    break
                case "view":
                    if (this.newMessages[data.user] && this.newMessages[data.user].length > 0) {
                        for (let message in this.newMessages[data.user]) {
                            if (this.newMessages[data.user][message].user == data.target && this.newMessages[data.user][message].viewed)
                                break

                            if (this.newMessages[data.user][message].user == data.target)
                                this.newMessages[data.user][message].viewed = true
                        }
                    }
                    else {
                        for (let message in this.messages[data.user].messages) {
                            if (this.messages[data.user].messages[message].user == data.target && this.messages[data.user].messages[message].viewed)
                                break

                            if (this.messages[data.user].messages[message].user == data.target)
                                this.messages[data.user].messages[message].viewed = true
                        }
                    }
                    this.addRoom(data, false, "viewed")
                    break
                case "typing":
                    this.messages[data.user].typing = data.typing
                    this.addRoom(data, false, "typing")
                    break
                case "access":
                    if ("access" in this.messages[data.user])
                        this.messages[data.user].access.target = data.access
                    else
                        this.messages[data.user].access = { target: data.access, user: false }
                    break
            }
        },

        sendMessage(data) {
            if (this.server && this.open)
                this.server.send(JSON.stringify(data))
        },

        // поддержка соединения
        sendPing() {
            this.sendMessage({ text: 'ping' })
        },

        addRoom(data, newMessage, field = null) {
            if (newMessage) {
                this.rooms[data.user].viewed = false
                this.rooms[data.user].created_at = data.created_at

                if (!this.rooms[data.user].news)
                    navJS().setHearts(navJS().messages + 1, "messages")
            }

            if (!this.rooms[data.user]) {
                data._id = data.user
                this.rooms[data._id] = data
            } else
                if (field)
                    this.rooms[data.user][field] = field in data ? data[field] : true

            this.rooms[data.user].online = true
        },

        changeOrder(user_id) {
            let order = this.order
            let index = order.indexOf(user_id)
            if (index > -1)
                order.splice(index, 1)
            order.unshift(user_id)
            this.order = order
        },

        setMessages(data) {
            this.addTarget(data.id)
            this.messages[data.id].first = null

            if ("left" in data)
                this.messages[data.id].left = data.left

            if ("messages" in data) {
                if (data.id in this.messages) {
                    for (let message of data.messages)
                        this.messages[data.id].messages.push(message)
                } else {
                    this.messages[data.id] = {}
                    this.messages[data.id].messages = data.messages
                }

                this.messages[data.id].skip = this.messages[data.id].messages.length
            }

            if ("accessed" in data)
                this.messages[data.id].accessed = data.accessed

            if ("access" in data)
                this.messages[data.id].access = data.access
        },

        addMessage(data) {
            this.addTarget(data.id)
            this.newMessages[data.id].unshift(data.message)
            let obj = Object.assign({}, this.rooms[data.message.target])

            if (this.rooms[data.message.target]) {
                obj.user = data.message.user
                obj.viewed = false
                obj.text = data.message.text
                obj.created_at = data.message.created_at
            } else {
                obj._id = this.target.id
                obj.user = data.message.user
                obj.target = this.target.id
                obj.viewed = true
                obj.text = data.message.text
                obj.avatar = this.target.avatar
                obj.username = this.target.username
                obj.created_at = data.message.created_at
            }

            this.rooms[data.message.target] = obj
            this.changeOrder(+data.message.target)
        },

        addNewMessages(id) {
            let messages = this.messages[id].messages
            for (let message of this.newMessages[id])
                messages.unshift(message)

            this.newMessages[id] = []
        },

        addTarget(id) {
            if (!(id in this.newMessages))
                this.newMessages[id] = []

            if (!(id in this.messages)) {
                this.messages[id] = {}
                this.messages[id].messages = []
                this.messages[id].skip = 0
                this.messages[id].left = true
                this.messages[id].first = true
                this.messages[id].typing = false
                this.messages[id].accessed = false
            }
        },

        set(data) {
            this[data.field] = data.value
        }
    },
    getters: {
        none() {
            return {
                en: "You haven't selected any room",
                ru: "Вы не выбрали комнату",
                de: "Sie haben kein Zimmer ausgewählt",
                fr: "Vous n'avez sélectionné aucune chambre",
                es: "No has seleccionado ninguna habitación",
                zh: "您还没有选择任何房间",
                ja: "部屋を選択していません"
            }
        },
        search() {
            return {
                en: "Search by username",
                ru: "Поиск по нику",
                de: "Suche nach Benutzernamen",
                fr: "Recherche par nom d'utilisateur",
                es: "Buscar por nombre de usuario",
                zh: "按用户名搜索",
                ja: "ユーザー名で検索",
            }
        },
        input() {
            return {
                en: "Write what you want...",
                ru: "Напишите чего вы хотите...",
                de: "Schreib was du willst...",
                fr: "Écrivez ce que vous voulez...",
                es: "Escribe lo que quieres...",
                zh: "写下您想要的...",
                ja: "書きたいことを書いてください...",
            }
        },
        chats() {
            return {
                en: "You don't have any room yet",
                ru: "У вас нет ни одной комноты пока что",
                de: "Sie haben noch kein Zimmer",
                fr: "Tu n'as pas encore de place",
                es: "Aún no tienes espacio",
                zh: "您还没有房间",
                ja: "まだ空きがありません",
            }
        },
        blur() {
            return {
                en: "You doen't have an access to this chat by another user. And you don't have a premium. So buy it and you will be able to text again without any restriction :)",
                ru: "Вы не имеете доступ к этому чату от этого юзера. А так же, вы не имеете премиума. Так что купи его и тогда, ты сможешь писать кому угодно без огроничений :)",
                de: "Du hast keinen Zugriff auf diesen Chat durch einen anderen Benutzer. Und du hast kein Premium-Abonnement. Kaufe es also und du kannst wieder ohne Einschränkungen Textnachrichten senden :)",
                fr: "Vous n'avez pas accès à ce chat par un autre utilisateur. Et vous n'avez pas d'abonnement premium. Alors achetez-le et vous pourrez à nouveau envoyer des SMS sans aucune restriction :)",
                es: "No tienes acceso a este chat por parte de otro usuario y no tienes una suscripción premium. Así que cómprala y podrás volver a enviar mensajes de texto sin ninguna restricción :)",
                zh: "您无权访问其他用户的聊天内容。而且您没有高级版。所以购买它，您将能够再次发送短信而不受任何限制 :)",
                ja: "他のユーザーによるこのチャットへのアクセス権はありません。また、プレミアムも持っていません。プレミアムを購入すれば、制限なく再度テキストを送信できるようになります :)",
            }
        }
    }
})