import { createRouter,createWebHashHistory } from "vue-router";
import Home from '@/pages/Home/Home.vue'
export const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {path: '/', name: 'homepage', component: Home},
        {path: '/about', name: 'about', component: () => import('@/pages/About/About.vue')},
        {path: '/services', name: 'services', component: () => import('@/pages/Tech/Tech.vue')},
        {path: '/contact', name: 'contact', component: () => import('@/pages/Contact/Contact.vue')},
        {path: '/tech', name: 'tech', component: () => import('@/pages/Tech/Tech.vue')},
    ],
    scrollBehavior(){
        return {top: 0}
    }
})