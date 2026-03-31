import { Search } from 'lucide-react'
import { Button, Input } from '@/components/ui'
import type { Position, PositionGroup } from '@/types'

interface SquadFiltersProps {
  selectedPosition: Position | 'All'
  selectedGroup: PositionGroup | 'All'
  searchQuery: string
  onPositionChange: (position: Position | 'All') => void
  onGroupChange: (group: PositionGroup | 'All') => void
  onSearchChange: (query: string) => void
}

const positions: { value: Position | 'All'; label: string }[] = [
  { value: 'All', label: 'All' },
  { value: 'GK', label: 'Goalkeepers' },
  { value: 'DEF', label: 'Defenders' },
  { value: 'MID', label: 'Midfielders' },
  { value: 'FWD', label: 'Forwards' },
]

export function SquadFilters({
  selectedPosition,
  searchQuery,
  onPositionChange,
  onSearchChange,
}: SquadFiltersProps) {
  return (
    <div className="space-y-4">
      <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
        <div className="flex flex-wrap gap-2">
          {positions.map((pos) => (
            <Button
              key={pos.value}
              variant={selectedPosition === pos.value ? 'primary' : 'outline'}
              size="sm"
              onClick={() => onPositionChange(pos.value)}
            >
              {pos.label}
            </Button>
          ))}
        </div>

        <div className="relative w-full md:w-64">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <Input
            type="search"
            placeholder="Search player..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>
    </div>
  )
}
