import { defineStore } from "pinia"
import { useStorage } from "@vueuse/core"

export const userJS = defineStore("user", {
    state: () =>({
        id: useStorage("id", null),
        templates: useStorage("templates", null)
    }),
    actions:{
        setID(value) {
            this.id = value
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