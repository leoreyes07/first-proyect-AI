import { useParams, Link, Navigate } from 'react-router-dom'
import { ArrowLeft, Calendar, Ruler, Weight, Flag, Shirt, Trophy, UserPlus, Target } from 'lucide-react'
import { Button, Card, CardContent, Badge } from '@/components/ui'
import { getPlayerById, players } from '@/features/squad/data'
import { usePlayerImage } from '@/hooks/usePlayerImage'
import { PlayerImage } from '@/components/player-image'
import { format } from 'date-fns'

const positionColors: Record<string, string> = {
  GK: 'bg-yellow-500',
  DEF: 'bg-blue-500',
  MID: 'bg-green-500',
  FWD: 'bg-red-500',
}

export function PlayerDetailPage() {
  const { id } = useParams<{ id: string }>()
  const player = id ? getPlayerById(id) : undefined
  const { imageUrl } = usePlayerImage(player?.name || '', player?.image)

  if (!player) {
    return <Navigate to="/team" replace />
  }

  const age = Math.floor(
    (new Date().getTime() - new Date(player.birthDate).getTime()) / (365.25 * 24 * 60 * 60 * 1000)
  )
  const relatedPlayers = players
    .filter((p) => p.position === player.position && p.id !== player.id)
    .slice(0, 4)

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container mx-auto px-4 py-8">
          <Link to="/team">
            <Button variant="ghost" className="text-white hover:bg-white/10 mb-6 -ml-2">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Squad
            </Button>
          </Link>

          <div className="flex flex-col md:flex-row gap-8 items-end">
            <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-xl overflow-hidden shadow-2xl">
              <img
                src={imageUrl || player.image}
                alt={player.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex-1 pb-4">
              <div className="flex items-center gap-4 mb-2">
                <span className="text-6xl md:text-7xl font-bold opacity-60">#{player.number}</span>
                <Badge className={`${positionColors[player.position]} text-white`}>
                  {player.position}
                </Badge>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-2">{player.name}</h1>
              <div className="flex flex-wrap items-center gap-4 text-primary-100">
                <span className="flex items-center gap-1">
                  <Flag className="w-4 h-4" />
                  {player.nationalityFlag} {player.nationality}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {age} years old
                </span>
                <span className="flex items-center gap-1">
                  <Ruler className="w-4 h-4" />
                  {player.height}
                </span>
                <span className="flex items-center gap-1">
                  <Weight className="w-4 h-4" />
                  {player.weight}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {player.bio && (
              <section>
                <h2 className="text-2xl font-bold mb-4">About</h2>
                <Card>
                  <CardContent>
                    <p className="text-gray-600 leading-relaxed">{player.bio}</p>
                  </CardContent>
                </Card>
              </section>
            )}

            {player.stats && (
              <section>
                <h2 className="text-2xl font-bold mb-4">Career Statistics</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <Card className="text-center">
                    <CardContent className="py-6">
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <Shirt className="w-5 h-5 text-primary-600" />
                      </div>
                      <p className="text-3xl font-bold text-gray-900">{player.stats.matches}</p>
                      <p className="text-sm text-gray-500">Matches</p>
                    </CardContent>
                  </Card>
                  <Card className="text-center">
                    <CardContent className="py-6">
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <Target className="w-5 h-5 text-green-600" />
                      </div>
                      <p className="text-3xl font-bold text-gray-900">{player.stats.goals}</p>
                      <p className="text-sm text-gray-500">Goals</p>
                    </CardContent>
                  </Card>
                  <Card className="text-center">
                    <CardContent className="py-6">
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <UserPlus className="w-5 h-5 text-blue-600" />
                      </div>
                      <p className="text-3xl font-bold text-gray-900">{player.stats.assists}</p>
                      <p className="text-sm text-gray-500">Assists</p>
                    </CardContent>
                  </Card>
                  <Card className="text-center">
                    <CardContent className="py-6">
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <Trophy className="w-5 h-5 text-yellow-500" />
                      </div>
                      <p className="text-3xl font-bold text-gray-900">{player.stats.cleanSheets || '-'}</p>
                      <p className="text-sm text-gray-500">
                        {player.position === 'GK' ? 'Clean Sheets' : 'Goals/Game'}
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <Card className="mt-4">
                  <CardContent className="py-4">
                    <div className="flex justify-around text-center">
                      <div>
                        <p className="text-2xl font-bold text-yellow-500">{player.stats.yellowCards}</p>
                        <p className="text-xs text-gray-500">Yellow Cards</p>
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-red-500">{player.stats.redCards}</p>
                        <p className="text-xs text-gray-500">Red Cards</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </section>
            )}
          </div>

          <div>
            <section>
              <h2 className="text-2xl font-bold mb-4">Personal Info</h2>
              <Card>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-500">Full Name</span>
                    <span className="font-medium">{player.name}</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-500">Date of Birth</span>
                    <span className="font-medium">
                      {format(new Date(player.birthDate), 'dd MMM yyyy')}
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-500">Nationality</span>
                    <span className="font-medium flex items-center gap-1">
                      {player.nationalityFlag} {player.nationality}
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-500">Height</span>
                    <span className="font-medium">{player.height}</span>
                  </div>
                  <div className="flex items-center justify-between py-2">
                    <span className="text-gray-500">Weight</span>
                    <span className="font-medium">{player.weight}</span>
                  </div>
                </CardContent>
              </Card>
            </section>
          </div>
        </div>

        {relatedPlayers.length > 0 && (
          <section className="mt-12">
            <h2 className="text-2xl font-bold mb-6">Other {player.position === 'GK' ? 'Goalkeepers' : player.position === 'DEF' ? 'Defenders' : player.position === 'MID' ? 'Midfielders' : 'Forwards'}</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {relatedPlayers.map((p) => (
                <Link key={p.id} to={`/team/${p.id}`}>
                  <Card className="overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1">
                    <div className="h-40 bg-gradient-to-b from-gray-200 to-gray-100">
                      <PlayerImage
                        name={p.name}
                        fallbackImage={p.image}
                        alt={p.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardContent className="text-center py-3">
                      <p className="text-2xl font-bold text-gray-400">#{p.number}</p>
                      <h3 className="font-semibold truncate">{p.name}</h3>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  )
}
