import { useMemo } from 'react'
import { PlayerCard } from './player-card'
import type { Player, Position } from '@/types'

interface SquadListProps {
  players: Player[]
  selectedPosition: Position | 'All'
  searchQuery: string
}

export function SquadList({ players, selectedPosition, searchQuery }: SquadListProps) {
  const filteredPlayers = useMemo(() => {
    return players
      .filter((player) => {
        if (selectedPosition !== 'All' && player.position !== selectedPosition) {
          return false
        }
        if (searchQuery) {
          const query = searchQuery.toLowerCase()
          return (
            player.name.toLowerCase().includes(query) ||
            player.nationality.toLowerCase().includes(query) ||
            player.number.toString().includes(query)
          )
        }
        return true
      })
      .sort((a, b) => {
        if (a.position !== b.position) {
          const order = ['GK', 'DEF', 'MID', 'FWD']
          return order.indexOf(a.position) - order.indexOf(b.position)
        }
        return a.number - b.number
      })
  }, [players, selectedPosition, searchQuery])

  if (filteredPlayers.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 text-lg">No players found matching your criteria.</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
      {filteredPlayers.map((player) => (
        <PlayerCard key={player.id} player={player} />
      ))}
    </div>
  )
}
