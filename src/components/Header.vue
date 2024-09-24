<script setup lang="ts">
import { ref } from 'vue'

const searchQuery = ref<string>('')

defineEmits(['search'])
</script>

<template>
   <header class="px-2 bg-gray-100 border-2 shadow-lg">
      <div class="flex justify-between items-center">
         <RouterLink to="/">
            <img src="https://place-hold.it/50" alt="Main logo" class="rounded-2xl" />
         </RouterLink>
         <div class="relative">
            <img
               src="/search.svg"
               alt="Search Icon"
               width="18"
               height="18"
               class="absolute top-2 left-2"
            />
            <input
               type="text"
               placeholder="Search..."
               class="outline-none py-1 pl-8 pr-4 border-2 border-gray-300 focus:border-gray-400 rounded-md"
               v-model="searchQuery"
               @input="$emit('search', searchQuery)"
            />
         </div>
         <ul class="flex gap-10 mr-5">
            <li
               class="text-lg text-gray-500 font-semibold hover:text-black hover:underline transition-colors"
            >
               <RouterLink to="/">Home</RouterLink>
            </li>
            <li
               class="text-lg text-gray-500 font-semibold hover:text-black hover:underline transition-colors"
            >
               <RouterLink to="/">Features</RouterLink>
            </li>
            <li
               class="text-lg text-gray-500 font-semibold hover:text-black hover:underline transition-colors"
            >
               <RouterLink to="/">Login / Register</RouterLink>
            </li>
         </ul>
      </div>
   </header>
</template>

<style scoped>
header {
   border-radius: 100px;
}
</style>
