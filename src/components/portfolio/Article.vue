<script setup>
import { ref, reactive, onMounted } from 'vue'
import Header from '@/components/Header.vue'
import Hero from '@/components/portfolio/Hero.vue'
import Portfolio from '@/components/portfolio/Portfolio.vue'

import { articleStore } from '@/stores/articles.js'

const useArticles = articleStore()

onMounted(() => {
  useArticles.getPosts()
})
</script>

<template>
  <section class="py-[100px]">
    <div class="my-10 flex justify-center">
      <span class="text-base font-calling self-start">&lt;h4&gt;</span>
      <h1 class="text-[42px] xs:text-[68px] sm:text-[80px] lg:text-[92px]">My Articles</h1>
      <span class="text-base font-calling self-end">&lt;/h4&gt;</span>
    </div>
    <article class="mt-12">
      <div class="first-of-type:border-t-2 border-b-2 border-primary-color" v-for="(post, index) in useArticles.posts" :key="index">
        <a :href="`https://teckierite.hashnode.dev/${post.slug}`" target="_blank">
          <div
            class="article-item flex items-center justify-between px-5 sm:px-10 md:px-20 py-6  hover:bg-primary-color transition-all duration-300 ease-in-out"
          >
            <div class="">
              <h1 class="text-[20px] xs:text-[26px] sm:text-[30px] md:text-[36px] lg:text-[40px] xl:text-[46px]">{{ post.title }}</h1>
              <h2 class="font-calling text-[18px] sm:text-[24px] md:text-[28px] lg:text-[30px] font-light">{{ post.dateAdded }}</h2>
            </div>
            <div class="hidden md:block">
              <svg
                width="36"
                height="36"
                viewBox="0 0 28 29"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                class="arrow"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M2.56187 0.911915C4.11237 2.46242 5.92443 3.72099 7.89459 4.61578C9.86475 5.51057 11.9544 6.02405 14.0443 6.12691C16.1342 6.22976 18.1834 5.91998 20.0748 5.21524C21.9662 4.5105 23.6629 3.42462 25.0679 2.01957L25.118 2.06964L25.118 2.0696L26.8151 3.76666L26.8151 3.76669L26.8651 3.81672C25.4601 5.22176 24.3742 6.91844 23.6694 8.80988C22.9647 10.7013 22.6549 12.7505 22.7578 14.8404C22.8606 16.9302 23.3741 19.0199 24.2689 20.9901C25.1637 22.9602 26.4223 24.7723 27.9728 26.3228L26.2378 28.0578C19.8331 21.6532 19.5238 13.4622 23.6287 6.95308L4.18769 26.3941L2.49063 24.697L21.9318 5.25589C15.4226 9.36084 7.23155 9.05161 0.826863 2.64692L2.56187 0.911915Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        </a>
      </div>
    </article>
    <div class="text-center mt-12">
        <a href="https://teckierite.hashnode.dev/" target="_blank">
            <span class="font-calling text-lg hover:text-primary-color transition-all duration-300 ease-in-out">#View more articles#</span>
        </a>
    </div>
  </section>
</template>

<style scoped>
.arrow {
  transition: all;
  transition-duration: 0.3s;
  transition-timing-function: ease-in-out;
}
.article-item:hover .arrow {
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
}
</style>
