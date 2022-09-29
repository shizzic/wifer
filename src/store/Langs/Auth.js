import { defineStore } from "pinia"

export const AuthJS = defineStore("Auth", {
    getters: {
        response() {
            return {
                en: {
                    "0": "Invalid code",
                    "1": "Don't try to hack me",
                    "2": "Error on a server. Try again"
                },
                ru: {
                    "0": "Неверный формат кода",
                    "1": "Не старайся меня хакнуть",
                    "2": "Ошибка на сервере. Попробуй снова"
                },
                de: {
                    "0": "Ungültiger Code",
                    "1": "Versuchen Sie nicht, mich zu hacken",
                    "2": "Fehler auf einem Server. Versuchen Sie es nochmal"
                }
            }
        }
    }
})