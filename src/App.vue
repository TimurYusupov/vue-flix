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

      <div class="content-wrapper">
         <div class="flex flex-col gap-2">
            <CategoriesSidebar bgColor="bg-custom-gray" />
            <SoonSidebar />
         </div>

         <main class="flex-1">
            <RouterView />
         </main>

         <ReleasesSidebar bgColor="bg-custom-light-gray" />
      </div>
   </div>
</template>

<style scoped>
.wrapper {
   max-width: 1100px;
   margin: 50px auto;
   padding: 15px;
   background-color: white;
   border-radius: 16px;
   box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}
.content-wrapper {
   display: flex;
   gap: 15px;
   margin-top: 15px;
}
</style>
