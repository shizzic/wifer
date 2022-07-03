import { defineStore } from "pinia"

export const ImageJS = defineStore("Image", {
    getters: {
        delete() {
            return {
                en: "Image was successfully deleted",
                ru: "Фотка была удалена"
            }
        },
        error() {
            return {
                en: "Bad request. Try again",
                ru: "Че то шальнуло. Попробуй снова)"
            }
        }
    }
})