import { createWebHistory, createRouter } from "vue-router";
// import Chat from "@/components/chat/Chat";

const routes = [
    // { path: "/about", name: "about", component: Chat, props: true },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    mode: 'history'
});
  
export default router;