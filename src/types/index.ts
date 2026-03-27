export interface Player {
  id: string
  name: string
  position: Position
  number: number
  nationality: string
  birthDate: string
  image: string
  stats?: PlayerStats
}

export type Position = 'GK' | 'DEF' | 'MID' | 'FWD'

export interface PlayerStats {
  matches: number
  goals: number
  assists: number
  yellowCards: number
  redCards: number
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
  date: string
  category: string
  readTime: number
  author: string
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
