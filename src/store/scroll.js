import { defineStore } from "pinia"
import { useStorage } from "@vueuse/core"

export const scrollJS = defineStore("scroll", {
    state: () =>({
        search: useStorage("search", 0),
        sidebar: useStorage("sidebar", 0),
        heart: 0,
        rooms: 0,
        messages: 0
    }),
    actions:{
        set(data) {
            this[data.field] = data.value
        }
    }
})