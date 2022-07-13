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
                    space: "U can't use spaces for username",
                    available: "Available",
                    taken: "This username is already used"
                },
                ru: {
                    required: "Вам нужен ник :)",
                    space: "Вы не можете использовать пробел в нике",
                    available: "Доступен",
                    taken: "Этот ник уже занят"
                }
            }
        },
        response() {
            return {
                en: {
                    0: "Validation failed",
                    1: "Such username is already used",
                    2: "Account hasn't changed. Try again"
                },
                ru: {
                    0: "Валидация провалена",
                    1: "Такой ник уже используется",
                    2: "Данные не изменились. Попробуйте снова"
                }
            }
        },
        success() {
            return {
                en: "Your info was changed",
                ru: "Ваша инфа была изменена"
            }
        }
    }
})