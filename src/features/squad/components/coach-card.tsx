import { Card, CardContent } from '@/components/ui'
import type { Coach } from '@/types'

interface CoachCardProps {
  coach: Coach
}

export function CoachCard({ coach }: CoachCardProps) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <div className="h-48 bg-gradient-to-b from-gray-200 to-gray-100">
        <img
          src={coach.image}
          alt={coach.name}
          className="w-full h-full object-cover"
        />
      </div>
      <CardContent className="text-center">
        <p className="text-sm text-primary-600 font-medium mb-1">{coach.role}</p>
        <h3 className="text-lg font-bold">{coach.name}</h3>
        <p className="text-gray-500 text-sm flex items-center justify-center gap-1">
          {coach.nationalityFlag} {coach.nationality}
        </p>
      </CardContent>
    </Card>
  )
}
