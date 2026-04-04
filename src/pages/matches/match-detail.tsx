import { useParams, Link, Navigate } from 'react-router-dom'
import { ArrowLeft, Calendar, Clock, MapPin, Ticket, Radio } from 'lucide-react'
import { Button, Card, CardContent, Badge } from '@/components/ui'
import { MatchCard } from '@/features/matches/components'
import { getMatchById, getUpcomingMatches, getFinishedMatches } from '@/features/matches/data'
import { format } from 'date-fns'

export function MatchDetailPage() {
  const { id } = useParams<{ id: string }>()
  const match = id ? getMatchById(id) : undefined

  if (!match) {
    return <Navigate to="/matches" replace />
  }

  const formattedDate = format(new Date(match.date), 'EEEE, dd MMMM yyyy')

  const relatedMatches = [
    ...getFinishedMatches().slice(0, 3),
    ...getUpcomingMatches().slice(0, 2),
  ].filter((m) => m.id !== match.id)

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container mx-auto px-4 py-8">
          <Link to="/matches">
            <Button variant="ghost" className="text-white hover:bg-white/10 mb-6 -ml-2">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Matches
            </Button>
          </Link>

          <div className="flex items-center justify-between mb-4">
            <Badge variant="secondary" className="bg-white/20 text-white border-0">
              {match.competition}
            </Badge>
            {match.round && <span className="text-primary-200">{match.round}</span>}
          </div>

          <div className="flex items-center justify-between">
            <div className="flex-1 text-center">
              <h2 className="text-3xl font-bold mb-2">{match.homeTeam}</h2>
              <p className="text-primary-200 text-sm">Home</p>
            </div>

            <div className="px-8">
              {match.status === 'finished' || match.status === 'live' ? (
                <div className="text-center">
                  <div className="text-6xl font-bold">
                    {match.homeScore} - {match.awayScore}
                  </div>
                  {match.status === 'live' && (
                    <Badge variant="danger" className="mt-2 animate-pulse">
                      <Radio className="w-4 h-4 mr-1" /> LIVE
                    </Badge>
                  )}
                  {match.status === 'finished' && (
                    <p className="text-primary-200 text-sm mt-2">Full Time</p>
                  )}
                </div>
              ) : (
                <div className="text-center">
                  <div className="text-4xl font-bold">VS</div>
                  <p className="text-primary-200 text-sm mt-2">Kick-off</p>
                </div>
              )}
            </div>

            <div className="flex-1 text-center">
              <h2 className="text-3xl font-bold mb-2">{match.awayTeam}</h2>
              <p className="text-primary-200 text-sm">Away</p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-6 mt-6 text-primary-200">
            <span className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              {formattedDate}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              {match.time}
            </span>
            <span className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              {match.venue}
            </span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {match.stats && (
              <section>
                <h2 className="text-2xl font-bold mb-4">Match Statistics</h2>
                <Card>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      {match.stats.possession && (
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span className="font-medium">{match.stats.possession.home}%</span>
                            <span className="text-gray-500">Possession</span>
                            <span className="font-medium">{match.stats.possession.away}%</span>
                          </div>
                          <div className="flex h-3 rounded-full overflow-hidden">
                            <div
                              className="bg-primary-600"
                              style={{ width: `${match.stats.possession.home}%` }}
                            />
                            <div className="bg-gray-300" style={{ width: `${match.stats.possession.away}%` }} />
                          </div>
                        </div>
                      )}

                      {match.stats.shots && (
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span className="font-medium">{match.stats.shots.home}</span>
                            <span className="text-gray-500">Shots</span>
                            <span className="font-medium">{match.stats.shots.away}</span>
                          </div>
                          <div className="flex h-3 rounded-full overflow-hidden">
                            <div
                              className="bg-primary-600"
                              style={{
                                width: `${
                                  (match.stats.shots.home /
                                    (match.stats.shots.home + match.stats.shots.away)) *
                                  100
                                }%`,
                              }}
                            />
                            <div
                              className="bg-gray-300"
                              style={{
                                width: `${
                                  (match.stats.shots.away /
                                    (match.stats.shots.home + match.stats.shots.away)) *
                                  100
                                }%`,
                              }}
                            />
                          </div>
                        </div>
                      )}

                      {match.stats.shotsOnTarget && (
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span className="font-medium">{match.stats.shotsOnTarget.home}</span>
                            <span className="text-gray-500">Shots on Target</span>
                            <span className="font-medium">{match.stats.shotsOnTarget.away}</span>
                          </div>
                          <div className="flex h-3 rounded-full overflow-hidden">
                            <div
                              className="bg-green-500"
                              style={{
                                width: `${
                                  (match.stats.shotsOnTarget.home /
                                    (match.stats.shotsOnTarget.home + match.stats.shotsOnTarget.away)) *
                                  100
                                }%`,
                              }}
                            />
                            <div
                              className="bg-gray-300"
                              style={{
                                width: `${
                                  (match.stats.shotsOnTarget.away /
                                    (match.stats.shotsOnTarget.home + match.stats.shotsOnTarget.away)) *
                                  100
                                }%`,
                              }}
                            />
                          </div>
                        </div>
                      )}

                      {match.stats.corners && (
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span className="font-medium">{match.stats.corners.home}</span>
                            <span className="text-gray-500">Corners</span>
                            <span className="font-medium">{match.stats.corners.away}</span>
                          </div>
                          <div className="flex h-3 rounded-full overflow-hidden">
                            <div
                              className="bg-primary-600"
                              style={{
                                width: `${
                                  (match.stats.corners.home /
                                    (match.stats.corners.home + match.stats.corners.away)) *
                                  100
                                }%`,
                              }}
                            />
                            <div
                              className="bg-gray-300"
                              style={{
                                width: `${
                                  (match.stats.corners.away /
                                    (match.stats.corners.home + match.stats.corners.away)) *
                                  100
                                }%`,
                              }}
                            />
                          </div>
                        </div>
                      )}

                      {match.stats.fouls && (
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span className="font-medium">{match.stats.fouls.home}</span>
                            <span className="text-gray-500">Fouls</span>
                            <span className="font-medium">{match.stats.fouls.away}</span>
                          </div>
                          <div className="flex h-3 rounded-full overflow-hidden">
                            <div
                              className="bg-yellow-500"
                              style={{
                                width: `${
                                  (match.stats.fouls.home /
                                    (match.stats.fouls.home + match.stats.fouls.away)) *
                                  100
                                }%`,
                              }}
                            />
                            <div
                              className="bg-gray-300"
                              style={{
                                width: `${
                                  (match.stats.fouls.away /
                                    (match.stats.fouls.home + match.stats.fouls.away)) *
                                  100
                                }%`,
                              }}
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </section>
            )}

            {match.status === 'upcoming' && (
              <section>
                <h2 className="text-2xl font-bold mb-4">Match Info</h2>
                <Card>
                  <CardContent className="p-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div>
                          <p className="text-sm text-gray-500">Date</p>
                          <p className="font-medium">{formattedDate}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Kick-off</p>
                          <p className="font-medium">{match.time}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Venue</p>
                          <p className="font-medium">{match.venue}</p>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div>
                          <p className="text-sm text-gray-500">Competition</p>
                          <p className="font-medium">{match.competition}</p>
                        </div>
                        {match.round && (
                          <div>
                            <p className="text-sm text-gray-500">Round</p>
                            <p className="font-medium">{match.round}</p>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="mt-6">
                      <Button className="w-full flex items-center justify-center gap-2">
                        <Ticket className="w-4 h-4" />
                        Buy Tickets
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </section>
            )}
          </div>

          <div>
            <section>
              <h2 className="text-2xl font-bold mb-4">More Matches</h2>
              <div className="space-y-4">
                {relatedMatches.slice(0, 5).map((m) => (
                  <MatchCard key={m.id} match={m} variant="compact" />
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
