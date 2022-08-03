import { defineStore } from "pinia"

export const ModalJS = defineStore("Modal", {
    getters: {
        text() {
            return {
                deactivate: {
                    en: "After deactivateing, your profile won't be shown in public search and profile page as well. All your data will be safe. Just re-login and you'll see all your information again :)",
                    ru: "После деактивации вы не будете отображаться в поиске и странице профиля у кого либо. Вся ваша инфа будет сохраненна. Просто перелогиньтесь и вы увидите всю вашу информацию снова :)"
                },
                logout: {
                    en: "Are you sure you wanna logout?",
                    ru: "Уверенны, что хотите выйти?"
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
        submit() {
            return {
                en: "Submit",
                ru: "Подтвердить"
            }
        }
    }
})