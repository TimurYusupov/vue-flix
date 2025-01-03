<script setup lang="ts">
import MovieCard from '@/components/MovieCard.vue'
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
      resolutions: ['SD', 'HD'],
      category: 'Action',
      country: 'USA',
      imageUrl: '/deadpool-3.jpg',
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
      resolutions: ['SD', 'HD', '4K'],
      category: 'Drama',
      country: 'Russia',
      imageUrl: '/deadpool-3.jpg',
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
      resolutions: ['HD', '4K'],
      category: 'Drama',
      country: 'Italy',
      imageUrl: '/deadpool-3.jpg',
      addedAt: new Date(),
      rating: 7.6
   }
])
</script>

<template>
   <h1 class="text-center text-3xl font-bold mb-6">Watch movies online</h1>

   <div class="movie-wrapper">
      <MovieCard v-for="movie in movies" :key="movie.id" :movie="movie" />
   </div>
</template>

<style scoped>
.movie-wrapper {
   display: grid;
   gap: 20px;
   padding-left: 15px;
   padding-right: 15px;
}

@media (min-width: 360px) {
   .movie-wrapper {
      grid-template-columns: repeat(2, 1fr);
      gap: 10px;
      padding-left: 0;
      padding-right: 0;
   }
}

@media (min-width: 400px) {
   .movie-wrapper {
      gap: 15px;
      padding-left: 5px;
      padding-right: 5px;
   }
}

@media (min-width: 600px) {
   .movie-wrapper {
      display: flex;
      flex-direction: column;
      gap: 20px;
      padding-left: 30px;
      padding-right: 30px;
   }
}
@media (min-width: 700px) {
   .movie-wrapper {
      padding-left: 50px;
      padding-right: 50px;
   }
}
@media (min-width: 950px) {
   .movie-wrapper {
      padding-left: 0;
      padding-right: 0;
   }
}
</style>
