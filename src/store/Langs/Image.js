import { defineStore } from "pinia"

export const ImageJS = defineStore("Image", {
    getters: {
        delete() {
            return {
                "EN": "Image was successfully deleted",
                "RU": "Фотка была удалена"
            }
        },
        error() {
            return {
                "EN": "Bad request. Try again",
                "RU": "Че то шальнуло. Попробуй снова)"
            }
        }
    }
})