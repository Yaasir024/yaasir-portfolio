<script setup>
import { ref, reactive, onMounted, } from "vue";
import Header from '@/components/Home/Header.vue'
import Hero from '@/components/Home/Hero.vue'
import About from '@/components/Home/About.vue'
import Work from '@/components/Home/Work.vue'
import Contact from '@/components/Home/Contact.vue'
import Footer from '@/components/Home/Footer.vue'
</script>

<template>
    <section class="">
        <Header />
        <Hero />
        <About />
        <Work />
        <Contact />
        <Footer />
    </section>
    
    <!-- <section class="flex h-screen">
        <div class="w-[380px] h-full px-[25px] py-[35px]">
            <Left />
        </div>
    </section> -->
</template>