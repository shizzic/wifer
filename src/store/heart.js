import { defineStore } from "pinia"
import { useStorage } from "@vueuse/core"

export const heartJS = defineStore("heart", {
    state: () =>({
        which: useStorage("which", 0),
        mode: useStorage("mode", null),
    }),
    actions:{
        set(data) {
            this[data.field] = data.value
        }
    }
})