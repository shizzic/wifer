import { defineStore } from "pinia"
import { useStorage } from "@vueuse/core"
import { navJS } from "@/store/nav"

export const userJS = defineStore("user", {
    state: () =>({
        id: useStorage("id", null),
        templates: useStorage("templates", null),
        cookies: useStorage("cookies", null),

        avatar: false,
        username: "",
        trial: false,
        premium: 0,
        first: false
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
                .then(data => {
                    if (data.status === 401)
                        this.$user.logout(domain)
                    else
                        return data.json()
                })
                .then(data => {
                    this.username       = data.user.username
                    this.avatar         = data.user.avatar
                    this.trial          = data.user.trial
                    this.premium        = data.user.premium
                    navJS()["messages"] = data.messages.length
                    this.first          = true
                })
        },
        checkPremium(domain) {
            fetch(domain + "checkPremium", {
				method: "GET",
				credentials: "include"
			})
                .then(data => {
                    if (data.status === 401)
                        this.$user.logout(domain)
                    else
                        return data.json()
                })
                .then(left => {
                    if (!left)
                        this.premium        = 0
                })
        },
        logout(domain) {
            this.id       = null
            this.avatar   = false
            this.username = ""
            this.premium  = 0
            this.trial    = false

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