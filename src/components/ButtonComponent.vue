<script  setup>

    const {banner_list} = defineProps(["banner_list"])

</script>

<template>
    <a 
        :href="pf.link" 
        class="label-btn d-block p-3" 
        target="_blank"
    >
        {{pf.label}}
    </a>
</template>