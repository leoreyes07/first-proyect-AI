export interface Player {
  id: string
  name: string
  position: Position
  number: number
  nationality: string
  nationalityFlag?: string
  birthDate: string
  height: string
  weight: string
  image: string
  bio?: string
  stats?: PlayerStats
}

export type Position = 'GK' | 'DEF' | 'MID' | 'FWD'

export type PositionGroup = 'Goalkeepers' | 'Defenders' | 'Midfielders' | 'Forwards'

export interface PlayerStats {
  matches: number
  goals: number
  assists: number
  yellowCards: number
  redCards: number
  cleanSheets?: number
}

export interface Coach {
  id: string
  name: string
  role: string
  image: string
  nationality: string
  nationalityFlag?: string
  bio?: string
}

export interface Match {
  id: string
  date: string
  time: string
  homeTeam: string
  awayTeam: string
  homeScore?: number
  awayScore?: number
  venue: string
  competition: string
  status: 'upcoming' | 'live' | 'finished'
}

export interface NewsArticle {
  id: string
  title: string
  excerpt: string
  content: string
  image: string
  gallery?: string[]
  videoUrl?: string
  date: string
  category: NewsCategory
  readTime: number
  author: string
  authorAvatar?: string
  tags?: string[]
  featured?: boolean
}

export type NewsCategory = 'Match' | 'Transfers' | 'Club' | 'Interviews' | 'Academy' | 'Community'

export interface NewsFilters {
  category?: NewsCategory | 'All'
  search?: string
}

export interface Product {
  id: string
  name: string
  description: string
  price: number
  image: string
  category: string
  sizes?: string[]
  inStock: boolean
}

export interface Standing {
  position: number
  team: string
  played: number
  won: number
  drawn: number
  lost: number
  goalsFor: number
  goalsAgainst: number
  goalDifference: number
  points: number
}

export interface Ticket {
  id: string
  matchId: string
  section: string
  row: string
  seat: string
  price: number
  status: 'available' | 'reserved' | 'sold'
}
