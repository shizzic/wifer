import { defineStore } from "pinia"
import { useStorage } from "@vueuse/core"

export const userJS = defineStore("user", {
    state: () =>({
        id: useStorage("id", null),
        avatar: useStorage("avatar", "/profile.webp")
    }),
    actions:{
        setID(value) {
            this.id = value;
        },
        setAvatar(value) {
            this.avatar = value;
        },
        logout() {
            this.id     = null;
            this.avatar = "/profile.webp";
        }
    }
})