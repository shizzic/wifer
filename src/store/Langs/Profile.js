import { defineStore } from "pinia"

export const ProfileJS = defineStore("Profile", {
    getters: {
        fields() {
            return {
                "EN": {
                    "title": "Enter",
                    "text": "Hello there! If you want the best sugar on web, than welcome aboard :)"
                },
                "RU": {
                    "title": "Вход",
                    "text": "Кулити, если ты хочешь лучший опыт знакомств в инете, тогда присаживайся к столу :)"
                }
            }
        },
        errors() {
            return {
                "EN": {
                    "int": "Id must contain only integers",
                    "server": "Something occured to a server. Try again"
                },
                "RU": {
                    "int": "Индификатор должен состоять только из цифр",
                    "server": "Что-то случилось с сервером. Попробуйте снова"
                }
            }
        },
        response() {
            return {
                "EN": "User doesn't exist or has been banned",
                "RU": "Пользователь не существует или был забанен"
            }
        },
        success() {
            return {
                "EN": "You signed in. Enjoy yourself :)",
                "RU": "Вы вошли. Развлекайтесь :)"
            }
        }
    }
})