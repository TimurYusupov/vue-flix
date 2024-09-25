<script setup lang="ts">
import Header from '@/components/Header.vue'
import { ref, provide } from 'vue'
import CategoriesSidebar from '@/components/Sidebars/CategoriesSidebar.vue'
import ReleasesSidebar from '@/components/Sidebars/ReleasesSidebar.vue'
import SoonSidebar from './components/Sidebars/SoonSidebar.vue'

const inputValue = ref<string>('')
provide('inputValue', inputValue)

const setSearchQuery = (value: string): void => {
   inputValue.value = value
}
</script>

<template>
   <div class="wrapper">
      <Header @search="setSearchQuery" />

      <div class="flex flex-col gap-2">
         <CategoriesSidebar bgColor="bg-custom-gray" />
         <SoonSidebar />
      </div>

      <main>
         <RouterView />
      </main>

      <ReleasesSidebar bgColor="bg-custom-light-gray" />
   </div>
</template>

<style scoped>
.wrapper {
   display: grid;
   grid-template-rows: auto 1fr;
   grid-template-columns: 180px 1fr 180px;
   row-gap: 15px;
   column-gap: 15px;
   background-color: white;
   max-width: 1100px;
   margin: 50px auto;
   padding: 15px;
   border-radius: 16px;
   box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

header {
   grid-column: span 3;
}
</style>
