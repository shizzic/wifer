import { defineStore } from "pinia"
import { useStorage } from "@vueuse/core"

export const langJS = defineStore({
    id: "lang",
    state: () =>({
        lang: useStorage("lang", 'ru'),
        languages: {
            en: "en",
            ru: "ру",
            de: "de",
            fr: "fr",
            es: "es",
            zh: "中文(简)",
            ja: "日本語"
        },
    }),
    actions:{
        setLang(value) {
            this.lang = value
        },

        autoLang(value) {
            let lang = value.split("-")[0]
            lang in this.languages ? this.lang = lang : this.lang = "en"
        },

        correctLang(value) {
            if (!(value in this.languages))
                this.autoLang(navigator.language)
        }
    }
})