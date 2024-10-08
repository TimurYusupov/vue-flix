<script setup lang="ts">
import type { IMovie } from '@/interfaces'
import StarsRating from '@/components/StarsRating.vue'

defineProps<{
   movie: IMovie
}>()
</script>

<template>
   <div class="movie-card relative rounded-md overflow-hidden shadow-xl">
      <div class="movie-top py-1 px-2 flex items-center justify-between bg-custom-dark-gray">
         <div class="flex items-center gap-2">
            <img src="/play-online.png" width="20" height="20" alt="Play Icon" />
            <span
               class="text-white font-semibold text-lg hover:text-custom-yellow hover:underline cursor-pointer"
            >
               {{ movie.title }} ({{ movie.year }})
            </span>
         </div>
         <StarsRating :rating="movie.rating" />
      </div>

      <div class="movie-bottom flex">
         <img src="https://via.placeholder.com/190x260" alt="Movie Image" />
         <div class="flex flex-col gap-1 px-3 py-4">
            <div class="flex gap-2">
               <span class="font-bold">Year:</span>
               <span>{{ movie.year }}</span>
            </div>
            <div class="flex gap-2">
               <span class="font-bold">Country:</span>
               <span>{{ movie.country }}</span>
            </div>
            <div class="flex gap-2">
               <span class="font-bold">Category:</span>
               <span>{{ movie.category }}</span>
            </div>
            <div class="flex gap-2">
               <span class="font-bold">Length:</span>
               <span>{{ movie.length }} min</span>
            </div>
            <div class="mt-auto mb-1">
               {{ movie.description }}
            </div>
         </div>
      </div>

      <div class="h-12 absolute right-2 top-10 flex">
         <img
            v-if="movie.resolutions.includes('SD')"
            src="/resolutions/sd.png"
            alt="SD Icon"
            class="mr-2"
            width="40"
         />
         <img
            v-if="movie.resolutions.includes('HD')"
            src="/resolutions/hd.png"
            alt="HD Icon"
            width="40"
         />
         <img
            v-if="movie.resolutions.includes('4K')"
            src="/resolutions/4k.png"
            alt="4K Icon"
            width="50"
         />
      </div>
   </div>
</template>

<style scoped>
.movie-card {
   box-shadow: 0 3px 8px rgba(0, 0, 0, 0.7);
}
</style>
