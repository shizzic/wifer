import { defineStore } from "pinia"

export const HeartJS = defineStore("Heart", {
    getters: {
        what() {
            return {
                en: [ "Views", "Likes", "Privates", "Messages"],
                ru: [ "Просмотры", "Лайки", "Приватки", "Переписки"]
            }
        },
        text() {
            return {
                like: {
                    en: [
                        "Are you sure, you wanna delete this user from your favorites?",
                    ],
                    ru: [
                        "Вы точно хотите удалить этого юзера из избранных?",
                    ]
                },
                private: {
                    en: [
                        "1. Are you sure you wanna take off private access?",
                        "2. This user won't be able to see your private images anymore"
                    ],
                    ru: [
                        "1. Уверенны, что хотите выйти?",
                        "2. Этот юзер больше не сможет просматривать ваши приватные фотки"
                    ]
                }
            }
        },
        submit() {
            return {
                en: "Submit",
                ru: "Подтвердить"
            }
        }
    }
})