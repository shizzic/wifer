import { defineStore } from "pinia"
import { navJS } from "@/store/nav"

export const chatJS = defineStore("chat", {
    state: () =>({
        show: null,
        socket: null,
        target: null,
        messages: {},
        newMessages: {},

        lastUsername: "",
        lastSearch: false,
        roomsLeft: true,
        order: [],
        rooms: {}
    }),
    actions:{
        startSocket(domainName) {
            if (!this.socket) {
                this.socket = new WebSocket("wss://" + domainName + "chat")
        
                this.socket.onmessage = (e) => {
                    this.onMessage(e.data)
                }
        
                this.socket.onclose = () => {
                    this.socket = null
                }
            }
        },

        closeSocket() {
            if (this.socket)
                this.socket.close()

            this.socket = null
        },

        onMessage(data) {
            data = JSON.parse(data)
            this.addTarget(data.user)

            switch (data.api) {
                case "message":
                    // if (!this.messages[data.user].first) {
                    // }
                    data.viewed = false
                    this.addRoom(data, true, "text")
                    this.rooms[data.user].typing = false
                    this.rooms[data.user].viewed = false
                    this.rooms[data.user].news  += 1
                    this.rooms[data.user].user   = data.user

                    this.messages[data.user].typing = false
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
                    if (this.newMessages[data.user].length > 0)
                        for (let message in this.newMessages[data.user]) {
                            if (this.newMessages[data.user][message].user == data.target && this.newMessages[data.user][message].viewed)
                                break

                            if (this.newMessages[data.user][message].user == data.target)
                                this.newMessages[data.user][message].viewed = true
                        }
                    else
                        for (let message in this.messages[data.user].messages) {
                            if (this.messages[data.user].messages[message].user == data.target && this.messages[data.user].messages[message].viewed)
                                break

                            if (this.messages[data.user].messages[message].user == data.target)
                                this.messages[data.user].messages[message].viewed = true
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
            if (this.socket)
			    this.socket.send(JSON.stringify(data))
		},

        addRoom(data, newMessage, field = null) {
            if (newMessage && (!this.rooms[data.user] || this.rooms[data.user].viewed))
                navJS().setHearts(navJS().messages + 1, "messages")

            if (!this.rooms[data.user]) {
                data._id              = data.user
                this.rooms[data.user] = data
            } else {
                if (field) {
                    if (field in data)
                        this.rooms[data.user][field] = data[field]
                    else
                        this.rooms[data.user][field] = true
                }
            }

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
            this.newMessages[data.id].unshift(data.message)
            let obj = Object.assign({}, this.rooms[data.message.target])

            if (this.rooms[data.message.target]) {
                obj.user       = data.message.user
                obj.viewed     = false
                obj.text       = data.message.text
                obj.created_at = data.message.created_at
            } else {
                obj._id        = this.target.id
                obj.user       = data.message.user
                obj.target     = this.target.id
                obj.viewed     = true
                obj.text       = data.message.text
                obj.avatar     = this.target.avatar
                obj.username   = this.target.username
                obj.created_at = data.message.created_at
            }

            this.rooms[data.message.target] = obj
            this.changeOrder(+data.message.target)
        },

        addNewMessages(id) {
            let messages = this.messages[id].messages
            for (let message of this.newMessages[id])
                messages.unshift(message)
            
            this.newMessages[id]       = []
            this.messages[id].messages = messages
        },

        addTarget(id) {
            if (!(id in this.newMessages))
                this.newMessages[id] = []

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