<script setup lang="ts">
defineProps<{
   bgColor?: string
}>()
</script>

<template>
   <aside class="h-fit px-2 py-3 rounded-xl" :class="bgColor">
      <div class="bg-custom-light-gray p-2 rounded-tl-lg rounded-tr-lg">
         <h3 class="text-center text-md text-sidebar-title text-shadow-custom font-bold">
            Coming Soon
         </h3>
      </div>
      <div class="bg-blue-200 py-4 flex flex-col gap-2 items-center">
         <div class="movie-card relative">
            <img src="https://via.placeholder.com/140x200" alt="Movie Image" />
            <p class="absolute left-3 bottom-3 text-center text-white text-sm">
               Last Samurai (2014)
            </p>
         </div>
         <div class="movie-card relative">
            <img src="https://via.placeholder.com/140x200" alt="Movie Image" />
            <p class="absolute left-3 bottom-3 text-center text-white text-sm">
               Last Samurai (2014)
            </p>
         </div>
         <div class="movie-card relative">
            <img src="https://via.placeholder.com/140x200" alt="Movie Image" />
            <p class="absolute left-3 bottom-3 text-center text-white text-sm">
               Last Samurai (2014)
            </p>
         </div>
      </div>
   </aside>
</template>
