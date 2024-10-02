export interface IMovie {
   id: number
   title: string
   description: string
   imageUrl: string
   addedAt: Date
}

export interface ISoonMovie {
   id: number
   title: string
   imageUrl: string
   year: number
}
