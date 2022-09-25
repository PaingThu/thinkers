<script setup>
    import { icons } from '/src/variables.js'
</script>

<template>
    <footer class="text-center text-lg-start bg-light text-muted py-3">
        <div class="frist-line text-center pb-3">
            <a 
                href="https://www.facebook.com/aungkhaingminml" v-html="icons.facebook"
                class="mx-2"
                target="_blank"
            >
            </a>
            <a 
                href="https://github.com/tuntunwinkic" 
                v-html="icons.github"
                class="mx-2"
                target="_blank"
            >
            </a>
            <a 
                href="https://www.linkedin.com/in/tun-tun-win-831a7192/" v-html="icons.linkedin"
                class="mx-2"
                target="_blank"
            >
            </a>
        </div>
        <div class="second-line text-center">
            <span>copyright© Thinkers 2022</span>
        </div>
    </footer>
</template>