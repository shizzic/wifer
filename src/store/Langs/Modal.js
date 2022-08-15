import { defineStore } from "pinia"

export const ModalJS = defineStore("Modal", {
    getters: {
        text() {
            return {
                deactivate: {
                    en: [
                        "1. After deactivateing, your profile won't be showing in public search.",
                        "2. All your data will be saved.",
                        "3. I won't bother you anymore with emails (until next login :D)",
                        "4. Just re-login and you'll see all your information again :)"
                    ],
                    ru: [
                        "1. После деактивации вы не будете отображаться в общем поиске.",
                        "2. Вся ваша инфа будет сохраненна.",
                        "3. Я больше не побеспокою вас имейлами (до следующего логина :D)",
                        "4. Просто перелогиньтесь и вы увидите всю вашу информацию снова :)"
                    ]
                },
                logout: {
                    en: ["Are you sure you wanna logout?"],
                    ru: ["Уверенны, что хотите выйти?"]
                },
                chat: {
                    en: [
                        "1. You need to buy premium for chatting with users",
                        "2. Or maybe you have an access from this user directly",
                        "3. You ask me, how will i get an access if i can't write it to her/him?",
                        "4. Just give an access from you to her/him and than, you'll get attention :)"
                    ],
                    ru: [
                        "1. Тебе нужно купить премиум, чтобы чатится",
                        "2. Или доступ на переписку от этого юзера напрямую",
                        "3. Ты спросишь, как я получу доступ от нее/его, если я не могу написать ей/ему?",
                        "4. Просто дай доступ на чат от самого себя и тогда (может быть), ты привлечешь внимание :)"
                    ]
                },
                private: {
                    en: [
                        "1. You need an access for private photos from this user",
                        "2. You can ask for this access directly in chat"
                    ],
                    ru: [
                        "1. Тебе нужен доступ на просмотр приватных фоток от этого юзера",
                        "2. Ты можешь попросить доступ напрямую в чате"
                    ]
                }
            }
        },
        success() {
            return {
                deactivate: {
                    en: "Your account was successfully deactivated. Looking forward of your returning :)",
                    ru: "Аккаунт успешно деактивирован. Жду твоего возвращения :)"
                },
                logout: {
                    en: "You've logouted. I hope u got what u wanted :)",
                    ru: "Вы вышли. Надеюсь классно провели время :)"
                }
            }
        },
        add() {
            return {
                like: {
                    en: "You added this user to your favorites",
                    ru: "Вы добавили юзера в свой список фаворитов"
                },
                private: {
                    en: "You gave an access to your private photos",
                    ru: "Вы дали доступ к свои приватным фоткам"
                },
                access: {
                    en: "You gave an access to text you and see last messages for this user",
                    ru: "Вы дали доступ на переписку с Вами этому юзеру"
                }
            }
        },
        delete() {
            return {
                like: {
                    en: "You deleted this user from your favorites",
                    ru: "Вы удалили юзера из списка фаворитов"
                },
                private: {
                    en: "You took away an access for your photos",
                    ru: "Вы забрали доступ к свои првиатным фоткам"
                },
                access: {
                    en: "Now, this user can't text you and see your last messages",
                    ru: "Теперь этот юзер не может вам писать и видеть все что было написанно"
                }
            }
        },
        submit() {
            return {
                en: "Submit",
                ru: "Подтвердить"
            }
        },
        cancel() {
            return {
                en: "Cancel",
                ru: "Отменить"
            }
        },
        save() {
            return {
                en: "Save",
                ru: "Сохранить"
            }
        }
    }
})