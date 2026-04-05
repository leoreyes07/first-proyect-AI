import { Link } from 'react-router-dom'
import { Card, CardContent } from '@/components/ui'
import type { Player } from '@/types'
import { usePlayerImage } from '@/hooks/usePlayerImage'

interface PlayerCardProps {
  player: Player
  variant?: 'default' | 'compact'
}

const positionColors: Record<string, string> = {
  GK: 'bg-yellow-500',
  DEF: 'bg-blue-500',
  MID: 'bg-green-500',
  FWD: 'bg-red-500',
}

export function PlayerCard({ player, variant = 'default' }: PlayerCardProps) {
  const { imageUrl } = usePlayerImage(player.name, player.image)
  const age = Math.floor(
    (new Date().getTime() - new Date(player.birthDate).getTime()) / (365.25 * 24 * 60 * 60 * 1000)
  )

  if (variant === 'compact') {
    return (
      <Link to={`/team/${player.id}`}>
        <Card className="flex items-center gap-4 p-4 transition-all hover:shadow-lg hover:-translate-y-1">
          <div className="relative w-16 h-16 rounded-full overflow-hidden bg-gray-100 flex-shrink-0">
            <img
              src={imageUrl || player.image}
              alt={player.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-gray-400">#{player.number}</span>
              <h3 className="font-semibold truncate">{player.name}</h3>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <span className={`px-2 py-0.5 rounded text-white text-xs font-medium ${positionColors[player.position]}`}>
                {player.position}
              </span>
              <span>{player.nationality}</span>
            </div>
          </div>
        </Card>
      </Link>
    )
  }

  return (
    <Link to={`/team/${player.id}`}>
      <Card className="overflow-hidden transition-all hover:shadow-lg hover:-translate-y-2 group">
        <div className="relative h-64 bg-gradient-to-b from-gray-200 to-gray-100">
          <img
            src={imageUrl || player.image}
            alt={player.name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className={`absolute top-3 right-3 ${positionColors[player.position]} text-white px-3 py-1 rounded-full text-sm font-medium`}>
            {player.position}
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
            <div className="flex items-end justify-between">
              <div>
                <span className="text-5xl font-bold text-white opacity-80">#{player.number}</span>
              </div>
              <div className="text-right">
                <span className="text-lg font-semibold text-white">{player.nationalityFlag}</span>
              </div>
            </div>
          </div>
        </div>
        <CardContent className="text-center">
          <h3 className="text-xl font-bold mb-1">{player.name}</h3>
          <p className="text-gray-500 text-sm">
            {age} years old · {player.height}
          </p>
          {player.stats && (
            <div className="flex justify-center gap-4 mt-4 pt-4 border-t border-gray-100">
              <div className="text-center">
                <p className="text-lg font-bold text-gray-900">{player.stats.matches}</p>
                <p className="text-xs text-gray-500">Matches</p>
              </div>
              <div className="text-center">
                <p className="text-lg font-bold text-gray-900">{player.stats.goals}</p>
                <p className="text-xs text-gray-500">Goals</p>
              </div>
              <div className="text-center">
                <p className="text-lg font-bold text-gray-900">{player.stats.assists}</p>
                <p className="text-xs text-gray-500">Assists</p>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </Link>
  )
}
