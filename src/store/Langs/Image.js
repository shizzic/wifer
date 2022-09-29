import { defineStore } from "pinia"

export const ImageJS = defineStore("Image", {
    getters: {
        delete() {
            return {
                en: "Image was successfully deleted",
                ru: "Фотка была удалена",
                de: "Bild wurde erfolgreich gelöscht",
                fr: "L'image a été supprimée avec succès",
            }
        },
        error() {
            return {
                en: "Bad request. Try again",
                ru: "Че то шальнуло. Попробуй снова)",
                de: "Ungültige Anforderung. Versuchen Sie es nochmal",
                fr: "Mauvaise demande. Réessayer",
            }
        }
    }
})