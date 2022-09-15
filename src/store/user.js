import { defineStore } from "pinia"
import { useStorage } from "@vueuse/core"
import { navJS } from "@/store/nav"

export const userJS = defineStore("user", {
    state: () =>({
        id: useStorage("id", null),
        templates: useStorage("templates", null),
        cookies: useStorage("cookies", null),

        avatar: false,
        username: ""
    }),
    actions:{
        set(data) {
            this[data.field] = data.value
        },
        getParamsAfterLogin(domain) {
            fetch(domain + "getParamsAfterLogin", {
				method: "GET",
				credentials: "include"
			})
                .then(data => { return data.json() })
                .then(data => {
                    this.username       = data.user.username
                    this.avatar         = data.user.avatar
                    navJS()["messages"] = data.messages.length 
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