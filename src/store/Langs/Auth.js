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
                },
                fr: {
                    "0": "Code invalide",
                    "1": "N'essayez pas de me pirater",
                    "2": "Erreur sur un serveur. Réessayer"
                },
                es: {
                    "0": "Codigo invalido",
                    "1": "No intentes hackearme",
                    "2": "Error en un servidor. Intentar otra vez"
                },
                zh: {
                    "0": "无效的代码",
                    "1": "不要试图破解我",
                    "2": "服务器上的错误。再试一次"
                },
            }
        }
    }
})