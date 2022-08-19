import { defineStore } from "pinia"
import { navJS } from "@/store/nav"

export const chatJS = defineStore("chat", {
    state: () =>({
        socket: null,
        target: null,
        messages: {}
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
            console.log(data)

            switch (data.api) {
                case "message":
                    if (!this.messages[data.user].first) {
                        data.viewed = false
                        this.messages[data.user].messages.unshift(data)
                    }
                    break
                case "view":
                    for (let message in this.messages[data.user].messages) {
                        if (this.messages[data.user].messages[message].user == data.target && this.messages[data.user].messages[message].viewed)
                            break

                        if (this.messages[data.user].messages[message].user == data.target)
                            this.messages[data.user].messages[message].viewed = true
                    }
                    break
                case "access":
                    if ("access" in this.messages[data.user])
                        this.messages[data.user].access.target = data.access
                    else
                        this.messages[data.user].access = { target: data.access, user: null }

                    break
            }
		},

        sendMessage(data) {
			this.socket.send(JSON.stringify(data))
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

            if ("access" in data)
                this.messages[data.id].access = data.access
        },

        addMessage(data) {
            this.addTarget(data.id)
            this.messages[data.id].messages.unshift(data.message)
        },

        addTarget(id) {
            if (!(id in this.messages)) {
                this.messages[id]          = {}
                this.messages[id].messages = []
                this.messages[id].skip     = 0
                this.messages[id].left     = true
                this.messages[id].first    = true
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