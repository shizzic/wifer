import { createWebHistory, createRouter } from "vue-router"
import About from "@/components/About"
import Search from "@/components/Search"
import Chat from "@/components/Chat"
import Premium from "@/components/Premium"
import Heart from "@/components/Heart"
import Profile from "@/components/Profile/Profile"
import Login from "@/components/Enter/Login/Main"
import Forgot from "@/components/Enter/Forgot/Main"
import NewPassword from "@/components/Enter/NewPassword/Main"

const routes = [
    { path: "/", name: "about", component: About, props: true },
    { path: "/search", name: "search", component: Search, props: true },
    { path: "/chat", name: "chat", component: Chat, props: true },
    { path: "/premium", name: "premium", component: Premium, props: true },
    { path: "/heart", name: "heart", component: Heart, props: true },
    { path: "/profile", name: "profile", component: Profile, props: true },
    { path: "/login", name: "login", component: Login, props: true },
    { path: "/forgotPassword", name: "forgot", component: Forgot, props: true },
    { path: "/newPassword/:token(\\S+)", name: "newPassword", component: NewPassword, props: true }
];

const router = createRouter({
    history: createWebHistory('/'),
    routes,
    mode: 'history'
});
  
export default router;