import { defineStore } from "pinia"
import { navJS } from "@/store/nav"

export const chatJS = defineStore("chat", {
    state: () =>({
        socket: null,
        target: null,
        messages: {},

        roomsLeft: true,
        order: [],
        rooms: {}
    }),
    actions:{
        startSocket(domainName) {
            if (!this.socket) {
                this.socket = new WebSocket("wss://" + domainName + "chat")

                this.socket.onopen = () => {
                    console.log("opened")
                }
        
                this.socket.onmessage = (e) => {
                    this.onMessage(e.data)
                }
        
                this.socket.onclose = () => {
                    this.socket = null
                    console.log("closed")
                }
            }
        },

        onMessage(data) {
            data = JSON.parse(data)
            this.addTarget(data.user)

            switch (data.api) {
                case "message":
                    this.messages[data.user].typing = false
                    if (!this.messages[data.user].first) {
                        data.viewed = false
                        this.messages[data.user].messages.unshift(data)
                    }
                    this.addRoom(data)
                    this.rooms[data.user].typing = false
                    let order = this.order
                    let index = order.indexOf(data.user)
                    order.splice(index, 1)
                    order.unshift(data.user)
                    this.order = order
                    break
                case "view":
                    for (let message in this.messages[data.user].messages) {
                        if (this.messages[data.user].messages[message].user == data.target && this.messages[data.user].messages[message].viewed)
                            break

                        if (this.messages[data.user].messages[message].user == data.target)
                            this.messages[data.user].messages[message].viewed = true
                    }
                    if (data.user in this.rooms) {
                        this.rooms[data.user].online = true
                        this.rooms[data.user].viewed = true
                    }
                    break
                case "typing":
                    this.messages[data.user].typing = data.typing
                    this.rooms[data.user].typing    = data.typing
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
            if (this.socket)
			    this.socket.send(JSON.stringify(data))
		},

        setRooms(data) {
            if ("viewed" in data)
                this.rooms[data.id].viewed = data.viewed
        },

        addRoom(data) {
            data._id    = data.user
            data.online = true
            this.rooms[data.user] = data
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
                    this.messages[data.id]          = {}
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
            this.messages[data.id].messages.unshift(data.message)

            let obj = Object.assign({}, this.rooms[data.message.target])
            obj.user       = data.message.user
            obj.viewed     = false
            obj.text       = data.message.text
            obj.created_at = data.message.created_at

            this.rooms[data.message.target] = obj
        },

        addTarget(id) {
            if (!(id in this.messages)) {
                this.messages[id]          = {}
                this.messages[id].messages = []
                this.messages[id].skip     = 0
                this.messages[id].left     = true
                this.messages[id].first    = true
                this.messages[id].typing   = false
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
                ru: "Вы не выбрали комнату"
            }
        },
        search() {
            return {
                en: "Search by username",
                ru: "Поиск по нику"
            }
        },
        input() {
            return {
                en: "Write what you want ...",
                ru: "Напишите чего вы хотите ..."
            }
        },
        chats() {
            return {
                en: "You don't have any room yet",
                ru: "У вас нет ни одной комноты пока что"
            }
        },
        blur() {
            return {
                en: "You doen't have an access to this chat by another user. And you don't have a premium. So buy it and you will be able to text again without any restriction :)",
                ru: "Вы не имеете доступ к этому чату от этого юзера. А так же, вы не имеете премиума. Так что купи его и тогда, ты сможешь писать кому угодно без огроничений :)"
            }
        }
    }
})