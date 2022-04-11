import { createWebHistory, createRouter } from "vue-router";
import About from "@/components/About";
import Search from "@/components/Search";
import Chat from "@/components/Chat";

const routes = [
    { path: "/", name: "about", component: About, props: true },
    { path: "/search", name: "search", component: Search, props: true },
    { path: "/chat", name: "chat", component: Chat, props: true }
];

const router = createRouter({
    history: createWebHistory('/'),
    routes,
    mode: 'history'
});
  
export default router;