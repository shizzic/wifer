import { defineStore } from "pinia"
import { useStorage } from "@vueuse/core"

export const userJS = defineStore("user", {
    state: () =>({
        id: useStorage("id", null),
        avatar: useStorage("avatar", null),
        templates: useStorage("templates", null)
    }),
    actions:{
        set(data) {
            this[data.field] = data.value
        },
        checkAvatar(domain) {
            fetch(domain + "checkAvatar", {
				method: "GET",
				credentials: "include"
			})
                .then(data => { return data.json() })
                .then(bool => { this.avatar = bool })
        },
        logout(domain) {
            this.id = null

            fetch(domain + "logout", {
				method: "PUT",
				credentials: "include"
			})
        },
        setTemplates(value) {
            this.templates = value
        }
    }
})