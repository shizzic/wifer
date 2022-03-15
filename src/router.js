import { createWebHistory, createRouter } from "vue-router";

const routes = [
    // { path: '/authentication/:token(.+)?', name: 'authentication', component: Authentication, props: true },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    mode: 'history'
});
  
export default router;