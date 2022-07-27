import { defineStore } from "pinia"
import { useStorage } from "@vueuse/core"

export const langJS = defineStore("lang", {
    state: () =>({
        lang: useStorage("lang", null),
        languages: ["en", "ru"]
    }),
    actions:{
        setLang(value) {
            this.lang = value
        },

        autoLang(value) {
            let lang  = value.split("-")[0]
            let index = this.languages.indexOf(lang)

            if (index === -1)
                this.lang = "en"
            else
                this.lang = lang
        },

        correctLang(value) {
            if (!this.languages.includes(value))
                this.autoLang(navigator.language)
        }
    }
})