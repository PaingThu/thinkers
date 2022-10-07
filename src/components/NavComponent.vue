<script setup>
import {ref, onMounted} from 'vue'
import {useRoute} from 'vue-router'

import { site_info } from '/src/variables.js'
import { goto } from '/src/func-common.js'
const route = useRoute()
const page = route.name

const yPosition = ref(0);

const getNavStyle = (page) => {
    const defaultStyle = 'navbar-light bg-white shadow-sm'
    if(page){
        return defaultStyle
    }else{
        return yPosition.value > 120 ? defaultStyle : 'home navbar-dark'
    }
    
}

const toggleBtnClass = ref("")

onMounted(() => {
    window.addEventListener("scroll", (event) => {
        yPosition.value =  window.pageYOffset
    });

    //For Navbar Hanburger Menu btn icon class
    toggleBtnClass.value = document.getElementById("navbarScroll").classList.contains("collapsed") ? "" : "collapsed"
})


</script>

<template>
    <nav class="navbar navbar-expand-lg" :class="getNavStyle($route.name)">
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
            <button id="navbarToggler" class="navbar-toggler" :class="toggleBtnClass" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                <span class="toggler-icon rounded top"></span>
                <span class="toggler-icon rounded middle"></span>
                <span class="toggler-icon rounded bottom"></span>
            </button>
            <div class="collapse navbar-collapse rounded mt-2 mt-md-0 px-3 px-md-0" id="navbarScroll">
                <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px;">
                    <li v-for="(nav,index) in site_info.nav_list" :key="index" class="nav-item">
                        <span 
                            class="nav-link mx-1"
                            :class="page==nav.page ? 'active' : ''" 
                            aria-current="page" 
                            @click="goto(nav.name =='Home' ? '' : `${nav.page}`)"
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
