import { defineStore } from "pinia"

export const SearchJS = defineStore("Search", {
    getters: {
        text() {
            return {
                en: {
                    title: "Profile text",
                    hold: "Text you wanna see from users",
                    full: "Search whole phrase"
                },
                ru: {
                    title: "Текст профиля",
                    hold: "Текст, который вы бы хотели увидеть",
                    full: "Искать по фразе целиком"
                }
            }
        },
        search() {
            return {
                en: "Search",
                ru: "Поиск"
            }
        }
    }
})