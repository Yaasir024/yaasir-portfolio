<script setup>
import { ref, reactive, onMounted, } from "vue";
import Header from '@/components/Header.vue'
import Hero from '@/components/portfolio/Hero.vue'
import Portfolio from '@/components/portfolio/Portfolio.vue'
import Article from '@/components/portfolio/Article.vue'
import Connect from '@/components/portfolio/Connect.vue'
import Divider from '@/components/portfolio/Divider.vue'

import {articleStore} from '@/stores/articles.js'

const useArticles = articleStore()

onMounted(() => {
  useArticles.getPosts()
})
</script>

<template>
  <main class="text-white">
    <Header />
    <section class="max-w-[1600px] mx-auto px-[28px] xs:px-[40px] md:px-[90px]">
      <Hero/>
      <Divider />
      <Portfolio/>
      <Divider />
    </section>
    <Article/>
    <Divider />
    <Connect/>
    <div class="flex justify-end py-6 px-5">
      © Copyright 2023. Developed with ☕ by Yaasir...
    </div>
  </main>
</template>
