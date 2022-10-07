import { createRouter, createWebHistory } from 'vue-router'

import About from './pages/About.vue'
import Home from './pages/Home.vue'
import Courses from './pages/Courses.vue'
import Contact from './pages/Contact.vue'

const routes = [
    { 
        path: '', 
        name: "", 
        component: Home,  
    },
    { 
        path: '/courses', 
        name: "courses", 
        component: Courses,  
    },
    { 
        path: '/contact', 
        name: "contact", 
        component: Contact,  
    },
    { 
        path: '/about', 
        name: "about", 
        component: About,  
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})



export default router