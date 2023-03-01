<script setup>
import { ref, onMounted } from 'vue'

const isScrolled = ref(false)
const handleScroll = () => {
  isScrolled.value = window.pageYOffset > 50
}
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

const showMobileNav = ref(false)
</script>
<template>
  <header
    class="flex items-center justify-center h-[80px] w-full px-[22px] xs:px-[30px] sm:px-[50px] fixed top-0 left-0 right-0 bg-canvas-color z-30 transition-all duration-200 ease-in-out"
    :class="isScrolled ? 'shadow-xl' : ''"
  >
    <nav class="flex items-center justify-between w-full">
      <div class="logo text-3xl">
        <h1 class="transition-all duration-300 ease-in-out">
          YAA<span class="text-primary-color transition-all duration-300 ease-in-out">SIR</span>
        </h1>
      </div>
      <ul class="hidden md:flex flex-row items-center font-calling text-lg font-light">
        <li class="mr-5">
          <button class="btn">&lt;Home/&gt;</button>
        </li>
        <li class="mr-5">
          <button class="btn">&lt;Portfolio/&gt;</button>
        </li>
        <li class="mr-5">
          <button class="btn">&lt;Blog/&gt;</button>
        </li>
        <li class="">
          <button class="btn">&lt;Contact/&gt;</button>
        </li>
      </ul>
      <button class="block md:hidden text-white hover:text-primary-color transition-all duration-300 ease-in-out">
        <svg
          clip-rule="evenodd"
          fill-rule="evenodd"
          stroke-linejoin="round"
          stroke-miterlimit="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          class="h-[26px] w-[26px]"
        >
          <path
            d="m11 16.745c0-.414.336-.75.75-.75h9.5c.414 0 .75.336.75.75s-.336.75-.75.75h-9.5c-.414 0-.75-.336-.75-.75zm-9-5c0-.414.336-.75.75-.75h18.5c.414 0 .75.336.75.75s-.336.75-.75.75h-18.5c-.414 0-.75-.336-.75-.75zm4-5c0-.414.336-.75.75-.75h14.5c.414 0 .75.336.75.75s-.336.75-.75.75h-14.5c-.414 0-.75-.336-.75-.75z"
            fill-rule="nonzero"
          />
        </svg>
      </button>
    </nav>
  </header>
</template>

<style scoped>
.logo:hover h1 {
  color: #009e66;
}
.logo:hover span {
  color: white;
}
.btn {
  position: relative;
}

.btn:before,
.btn:after {
  position: absolute;
  content: '';
  transition: all 0.25s;
}

.btn:before {
  border-bottom: 2px solid #009e66;
  border-left: 2px solid #009e66;
  width: 10%;
  height: 33%;
  left: -5px;
  bottom: -5px;
}

.btn:after {
  border-top: 2px solid #009e66;
  border-right: 2px solid #009e66;
  width: 10%;
  height: 33%;
  top: -5px;
  right: -5px;
}

.btn:hover:before {
  width: 110%;
  height: 130%;
}

.btn:hover:after {
  width: 112%;
  height: 140%;
}
</style>
