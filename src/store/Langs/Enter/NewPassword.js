import { defineStore } from "pinia"

export const NewPasswordJS = defineStore("NewPassword", {
    getters: {
        title() {
            return {
                "EN": {
                    "title": "New password",
                    "text": "Just write a new password and confirm it :)"
                },
                "RU": {
                    "title": "Новый пароль",
                    "text": "Просто придумай новый пароль и подтверди его :)"
                }
            }
        },
        input() {
            return {
                "EN": {
                    "password": "New password",
                    "confirm": "Confirm"
                },
                "RU": {
                    "password": "Новый пароль",
                    "confirm": "Подтвердить"
                }
            }
        },
        error() {
            return {
                "EN": {
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
                "EN": "Change",
                "RU": "Изменить"
            }
        },
        response() {
            return {
                "EN": {
                    "0": "New password has wrong length",
                    "1": "Don't try to hack me senpai",
                    "2": "Something went wrong. Try make a request for new password again",
                },
                "RU": {
                    "0": "Новый пароль имеет недопустимую длину",
                    "1": "Не старайся хакнуть меня семпай",
                    "2": "Что-то пошло не так. Попробуйте ссделать запрос на смену пароля еще раз",
                }
            }
        },
        success() {
            return {
                "EN": "Passwword is changed :)",
                "RU": "Пароль изменен :)"
            }
        }
    }
})