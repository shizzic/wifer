import { defineStore } from "pinia"

export const AuthJS = defineStore("Auth", {
    getters: {
        response() {
            return {
                "EN": {
                    "0": "Invalid code",
                    "1": "Don't try to hack me",
                    "2": "Error on a server. Try again"
                },
                "RU": {
                    "0": "Неверный формат кода",
                    "1": "Не старайся меня хакнуть",
                    "2": "Ошибка на сервере. Попробуй снова"
                }
            }
        }
    }
})