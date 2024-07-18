import { defineStore } from "pinia"
import { useStorage } from "@vueuse/core"

export const cityJS = defineStore("city", {
    state: () => ({
        list: useStorage("city", {})
    }),
    actions: {
        set(data) {
            this.list[data.country_id] = data.data
        },

        async get(domain, country_id, locale) {
            if (country_id && (!this.list || (this.list && !this.list[country_id] || (this.list[country_id] && Object.keys(this.list).length === 0)))) {
                await fetch(domain + "city?locale=" + locale + "&country_id=" + country_id, {
                    method: "GET",
                    credentials: "include"
                })
                    .then(data => { return data.json() })
                    .then(data => {
                        let obj = {}

                        for (let index in data)
                            obj[data[index]._id] = data[index].title

                        this.set({ data: obj, country_id: country_id })
                    })
            }

            return this.list
        },
    }
})