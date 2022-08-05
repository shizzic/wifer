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
                }
            }
        },
        response() {
            return {
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
                chat: {
                    en: "You gave an access to text you for this user",
                    ru: "Вы дали доступ на переписку с Вами"
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
                chat: {
                    en: "Now, this user can't text you",
                    ru: "Теперь этот юзер не может вам писать"
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