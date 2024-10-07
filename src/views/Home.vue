<script setup lang="ts">
import Movie from '@/components/Movie.vue'
import type { IMovie } from '@/interfaces'
import { reactive } from 'vue'

const movies = reactive<IMovie[]>([
   {
      id: 1,
      title: 'Deadpool',
      description:
         'A former Special Forces operative turned mercenary is subjected to a rogue experiment that leaves him with superhuman abilities.',
      year: 2016,
      length: 108,
      category: 'Action',
      country: 'USA',
      imageUrl: 'https://via.placeholder.com/190x260',
      addedAt: new Date(),
      rating: 8.9
   },
   {
      id: 2,
      title: 'The Godfather',
      description:
         'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
      year: 1972,
      length: 175,
      category: 'Drama',
      country: 'Russia',
      imageUrl: 'https://via.placeholder.com/190x260',
      addedAt: new Date(),
      rating: 8.4
   },
   {
      id: 3,
      title: 'The Godfather: Part II',
      description:
         'The early life and career of Vito Corleone in 1920s New York is portrayed while his son, Michael, expands and tightens his grip on his crime syndicate.',
      year: 1974,
      length: 202,
      category: 'Drama',
      country: 'Italy',
      imageUrl: 'https://via.placeholder.com/190x260',
      addedAt: new Date(),
      rating: 7.6
   }
])
</script>

<template>
   <h1 class="text-center text-2xl font-bold">Watch movies anytime, anywhere</h1>

   <div class="grid gap-4">
      <Movie v-for="movie in movies" :key="movie.id" :movie="movie" />
   </div>
</template>
