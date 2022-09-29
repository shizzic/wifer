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
                },
                de: {
                    username: "Dein Benutzername",
                    title: "Aufmerksamkeit zu bekommen",
                    about: "Über dich selbst und wen du suchst :)"
                },
            }
        },
        blank() {
            return {
                en: "Blank",
                ru: "Пусто",
                de: "Leer",
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
                },
                de: {
                    save: "Speichern",
                    cancel: "Absagen"
                },
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
                },
                de: {
                    required: "Du brauchst einen Benutzernamen :)",
                    space: "Sie können keine Leerzeichen für den Benutzernamen verwenden",
                    available: "Verfügbar",
                    taken: "Dieser Benutzername wird bereits verwendet"
                },
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
                },
                de: {
                    0: "Überprüfung fehlgeschlagen",
                    1: "Dieser Benutzername wird bereits verwendet",
                    2: "Konto hat sich nicht geändert. Versuchen Sie es nochmal"
                },
            }
        },
        success() {
            return {
                en: "Your info was changed",
                ru: "Ваша инфа была изменена",
                de: "Ihre Daten wurden geändert",
            }
        }
    }
})