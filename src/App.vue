<script setup>
    import "bootstrap/dist/css/bootstrap.min.css"
    import "bootstrap"
    

</script>

<template>
    <router-view :key="$route.fullPath"></router-view>
</template>


