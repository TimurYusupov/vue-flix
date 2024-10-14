<script lang="ts" setup>
const props = defineProps<{
   rating: number
}>()

const getStarType = (index: number, rating: number) => {
   const fullStars = Math.floor(rating)
   const hasHalfStar = rating - fullStars >= 0.5

   if (index < fullStars) {
      return 'full'
   } else if (index === fullStars && hasHalfStar) {
      return 'half'
   } else {
      return 'empty'
   }
}
</script>

<template>
   <div class="flex w-22">
      <div v-for="i in 10" :key="i">
         <span v-if="getStarType(i - 1, props.rating) === 'full'">
            <img src="/star-full.png" alt="Star Full" class="star" />
         </span>
         <span v-else-if="getStarType(i - 1, props.rating) === 'half'">
            <img src="/star-half.png" alt="Star Half" class="star" />
         </span>
         <span v-else>
            <img src="/star-empty.png" alt="Star Empty" class="star" />
         </span>
      </div>
   </div>
</template>

<style scoped>
.star {
}
</style>
