import { Trophy } from 'lucide-react'
import { Card, CardContent } from '@/components/ui'
import type { Standing } from '@/types'

interface StandingsTableProps {
  standings: Standing[]
  competition?: string
}

export function StandingsTable({ standings, competition = 'Premier League' }: StandingsTableProps) {
  return (
    <Card>
      <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
        <div className="flex items-center gap-2">
          <Trophy className="w-5 h-5 text-primary-600" />
          <h3 className="font-bold text-lg">{competition} Table</h3>
        </div>
      </div>
      <CardContent className="p-0">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-xs text-gray-500 border-b">
                <th className="text-left py-3 px-4 font-medium">#</th>
                <th className="text-left py-3 px-4 font-medium">Team</th>
                <th className="text-center py-3 px-2 font-medium">P</th>
                <th className="text-center py-3 px-2 font-medium">W</th>
                <th className="text-center py-3 px-2 font-medium">D</th>
                <th className="text-center py-3 px-2 font-medium">L</th>
                <th className="text-center py-3 px-2 font-medium">GF</th>
                <th className="text-center py-3 px-2 font-medium">GA</th>
                <th className="text-center py-3 px-2 font-medium">GD</th>
                <th className="text-center py-3 px-2 font-medium">Pts</th>
                <th className="text-center py-3 px-4 font-medium">Form</th>
              </tr>
            </thead>
            <tbody>
              {standings.map((team) => {
                const isWolves = team.team === 'Wolves FC'

                return (
                  <tr
                    key={team.team}
                    className={`border-b border-gray-100 hover:bg-gray-50 transition-colors ${
                      isWolves ? 'bg-primary-50' : ''
                    }`}
                  >
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-1">
                        <span className={`font-bold ${isWolves ? 'text-primary-600' : ''}`}>
                          {team.position}
                        </span>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <span className={`font-medium ${isWolves ? 'text-primary-600' : ''}`}>
                        {team.team}
                      </span>
                    </td>
                    <td className="py-3 px-2 text-center">{team.played}</td>
                    <td className="py-3 px-2 text-center">{team.won}</td>
                    <td className="py-3 px-2 text-center">{team.drawn}</td>
                    <td className="py-3 px-2 text-center">{team.lost}</td>
                    <td className="py-3 px-2 text-center">{team.goalsFor}</td>
                    <td className="py-3 px-2 text-center">{team.goalsAgainst}</td>
                    <td
                      className={`py-3 px-2 text-center font-medium ${
                        team.goalDifference > 0
                          ? 'text-green-600'
                          : team.goalDifference < 0
                          ? 'text-red-600'
                          : 'text-gray-600'
                      }`}
                    >
                      {team.goalDifference > 0 ? `+${team.goalDifference}` : team.goalDifference}
                    </td>
                    <td className={`py-3 px-2 text-center font-bold ${isWolves ? 'text-primary-600' : ''}`}>
                      {team.points}
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex items-center justify-center gap-1">
                        {team.form?.map((result, index) => (
                          <span
                            key={index}
                            className={`w-6 h-6 flex items-center justify-center rounded text-xs font-bold text-white ${
                              result === 'W' ? 'bg-green-500' : result === 'D' ? 'bg-gray-400' : 'bg-red-500'
                            }`}
                          >
                            {result}
                          </span>
                        ))}
                      </div>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>

        <div className="px-6 py-3 bg-gray-50 border-t border-gray-200">
          <div className="flex flex-wrap gap-4 text-xs text-gray-500">
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 bg-primary-600 rounded" />
              <span>Champions League</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 bg-blue-500 rounded" />
              <span>Europa League</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 bg-red-500 rounded" />
              <span>Relegation</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
