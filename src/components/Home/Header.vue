<script setup>
import { ref, reactive, onMounted, computed } from 'vue'
import { scrollTo } from '@/composables/useScrollToSection'
const navLink = ref([
  {
    id: '1nl',
    name: 'About',
    to: 'about'
  },
  {
    id: '2nl',
    name: 'Experience',
    to: 'experience'
  },
  //   {
  //     id: '3nl',
  //     name: 'Work',
  //     to: 'work'
  //   },
  {
    id: '4nl',
    name: 'Contact',
    to: 'contact'
  }
])

const isOpen = ref(false)
const scrollPosition = ref(null)

const updateScrollPosition = () => {
  scrollPosition.value = window.scrollY
}

onMounted(() => {
  window.addEventListener('scroll', updateScrollPosition())
})

const hamburgerSrc = computed(() => {
  if (isOpen.value) {
    return '/assets/svg/blue-close-icon.svg'
  }
  return '/assets/svg/blue-hamburger-open.svg'
})

const transition = 'transition-all duration-300 ease-in-out'
</script>

<template>
  <header
    class="h-16 z-50 md:h-20 lg:h-20 w-full fixed shadow items-center bg-canvas-color px-4 py"
  >
    <div class="cursor"></div>
    <nav class="flex h-full w-full relative justify-between items-center md:px-4 md:py-8">
      <div class="w-full h-full flex items-center justify-between flex-wrap">
        <div class="image-container lg:-mt-2">
          <RouterLink to="/">
            <h1
              class="text-white text-3xl font-bold -mt-1 hover:text-regal-blue"
              :class="transition"
            >
              YAA<span class="text-3xl font-bold text-regal-blue hover:text-regal-blue">SIR</span>
            </h1>
          </RouterLink>
        </div>
        <div class="">
          <button
            class="flex z-50 items-center focus:outline-none md:block lg:hidden"
            @click="isOpen = !isOpen"
          >
            <img
              class="w-[24px] h-[24px]"
              width="24px"
              height="24px"
              :src="isOpen ? '/svg/blue-close-icon.svg' : '/svg/blue-hamburger-open.svg'"
              alt=""
            />
          </button>
        </div>
      </div>

      <div class="nav-links flex flex-row items-center px-2 py-3 text-white hidden lg:flex">
        <a
          v-for="link in navLink"
          :key="link.id"
          @click.prevent="scrollTo(link.to)"
          class="block font-serif rounded-full text-whit hover:text-regal-blue font-medium px-2 py-1 mt-0 ml-6 cursor-pointer"
        >
          <!--          <span class="font-mono">{{ 1 + i++ }}.</span>-->
          {{ link.name }}</a
        >

        <button
          class="bg-transparent border-2 border-regal-blue text-white hover:bg-hover-purple rounded block font-semibold px-4 py-2 ml-6"
        >
          <a href="/doc/resume.pdf" class="text-white hover:text-regal-blue" download> Resume </a>
        </button>
      </div>
    </nav>

    <!--    Mobile Nav bar -->
    <div
      :class="isOpen ? 'blo' : 'hid'"
      class="mobile-nav nav-links transform flex flex-col h-screen px-10 py-24 overflow-auto text-white bg-aside-purple lg:hidden top-0 absolute w-1/2"
    >
      <RouterLink
        v-for="link in navLink"
        :key="link.id"
        to="/"
        class="block rounded-full text-white text-white font-semibold hover:text-regal-blue text-xl font-medium px-2 py-5 items-center text-center"
        >{{ link.name }}</RouterLink
      >
      <a
        target="_blank"
        href="https://blog.geekmaros.dev/"
        class="block rounded-full text-white text-white font-semibold hover:text-regal-blue text-xl font-medium px-2 py-5 items-center text-center"
        >Blog</a
      >

      <button
        class="bg-transparent opacity-75 border-2 border-regal-blue text-white mt-3 rounded block font-semibold text-xl px-4 py-2 mt-10"
      >
        <a href="/doc/resume.pdf" download> Resume </a>
      </button>
    </div>
  </header>
</template>

<style scoped>
.nav-links.blo {
  right: 0;
  transition: right 0.5s ease-in;
}

.nav-links.hid {
  right: -1000px;
  transition: all 0.5s ease-out;
}
</style>
