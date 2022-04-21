import { defineStore } from "pinia"

export const navJS = defineStore("nav", {
    getters: {
        list: function(){
            return [
                { "name": "search", "title":
                    {
                        "RU": "Поиск",
                        "EN": "Search"
                    },
                    "image": "/search.webp"
                },
                { "name": "heart", "title":
                    {
                        "RU": "Интересы",
                        "EN": "Interests"
                    },
                    "image": "/heart.webp"
                },
                { "name": "chat", "title":
                    {
                        "RU": "Чат",
                        "EN": "Chat"
                    },
                    "image": "/comment.webp"
                },
                { "name": "premium", "title":
                    {
                        "RU": "Премиум",
                        "EN": "Premium"
                    },
                    "image": "/premium.webp"
                },
                { "name": "about", "title":
                    {
                        "RU": "О мне",
                        "EN": "About"
                    },
                    "image": "/info.webp"
                }
            ]
        },
    }
})