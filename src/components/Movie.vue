<script setup lang="ts">
import type { IMovie } from '@/interfaces'
import StarsRating from '@/components/StarsRating.vue'

defineProps<{
   movie: IMovie
}>()
</script>

<template>
   <div class="movie-card border border-custom-dark-gray rounded-md overflow-hidden shadow-xl">
      <div class="movie-top py-1 px-2 flex items-center justify-between bg-custom-dark-gray">
         <div class="flex items-center gap-2">
            <img src="/play-online.png" width="20" height="20" alt="Play Icon" />
            <span class="text-white font-bold text-lg">{{ movie.title }} ({{ movie.year }})</span>
         </div>
         <StarsRating :rating="movie.rating" />
      </div>
      <div class="movie-bottom flex">
         <img src="https://via.placeholder.com/190x260" alt="Movie Image" />
         <div class="flex flex-col gap-1 p-3">
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
               Deadpool is a 2016 American superhero film based on the Marvel Comics character of
               the same name. It is distributed by 20th Century Fox. It is distributed by 20th
               Century
            </div>
         </div>
      </div>
   </div>
</template>
