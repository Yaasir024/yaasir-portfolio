<script setup>
import { ref, computed } from "vue";

const portfolioData = [
  {
    id: 1,
    title: 'Resilience17',
    img: '/images/resilience.PNG'
  }
]
</script>



<template>
  <section class="py-[100px]">
    <div class="my-10 flex justify-center">
      <span class="text-base font-calling self-start">&lt;h4&gt;</span>
      <h1 class="text-[36px] xs:text-[68px] sm:text-[80px] lg:text-[92px]">My Portfolio</h1>
      <span class="text-base font-calling self-end">&lt;/h4&gt;</span>
    </div>
    <div class="">
      <div class="flex flex-wrap items-center" v-for="portfolio in portfolioData" :key="portfolio.id">
        <div class="flex-full md:flex-50%">
          <img :src="portfolio.img" :alt="portfolio.title" class="w-[280px] xs:w-[310px] sm:w-[380px] h-[280px]  xs:h-[310px] sm:h-[380px] mx-auto md:ml-auto rounded-full" />
        </div>
        <div class="flex-full md:flex-50% pl-5">
          <span class="text-base font-calling self-start">&lt;h3&gt;</span>
          <h3 class="text-[36px] font-calling">{{ portfolio.title }}</h3>
          <span class="text-base font-calling self-end">&lt;/h3&gt;</span>
        </div>
      </div>
      <div class="flex items-center justify-between mt-6">
        <button
          class="h-[32px] xs:h-[40px] sm:h-[60px] md:h-[80px] w-[32px] xs:w-[40px] sm:w-[60px] md:w-[80px] border-2 rounded-full flex items-center justify-center text-white mr-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
            fill="currentColor"
            class="h-[16px] sm:h-[25px] md:h-[30px] w-[16px] sm:w-[25px] md:w-[30px]"
          >
            <path
              d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"
            />
          </svg>
        </button>
        <div class="w-[75%] h-1.5  xs:h-2 sm:h-3 bg-primary-color/10 rounded-md overflow-hidden">
          <div class="h-full w-[30%] bg-primary-color"></div>
        </div>
        <button
          class="h-[32px] xs:h-[40px] sm:h-[60px] md:h-[80px] w-[32px] xs:w-[40px] sm:w-[60px] md:w-[80px] border-2 rounded-full flex items-center justify-center text-white ml-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
            fill="currentColor"
            class="h-[16px] sm:h-[25px] md:h-[30px] w-[16px] sm:w-[25px] md:w-[30px]"
          >
            <path
              d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
            />
          </svg>
        </button>
      </div>
    </div>
  </section>
</template>
