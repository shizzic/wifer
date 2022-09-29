import { defineStore } from "pinia"

export const HeartJS = defineStore("Heart", {
    getters: {
        what() {
            return {
                en: ["Views", "Likes", "Privates", "Chat access"],
                ru: ["Просмотры", "Лайки", "Приватки", "Доступ на переписку"],
                de: ["Ansichten", "Likes", "Private", "Chat-Zugriff"],
                fr: ["Vues", "Aime", "Privées", "Accès au chat"],
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
                    ],
                    fr: [
                        "Êtes-vous sûr de vouloir supprimer cet utilisateur de vos favoris?",
                    ],
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
                    ],
                    fr: [
                        "1. Voulez-vous vraiment supprimer l'accès privé?",
                        "2. Cet utilisateur ne pourra plus voir vos images privées"
                    ],
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
                    ],
                    fr: [
                        "1. Voulez-vous vraiment supprimer l'accès au chat pour cet utilisateur?",
                        "2. Cet utilisateur ne pourra plus vous envoyer de SMS sans prime",
                        "3. Et il ne pourra pas voir les messages passés dans votre conversation sans prime"
                    ],
                }
            }
        },
        submit() {
            return {
                en: "Submit",
                ru: "Подтвердить",
                de: "Einreichen",
                fr: "Soumettre",
            }
        }
    }
})