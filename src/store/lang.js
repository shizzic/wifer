import { defineStore } from "pinia"
import { useStorage } from "@vueuse/core"

export const langJS = defineStore("lang", {
    state: () =>({
        lang: useStorage("lang", "EN")
    })
})