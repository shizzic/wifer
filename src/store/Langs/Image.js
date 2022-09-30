import { defineStore } from "pinia"

export const ImageJS = defineStore("Image", {
    getters: {
        delete() {
            return {
                en: "Image was successfully deleted",
                ru: "Фотка была удалена",
                de: "Bild wurde erfolgreich gelöscht",
                fr: "L'image a été supprimée avec succès",
                es: "La imagen fue eliminada con éxito",
                zh: "图片已成功删除",
                ja: "画像が正常に削除されました",
            }
        },
        error() {
            return {
                en: "Bad request. Try again",
                ru: "Че то шальнуло. Попробуй снова)",
                de: "Ungültige Anforderung. Versuchen Sie es nochmal",
                fr: "Mauvaise demande. Réessayer",
                es: "Solicitud incorrecta. Intentar otra vez",
                zh: "错误的请求。再试一次",
                ja: "要求の形式が正しくありません。再試行",
            }
        }
    }
})