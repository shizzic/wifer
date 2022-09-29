import { defineStore } from "pinia"

export const SearchJS = defineStore("Search", {
    getters: {
        text() {
            return {
                en: {
                    title: "Profile text",
                    hold: "Text you wanna see from users",
                    full: "Search whole phrase",
                    is: "User filled \"About me\""
                },
                ru: {
                    title: "Текст профиля",
                    hold: "Текст, который вы бы хотели увидеть",
                    full: "Искать по фразе целиком",
                    is: "Юзер заполнил \"Обо мне\""
                },
                de: {
                    title: "Profiltext",
                    hold: "Text, den Sie von Benutzern sehen möchten",
                    full: "Ganzen Satz suchen",
                    is: "Benutzer hat \"Über mich\" ausgefüllt"
                },
            }
        },
        images() {
            return {
                en: "User has avatar",
                ru: "Юзер добавил аватарку",
                de: "Benutzer hat Avatar",
            }
        },
        search() {
            return {
                en: "Search",
                ru: "Поиск",
                de: "Suche",
            }
        },
        clear() {
            return {
                en: "Clear",
                ru: "Отчистить",
                de: "Klar",
            }
        },
        photos() {
            return {
                en: "Photo",
                ru: "Фото",
                de: "Foto",
            }
        },
        founded() {
            return {
                en: "Founded",
                ru: "Найдено",
                de: "Gegründet",
            }
        },
        sort() {
            return {
                en: {
                    last_time: "Activity",
                    created_at: "Newest"
                },
                ru: {
                    last_time: "Активность",
                    created_at: "Новые"
                },
                de: {
                    last_time: "Aktivität",
                    created_at: "Neueste"
                },
            }
        },
        template() {
            return {
                en: {
                    input: "Title",
                    hold: "New template",
                    select: "Select template",
                    count: "U can't have more than 10 templates",
                    blank: "Template's title can't be blank"
                },
                ru: {
                    input: "Название",
                    hold: "Новый шаблон",
                    select: "Выбрать шаблон",
                    count: "Вы не можете иметь больше 10 шаблонов",
                    blank: "Название шаблона не может быть пустым"
                },
                de: {
                    input: "Titel",
                    hold: "Neue Vorlage",
                    select: "Vorlage auswählen",
                    count: "Sie können nicht mehr als 10 Vorlagen haben",
                    blank: "Der Titel der Vorlage darf nicht leer sein"
                },
            }
        }
    }
})