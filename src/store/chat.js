import { defineStore } from "pinia"

export const chatJS = defineStore("chat", {
    state: () =>({
        target: null,
        first: true,
        messages: {}
    }),
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
    },
    actions:{
        set(data) {
            this[data.field] = data.value
        },

        setMessages(data) {
            if (data.target in this.messages) {
                for (let message of data.messages)
                    this.messages[data.target].messages.push(message)
            } else {
                this.messages[data.target]          = {}
                this.messages[data.target].messages = data.messages
            }

            this.messages[data.target].skip = this.messages[data.target].messages.length
            this.messages[data.target].left = data.left
        },

        setAccess(data) {
            if (!(data.target in this.messages)) {
                this.messages[data.target]          = {}
                this.messages[data.target].messages = []
                this.messages[data.target].skip     = 0
                this.messages[data.target].left     = null
            }

            this.messages[data.target].access = data.access
        },

        setLeft(data) {
            if (data.target in this.messages)
                this.messages[data.target].left = data.value
        }
    }
})