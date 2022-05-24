import { defineStore } from "pinia"
import { useStorage } from "@vueuse/core"

export const userJS = defineStore("user", {
    state: () =>({
        id: useStorage("id", null)
    }),
    actions:{
        setID(value) {
            this.id = value
        },
        logout() {
            this.id = null
        }
    }
})