<script setup>
import { ref, reactive, onMounted } from 'vue'

const transition = 'transition-all duration-300 ease-in-out'
</script>

<template>
  <div class="h-full border rounded-lg px-4 py-8">
    <div class="">
      <div class="flex justify-between items-center">
        <RouterLink to="/">
          <h1 class="text-3xl font-bold -mt-1 text-white hover:text-regal-pink" :class="transition">
            YAA<span class="text-3xl font-bold text-regal-blue hover:text-white" :class="transition"
              >SIR</span
            >
          </h1>
        </RouterLink>
        <span class="text-[18px]"
          >Frontend <br />
          Developer</span
        >
      </div>
      <div class="image-container mt-4 h-[240px] rounded-2xl overflow-hidden" v-if="false">
        <img src="/images/yaasir.jpg" alt="" class="" />
      </div>
      <div class="mt-4 flex flex-col items-center">
        <a href="mailto:yope4ever@gmail.com" target="_blank" rel="noopener noreferrer">
          <h1 class="text-[18px]">yope4ever@gmail.com</h1>
        </a>
        <div class="mt-4">
          <ul class="flex w-full  items-center px-10 mb-10">
            <li class="github h-[40px] w-[40px] flex items-center justify-center border rounded-full mr-2 hover:border-regal-blue" :class="transition">
              <a href="https://github.com/Yaasir024" target="_blank" class="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="20"
                  class="transform transition-all duration-500 hover:rotate-360"
                  height="20"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path
                    fill="#64ffda"
                    d="M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 0 0 6.838 9.488c.5.087.687-.213.687-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.288-.6-1.175-1.025-1.413-.35-.187-.85-.65-.013-.662.788-.013 1.35.725 1.538 1.025.9 1.512 2.338 1.087 2.912.825.088-.65.35-1.087.638-1.337-2.225-.25-4.55-1.113-4.55-4.938 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.275.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 0 1 2.5-.338c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.016 10.016 0 0 0 22 12c0-5.525-4.475-10-10-10z"
                  />
                </svg>
              </a>
            </li>
            <li class="twitter  h-[40px] w-[40px] flex items-center justify-center border rounded-full mr-2 hover:border-regal-blue" :class="transition">
              <a href="https://twitter.com/YaasirFalana" target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="20"
                  class="transform transition-all duration-500 hover:rotate-360"
                  height="20"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path
                    fill="#64ffda"
                    d="M15.3 5.55a2.9 2.9 0 0 0-2.9 2.847l-.028 1.575a.6.6 0 0 1-.68.583l-1.561-.212c-2.054-.28-4.022-1.226-5.91-2.799-.598 3.31.57 5.603 3.383 7.372l1.747 1.098a.6.6 0 0 1 .034.993L7.793 18.17c.947.059 1.846.017 2.592-.131 4.718-.942 7.855-4.492 7.855-10.348 0-.478-1.012-2.141-2.94-2.141zm-4.9 2.81a4.9 4.9 0 0 1 8.385-3.355c.711-.005 1.316.175 2.669-.645-.335 1.64-.5 2.352-1.214 3.331 0 7.642-4.697 11.358-9.463 12.309-3.268.652-8.02-.419-9.382-1.841.694-.054 3.514-.357 5.144-1.55C5.16 15.7-.329 12.47 3.278 3.786c1.693 1.977 3.41 3.323 5.15 4.037 1.158.475 1.442.465 1.973.538z"
                  />
                </svg>
              </a>
            </li>
            <li class="linkedIn  h-[40px] w-[40px] flex items-center justify-center border rounded-full mr-2 hover:border-regal-blue" :class="transition">
              <a href="https://www.linkedin.com/in/yaasir-falana-a29962233/" target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="20"
                  class="transform transition-all duration-500 hover:rotate-360"
                  height="20"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path
                    fill="#64ffda"
                    d="M18.335 18.339H15.67v-4.177c0-.996-.02-2.278-1.39-2.278-1.389 0-1.601 1.084-1.601 2.205v4.25h-2.666V9.75h2.56v1.17h.035c.358-.674 1.228-1.387 2.528-1.387 2.7 0 3.2 1.778 3.2 4.091v4.715zM7.003 8.575a1.546 1.546 0 0 1-1.548-1.549 1.548 1.548 0 1 1 1.547 1.549zm1.336 9.764H5.666V9.75H8.34v8.589zM19.67 3H4.329C3.593 3 3 3.58 3 4.297v15.406C3 20.42 3.594 21 4.328 21h15.338C20.4 21 21 20.42 21 19.703V4.297C21 3.58 20.4 3 19.666 3h.003z"
                  />
                </svg>
              </a>
            </li>
            <li class="youtube  h-[40px] w-[40px] flex items-center justify-center border rounded-full hover:border-regal-blue" :class="transition">
              <a href="https://www.youtube.com/channel/UC7VH99sMB5_ohKptI_7r_Qw" target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  class="transform transition-all duration-500 hover:rotate-360"
                  height="24"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path
                    fill="#64ffda"
                    d="M19.606 6.995c-.076-.298-.292-.523-.539-.592C18.63 6.28 16.5 6 12 6s-6.628.28-7.069.403c-.244.068-.46.293-.537.592C4.285 7.419 4 9.196 4 12s.285 4.58.394 5.006c.076.297.292.522.538.59C5.372 17.72 7.5 18 12 18s6.629-.28 7.069-.403c.244-.068.46-.293.537-.592C19.715 16.581 20 14.8 20 12s-.285-4.58-.394-5.005zm1.937-.497C22 8.28 22 12 22 12s0 3.72-.457 5.502c-.254.985-.997 1.76-1.938 2.022C17.896 20 12 20 12 20s-5.893 0-7.605-.476c-.945-.266-1.687-1.04-1.938-2.022C2 15.72 2 12 2 12s0-3.72.457-5.502c.254-.985.997-1.76 1.938-2.022C6.107 4 12 4 12 4s5.896 0 7.605.476c.945.266 1.687 1.04 1.938 2.022zM10 15.5v-7l6 3.5-6 3.5z"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
img {
  transition: all 0.3s ease-in-out;
  cursor: pointer;
}
.image-container:hover img {
  transform: scale(1.05);
}
</style>
