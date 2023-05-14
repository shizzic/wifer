import { createApp } from 'vue'
import App from './App.vue'
import router from "@/router"
import "./style"

import { createPinia } from "pinia"
import vue3GoogleLogin from "vue3-google-login"
import vClickOutside from "click-outside-vue3"
import Toaster from "@meforma/vue-toaster"

import { langJS } from "@/store/lang"
import { userJS } from "@/store/user"
import { navJS } from "@/store/nav"
import { cityJS } from "@/store/city"
import { countryJS } from "@/store/country"
import { scrollJS } from "@/store/scroll"
import { chatJS } from "@/store/chat"
import { heartJS } from "@/store/heart"

const app = createApp(App)

app
.use(router)
.use(createPinia())
.use(Toaster, { position: "bottom-left", maxToasts: 3, duration: 4000 })
.use(vClickOutside)
.use(vue3GoogleLogin, { clientId: import.meta.env.VITE_GOOGLE_ID })

app.config.globalProperties.$domain = import.meta.env.VITE_DOMAIN
app.config.globalProperties.$domainName = import.meta.env.VITE_DOMAIN_NAME
app.config.globalProperties.$lang = langJS()
app.config.globalProperties.$user = userJS()
app.config.globalProperties.$nav = navJS()
app.config.globalProperties.$city = cityJS()
app.config.globalProperties.$country = countryJS()
app.config.globalProperties.$scroll = scrollJS()
app.config.globalProperties.$chat = chatJS()
app.config.globalProperties.$heart = heartJS()

app.config.globalProperties.$file = (what, target_id, filename, dir = "") => {
    return app.config.globalProperties.$domain + "file?what=" + what + "&target_id=" + target_id + "&filename=" + filename + "&dir=" + dir + "&" + Date.now()
}

app.mount('#app')
