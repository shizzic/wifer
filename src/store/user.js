import { defineStore } from "pinia"
import { useStorage } from "@vueuse/core"

export const userJS = defineStore("user", {
    state: () =>({
        id: useStorage("id", null),
        templates: useStorage("templates", null),

        avatar: false,
        username: ""
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
                .then(data => {
                    this.avatar   = data.avatar 
                    this.username = data.username 
                })
        },
        logout(domain) {
            this.id       = null
            this.avatar   = false
            this.username = ""

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