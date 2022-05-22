import { createApp  }  from 'vue'
import App from './App.vue'
import router from "@/router"

import { createPinia } from 'pinia'
import { userJS } from "@/store/user";

import vue3GoogleLogin from 'vue3-google-login'
import SplitInput from 'vue-split-input';

import Toaster from "@meforma/vue-toaster";
import "./style"

const app = createApp(App)
app.config.globalProperties.$domain = "https://wifer-test.ru/"

app
.use(router)
.use(createPinia())
.use(Toaster, {
    position: "bottom-left", 
    maxToasts: 3, 
    duration: 5000 
})

.use(vue3GoogleLogin, { clientId: '151585600074-mlb946h3m89a7o7tbg3kfnu54kbhc46k.apps.googleusercontent.com' })
.use(SplitInput)

app.config.globalProperties.$user = userJS()
app.mount('#app')
