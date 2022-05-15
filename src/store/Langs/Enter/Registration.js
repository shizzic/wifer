import { defineStore } from "pinia"

export const RegistrationJS = defineStore("Registration", {
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
                    "title": "Registration",
                    "text": "Hello there! If you want the best sugar on web, than welcome aboard :)"
                },
                "RU": {
                    "title": "Регистрация",
                    "text": "Кулити, если ты хочешь лучший опыт знакомств в инете, тогда присаживайся к столу :)"
                }
            }
        },
        input() {
            return {
                "EN": {
                    "email": "Email",
                    "password": "Password",
                    "confirm": "Confirm"
                },
                "RU": {
                    "email": "Почта",
                    "password": "Пароль",
                    "confirm": "Подтвердить"
                }
            }
        },
        error() {
            return {
                "EN": {
                    "email": {
                        "email": "A-a-a. Field must be an email",
                        "required": "Hey, fill it!"
                    },
                    "password": {
                        "space": "Space is not allowed",
                        "required": "Hey, fill it!",
                        "min": "8 characters minimum"
                    },
                    "confirm": {
                        "match": "Passwords must match",
                        "required": "Hey, fill it!"
                    }
                },
                "RU": {
                    "email": {
                        "password": "Не, не, не. Введи почту, а не что то другое",
                        "required": "Хей, заполни поле!"
                    },
                    "password": {
                        "space": "Пробел запрещен",
                        "required": "Хей, заполни поле!",
                        "min": "8 символов минимум"
                    },
                    "confirm": {
                        "match": "Пароли должны совпадать",
                        "required": "Хей, заполни поле!"
                    }
                }
            }
        },
        button() {
            return {
                "EN": "Sign up",
                "RU": "Подтвердить"
            }
        }
    }
})