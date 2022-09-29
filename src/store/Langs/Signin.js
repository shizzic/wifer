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
                },
                de: {
                    "title": "Eintreten",
                    "text": "Hallo! Wenn Sie den besten Zucker im Internet wollen, dann willkommen an Bord :)"
                },
            }
        },
        terms() {
            return {
                en: "I have read and accepted the",
                ru: "Я прочитал/а и принимаю данные",
                de: "Ich habe die gelesen und akzeptiert",
            }
        },
        input() {
            return {
                en: "Email",
                ru: "Почта",
                de: "Email",
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
                },
                de: {
                    "email": "A-a-a. Das Feld muss eine E-Mail sein",
                    "required": "Hey, füll es!"
                },
            }
        },
        button() {
            return {
                en: "Sign up or sign in",
                ru: "Зарегаться или войти",
                de: "Melden Sie sich an oder melden Sie sich an",
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
                },
                de: {
                    0: "Versuch nicht, mich zu hacken, Bruder :)",
                    1: "Falsche E-mail",
                    2: "E-Mail mit Link wurde aus irgendeinem Grund nicht an Sie gesendet. Bitte versuche es erneut",
                    3: "Auf dem Server ist ein Fehler aufgetreten. Versuchen Sie es erneut und geben Sie niemals auf",
                    4: "Bruder, du wurdest gesperrt. Aber keine Sorge. Du kannst jederzeit ein neues Konto erstellen :)" 
                },
            }
        },
        success() {
            return {
                en: "You signed in. Enjoy yourself :)",
                ru: "Вы вошли. Развлекайтесь :)",
                de: "Du hast dich angemeldet. Viel Spaß :)",
            }
        },
        email() {
            return {
                en: "An email with login link was sent to your typed email. Just follow the link. And check spam box if you don't see an email",
                ru: "Письмо с сылкой было отправленно на указанную вами почту. Просто проследуйте по сылке. И не забудьте чекнуть спам ящик, если не найдете письмо",
                de: "Eine E-Mail mit einem Anmeldelink wurde an Ihre eingegebene E-Mail-Adresse gesendet. Folgen Sie einfach dem Link. Und überprüfen Sie das Spam-Kästchen, wenn Sie keine E-Mail sehen",
            }
        }
    }
})