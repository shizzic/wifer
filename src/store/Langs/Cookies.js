import { defineStore } from "pinia"

export const CookiesJS = defineStore("Cookies", {
    getters: {
        text() {
            return {
                en: "I use cookies to improve your experience :)",
                ru: "Я использую cookie для вашего комфорта :)",
                de: "Ich verwende Cookies, um Ihre Erfahrung zu verbessern :)",
                fr: "J'utilise des cookies pour améliorer votre expérience :)",
            }
        }
    }
})