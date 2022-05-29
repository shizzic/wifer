import { defineStore } from "pinia"
import { useStorage } from "@vueuse/core"

export const countryJS = defineStore("country", {
    state: () =>({
        country: useStorage("country", {})
    }),
    actions:{
        set(value) {
            this.data[value.id] = value.title
        }
    }
})