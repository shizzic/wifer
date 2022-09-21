import { createApp  }  from 'vue'
import App from './App.vue'
import router from "@/router"

import { createPinia } from 'pinia'
import { langJS } from "@/store/lang"
import { userJS } from "@/store/user"
import { navJS } from "@/store/nav"
import { cityJS } from "@/store/city"
import { countryJS } from "@/store/country"
import { scrollJS } from "@/store/scroll"
import { chatJS } from "@/store/chat"
import { heartJS } from "@/store/heart"

import vue3GoogleLogin from 'vue3-google-login'

import vClickOutside from "click-outside-vue3"
import Toaster from "@meforma/vue-toaster"

import "./style"

const app = createApp(App)

app
.use(router)
.use(createPinia())
.use(Toaster, { position: "bottom-left", maxToasts: 3, duration: 4000 })
.use(vClickOutside)
.use(vue3GoogleLogin, { clientId: '151585600074-mlb946h3m89a7o7tbg3kfnu54kbhc46k.apps.googleusercontent.com' })

app.config.globalProperties.$domain     = "https://wifer-test.ru:450/"
app.config.globalProperties.$domainName = "wifer-test.ru:450/"
app.config.globalProperties.$ip         = "https://wifer-test.ru:82/"
app.config.globalProperties.$lang       = langJS()
app.config.globalProperties.$user       = userJS()
app.config.globalProperties.$nav        = navJS()
app.config.globalProperties.$city       = cityJS()
app.config.globalProperties.$country    = countryJS()
app.config.globalProperties.$scroll     = scrollJS()
app.config.globalProperties.$chat       = chatJS()
app.config.globalProperties.$heart      = heartJS()

app.mount('#app')
