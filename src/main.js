import { createApp  }  from 'vue'
import App from './App.vue'
import router from "@/router"

import { createPinia } from 'pinia'
import { userJS } from "@/store/user";

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

app.config.globalProperties.$user = userJS()
app.mount('#app')
