<script setup>

    import { colors,images } from '/src/variables.js'

    


    const course_list = [
        { 
            id: "c-01", 
            label: "Machine Learning", 
            image: images.ml,
            link: "" 
        },
        { 
            id: "c-02", 
            label: "Deep Learning", 
            image: images.dl,
            link: "" 
        },
        { 
            id: "c-03", 
            label: "IoT", 
            image: images.iot,
            link: "" 
        },
        { 
            id: "c-04", 
            label: "AWS", 
            image: images.aws,
            link: "" 
        },
    ]
</script>

<template>
    <div class="content courses py-5 mb-5">
        <div class="container text-center">
            <h2 class="mb-3">COURSES</h2>
            <div class="row">
                <div class="col-6 col-3 course p-3" v-for="(course,index) in course_list" :key="index">
                    <img :src="course.image" class="w-100" alt="">
                    <span class="label px-3 pt-3">{{course.label}}</span>
                </div>
            </div>

        </div>
    </div>
</template>