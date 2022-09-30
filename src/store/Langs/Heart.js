import { defineStore } from "pinia"

export const HeartJS = defineStore("Heart", {
    getters: {
        what() {
            return {
                en: ["Views", "Likes", "Privates", "Chat access"],
                ru: ["Просмотры", "Лайки", "Приватки", "Доступ на переписку"],
                de: ["Ansichten", "Likes", "Private", "Chat-Zugriff"],
                fr: ["Vues", "Aime", "Privées", "Accès au chat"],
                es: ["Puntos de vista", "Gustos", "Partes pudendas", "Acceso al chat"],
                zh: ["意见", "喜欢", "私人", "聊天访问"],
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
                    es: [
                        "¿Estás seguro de que quieres eliminar a este usuario de tus favoritos?",
                    ],
                    zh: [
                        "您确定要从收藏夹中删除此用户吗？",
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
                    es: [
                        "1. ¿Seguro que quieres quitar el acceso privado?",
                        "2. Este usuario ya no podrá ver tus imágenes privadas."
                    ],
                    zh: [
                        "1. 您确定要取消私人访问权限吗？",
                        "2. 此用户将无法再看到您的私人图片"
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
                    es: [
                        "1. ¿Estás seguro de que quieres quitarle el acceso al chat a este usuario?",
                        "2. Este usuario ya no podrá enviarte mensajes de texto sin prima",
                        "3. Y no podrá ver mensajes pasados ​​​​en tu conversación sin premium"
                    ],
                    zh: [
                        "1. 您确定要取消此用户的聊天访问权限吗？",
                        "2. 此用户将无法在没有付费的情况下向您发送短信",
                        "3. 如果没有付费，他将无法在您的对话中看到过去的消息"
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
                es: "Enviar",
                zh: "提交",
            }
        }
    }
})