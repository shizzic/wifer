import { defineStore } from "pinia"
import { useStorage } from "@vueuse/core"

export const langJS = defineStore("lang", {
    state: () =>({
        lang: useStorage("lang", null),
        languages: {
            en: "en",
            ru: "ru",
            de: "de",
            fr: "fr",
            es: "es",
            zh: "中文(简)"
        }
    }),
    actions:{
        setLang(value) {
            this.lang = value
        },

        autoLang(value) {
            let lang  = value.split("-")[0]

            if (lang in this.languages)
                this.lang = lang
            else
                this.lang = "en"
        },

        correctLang(value) {
            if (!(value in this.languages))
                this.autoLang(navigator.language)
        }
    }
})