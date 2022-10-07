<script setup>

    import { colors } from '/src/variables.js'

    import tk from '/src/assets/images/cover/thinkers-page.jpg'
    import rgp from '/src/assets/images/cover/research-profile.jpg'
    import gp from '/src/assets/images/cover/github-page.jpg'

    const portfolio_list = [
        { 
            id:"pf-01", 
            label:"Thinkers Online Class", 
            image:tk, 
            link:"https://www.facebook.com/profile.php?id=100076455903973",
            btn_color: colors.facebook 
        },
        { 
            id:"pf-02", 
            label:"Research Gate Profile", 
            image:rgp, 
            link:"https://www.researchgate.net/profile/Tun-Tun-Win",
            btn_color: colors.research
        },
        { 
            id:"pf-03", 
            label:"GitHub Profile", 
            image:gp, 
            link:"https://github.com/tuntunwinkic?fbclid=IwAR1C-ZaloPciBHZtwxLhHVmb0xQqEoWvSPpPnf4-hF15eE2g_Lc7inPcdlQ",
            btn_color: colors.github
        },
    ]
    const bgColor = (btn) => {
        return `background: ${btn};`
    }
</script>

<template>
    <div id="aboutMe" class="content about-me py-5">
        <div class="container text-center">
            <!-- My Info -->
            <img class="rounded-circle shadow-sm p-3 mb-4" src="/src/assets/images/logo.png" alt="">
            <h4 class="mb-0">This is me Tun Tun Win.</h4>
            <h6 class="mb-3">Founder of Thinkers</h6>
            <h5>I'm teaching and researching Machine Learning, Deep Learning, IoT and AWS Online Classes.</h5>

            <!-- Page and Profiles -->
            <div class="page-profiles py-3">
                <div class="row">
                    <div class="col-12 col-md-4 p-3" v-for="(pf,index) in portfolio_list" :key="index">
                        <img class="cover w-100 rounded p-3 shadow-sm mb-3" :src="pf.image" alt="">
                        <a :href="pf.link" class="label-btn d-block p-3" :style="bgColor(pf.btn_color)" target="_blank">{{pf.label}}</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>