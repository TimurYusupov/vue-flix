<script setup lang="ts">
import { computed, ref } from 'vue'
import type { IMovie } from '@/interfaces'

defineProps<{
   bgColor?: string
}>()

const currentImage = ref<string | null>(null)
const mouseX = ref<number>(0)
const mouseY = ref<number>(0)

const movies = ref<IMovie[]>([
   {
      id: 1,
      title: 'The Godfather',
      description: 'The Godfather is a 1972 American film directed by Francis Ford Coppola.',
      imageUrl: 'https://via.placeholder.com/150x200',
      addedAt: new Date('2022-01-01')
   },
   {
      id: 2,
      title: 'The Dark Knight',
      description: 'The Dark Knight is a 2008 superhero film directed by Christopher Nolan.',
      imageUrl: 'https://via.placeholder.com/150x200',
      addedAt: new Date('2022-02-01')
   },
   {
      id: 3,
      title: 'Inception',
      description: 'Inception is a 2010 science fiction action film directed by Christopher Nolan.',
      imageUrl: 'https://via.placeholder.com/150x200',
      addedAt: new Date('2022-03-01')
   },
   {
      id: 4,
      title: 'Pulp Fiction',
      description: 'Pulp Fiction is a 1994 American film directed by Quentin Tarantino.',
      imageUrl: 'https://via.placeholder.com/150x200',
      addedAt: new Date('2022-04-01')
   },
   {
      id: 5,
      title: 'Forrest Gump',
      description: 'Forrest Gump is a 1994 American drama film directed by Robert Zemeckis.',
      imageUrl: 'https://via.placeholder.com/150x200',
      addedAt: new Date('2022-05-01')
   },
   {
      id: 6,
      title: 'The Matrix',
      description: 'The Matrix is a 1999 science fiction action film directed by The Wachowskis.',
      imageUrl: 'https://via.placeholder.com/150x200',
      addedAt: new Date('2022-06-01')
   },
   {
      id: 7,
      title: 'Fight Club',
      description: 'Fight Club is a 1999 American film directed by David Fincher.',
      imageUrl: 'https://via.placeholder.com/150x200',
      addedAt: new Date('2022-07-01')
   },
   {
      id: 8,
      title: 'Interstellar',
      description: 'Interstellar is a 2014 science fiction film directed by Christopher Nolan.',
      imageUrl: 'https://via.placeholder.com/150x200',
      addedAt: new Date('2022-08-01')
   },
   {
      id: 9,
      title: 'The Shawshank Redemption',
      description: 'The Shawshank Redemption is a 1994 drama film directed by Frank Darabont.',
      imageUrl: 'https://via.placeholder.com/150x200',
      addedAt: new Date('2022-09-01')
   },
   {
      id: 10,
      title: 'The Lord of the Rings: The Fellowship of the Ring',
      description:
         'The Lord of the Rings: The Fellowship of the Ring is a 2001 fantasy film directed by Peter Jackson.',
      imageUrl: 'https://via.placeholder.com/150x200',
      addedAt: new Date('2022-10-01')
   },
   {
      id: 11,
      title: 'Gladiator',
      description: 'Gladiator is a 2000 American drama film directed by Ridley Scott.',
      imageUrl: 'https://via.placeholder.com/150x200',
      addedAt: new Date('2022-11-01')
   },
   {
      id: 12,
      title: 'Titanic',
      description:
         'Titanic is a 1997 American epic romance and disaster film directed by James Cameron.',
      imageUrl: 'https://via.placeholder.com/150x200',
      addedAt: new Date('2022-12-01')
   },
   {
      id: 13,
      title: 'Star Wars: A New Hope',
      description: 'Star Wars: A New Hope is a 1977 space opera film directed by George Lucas.',
      imageUrl: 'https://via.placeholder.com/150x200',
      addedAt: new Date('2023-01-01')
   },
   {
      id: 14,
      title: 'The Avengers',
      description: 'The Avengers is a 2012 superhero film directed by Joss Whedon.',
      imageUrl: 'https://via.placeholder.com/150x200',
      addedAt: new Date('2023-02-01')
   },
   {
      id: 15,
      title: 'The Lion King',
      description: 'The Lion King is a 1994 animated musical film produced by Disney.',
      imageUrl: 'https://via.placeholder.com/150x200',
      addedAt: new Date('2023-03-01')
   },
   {
      id: 16,
      title: 'Avatar',
      description: 'Avatar is a 2009 science fiction film directed by James Cameron.',
      imageUrl: 'https://via.placeholder.com/150x200',
      addedAt: new Date('2023-04-01')
   },
   {
      id: 17,
      title: 'Jurassic Park',
      description:
         'Jurassic Park is a 1993 science fiction adventure film directed by Steven Spielberg.',
      imageUrl: 'https://via.placeholder.com/150x200',
      addedAt: new Date('2023-05-01')
   },
   {
      id: 18,
      title: 'Back to the Future',
      description: 'Back to the Future is a 1985 science fiction film directed by Robert Zemeckis.',
      imageUrl: 'https://via.placeholder.com/150x200',
      addedAt: new Date('2023-06-01')
   },
   {
      id: 19,
      title: 'The Silence of the Lambs',
      description:
         'The Silence of the Lambs is a 1991 psychological horror film directed by Jonathan Demme.',
      imageUrl: 'https://via.placeholder.com/150x200',
      addedAt: new Date('2023-07-01')
   },
   {
      id: 20,
      title: "Schindler's List",
      description: "Schindler's List is a 1993 historical drama film directed by Steven Spielberg.",
      imageUrl: 'https://via.placeholder.com/150x200',
      addedAt: new Date('2023-08-01')
   },
   {
      id: 21,
      title: 'The Terminator',
      description: 'The Terminator is a 1984 science fiction film directed by James Cameron.',
      imageUrl: 'https://via.placeholder.com/150x200',
      addedAt: new Date('2023-09-01')
   },
   {
      id: 22,
      title: 'Saving Private Ryan',
      description: 'Saving Private Ryan is a 1998 war film directed by Steven Spielberg.',
      imageUrl: 'https://via.placeholder.com/150x200',
      addedAt: new Date('2023-10-01')
   },
   {
      id: 23,
      title: 'The Departed',
      description: 'The Departed is a 2006 crime thriller film directed by Martin Scorsese.',
      imageUrl: 'https://via.placeholder.com/150x200',
      addedAt: new Date('2023-11-01')
   },
   {
      id: 24,
      title: 'The Social Network',
      description: 'The Social Network is a 2010 drama film directed by David Fincher.',
      imageUrl: 'https://via.placeholder.com/150x200',
      addedAt: new Date('2023-12-01')
   },
   {
      id: 25,
      title: 'Whiplash',
      description: 'Whiplash is a 2014 drama film directed by Damien Chazelle.',
      imageUrl: 'https://via.placeholder.com/150x200',
      addedAt: new Date('2024-01-01')
   },
   {
      id: 26,
      title: 'Django Unchained',
      description: 'Django Unchained is a 2012 western film directed by Quentin Tarantino.',
      imageUrl: 'https://via.placeholder.com/150x200',
      addedAt: new Date('2024-02-01')
   },
   {
      id: 27,
      title: 'Mad Max: Fury Road',
      description: 'Mad Max: Fury Road is a 2015 post-apocalyptic film directed by George Miller.',
      imageUrl: 'https://via.placeholder.com/150x200',
      addedAt: new Date('2024-03-01')
   },
   {
      id: 28,
      title: 'The Big Lebowski',
      description: 'The Big Lebowski is a 1998 comedy film directed by the Coen Brothers.',
      imageUrl: 'https://via.placeholder.com/150x200',
      addedAt: new Date('2024-04-01')
   },
   {
      id: 29,
      title: '12 Years a Slave',
      description: '12 Years a Slave is a 2013 historical drama film directed by Steve McQueen.',
      imageUrl: 'https://via.placeholder.com/150x200',
      addedAt: new Date('2024-05-01')
   },
   {
      id: 30,
      title: 'Gone Girl',
      description: 'Gone Girl is a 2014 psychological thriller directed by David Fincher.',
      imageUrl: 'https://via.placeholder.com/150x200',
      addedAt: new Date('2024-06-01')
   },
   {
      id: 31,
      title: 'The Wolf of Wall Street',
      description:
         'The Wolf of Wall Street is a 2013 biographical black comedy directed by Martin Scorsese.',
      imageUrl: 'https://via.placeholder.com/150x200',
      addedAt: new Date('2024-07-01')
   },
   {
      id: 32,
      title: 'The Prestige',
      description: 'The Prestige is a 2006 mystery thriller film directed by Christopher Nolan.',
      imageUrl: 'https://via.placeholder.com/150x200',
      addedAt: new Date('2024-08-01')
   },
   {
      id: 33,
      title: 'La La Land',
      description: 'La La Land is a 2016 musical film directed by Damien Chazelle.',
      imageUrl: 'https://via.placeholder.com/150x200',
      addedAt: new Date('2024-09-01')
   },
   {
      id: 34,
      title: 'Parasite',
      description:
         'Parasite is a 2019 South Korean black comedy thriller film directed by Bong Joon-ho.',
      imageUrl: 'https://via.placeholder.com/150x200',
      addedAt: new Date('2024-10-01')
   },
   {
      id: 35,
      title: 'Joker',
      description: 'Joker is a 2019 psychological thriller film directed by Todd Phillips.',
      imageUrl: 'https://via.placeholder.com/150x200',
      addedAt: new Date('2024-11-01')
   },
   {
      id: 36,
      title: 'Blade Runner 2049',
      description: 'Blade Runner 2049 is a 2017 science fiction film directed by Denis Villeneuve.',
      imageUrl: 'https://via.placeholder.com/150x200',
      addedAt: new Date('2024-12-01')
   },
   {
      id: 37,
      title: 'Shutter Island',
      description:
         'Shutter Island is a 2010 psychological thriller film directed by Martin Scorsese.',
      imageUrl: 'https://via.placeholder.com/150x200',
      addedAt: new Date('2025-01-01')
   },
   {
      id: 38,
      title: 'Her',
      description: 'Her is a 2013 science fiction romantic drama directed by Spike Jonze.',
      imageUrl: 'https://via.placeholder.com/150x200',
      addedAt: new Date('2025-02-01')
   },
   {
      id: 39,
      title: 'A Beautiful Mind',
      description: 'A Beautiful Mind is a 2001 biographical drama directed by Ron Howard.',
      imageUrl: 'https://via.placeholder.com/150x200',
      addedAt: new Date('2025-03-01')
   },
   {
      id: 40,
      title: 'The Grand Budapest Hotel',
      description: 'The Grand Budapest Hotel is a 2014 comedy-drama film directed by Wes Anderson.',
      imageUrl: 'https://via.placeholder.com/150x200',
      addedAt: new Date('2025-04-01')
   },
   {
      id: 41,
      title: 'Logan',
      description: 'Logan is a 2017 superhero film directed by James Mangold.',
      imageUrl: 'https://via.placeholder.com/150x200',
      addedAt: new Date('2025-05-01')
   },
   {
      id: 42,
      title: 'The Revenant',
      description:
         'The Revenant is a 2015 epic western film directed by Alejandro González Iñárritu.',
      imageUrl: 'https://via.placeholder.com/150x200',
      addedAt: new Date('2025-06-01')
   }
])

const newReleases = computed(() => {
   return movies.value
      .slice()
      .sort((a, b) => b.addedAt.getTime() - a.addedAt.getTime())
      .slice(0, 10)
})

const showImage = (event: MouseEvent, imageUrl: string) => {
   currentImage.value = imageUrl
   mouseX.value = event.clientX
   mouseY.value = event.clientY
}

const hideImage = () => {
   currentImage.value = null
}

const updateMousePosition = (event: MouseEvent) => {
   mouseX.value = event.clientX
   mouseY.value = event.clientY
}
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
               v-for="(movie, i) in newReleases"
               :key="i"
               @mouseover="showImage($event, movie.imageUrl)"
               @mouseleave="hideImage"
               @mousemove="updateMousePosition"
            >
               {{ movie.title }}
            </li>
         </ul>
      </nav>

      <img
         v-if="currentImage"
         :src="currentImage"
         alt="Movie Image"
         class="fixed z-50 w-40 h-52 object-cover pointer-events-none"
         :style="{ top: `${mouseY + 30}px`, left: `${mouseX - 70}px` }"
      />
   </aside>
</template>
