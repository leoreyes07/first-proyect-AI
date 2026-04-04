import { Calendar } from 'lucide-react'
import { MatchCard, MatchList, StandingsTable } from '@/features/matches/components'
import { matches, standings, getNextMatch } from '@/features/matches/data'

export function MatchesPage() {
  const nextMatch = getNextMatch()

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-2">
            <Calendar className="w-8 h-8 text-primary-200" />
            <h1 className="text-4xl font-bold text-white">Matches</h1>
          </div>
          <p className="text-primary-100">
            Follow Wolves FC fixtures, results, and league standings
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        {nextMatch && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Next Match</h2>
            <MatchCard match={nextMatch} variant="featured" />
          </section>
        )}

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <section>
              <h2 className="text-2xl font-bold mb-6">All Matches</h2>
              <MatchList matches={matches} />
            </section>
          </div>

          <div>
            <section>
              <StandingsTable standings={standings} />
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
