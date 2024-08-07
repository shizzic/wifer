import { defineStore } from "pinia"
import { navJS } from "@/store/nav"
import { userJS } from "@/store/user"

export const sseJS = defineStore("sse", {
    state: () => ({
        server: null,
        attempts: 0,
    }),
    actions: {
        start() {
            if (this.server)
                return

            this.server = new EventSource(import.meta.env.VITE_PROTOCOL + "://" + import.meta.env.VITE_SERVER_DOMAIN_NAME + 'sse', {
                withCredentials: true,
            })

            this.server.addEventListener("notifications", function (event) {
                if (!event.data)
                    return

                const data = JSON.parse(event.data)
                for (const key in data)
                    navJS().setHearts(data[key], key)
            }.bind(this), false)

            // Обнулить премиум локально, если он закончился
            this.server.addEventListener("premium", function (event) {
                if (!event.data)
                    return

                const data = JSON.parse(event.data)
                if (!data)
                    userJS().premium = 0
            }.bind(this), false)

            this.server.onerror = () => {
                ++this.attempts

                if (this.attempts === 5) // максимум 5 попыток реконекта
                    this.close()
            }

            this.server.onclose = () => {
                this.$reset()
            }
        },

        close() {
            if (this.server)
                this.server.close()
        },
    },
})