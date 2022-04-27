import { defineStore } from "pinia"

export const LoginJS = defineStore("Login", {
    getters: {
        title() {
            return {
                "EN": {
                    "title": "Sign in",
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
                    "email": "Email",
                    "password": "Password"
                },
                "RU": {
                    "email": "Почта",
                    "password": "Пароль"
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
                    }
                }
            }
        },
        button() {
            return {
                "EN": "Submit",
                "RU": "Входи"
            }
        },
        reset() {
            return {
                "EN": {
                    "text": "Forgot password?",
                    "button": "Reset"
                },
                "RU": {
                    "text": "Забыли пароль?",
                    "button": "Сменить"
                }
            }
        },
        result() {
            return {
                "EN": {
                    "0": "There is no account with such email",
                    "1": "Wrong password",
                    "2": "Email isn't confirmed",
                    "3": "Something went wrong, try again"
                },
                "RU": {
                    "0": "Аккаунта с такой почтой не существует",
                    "1": "Не верный пароль",
                    "2": "Почта не подтверждена",
                    "3": "Что то пошло не так, попробуйте снова"
                }
            }
        }
    }
})