import { defineStore } from "pinia"

export const SettingsJS = defineStore("Settings", {
    getters: {
        placeholder() {
            return {
                en: {
                    username: "Your username",
                    title: "To get attention",
                    about: "About yourself and who you seek :)"
                },
                ru: {
                    username: "Ваш ник",
                    title: "Завлеки чем нибудь",
                    about: "About yourself and who you seek :)"
                }
            }
        },
        blank() {
            return {
                en: "Blank",
                ru: "Пусто"
            }
        },
        buttons() {
            return {
                en: {
                    save: "Save",
                    cancel: "Cancel"
                },
                ru: {
                    save: "Сохранить",
                    cancel: "Отменить"
                }
            }
        },
        username() {
            return {
                en: {
                    required: "U need some username :)",
                    space: "U can't use spaces for username"
                },
                ru: {
                    required: "Вам нужен ник :)",
                    space: "Вы не можете использовать пробел в нике"
                }
            }
        }
    }
})