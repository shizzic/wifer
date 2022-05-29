import { defineStore } from "pinia"
import { useStorage } from "@vueuse/core"

export const cityJS = defineStore("city", {
    state: () =>({
        city: useStorage("city", {})
    }),
    actions:{
        set(value) {
            this.data[value.id] = value.title
        }
    }
})