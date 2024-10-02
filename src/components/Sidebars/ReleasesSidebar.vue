<script setup lang="ts">
import { ref } from 'vue'

defineProps<{
   bgColor?: string
}>()

const movies = ref<string[]>([
   'The Godfather',
   'The Dark Knight',
   'Inception',
   'Pulp Fiction',
   'Forrest Gump',
   'The Matrix',
   'Fight Club',
   'Interstellar',
   'The Shawshank Redemption',
   'The Lord of the Rings: The Fellowship of the Ring',
   'Gladiator',
   'Titanic',
   "Schindler's List",
   'The Silence of the Lambs',
   'Jurassic Park',
   'Back to the Future',
   'Star Wars: A New Hope',
   'Avatar',
   'The Avengers',
   'The Lion King'
])
</script>

<template>
   <aside class="h-fit py-3 rounded-xl" :class="bgColor">
      <h3 class="text-center text-md text-sidebar-title text-shadow-custom font-bold mb-1">
         New Movies
      </h3>
      <nav>
         <ul>
            <li
               :class="[
                  'px-2 py-1 text-white hover:underline cursor-pointer',
                  i % 2 === 0 ? 'bg-cold-steel' : ''
               ]"
               v-for="(category, i) in movies"
               :key="i"
            >
               {{ category }}
            </li>
         </ul>
      </nav>
   </aside>
</template>
