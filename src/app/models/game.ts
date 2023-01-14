export interface Games {
    count: number
    next: string
    previous: any
    results: Result[]
  }
  
  export interface Result {
    id: number
    name: string
    slug: string
    description:string | null
    games_count: number
    image_background: string
    image: any
    year_start?: number
    year_end: any
    games: Game[]
  }
  
  export interface Game {
    id: number
    slug: string
    name: string
    added: number
  }
  