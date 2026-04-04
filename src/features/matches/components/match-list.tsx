import { useState } from 'react'
import { Calendar, Trophy } from 'lucide-react'
import { Button } from '@/components/ui'
import { MatchCard } from './match-card'
import type { Match } from '@/types'

interface MatchListProps {
  matches: Match[]
}

type TabType = 'upcoming' | 'results'

export function MatchList({ matches }: MatchListProps) {
  const [activeTab, setActiveTab] = useState<TabType>('upcoming')

  const upcomingMatches = matches
    .filter((m) => m.status === 'upcoming')
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())

  const finishedMatches = matches
    .filter((m) => m.status === 'finished' || m.status === 'live')
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  const displayMatches = activeTab === 'upcoming' ? upcomingMatches : finishedMatches

  return (
    <div>
      <div className="flex gap-2 mb-6">
        <Button
          variant={activeTab === 'upcoming' ? 'primary' : 'outline'}
          onClick={() => setActiveTab('upcoming')}
          className="flex items-center gap-2"
        >
          <Calendar className="w-4 h-4" />
          Upcoming
        </Button>
        <Button
          variant={activeTab === 'results' ? 'primary' : 'outline'}
          onClick={() => setActiveTab('results')}
          className="flex items-center gap-2"
        >
          <Trophy className="w-4 h-4" />
          Results
        </Button>
      </div>

      {displayMatches.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500">
            {activeTab === 'upcoming'
              ? 'No upcoming matches scheduled.'
              : 'No match results available.'}
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {displayMatches.map((match) => (
            <MatchCard key={match.id} match={match} />
          ))}
        </div>
      )}
    </div>
  )
}
