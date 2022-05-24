import { createWebHistory, createRouter } from "vue-router"

import About from "@/components/About.vue"
import Search from "@/components/Search.vue"
import Chat from "@/components/Chat.vue"
import Premium from "@/components/Premium.vue"
import Heart from "@/components/Heart.vue"
import Profile from "@/components/Profile/Profile.vue"
import Signin from "@/components/Signin/Main.vue"
import Auth from "@/components/Auth.vue"

const routes = [
    { path: "/", name: "about", component: About, props: true },
    { path: "/search", name: "search", component: Search, props: true },
    { path: "/chat", name: "chat", component: Chat, props: true },
    { path: "/premium", name: "premium", component: Premium, props: true },
    { path: "/heart", name: "heart", component: Heart, props: true },
    { path: "/profile", name: "profile", component: Profile, props: true },
    { path: "/signin", name: "signin", component: Signin, props: true },
    { path: "/auth/:id(\\S+)/:code", name: "auth", component: Auth, props: true }
]

const router = createRouter({
    history: createWebHistory('/'),
    routes,
    mode: 'history'
})
  
export default router