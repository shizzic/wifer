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
                "EN": "Sign up or sign in",
                "RU": "Зарегаться или войти"
            }
        },
        response() {
            return {
                "EN": {
                    "1": "Wrong email",
                    "2": "Email with link wasn't sent to you 'cause of some reason. Please, try again",
                    "3": "Some error occured on server. Try again and never give up"
                },
                "RU": {
                    "1": "Это не почта",
                    "2": "Письмо с сылкой не было отправленно на вашу почту по какой-то причине. Пожалуста, попробуйте снова",
                    "3": "Че то на сервере бахнуло. Попробуй снова и не здавайся"
                }
            }
        },
        success() {
            return {
                "EN": "You signed in. Enjoy yourself :)",
                "RU": "Вы вошли. Развлекайтесь :)"
            }
        },
        email() {
            return {
                "EN": "An email with login link was sent to your typed email. Just follow the link. And check spam box if you don't see an email",
                "RU": "Письмо с сылкой было отправленно на указанную вами почту. Просто проследуйте по сылке. И не забудьте чекнуть спам ящик, если не найдете письмо"
            }
        }
    }
})