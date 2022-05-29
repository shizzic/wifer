import { createApp  }  from 'vue'
import App from './App.vue'
import router from "@/router"

import { createPinia } from 'pinia'
import { userJS } from "@/store/user"
import { cityJS } from "@/store/city"
import { countryJS } from "@/store/country"

import vue3GoogleLogin from 'vue3-google-login'

import Toaster from "@meforma/vue-toaster"
import "./style"

const app = createApp(App)
app.config.globalProperties.$domain = "https://wifer-test.ru/"
app.config.globalProperties.$ip = "http://213.189.217.231:81/"

app
.use(router)
.use(createPinia())
.use(Toaster, {
    position: "bottom-left", 
    maxToasts: 3, 
    duration: 5000 
})
.use(vue3GoogleLogin, { clientId: '151585600074-mlb946h3m89a7o7tbg3kfnu54kbhc46k.apps.googleusercontent.com' })

app.config.globalProperties.$user    = userJS()
app.config.globalProperties.$city    = cityJS()
app.config.globalProperties.$country = countryJS()

app.mount('#app')
