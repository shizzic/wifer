import { defineStore } from "pinia"

export const SidebarJS = defineStore("Sidebar", {
    getters: {
        locations() {
            return {
                en: "Locations",
                ru: "Местоположения"
            }
        }
    }
})