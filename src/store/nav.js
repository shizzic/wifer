import { defineStore } from "pinia"

export const navJS = defineStore("nav", {
    state: () =>({
        hearts: null,
        messages: null
    }),
    getters: {
        inner() {
            return {
                search: { 
                    title: {
                        ru: "Поиск",
                        en: "Search"
                    },
                    image: "/search.webp"
                },
                heart: { 
                    title: {
                        ru: "Интересы",
                        en: "Interests"
                    },
                    image: "/heart.webp"
                },
                chat: { 
                    title: {
                        ru: "Чат",
                        en: "Chat"
                    },
                    image: "/chat.webp"
                },
                premium: { 
                    title: {
                        ru: "Премиум",
                        en: "Premium"
                    },
                    image: "/premium.webp"
                },
                profile: {
                    title: {
                        ru: "Профиль",
                        en: "Profile"
                    },
                    image: "/profile.webp"
                }
            }
        },
        outer() {
            return {
                search: { 
                    title: {
                        ru: "Поиск",
                        en: "Search"
                    },
                    image: "/search.webp"
                },
                signin: { 
                    title: {
                        ru: "Вход",
                        en: "Sign in"
                    },
                    image: "/signin.webp"
                },
                premium: { 
                    title: {
                        ru: "Премиум",
                        en: "Premium"
                    },
                    image: "/premium.webp"
                }
            }
        }
    },
    actions:{
        setHearts(value) {
            if (value > 0)
                this.hearts = value
            else
                this.hearts = null
        },
        setMessages(value) {
            if (value > 0)
                this.messages = value
            else
                this.messages = null
        },
        takeHearts(value) {
            let res = this.hearts - value
            if (res > 0)
                this.hearts = res
            else
                this.hearts = null
        },
        takeMessages(value) {
            let res = this.messages - value
            if (res > 0)
                this.messages = res
            else
                this.messages = null
        }
    }
})