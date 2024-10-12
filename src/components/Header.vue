<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

const searchQuery = ref<string>('')
defineEmits(['search'])

const isMobileView = ref<boolean>(false)

const checkViewPort = () => {
   isMobileView.value = window.innerWidth < 950
}

onMounted(() => {
   checkViewPort()
   window.addEventListener('resize', checkViewPort)
})

onUnmounted(() => {
   window.removeEventListener('resize', checkViewPort)
})
</script>

<template>
   <header class="header flex justify-between items-center bg-gray-100 border-2 shadow-lg">
      <RouterLink to="/">
         <img src="https://placehold.it/50" alt="Main logo" class="rounded-2xl" />
      </RouterLink>

      <div v-if="isMobileView" class="flex gap-1">
         <img src="/search.svg" alt="search Icon" width="25" class="cursor-pointer" />
         <img src="/heart-add-line.svg" alt="favorite Icon" width="25" class="cursor-pointer" />
         <img src="/login.svg" alt="login Icon" width="25" class="cursor-pointer" />
         <img src="/burger-menu.svg" alt="burger Icon" width="25" class="cursor-pointer" />
      </div>

      <div v-else class="flex items-center">
         <div class="relative mr-16">
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
               <RouterLink to="/" active-class="text-black underline">Home</RouterLink>
            </li>
            <li
               class="text-lg text-gray-500 font-semibold hover:text-black hover:underline transition-colors"
            >
               <RouterLink to="/favorites" active-class="text-black underline">
                  Favorites
               </RouterLink>
            </li>
            <li
               class="text-lg text-gray-500 font-semibold hover:text-black hover:underline transition-colors"
            >
               <RouterLink to="/login" active-class="text-black underline"
                  >Login / Register
               </RouterLink>
            </li>
         </ul>
      </div>
   </header>
</template>

<style scoped>
.header {
   border-radius: 100px;
   padding: 7px 10px 7px 10px;
}

@media (min-width: 950px) {
   .header {
      padding: 10px 10px 10px 10px;
   }
}
</style>
