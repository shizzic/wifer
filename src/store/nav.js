import { defineStore } from "pinia"

export const navJS = defineStore("nav", {
    getters: {
        inner() {
            return {
                "search": { 
                    "title": {
                        "RU": "Поиск",
                        "EN": "Search"
                    },
                    "image": "/search.webp"
                },
                "heart": { 
                    "title": {
                        "RU": "Интересы",
                        "EN": "Interests"
                    },
                    "image": "/heart.webp"
                },
                "chat": { 
                    "title": {
                        "RU": "Чат",
                        "EN": "Chat"
                    },
                    "image": "/chat.webp"
                },
                "premium": { 
                    "title": {
                        "RU": "Премиум",
                        "EN": "Premium"
                    },
                    "image": "/diamond.webp"
                },
                "profile": {
                    "title": {
                        "RU": "Профиль",
                        "EN": "Profile"
                    },
                    "image": "/profile.webp"
                }
            }
        },
        outer() {
            return {
                "search": { 
                    "title": {
                        "RU": "Поиск",
                        "EN": "Search"
                    },
                    "image": "/search.webp"
                },
                "signin": { 
                    "title": {
                        "RU": "Вход",
                        "EN": "Sign in"
                    },
                    "image": "/signin.webp"
                },
                "premium": { 
                    "title": {
                        "RU": "Премиум",
                        "EN": "Premium"
                    },
                    "image": "/diamond.webp"
                }
            }
        }
    }
})