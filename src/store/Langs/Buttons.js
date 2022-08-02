import { defineStore } from "pinia"

export const ButtonsJS = defineStore("Buttons", {
    getters: {
        text() {
            return {
                deactivate: {
                    en: "After deactivateing, your profile won't be shown in public search and profile page as well. All your data will be safe. Just re-login and you'll see all your information again :)",
                    ru: "После деактивации вы не будете отображаться в поиске и странице профиля у кого либо. Вся ваша инфа будет сохраненна. Просто перелогиньтесь и вы увидите всю вашу информацию снова :)"
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
                }
            }
        }
    }
})