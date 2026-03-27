import { Link } from 'react-router-dom'
import { ArrowRight, Calendar, MapPin, Ticket } from 'lucide-react'
import { Card, CardContent, Badge, Button } from '@/components/ui'

interface Match {
  id: string
  date: string
  time: string
  home: string
  away: string
  homeScore?: number
  awayScore?: number
  venue: string
  competition: string
  isHome: boolean
}

const nextMatch: Match = {
  id: '1',
  date: '15 Mar',
  time: '20:00',
  home: 'Wolves FC',
  away: 'Real Madrid',
  venue: 'Wolves Arena Stadium',
  competition: 'LaLiga',
  isHome: true,
}

const lastResult: Match = {
  id: '2',
  date: '10 Mar',
  time: '18:30',
  home: 'FC Barcelona',
  away: 'Wolves FC',
  homeScore: 1,
  awayScore: 2,
  venue: 'Camp Nou',
  competition: 'LaLiga',
  isHome: false,
}

export function MatchHighlights() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-heading font-bold">Matches</h2>
          <Link to="/matches" className="text-primary-600 hover:text-primary-700 font-medium flex items-center gap-1">
            View all <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardContent className="py-6">
              <div className="flex items-center justify-between mb-4">
                <Badge variant="primary">NEXT MATCH</Badge>
                <span className="text-sm text-gray-500">{nextMatch.competition}</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-2 mx-auto">
                    <span className="text-xl font-bold text-primary-700">WF</span>
                  </div>
                  <span className="font-medium">{nextMatch.home}</span>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-gray-400">{nextMatch.time}</div>
                  <div className="text-sm text-gray-500">{nextMatch.date}</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-2 mx-auto">
                    <span className="text-xl font-bold text-gray-600">RM</span>
                  </div>
                  <span className="font-medium">{nextMatch.away}</span>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-center gap-2 text-sm text-gray-500">
                <MapPin className="w-4 h-4" />
                {nextMatch.venue}
              </div>
              <div className="mt-4">
                <Link to="/tickets">
                  <Button variant="primary" className="w-full gap-2">
                    <Ticket className="w-4 h-4" />
                    Buy Tickets
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="py-6">
              <div className="flex items-center justify-between mb-4">
                <Badge variant="success">LAST RESULT</Badge>
                <span className="text-sm text-gray-500">{lastResult.competition}</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-2 mx-auto">
                    <span className="text-xl font-bold text-gray-600">FCB</span>
                  </div>
                  <span className="font-medium">{lastResult.home}</span>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold">
                    <span className={lastResult.homeScore! < lastResult.awayScore! ? 'text-green-600' : ''}>
                      {lastResult.homeScore}
                    </span>
                    <span className="text-gray-400 mx-2">-</span>
                    <span className={lastResult.homeScore! < lastResult.awayScore! ? 'text-green-600' : ''}>
                      {lastResult.awayScore}
                    </span>
                  </div>
                  <Badge variant={lastResult.homeScore! < lastResult.awayScore! ? 'success' : 'danger'} size="sm">
                    Win
                  </Badge>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-2 mx-auto">
                    <span className="text-xl font-bold text-primary-700">WF</span>
                  </div>
                  <span className="font-medium">{lastResult.away}</span>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-center gap-2 text-sm text-gray-500">
                <Calendar className="w-4 h-4" />
                {lastResult.date}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
