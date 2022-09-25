<script setup>
import {ref, onMounted} from 'vue'
import {useRoute} from 'vue-router'
import { goto } from '/src/func-common.js'
const route = useRoute()
const page = route.params.page ? route.params.page[0] : 'home' 

const navList = [
        { name: "Home" },
        { name: "Courses" },
        { name: "About" },
        { name: "Contact" },
    ]

const yPosition = ref(0);

const getNavStyle = (page) => {
    const defaultStyle = 'navbar-light bg-light shadow-sm'
    if(page){
        return defaultStyle
    }else{
        return yPosition.value > 120 ? defaultStyle : 'home'
    }
    
}

onMounted(() => {
    window.addEventListener("scroll", (event) => {
        yPosition.value =  window.pageYOffset
    });
})


</script>

<template>
    <nav class="navbar navbar-expand-lg" :class="getNavStyle($route.params.page)">
        <div class="container">
            <a class="navbar-brand py-0" href="/">
                <img class="logo p-0 rounded-circle shadow" src="/src/assets/images/logo.png" alt="Thinker Logo">
                <div class="logo-text ms-3">
                    <span class="row">
                        <small>Machine Learning</small>
                        <small>Deep Learning</small>
                        <small>IoT</small>
                    </span>
                </div>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarScroll">
                <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px;">
                    <li v-for="(nav,index) in navList" :key="index" class="nav-item">
                        <span 
                            class="nav-link mx-1"
                            :class="page==nav.name.toLowerCase() ? 'active' : ''" 
                            aria-current="page" 
                            @click="goto(nav.name =='Home' ? '/thinkers-build/' : `/thinkers-build/${nav.name.toLowerCase()}`)"
                        >
                            {{nav.name}}
                        </span>
                    </li>
                    
                    
                </ul>
            </div>
        </div>
    </nav>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
