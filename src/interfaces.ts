export interface IMovie {
   id: number
   title: string
   year: number
   description: string
   length: number
   category: string
   country: string
   imageUrl: string
   addedAt: Date
   rating: number
}

export interface ISoonMovie {
   id: number
   title: string
   imageUrl: string
   year: number
}
