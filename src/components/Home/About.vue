<script setup>
import { ref, reactive, onMounted } from 'vue'
const technologies = [
  'HTML & CSS(SASS/SCSS)',
  'JavaScript ES6+',
  'Typescript',
  'Vue 2&3',
  'Nuxt',
  'Firebase'
]
</script>

<template>
  <section id="about" class="about text-xl h-auto py-24 px-5 md:py-16 md:px-10 lg:py-32 lg:px-40">
    <header class="flex justify-start items-center relative mb-6">
      <span
        class="text-about font-serif text-2xl font-semibold md:text-3xl text-white md:font-semibold"
        >About Me</span
      >
    </header>

    <div
      class="about-content tracking-tighter relative font-serif opacity-75 flex flex-col items-center text-white"
    >
      <div class="text-justify md:pr-0 lg:pr-48">
        <p class="tracking-tighter">
          Hi there! My name is Yaasir and I'm a passionate frontend developer with experience
          building web applications and user interfaces using modern web technologies.
        </p>
        <p class="mt-4 tracking-tight">
          I have a strong background in web design and development, and I love to create websites
          that not only look great but also provide a seamless user experience. As a developer, I'm
          always looking to stay up-to-date with the latest technologies and trends in the industry,
          and I'm constantly experimenting with new tools and techniques to enhance my skillset.
        </p>
        <p class="mt-4 tracking-tighter">
          Here is a list of technologies I have recently been working with:
        </p>
        <ul class="flex flex-col mt-4 sm:grid sm:grid-cols-2 sm:col-gap-0 sm:row-gap-2">
          <li
            v-for="(tech, i) in technologies"
            :key="`tech-${i}`"
            class="text-base flex items-center mt-1"
          >
            <div class="h-[10px] w-[10px] rounded-full bg-regal-blue mr-2"></div>
            {{ tech }}
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
