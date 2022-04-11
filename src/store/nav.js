import { defineStore } from "pinia"

export const navJS = defineStore("nav", {
    getters: {
        list: function(){
            return [
                { "name": "about", "title":
                    {
                        "RU": "О мне",
                        "EN": "About"
                    }
                },
                { "name": "search", "title":
                    {
                        "RU": "Поиск",
                        "EN": "Search"
                    }
                },
                { "name": "chat", "title":
                    {
                        "RU": "Чат",
                        "EN": "Chat"
                    }
                }
            ]
        },
    }
})