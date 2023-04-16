<script setup>
import { ref, reactive, onMounted, computed } from 'vue'
const places = ref([
  {
    role: 'Frontend Developer',
    employer: 'Whois-ID',
    date: 'March 2023',
    url: 'https://www.whoisid.com/',
    location: 'Nigeria',
    tasks: [
      'Converted Figma mockup design to web templates.',
      'Developed and maintained code for website with Vuejs',
      'Reviewed and deployed code.',
      'Built a widget ',
      'Interacted closely with the UI team to ensure precise implementation of UI design.',
    ]
  },
  {
    role: 'Frontend Developer',
    employer: 'Starwells',
    date: 'March 2023',
    url: 'https://www.starwells.co/',
    location: 'Nigeria',
    tasks: [
      'Converted Figma UI mockup design to web templates.',
      'Developed and maintained code for website with Vuejs and TailwindCSS',
      'Interacted closely with the UI team to ensure every pixel of UI design details was implemented.',
      'Code review and deployment.'
    ]
  },
  {
    role: 'Frontend Developer',
    employer: 'Resileince17',
    url: 'https://resilience17.netlify.app/',
    date: 'Feb 2023',
    location: 'Nigeria',
    tasks: [
      'Developed and maintained code for website with Vuejs and TailwindCSS',
      'Interacted closely with the UI team to ensure every pixel of UI design details was implemented.'
    ]
  },
  {
    role: 'Frontend Developer',
    employer: 'Unify',
    url: 'http://unify-three.vercel.app/',
    date: 'May 2022 - 2022',
    location: 'Nigeria',
    tasks: ['Converted Figma UI mockup design to web templates.']
  },
  {
    role: 'Frontend Developer & Technical Tutor',
    employer: 'CodeCraft',
    date: 'December 2021 - Present',
    location: 'Nigeria',
    tasks: [
      'Refined and improved the existing frontend code and design to meet the UI mockup design.',
      'Converted UI mockup design to web template.',
      'Tutored CodeCraft students on Frontend Development.'
    ]
  }
])

const activeTab = ref(0)
const spanPosition = ref(null)
const color = ref('red')

const tasks = computed(() => {
  return places.value.tasks.filter((task) => task.length > 0)
})

const getActiveTab = (i) => ({
  // activeTab = i
  //   const activeSpan = this.$refs.myActiveSpan[i]
  //   spanPosition.value = activeSpan.offsetTop
})
</script>

<template>
  <section
    id="experience"
    class="work font-serif text-xl bg-regal-purple h-auto py-24 px-5 sm:py-0 sm:px-40 md:py-16 md:px-10 lg:pl-40 lg:pr-30 lg:pt-24 lg:mb-32"
  >
    <header class="flex justify-start items-center relative mb-6">
      <span class="text-work text-2xl font-semibold sm:text-3xl text-white sm:font-semibold"
        >Where I've Worked</span
      >
    </header>
    <div class="flex flex-wrap">
      <div class="flex-full lg:flex-50% lg:px-4 mb-4" v-for="(place, i) in places" :key="i">
        <div class="p-[30px] bg-[#333]">
          <div class="flex items-center mb-[10px]">
            <div class="text-white mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M20 20h-4v-4h4v4zm-6-10h-4v4h4v-4zm6 0h-4v4h4v-4zm-12 6h-4v4h4v-4zm6 0h-4v4h4v-4zm-6-6h-4v4h4v-4zm16-8v22h-24v-22h3v1c0 1.103.897 2 2 2s2-.897 2-2v-1h10v1c0 1.103.897 2 2 2s2-.897 2-2v-1h3zm-2 6h-20v14h20v-14zm-2-7c0-.552-.447-1-1-1s-1 .448-1 1v2c0 .552.447 1 1 1s1-.448 1-1v-2zm-14 2c0 .552-.447 1-1 1s-1-.448-1-1v-2c0-.552.447-1 1-1s1 .448 1 1v2z"
                />
              </svg>
            </div>
            <span class="text-[12px] font-bold">{{ place.date }}</span>
          </div>
          <h1 class="text-lg leading-[24px]">
            {{ place.role }} <a :href="place.url" target="_blank" class="text-regal-blue" v-if="place.url">@{{ place.employer }}</a> <span class="text-regal-blue" v-else>@{{ place.employer }}</span>
            
          </h1>
          <span class="text-[12px]">{{ place.location }}</span>
          <ul class="">
            <li v-for="(task, i) in place.tasks" :key="`tech-${i}`" class="text-base mt-1">
              <div
                class="inline-block h-[10px] w-[10px] shrink-0 rounded-full bg-regal-blue mr-2"
              ></div>
              {{ task }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
