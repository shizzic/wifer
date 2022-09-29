import { defineStore } from "pinia"

export const HeartJS = defineStore("Heart", {
    getters: {
        what() {
            return {
                en: ["Views", "Likes", "Privates", "Chat access"],
                ru: ["Просмотры", "Лайки", "Приватки", "Доступ на переписку"],
                de: ["Ansichten", "Likes", "Private", "Chat-Zugriff"]
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
                    ],
                    de: [
                        "Sind Sie sicher, dass Sie diesen Benutzer aus Ihren Favoriten löschen möchten?"
                    ]
                },
                private: {
                    en: [
                        "1. Are you sure you wanna take away private access?",
                        "2. This user won't be able to see your private images anymore"
                    ],
                    ru: [
                        "1. Уверенны, что хотите выйти?",
                        "2. Этот юзер больше не сможет просматривать ваши приватные фотки"
                    ],
                    de: [
                        "1. Möchten Sie den privaten Zugriff wirklich entfernen?",
                        "2. Dieser Benutzer kann Ihre privaten Bilder nicht mehr sehen"
                    ]
                },
                access: {
                    en: [
                        "1. Are you sure you wanna take away chat access for this user?",
                        "2. This user won't be able to text you without premium anymore",
                        "3. And he won't be able to see past messages in your conversation without premium"
                    ],
                    ru: [
                        "1. Уверенны, что хотите забрать доступ к чату для этого юзера?",
                        "2. Этот юзер больше не сможет писать вам без премиума",
                        "3. Этот юзер больше не сможет просматривать старые сообщения без премиума"
                    ],
                    de: [
                        "1. Möchten Sie diesem Nutzer wirklich den Chat-Zugriff entziehen?",
                        "2. Dieser Benutzer kann Ihnen ohne Premium keine SMS mehr senden",
                        "3. Und ohne Premium kann er frühere Nachrichten in Ihrer Konversation nicht sehen"
                    ]
                }
            }
        },
        submit() {
            return {
                en: "Submit",
                ru: "Подтвердить",
                de: "Einreichen"
            }
        }
    }
})