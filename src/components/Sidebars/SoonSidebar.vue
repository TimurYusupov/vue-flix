<script setup lang="ts">
import { computed, ref } from 'vue'
import type { ISoonMovie } from '@/interfaces'

defineProps<{
   bgColor?: string
}>()

const movies = ref<ISoonMovie[]>([
   {
      id: 1,
      title: 'Spider-Man: Far from Home',
      imageUrl: 'https://via.placeholder.com/150x200',
      year: 2025
   },
   {
      id: 2,
      title: 'Avatar',
      imageUrl: 'https://via.placeholder.com/150x200',
      year: 2026
   },
   {
      id: 3,
      title: 'Guardians of the Galaxy',
      imageUrl: 'https://via.placeholder.com/150x200',
      year: 2027
   },
   {
      id: 4,
      title: 'Yellowjackets',
      imageUrl: 'https://via.placeholder.com/150x200',
      year: 2025
   },
   {
      id: 5,
      title: 'Quicksilver',
      imageUrl: 'https://via.placeholder.com/150x200',
      year: 2028
   },
   {
      id: 6,
      title: 'War of the Worlds',
      imageUrl: 'https://via.placeholder.com/150x200',
      year: 2026
   },
   {
      id: 7,
      title: 'Jurassic Park 2',
      imageUrl: 'https://via.placeholder.com/150x200',
      year: 2025
   },
   {
      id: 8,
      title: 'Parasite 3',
      imageUrl: 'https://via.placeholder.com/150x200',
      year: 2025
   },
   {
      id: 9,
      title: 'Fantastic 4',
      imageUrl: 'https://via.placeholder.com/150x200',
      year: 2025
   }
])

const randomMovies = computed(() => {
   const shuffled = [...movies.value].sort(() => 0.5 - Math.random())
   return shuffled.slice(0, 3)
})
</script>

<template>
   <aside class="hidden h-fit w-44 rounded-xl" :class="bgColor">
      <div class="bg-custom-light-gray p-2 rounded-tl-lg rounded-tr-lg">
         <h3 class="text-center text-md text-custom-yellow text-shadow-custom font-bold">
            Coming Soon
         </h3>
      </div>
      <div class="bg-blue-200 py-4 flex flex-col gap-3 items-center">
         <div
            class="movie-card relative cursor-pointer hover:scale-105 transition-all"
            v-for="movie in randomMovies"
            :key="movie.id"
         >
            <img src="https://via.placeholder.com/150x200" alt="Movie Image" />
            <p class="absolute left-3 bottom-3 text-center text-white text-sm">
               {{ movie.title }} ({{ movie.year }})
            </p>
         </div>
      </div>
   </aside>
</template>
