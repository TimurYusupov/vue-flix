<script setup lang="ts">
import { ref } from 'vue'

defineProps<{
   bgColor?: string
}>()

const categories = ref<string[]>([
   'Anime',
   'Biographical',
   'Action',
   'Western',
   'War',
   'Detective',
   'Documentary',
   'Drama',
   'Historical',
   'Comedy',
   'Crime',
   'Melodrama',
   'Mystical',
   'Cartoons',
   'Musical',
   'Adventure',
   'Family',
   'Sports',
   'Thrillers',
   'Horrors',
   'Science Fiction',
   'Fantasy'
])
</script>

<template>
   <aside class="h-fit px-2 py-3 rounded-xl" :class="bgColor">
      <h3 class="text-center text-md text-sidebar-title text-shadow-custom font-bold mb-1">
         CATEGORIES
      </h3>
      <nav>
         <ul>
            <li
               class="text-white hover:font-bold cursor-pointer border-b border-sidebar-border last:border-b-0"
               v-for="(category, i) in categories"
               :key="i"
            >
               {{ category }}
            </li>
         </ul>
      </nav>
   </aside>
</template>
