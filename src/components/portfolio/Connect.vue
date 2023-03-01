<template>
  <section class="py-[100px]">
    <div class="my-10 flex justify-center">
      <span class="text-base font-calling self-start">&lt;h4&gt;</span>
      <h1 class="text-[42px] xs:text-[68px] sm:text-[80px] lg:text-[92px]">Contact Me</h1>
      <span class="text-base font-calling self-end">&lt;/h4&gt;</span>
    </div>

    <div class="text-[22px] xs:text-[28px]">
      <div class="flex items justify-center">
        <a href="mailto:yope4ever@gmail.com">
          <button
            class="h-[100px] xs:h-[130px] w-[100px] xs:w-[130px] border-4 border-primary-color rounded-full flex items-center justify-center text-white"
          >
            Gmail
          </button>
        </a>
      </div>
      <div class="flex items justify-center">
        <a href="https://www.instagram.com/yaasirfalana/" class="mr-8">
          <button
            class="h-[120px] xs:h-[160px] w-[120px] xs:w-[160px] border-4 border-primary-color rounded-full flex items-center justify-center text-white"
          >
            Instagram
          </button>
        </a>
        <a href="https://www.linkedin.com/in/yaasir-falana-a29962233/" class="ml-8">
          <button
            class="h-[120px] xs:h-[160px] w-[120px] xs:w-[160px] border-4 border-primary-color rounded-full flex items-center justify-center text-white"
          >
            LinkedIn
          </button>
        </a>
      </div>
      <div class="flex items justify-center">
        <a href="https://twitter.com/YaasirFalana">
          <button
            class="h-[100px] xs:h-[130px] w-[100px] xs:w-[130px] border-4 border-primary-color rounded-full flex items-center justify-center text-white"
          >
            Twitter
          </button>
        </a>
      </div>
    </div>
  </section>
</template>


<style scoped>
.pulse {
  animation: pulse-animation 2s infinite;
}

@keyframes pulse-animation {
  0% {
    box-shadow: 0 0 0 0px rgba(0, 158, 102, 0.2);
  }
  100% {
    box-shadow: 0 0 0 20px rgba(0, 158, 102, 0);
  }
}
</style>
