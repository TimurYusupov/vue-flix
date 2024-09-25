<script setup lang="ts">
defineProps<{
   bgColor?: string
}>()
</script>

<template>
   <aside class="h-fit rounded-xl" :class="bgColor">
      <div class="bg-custom-light-gray p-2 rounded-tl-lg rounded-tr-lg">
         <h3 class="text-center text-md text-sidebar-title text-shadow-custom font-bold">
            Coming Soon
         </h3>
      </div>
      <div class="bg-blue-200 py-4 flex flex-col gap-3 items-center">
         <div class="movie-card relative cursor-pointer hover:scale-105 transition-all">
            <img src="https://via.placeholder.com/150x200" alt="Movie Image" />
            <p class="absolute left-3 bottom-3 text-center text-white text-sm">
               Last Samurai (2014)
            </p>
         </div>
         <div class="movie-card relative cursor-pointer hover:scale-105 transition-all">
            <img src="https://via.placeholder.com/150x200" alt="Movie Image" />
            <p class="absolute left-3 bottom-3 text-center text-white text-sm">Last Ninja (2014)</p>
         </div>
         <div class="movie-card relative cursor-pointer hover:scale-105 transition-all">
            <img src="https://via.placeholder.com/150x200" alt="Movie Image" />
            <p class="absolute left-3 bottom-3 text-center text-white text-sm font-medium">
               Last Knight (2014)
            </p>
         </div>
      </div>
   </aside>
</template>
