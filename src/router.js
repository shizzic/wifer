import { createWebHistory, createRouter } from "vue-router"

let c = {
    Search: () => import("@/components/Search/Main.vue"),
    Chat: () => import("@/components/Chat/Main.vue"),
    Premium: () => import("@/components/Premium/Main.vue"),
    Heart: () => import("@/components/Heart/Main.vue"),
    Profile: () => import("@/components/Profile/Main.vue"),
    Signin: () => import("@/components/Signin/Main.vue"),
    Auth: () => import("@/components/Auth.vue"),
    404: () => import("@/components/404.vue"),
}

const routes = [
    { path: "/:catchAll(.*)", name: "404", component: c[404] },
    { path: "/", name: "premium", component: c.Premium, props: true },
    { path: "/search", name: "search", component: c.Search, props: true },
    { path: "/chat", name: "chat", component: c.Chat, props: true },
    { path: "/heart", name: "heart", component: c.Heart, props: true },
    { path: "/profile/:id", name: "profile", component: c.Profile, props: true },
    { path: "/signin", name: "signin", component: c.Signin, props: true },
    { path: "/auth/:id(\\S+)/:code", name: "auth", component: c.Auth, props: true }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    mode: "history"
})
  
export default router