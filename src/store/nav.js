import { defineStore } from "pinia"

export const navJS = defineStore("nav", {
    state: () =>({
        views: 0,
        likes: 0,
        privates: 0,
        accesses: 0,
        messages: 0,

        fields: ["views", "likes", "privates", "accesses", "messages"]
    }),
    getters: {
        inner() {
            return {
                search: { 
                    title: {
                        ru: "Поиск",
                        en: "Search"
                    },
                    image: "/images/search.webp"
                },
                heart: { 
                    title: {
                        ru: "Интересы",
                        en: "Interests"
                    },
                    image: "/images/like.webp"
                },
                premium: { 
                    title: {
                        ru: "Премиум",
                        en: "Premium"
                    },
                    image: "/images/premium.webp"
                },
                chat: { 
                    title: {
                        ru: "Чат",
                        en: "Chat"
                    },
                    image: "/images/chat.webp"
                },
                profile: {
                    title: {
                        ru: "Профиль",
                        en: "Profile"
                    },
                    image: "/images/profile.webp"
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
                    image: "/images/search.webp"
                },
                premium: { 
                    title: {
                        ru: "Премиум",
                        en: "Premium"
                    },
                    image: "/images/premium.webp"
                },
                signin: { 
                    title: {
                        ru: "Вход",
                        en: "Sign in"
                    },
                    image: "/images/signin.webp"
                }
            }
        }
    },
    actions:{
        setHearts(value, key) {
            this[key] = value > -1 ? value : 0
        },
        // Уменьшить кол-во уведомлений у ключа
        takeHearts(value, field) {
            const res = this[field] - value

            if (res > -1)
                this[field] = res
            else
                this[field] = 0
        }
    }
})