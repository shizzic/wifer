import { createWebHistory, createRouter } from "vue-router";
import About from "@/components/About";
import Search from "@/components/Search";
import Chat from "@/components/Chat";
import Premium from "@/components/Premium";
import Heart from "@/components/Heart";

const routes = [
    { path: "/", name: "about", component: About, props: true },
    { path: "/search", name: "search", component: Search, props: true },
    { path: "/chat", name: "chat", component: Chat, props: true },
    { path: "/premium", name: "premium", component: Premium, props: true },
    { path: "/heart", name: "heart", component: Heart, props: true },
];

const router = createRouter({
    history: createWebHistory('/'),
    routes,
    mode: 'history'
});
  
export default router;