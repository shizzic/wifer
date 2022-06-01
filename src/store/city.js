import { defineStore } from "pinia"
import { useStorage } from "@vueuse/core"

export const cityJS = defineStore("city", {
    state: () =>({
        city: useStorage("city", {})
    }),
    actions:{
        set(data) {
            this.city[data.country_id] = data.data
        }
    }
})