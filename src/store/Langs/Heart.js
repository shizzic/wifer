import { defineStore } from "pinia"

export const HeartJS = defineStore("Heart", {
    getters: {
        what() {
            return {
                en: [
                    { title : "Views", mode : null },
                    { title : "Likes", mode : true },
                    { title : "Privates", mode : null },
                    { title : "Messages", mode : null }
                ],
                ru: [
                    { title : "Просмотры", mode : null },
                    { title : "Лайки", mode : true },
                    { title : "Приватки", mode : null },
                    { title : "Переписки", mode : null }
                ]
            }
        }
    }
})