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
    TermsAndConditions: () => import("@/components/terms/TermsAndConditions.vue"),
    PrivacyPolicy: () => import("@/components/terms/PrivacyPolicy.vue"),
    RefundPolicy: () => import("@/components/terms/RefundPolicy.vue"),
}

const routes = [
    {
        path: "/:pathMatch(.*)*", name: "404", component: c[404],
        beforeEnter() {
            window.location.href = "https://dateshipper.com:444/404";
        },
    },
    {
        path: "/", name: "premium", component: c.Premium, props: true,
        meta: {
            title: "Dateshipper - Join Free",
            metaTags: [
                {
                    name: "description",
                    content: "Dateshipper.com is the most convenient, fast and reasonable dating website. Try it out for free!"
                },
                {
                    property: "og:description",
                    content: "Dateshipper.com is the most convenient, fast and reasonable dating website. Try it out for free!"
                }
            ],
        }
    },
    {
        path: "/search", name: "search", component: c.Search, props: true,
        meta: {
            title: "Search",
            metaTags: [
                {
                    name: "description",
                    content: "Look for your pair without registration."
                },
                {
                    property: "og:description",
                    content: "Look for your pair without registration."
                }
            ],
        }
    },
    {
        path: "/chat", name: "chat", component: c.Chat, props: true,
        meta: {
            title: "Chat",
            metaTags: [
                {
                    name: "description",
                    content: "Chat with people you like."
                },
                {
                    property: "og:description",
                    content: "Chat with people you like."
                }
            ],
        }
    },
    {
        path: "/heart", name: "heart", component: c.Heart, props: true,
        meta: {
            title: "Activities",
            metaTags: [
                {
                    name: "description",
                    content: "It's a collection of all of your actions with other profiles and others' profiles with yours."
                },
                {
                    property: "og:description",
                    content: "It's a collection of all of your actions with other profiles and others' profiles with yours."
                }
            ],
        }
    },
    {
        path: "/profile/:id", name: "profile", component: c.Profile, props: true,
        meta: {
            title: "Profile",
            metaTags: [
                {
                    name: "description",
                    content: "Profile page with full information."
                },
                {
                    property: "og:description",
                    content: "Profile page with full information."
                }
            ],
        }
    },
    {
        path: "/signin", name: "signin", component: c.Signin, props: true,
        meta: {
            title: "Sign in",
            metaTags: [
                {
                    name: "description",
                    content: "Sign in for free! The fastest registration you've ever seen!"
                },
                {
                    property: "og:description",
                    content: "Sign in for free! The fastest registration you've ever seen!"
                }
            ],
        }
    },
    {
        path: "/auth/:id(\\S+)/:code", name: "auth", component: c.Auth, props: true,
        meta: {
            title: "Authentication",
            metaTags: [
                {
                    name: "description",
                    content: "Authentication process."
                },
                {
                    property: "og:description",
                    content: "Authentication process."
                }
            ],
        }
    },
    {
        path: "/terms/terms_and_conditions", name: "terms_and_conditions", component: c.TermsAndConditions, props: true,
        meta: {
            title: "Terms",
            metaTags: [
                {
                    name: "description",
                    content: "Terms and Conditions."
                },
                {
                    property: "og:description",
                    content: "Terms and Conditions."
                }
            ],
        }
    },
    {
        path: "/terms/privacy_policy", name: "privacy_policy", component: c.PrivacyPolicy, props: true,
        meta: {
            title: "Privacy policy",
            metaTags: [
                {
                    name: "description",
                    content: "Privacy policy document."
                },
                {
                    property: "og:description",
                    content: "Privacy policy document."
                }
            ],
        }
    },
    {
        path: "/terms/refund_policy", name: "refund_policy", component: c.RefundPolicy, props: true,
        meta: {
            title: "Refund policy",
            metaTags: [
                {
                    name: "description",
                    content: "Refund policy document."
                },
                {
                    property: "og:description",
                    content: "Refund policy document."
                }
            ],
        }
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    mode: "history"
})

router.beforeEach((to, from, next) => {
    const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title)
    const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags)
    const previousNearestWithMeta = from.matched.slice().reverse().find(r => r.meta && r.meta.metaTags)

    if (nearestWithTitle) {
        document.title = nearestWithTitle.meta.title
    } else if (previousNearestWithMeta) {
        document.title = previousNearestWithMeta.meta.title
    }

    Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => el.parentNode.removeChild(el))

    if (!nearestWithMeta) return next()

    nearestWithMeta.meta.metaTags.map(tagDef => {
        const tag = document.createElement('meta')

        Object.keys(tagDef).forEach(key => {
            tag.setAttribute(key, tagDef[key])
        })

        tag.setAttribute('data-vue-router-controlled', '')
        return tag
    })
        .forEach(tag => document.head.appendChild(tag))

    next()
})

export default router