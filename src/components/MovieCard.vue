<script setup lang="ts">
import type { IMovie } from '@/interfaces'
import StarsRating from '@/components/StarsRating.vue'
import { computed, ref } from 'vue'

const props = defineProps<{
   movie: IMovie
}>()

const clampText = computed(() => {
   return props.movie.description.length > 130
      ? props.movie.description.slice(0, 130) + '...'
      : props.movie.description
})

const tooltipTextForFavorite = computed(() => {
   return auth.value ? 'Add to Favorites' : 'Login required to add to Favorites'
})

const auth = ref<boolean>(false)

const mouseX = ref<number>(0)
const mouseY = ref<number>(0)
const showTooltip = ref<boolean>(false)
const tooltipText = ref<string>('')

const updateMousePosition = (event: MouseEvent, text: string) => {
   mouseX.value = event.clientX
   mouseY.value = event.clientY
   showTooltip.value = true
   tooltipText.value = text
}

const hideTooltip = () => {
   showTooltip.value = false
}
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

      <div class="movie-bottom">
         <div
            class="movie-image-container relative"
            :style="{ backgroundImage: `url(${props.movie.imageUrl})` }"
         >
            <!-- <img
               class="movie-image"
               src="/deadpool-3.jpg"
               alt="Movie Image"
               @mousemove="updateMousePosition($event, props.movie.title)"
               @mouseleave="hideTooltip"
            /> -->
            <img
               class="favorite-icon w-12 absolute left-2 bottom-2 cursor-pointer"
               src="/star-full.png"
               alt="Favorite Icon"
               @mousemove="updateMousePosition($event, tooltipTextForFavorite)"
               @mouseleave="hideTooltip"
            />
         </div>

         <div class="movie-details flex flex-col gap-1 px-3 py-4">
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

      <div class="resolution-icons absolute right-2 top-10">
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

      <div
         v-if="showTooltip"
         class="tooltip"
         :style="{ top: `${mouseY + 5}px`, left: `${mouseX + 50}px` }"
      >
         {{ tooltipText }}
      </div>
   </div>
</template>

<style scoped>
.movie-card {
   box-shadow: 0 3px 8px rgba(0, 0, 0, 0.7);
   overflow: hidden;
   width: 100%;
}
.movie-title {
   max-width: 250px;
   white-space: nowrap;
   overflow: hidden;
   text-overflow: ellipsis;
}
/* .movie-image-container {
   overflow: hidden;
   min-width: 190px;
   height: auto;
   cursor: pointer;
} */
.movie-image-container {
   width: 100%;
   height: 300px;
   /* background-image: url('/deadpool-3.jpg'); */
   background-position: center;
   background-repeat: no-repeat;
   background-size: cover;
}
.movie-image-container:hover .favorite-icon {
   opacity: 1;
}
.favorite-icon {
   opacity: 0.5;
}
.movie-image {
   width: 100%;
   height: 100%;
   object-fit: contain;
}
.resolution-icons {
   display: none;
}
.resolution-icons img {
   height: 30px;
   width: 30px;
}
.movie-details {
   display: none;
}
.tooltip {
   position: fixed;
   background-color: rgba(0, 0, 0, 0.75);
   color: #fff;
   padding: 5px 10px;
   border-radius: 5px;
   font-size: 12px;
   white-space: nowrap;
   pointer-events: none;
   z-index: 1000;
   transform: translate(-50%, 20px);
}
@media (min-width: 600px) {
   .movie-bottom {
      display: flex;
   }
   .movie-details {
      display: flex;
   }
   .resolution-icons {
      display: flex;
   }
   .resolution-icons img {
      height: 40px;
      width: 40px;
   }
}
@media (min-width: 950px) {
}
</style>
