import { defineStore } from "pinia"

export const ProfileJS = defineStore("Profile", {
    getters: {
        fields() {
            return {
                en: {
                    "title": "Enter",
                    "text": "Hello there! If you want the best sugar on web, than welcome aboard :)"
                },
                ru: {
                    "title": "Вход",
                    "text": "Кулити, если ты хочешь лучший опыт знакомств в инете, тогда присаживайся к столу :)"
                },
                de: {
                    "title": "Eintreten",
                    "text": "Hallo! Wenn Sie den besten Zucker im Internet wollen, dann willkommen an Bord :)"
                },
            }
        },
        errors() {
            return {
                en: {
                    "int": "Id must contain only integers",
                    "server": "Something occured to a server. Try again"
                },
                ru: {
                    "int": "Индификатор должен состоять только из цифр",
                    "server": "Что-то случилось с сервером. Попробуйте снова"
                },
                de: {
                    "int": "ID darf nur Ganzzahlen enthalten",
                    "server": "Auf einem Server ist etwas passiert. Versuchen Sie es nochmal"
                },
            }
        },
        response() {
            return {
                en: "User doesn't exist or has been banned",
                ru: "Пользователь не существует или был забанен",
                de: "Benutzer existiert nicht oder wurde gesperrt",
            }
        },
        success() {
            return {
                en: "You signed in. Enjoy yourself :)",
                ru: "Вы вошли. Развлекайтесь :)",
                de: "Du hast dich angemeldet. Viel Spaß :)",
            }
        },
        cropper() {
            return {
                en: {
                    "upload": "Upload",
                    "public": "Public",
                    "private": "Private",
                    "cancel": "Cancel",
                    "max_size": "Max size of image is 3 MB",
                    "max_image": "You can have up to 20 images",
                    "error": "Something occured to the server, try again",
                    "success": "Image was added)"
                },
                ru: {
                    "upload": "Загрузить",
                    "public": "Публичная",
                    "private": "Приватная",
                    "cancel": "Отменить",
                    "max_image": "Вы можете иметь до 20 фоток",
                    "max_size": "Максимальный размер фотки 3 мб",
                    "error": "Что-то случилось с сервером, попробуйте снова",
                    "success": "Фотка добавлена)"
                },
                de: {
                    "upload": "Hochladen",
                    "public": "Öffentlichkeit",
                    "private": "Privatgelände",
                    "cancel": "Absagen",
                    "max_size": "Die maximale Bildgröße beträgt 3 MB",
                    "max_image": "Sie können bis zu 20 Bilder haben",
                    "error": "Auf dem Server ist ein Fehler aufgetreten. Versuchen Sie es erneut",
                    "success": "Bild wurde hinzugefügt)"
                },
            }
        }
    }
})