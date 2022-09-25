<script setup>
    import {useRoute} from 'vue-router'

    import Nav from './components/NavComponent.vue'
    import home from './pages/Home.vue'
    import about from './pages/About.vue'
    import courses from './pages/Courses.vue'
    import contact from './pages/Contact.vue'
    import Footer from './components/FooterComponent.vue'

    const route = useRoute()
    const page = route.params.page ? route.params.page[0] : 'home'
    console.log("page ",page)
    const component = () => {
        if(page == "about")
            return about
        if(page == "courses")
            return courses
        if(page == "contact")
            return contact
        return home
    }
    console.log("Pagesss ", page)

</script>


<template>
    <Nav />
    <component :is="component()"/>
    <Footer />
</template>