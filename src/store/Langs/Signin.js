import { defineStore } from "pinia"

export const SigninJS = defineStore("Signin", {
    getters: {
        link() {
            return {
                "EN": "Back to login",
                "RU": "Вернуться к входу"
            }
        },
        title() {
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
        input() {
            return {
                "EN": {
                    "email": "Email"
                },
                "RU": {
                    "email": "Почта"
                }
            }
        },
        error() {
            return {
                "EN": {
                    "email": {
                        "email": "A-a-a. Field must be an email",
                        "required": "Hey, fill it!"
                    }
                },
                "RU": {
                    "email": {
                        "password": "Не, не, не. Введи почту, а не что то другое",
                        "required": "Хей, заполни поле!"
                    }
                }
            }
        },
        button() {
            return {
                "EN": "Sign up or sign in",
                "RU": "Зарегаться или войти"
            }
        }
    }
})