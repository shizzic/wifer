import { defineStore } from "pinia"

export const AuthJS = defineStore("Auth", {
    getters: {
        response() {
            return {
                en: {
                    invalid_code: "Invalid code",
                    code_not_found: "Don't try to hack me",
                    user_not_found: "Error on a server. Try again"
                },
                ru: {
                    invalid_code: "Неверный формат кода",
                    code_not_found: "Не старайся меня хакнуть",
                    user_not_found: "Ошибка на сервере. Попробуйте снова"
                },
                de: {
                    invalid_code: "Ungültiger Code",
                    code_not_found: "Versuchen Sie nicht, mich zu hacken",
                    user_not_found: "Fehler auf einem Server. Versuchen Sie es nochmal"
                },
                fr: {
                    invalid_code: "Code invalide",
                    code_not_found: "N'essayez pas de me pirater",
                    user_not_found: "Erreur sur un serveur. Réessayer"
                },
                es: {
                    invalid_code: "Codigo invalido",
                    code_not_found: "No intentes hackearme",
                    user_not_found: "Error en un servidor. Intentar otra vez"
                },
                zh: {
                    invalid_code: "无效的代码",
                    code_not_found: "不要试图破解我",
                    user_not_found: "服务器上的错误。再试一次"
                },
                ja: {
                    invalid_code: "無効なコード",
                    code_not_found: "私をハッキングしようとしないでください",
                    user_not_found: "サーバー上のエラー。再試行"
                },
            }
        }
    }
})