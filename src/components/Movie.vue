<script setup lang="ts"></script>

<template>
   <div class="movie-card border border-custom-dark-gray rounded-md overflow-hidden shadow-xl">
      <div class="movie-top py-1 px-2 flex items-center justify-between bg-custom-dark-gray">
         <div class="flex items-center gap-2">
            <img src="/play-online.png" width="20" height="20" alt="Play Icon" />
            <span class="text-white font-bold text-lg">Deadpool (2016)</span>
         </div>
         <div class="text-white text-xl">* * * * * * * * * * *</div>
      </div>
      <div class="movie-bottom flex">
         <img src="https://via.placeholder.com/190x260" alt="Movie Image" />
         <div class="flex flex-col gap-1 p-3">
            <div class="flex gap-2">
               <span class="font-bold">Year:</span>
               <span>2016</span>
            </div>
            <div class="flex gap-2">
               <span class="font-bold">Country:</span>
               <span>USA</span>
            </div>
            <div class="flex gap-2">
               <span class="font-bold">Category:</span>
               <span>Action</span>
            </div>
            <div class="flex gap-2">
               <span class="font-bold">Length:</span>
               <span>110 min</span>
            </div>
            <div class="mt-auto mb-1">
               Deadpool is a 2016 American superhero film based on the Marvel Comics character of
               the same name. It is distributed by 20th Century Fox. It is distributed by 20th
               Century
            </div>
         </div>
      </div>
   </div>
</template>
