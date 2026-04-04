import { Link } from 'react-router-dom'
import { Calendar, Clock, MapPin, Radio } from 'lucide-react'
import { Card, CardContent, Badge } from '@/components/ui'
import type { Match } from '@/types'
import { format } from 'date-fns'

interface MatchCardProps {
  match: Match
  variant?: 'default' | 'compact' | 'featured'
}

export function MatchCard({ match, variant = 'default' }: MatchCardProps) {
  const formattedDate = format(new Date(match.date), 'EEE, dd MMM')
  const isWolvesHome = match.homeTeam === 'Wolves FC'

  if (variant === 'compact') {
    return (
      <Link to={`/matches/${match.id}`}>
        <Card className="p-4 transition-all hover:shadow-md">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="secondary" className="text-xs">
                  {match.competition}
                </Badge>
                {match.status === 'live' && (
                  <Badge variant="danger" className="animate-pulse">
                    <Radio className="w-3 h-3 mr-1" /> LIVE
                  </Badge>
                )}
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className={`font-semibold ${isWolvesHome ? 'text-primary-600' : ''}`}>
                    {match.homeTeam}
                  </span>
                  <span className="font-bold">
                    {match.homeScore !== undefined ? `${match.homeScore} - ${match.awayScore}` : 'vs'}
                  </span>
                  <span className={`font-semibold ${!isWolvesHome ? 'text-primary-600' : ''}`}>
                    {match.awayTeam}
                  </span>
                </div>
              </div>
            </div>
            <div className="text-right text-sm text-gray-500">
              <p>{formattedDate}</p>
              <p>{match.time}</p>
            </div>
          </div>
        </Card>
      </Link>
    )
  }

  if (variant === 'featured') {
    return (
      <Link to={`/matches/${match.id}`}>
        <Card className="overflow-hidden transition-all hover:shadow-lg">
          <div className="bg-gradient-to-r from-primary-600 to-primary-800 p-6 text-white">
            <div className="flex items-center justify-between mb-4">
              <Badge variant="secondary" className="bg-white/20 text-white border-0">
                {match.competition}
              </Badge>
              {match.status === 'live' && (
                <Badge variant="danger" className="animate-pulse">
                  <Radio className="w-3 h-3 mr-1" /> LIVE
                </Badge>
              )}
              {match.status === 'upcoming' && (
                <Badge className="bg-green-500 text-white border-0">UPCOMING</Badge>
              )}
            </div>
            <div className="flex items-center justify-between">
              <div className="flex-1 text-center">
                <h3 className="text-2xl font-bold mb-1">{match.homeTeam}</h3>
                <p className="text-primary-200 text-sm">Home</p>
              </div>
              <div className="px-8">
                {match.status === 'finished' || match.status === 'live' ? (
                  <div className="text-4xl font-bold">
                    {match.homeScore} - {match.awayScore}
                  </div>
                ) : (
                  <div className="text-2xl font-bold">VS</div>
                )}
              </div>
              <div className="flex-1 text-center">
                <h3 className="text-2xl font-bold mb-1">{match.awayTeam}</h3>
                <p className="text-primary-200 text-sm">Away</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-4 mt-4 text-sm text-primary-200">
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {formattedDate}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {match.time}
              </span>
            </div>
          </div>
        </Card>
      </Link>
    )
  }

  return (
    <Link to={`/matches/${match.id}`}>
      <Card className="overflow-hidden transition-all hover:shadow-lg">
        <div className="bg-gray-50 p-4">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <Badge variant="secondary">{match.competition}</Badge>
              {match.round && <span className="text-xs text-gray-500">{match.round}</span>}
            </div>
            {match.status === 'live' && (
              <Badge variant="danger" className="animate-pulse">
                <Radio className="w-3 h-3 mr-1" /> LIVE
              </Badge>
            )}
          </div>

          <div className="flex items-center justify-between">
            <div className="flex-1 text-right pr-4">
              <span className={`font-semibold text-lg ${isWolvesHome ? 'text-primary-600' : ''}`}>
                {match.homeTeam}
              </span>
            </div>

            <div className="px-4 py-2 bg-white rounded-lg shadow-sm">
              {match.status === 'finished' || match.status === 'live' ? (
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold">{match.homeScore}</span>
                  <span className="text-gray-400">-</span>
                  <span className="text-2xl font-bold">{match.awayScore}</span>
                </div>
              ) : (
                <span className="text-sm font-medium text-gray-500">vs</span>
              )}
            </div>

            <div className="flex-1 pl-4">
              <span className={`font-semibold text-lg ${!isWolvesHome ? 'text-primary-600' : ''}`}>
                {match.awayTeam}
              </span>
            </div>
          </div>
        </div>

        <CardContent className="py-3 px-4">
          <div className="flex items-center justify-between text-sm text-gray-500">
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {formattedDate} · {match.time}
            </span>
            <span className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              {match.venue}
            </span>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
