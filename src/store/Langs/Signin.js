import { defineStore } from "pinia"

export const SigninJS = defineStore("Signin", {
    getters: {
        title() {
            return {
                en: {
                    "title": "Enter",
                    "text": "Hello there! If you want the best sugar on web, than welcome aboard :)"
                },
                ru: {
                    "title": "Вход",
                    "text": "Кулити, если ты хочешь лучший опыт знакомств в инете, тогда присаживайся к столу :)"
                }
            }
        },
        terms() {
            return {
                en: "I have read and accepted the",
                ru: "Я прочитал/а и принимаю данные"
            }
        },
        input() {
            return {
                en: "Email",
                ru: "Почта"
            }
        },
        error() {
            return {
                en: {
                    "email": "A-a-a. Field must be an email",
                    "required": "Hey, fill it!"
                },
                ru: {
                    "password": "Не, не, не. Введи почту, а не что то другое",
                    "required": "Хей, заполни поле!"
                }
            }
        },
        button() {
            return {
                en: "Sign up or sign in",
                ru: "Зарегаться или войти"
            }
        },
        response() {
            return {
                en: {
                    0: "Don't try to hack me bro :)",
                    1: "Wrong email",
                    2: "Email with link wasn't sent to you 'cause of some reason. Please, try again",
                    3: "Some error occured on server. Try again and never give up",
                    4: "Bro, u have been banned. But don't worry. U can create a new account whenever you like :)" 
                },
                ru: {
                    0: "Не пытайся хакнуть меня бро :)",
                    1: "Это не почта",
                    2: "Письмо с сылкой не было отправленно на вашу почту по какой-то причине. Пожалуста, попробуйте снова",
                    3: "Че то на сервере бахнуло. Попробуй снова и не здавайся",
                    4: "Бро, ты был забанен. Но не парься. Я же не запретил тебе заводить новые аккаунты (подмиг, подмиг :D)"
                }
            }
        },
        success() {
            return {
                en: "You signed in. Enjoy yourself :)",
                ru: "Вы вошли. Развлекайтесь :)"
            }
        },
        email() {
            return {
                en: "An email with login link was sent to your typed email. Just follow the link. And check spam box if you don't see an email",
                ru: "Письмо с сылкой было отправленно на указанную вами почту. Просто проследуйте по сылке. И не забудьте чекнуть спам ящик, если не найдете письмо"
            }
        }
    }
})