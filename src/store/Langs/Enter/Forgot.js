import { defineStore } from "pinia"

export const ForgotJS = defineStore("Forgot", {
    getters: {
        title() {
            return {
                "EN": {
                    "title": "Password reset",
                    "text": "You'll get an email with link to follow"
                },
                "RU": {
                    "title": "Смена пароля",
                    "text": "Ты получишь письмо на почту"
                }
            }
        },
        input() {
            return {
                "EN": "Email",
                "RU": "Почта"
            }
        },
        error() {
            return {
                "EN": {
                    "email": "A-a-a. Field must be an email",
                    "required": "Hey, fill it!"
                },
                "RU": {
                    "password": "Не, не, не. Введи почту, а не что то другое",
                    "required": "Хей, заполни поле!"
                }
            }
        },
        button() {
            return {
                "EN": "Send",
                "RU": "Отправить"
            }
        },
        response() {
            return {
                "EN": {
                    "0": "User with such email is not found",
                    "1": "Something went wrong. Try again bro",
                    "2": "Message wasn't sent to your email. Try again and never give up"
                },
                "RU": {
                    "0": "Пользователь с такой почтой не найден",
                    "1": "Что-то пошло не так, попробуй снова братиш :)",
                    "2": "Сообщение не смогло отправится на почту. Поробуй снова и никогда не сдавайся"
                }
            }
        },
        success() {
            return {
                "EN": "Check your email and spam folder :)",
                "RU": "Проверь свою почту и спам папку :)"
            }
        }
    }
})