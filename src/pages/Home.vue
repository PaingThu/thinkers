<script setup>

    import { colors, images, site_info, icons } from '/src/variables.js'

    import CarouselComponent from '/src/components/CarouselComponent.vue'
    import NavComponent from '/src/components/NavComponent.vue'
    import AboutMe from '/src/contents/AboutMe.vue'
    import Courses from '/src/contents/Courses.vue'
    import FooterComponent from '/src/components/FooterComponent.vue'

    

</script>


<template>

    <NavComponent />

    <section class="home">

        <!-- Banner -->
        <div class="banner">
            <CarouselComponent :banner_list="site_info.banner_list" />
            <!-- <div class="see-more" @click="scrollToAbout()">
                <span class="d-block">Click to see more !</span>
                <span v-html="icons.down_arrow"></span>
            </div> -->
        </div>

        <!-- About Me -->
        <AboutMe />

        <!-- Courses -->
        <Courses />

    </section>

    <FooterComponent />

</template>