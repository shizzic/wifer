import { defineStore } from "pinia"

export const SeoJS = defineStore("Seo", {
    getters: {
        names() {
            return {
                en: {
                    premium: "Home",
                    search: "Search",
                    chat: "Chat",
                    heart: "Actions",
                    profile: "Profile",
                    signin: "Login",
                    auth: "Authentication",
                },
                ru: {
                    premium: "Главная",
                    search: "Поиск",
                    chat: "Чат",
                    heart: "Действия",
                    profile: "Профиль",
                    signin: "Вход",
                    auth: "Аутентификация",
                },
                de: {
                    premium: "Home",
                    search: "Suchen",
                    chat: "Chat",
                    heart: "Aktionen",
                    profile: "Profil",
                    signin: "Anmelden",
                    auth: "Authentifizierung",
                },
                fr: {
                    premium: "Accueil",
                    search: "Rechercher",
                    chat: "Chat",
                    heart: "Actions",
                    profile: "Profil",
                    signin: "Connexion",
                    auth: "Authentification",
                },
                es: {
                    premium: "Inicio",
                    search: "Buscar",
                    chat: "Chat",
                    heart: "Acciones",
                    profile: "Perfil",
                    signin: "Iniciar sesión",
                    auth: "Autenticación",
                },
                zh: {
                    premium: "主页",
                    search: "搜索",
                    chat: "聊天",
                    heart: "操作",
                    profile: "个人资料",
                    signin: "登录",
                    auth: "身份验证",
                },
                ja: {
                    premium: "ホーム",
                    search: "検索",
                    chat: "チャット",
                    heart: "アクション",
                    profile: "プロフィール",
                    signin: "ログイン",
                    auth: "認証",
                },
            }
        }
    }
})