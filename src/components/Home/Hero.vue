<script setup>
import { scrollTo } from '@/composables/useScrollToSection'
</script>

<template>
  <section
    class="lg:h-auto font-serif py-24 px-5 md:py-24 md:px-10 lg:py-32 lg:px-40"
  >
    <span class="text-regal-blue opacity-75 font-sans text-base font-semibold lg:text-xl"
      >Hi, I'm</span
    >
    <h1 class="text-5xl md:text-6xl lg:leading-normal text-white font-bold">
      Yaasir Falana.
    </h1>
    <h2
      class="text-2xl md:text-5xl opacity-75 mt-0 text-white lg:leading-tight leading-snug font-semibold"
    >
      A frontend Developer
    </h2>
    <a @click.prevent="scrollTo('contact')" class="focus:outline-none">
      <button
        class="getintouch z-10 relative opacity-75 flex items-center mt-10 md:mt-10 py-3 px-5 text-white focus:outline-none hover:bg-hover-purple rounded border border-regal-blue bg-transparent font-hairline font-medium"
      >
        Contact Me

        <svg
          class="ml-2"
          width="28"
          height="22"
          viewBox="0 0 128 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0.5 33H123M123 33L79.5 2.5M123 33L79.5 61" stroke="#fff" stroke-width="5" />
        </svg>
      </button>
    </a>
  </section>
</template>
