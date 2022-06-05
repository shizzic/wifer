import { defineStore } from "pinia"

export const ProfileJS = defineStore("Profile", {
    getters: {
        fields() {
            return {
                "EN": {
                    "title": "Enter",
                    "text": "Hello there! If you want the best sugar on web, than welcome aboard :)"
                },
                "RU": {
                    "title": "Вход",
                    "text": "Кулити, если ты хочешь лучший опыт знакомств в инете, тогда присаживайся к столу :)"
                }
            }
        },
        errors() {
            return {
                "EN": {
                    "int": "Id must contain only integers",
                    "server": "Something occured to a server. Try again"
                },
                "RU": {
                    "int": "Индификатор должен состоять только из цифр",
                    "server": "Что-то случилось с сервером. Попробуйте снова"
                }
            }
        },
        response() {
            return {
                "EN": "User doesn't exist or has been banned",
                "RU": "Пользователь не существует или был забанен"
            }
        },
        success() {
            return {
                "EN": "You signed in. Enjoy yourself :)",
                "RU": "Вы вошли. Развлекайтесь :)"
            }
        },
        cropper() {
            return {
                "EN": {
                    "upload": "Upload",
                    "public": "Public",
                    "private": "Private",
                    "cancel": "Cancel",
                    "max_size": "Max size of image is 3 MB",
                    "error": "Something occured to the server, try again",
                    "success": "Image was added)"
                },
                "RU": {
                    "upload": "Загрузить",
                    "public": "Публичная",
                    "private": "Приватная",
                    "cancel": "Отменить",
                    "max_size": "Максимальный размер фотки 3 мб",
                    "error": "Что-то случилось с сервером, попробуйте снова",
                    "success": "Фотка добавлена)"
                }
            }
        }
    }
})