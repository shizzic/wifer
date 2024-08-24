import { createApp } from 'vue'
import App from './App.vue'
import router from "@/router"
import "./style"
import { name, store_version } from "/package"

import { createPinia, getActivePinia } from "pinia"
import vClickOutside from "click-outside-vue3"
import Toaster from "@meforma/vue-toaster"

import Image from './components/Image.vue'

import { langJS } from "@/store/lang"
import { userJS } from "@/store/user"
import { navJS } from "@/store/nav"
import { cityJS } from "@/store/city"
import { countryJS } from "@/store/country"
import { scrollJS } from "@/store/scroll"
import { chatJS } from "@/store/chat"
import { heartJS } from "@/store/heart"
import { sseJS } from "@/store/sse"

const app = createApp(App)

app
    .use(router)
    .use(createPinia())
    .use(Toaster, { position: "bottom-left", maxToasts: 3, duration: 4000 })
    .use(vClickOutside)
    .component("Image", Image)

const curruent_db_version = +localStorage.getItem("store_version")
if (curruent_db_version && curruent_db_version != +store_version) {
    getActivePinia()._s.forEach(store => store.$reset())
    localStorage.clear()
}
localStorage.setItem("store_version", store_version)

const test = import.meta.env.VITE_SERVER_DOMAIN || "__SERVER_DOMAIN__"
console.log(test)
app.config.globalProperties.$app_name = name[0].toUpperCase() + name.slice(1)
app.config.globalProperties.$domain = (import.meta.env.VITE_SERVER_DOMAIN || "__SERVER_DOMAIN__")
app.config.globalProperties.$domainName = (import.meta.env.VITE_SERVER_DOMAIN_NAME || "__SERVER_DOMAIN_NAME__")
app.config.globalProperties.$lang = langJS()
app.config.globalProperties.$user = userJS()
app.config.globalProperties.$nav = navJS()
app.config.globalProperties.$city = cityJS()
app.config.globalProperties.$country = countryJS()
app.config.globalProperties.$scroll = scrollJS()
app.config.globalProperties.$chat = chatJS()
app.config.globalProperties.$heart = heartJS()
app.config.globalProperties.$sse = sseJS()

app.config.globalProperties.$file = (what, target_id, filename, dir = "") => {
    return app.config.globalProperties.$domain + "file?what=" + what + "&target_id=" + target_id + "&filename=" + filename + "&dir=" + dir + "&" + Date.now()
}

app.config.globalProperties.$date = (timestamp) => {
    const date = new Date(timestamp * 1000)
    return (String(date.getDate()).padStart(2, '0')) + '.' + (String(date.getMonth() + 1).padStart(2, '0')) + '.' + date.getFullYear() + " - " +
        (String(date.getHours()).padStart(2, '0')) + '.' + (String(date.getMinutes() + 1).padStart(2, '0')) + '.' + (String(date.getSeconds() + 1).padStart(2, '0'))
}

app.mount('#app')
