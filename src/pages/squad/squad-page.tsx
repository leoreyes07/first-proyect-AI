import { useState } from 'react'
import { Users, Award } from 'lucide-react'
import { SquadFilters, SquadList, CoachCard } from '@/features/squad/components'
import { players, coaches } from '@/features/squad/data'
import type { Position } from '@/types'

export function SquadPage() {
  const [selectedPosition, setSelectedPosition] = useState<Position | 'All'>('All')
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-2">
            <Users className="w-8 h-8 text-primary-200" />
            <h1 className="text-4xl font-bold text-white">First Team Squad</h1>
          </div>
          <p className="text-primary-100">
            Meet the Wolves FC players who represent our club on the pitch
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <SquadFilters
          selectedPosition={selectedPosition}
          selectedGroup="All"
          searchQuery={searchQuery}
          onPositionChange={setSelectedPosition}
          onGroupChange={() => {}}
          onSearchChange={setSearchQuery}
        />

        <div className="mt-8">
          <SquadList
            players={players}
            selectedPosition={selectedPosition}
            searchQuery={searchQuery}
          />
        </div>

        <section className="mt-16 pt-8 border-t border-gray-200">
          <div className="flex items-center gap-3 mb-6">
            <Award className="w-6 h-6 text-primary-600" />
            <h2 className="text-2xl font-bold">Coaching Staff</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {coaches.map((coach) => (
              <CoachCard key={coach.id} coach={coach} />
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
