import { defineStore } from "pinia"

export const chatJS = defineStore("chat", {
    state: () =>({
        target: null
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
        }
    },
    actions:{
        set(data) {
            this[data.field] = data.value
        }
    }
})