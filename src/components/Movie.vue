<script setup lang="ts">
import type { IMovie } from '@/interfaces'
import StarsRating from '@/components/StarsRating.vue'
import { computed } from 'vue'

const props = defineProps<{
   movie: IMovie
}>()

const clampText = computed(() => {
   return props.movie.description.length > 130
      ? props.movie.description.slice(0, 130) + '...'
      : props.movie.description
})
</script>

<template>
   <div class="movie-card relative rounded-md overflow-hidden shadow-xl">
      <div class="movie-top py-1 px-2 flex items-center justify-between bg-custom-dark-gray">
         <div class="flex items-center gap-2">
            <img src="/play-online.png" width="20" height="20" alt="Play Icon" />
            <span
               class="movie-title text-white font-semibold text-lg hover:text-custom-yellow hover:underline cursor-pointer"
            >
               {{ props.movie.title }} ({{ props.movie.year }})
            </span>
         </div>
         <StarsRating :rating="props.movie.rating" />
      </div>

      <div class="movie-bottom flex">
         <div class="movie-image-container relative">
            <img class="movie-image" src="https://via.placeholder.com/190x260" alt="Movie Image" />
            <img
               class="favorite-icon w-12 absolute left-2 bottom-2 cursor-pointer"
               src="/star-full.png"
               alt="Favorite Icon"
            />
         </div>
         <div class="flex flex-col gap-1 px-3 py-4">
            <div class="flex gap-2">
               <span class="font-bold">Year:</span>
               <span>{{ props.movie.year }}</span>
            </div>
            <div class="flex gap-2">
               <span class="font-bold">Country:</span>
               <span>{{ props.movie.country }}</span>
            </div>
            <div class="flex gap-2">
               <span class="font-bold">Category:</span>
               <span>{{ props.movie.category }}</span>
            </div>
            <div class="flex gap-2">
               <span class="font-bold">Length:</span>
               <span>{{ props.movie.length }} min</span>
            </div>
            <div class="movie-description mt-auto mb-1">
               <i>{{ clampText }}</i>
            </div>
         </div>
      </div>

      <div class="resolution-icons absolute right-2 top-10 flex">
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
.movie-title {
   max-width: 250px;
   white-space: nowrap;
   overflow: hidden;
   text-overflow: ellipsis;
}
.movie-image-container {
   min-width: 190px;
   height: 260px;
   cursor: pointer;
}
.movie-image-container:hover .favorite-icon {
   opacity: 1;
}
.favorite-icon {
   opacity: 0.5;
}
.movie-image {
   width: 100%;
}
.resolution-icons img {
   height: 30px;
   width: 30px;
}
@media (min-width: 600px) {
   .resolution-icons img {
      height: 40px;
      width: 40px;
   }
}
@media (min-width: 950px) {
}
</style>
