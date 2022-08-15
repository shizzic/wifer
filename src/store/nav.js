import { defineStore } from "pinia"

export const navJS = defineStore("nav", {
    state: () =>({
        views: 0,
        likes: 0,
        privates: 0,
        access: 0,

        fields: ["views", "likes", "privates", "accesses"]
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
        setHearts(value, field) {
            if (value > 0)
                this[field] = value
            else
                this[field] = null
        },
        takeHearts(value, field) {
            let res = this[field] - value
            if (res > 0)
                this[field] = res
            else
                this[field] = null
        }
    }
})