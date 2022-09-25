import { createRouter, createWebHistory } from 'vue-router'

import Page from './Page.vue'

const routes = [
    { 
        path: '/thinkers-build/:page*', 
        name: "page", 
        component: Page,  
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})



export default router