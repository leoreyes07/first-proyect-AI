import { Link } from 'react-router-dom'
import { ArrowRight, Ticket, Users, Calendar, Trophy } from 'lucide-react'
import { Button } from '@/components/ui'

export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />
      </div>
      
      <div className="container mx-auto px-4 py-24 md:py-32 relative">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 leading-tight">
            The pride of our <span className="text-accent-400">city</span>
          </h1>
          <p className="text-lg md:text-xl text-primary-100 mb-8 max-w-2xl">
            Support Wolves FC at every match. Experience the thrill of football from the stands of Wolves Arena Stadium.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/tickets">
              <Button variant="secondary" size="lg" className="gap-2 bg-white text-primary-700 hover:bg-gray-100">
                <Ticket className="w-5 h-5" />
                Buy Tickets
              </Button>
            </Link>
            <Link to="/team">
              <Button variant="outline" size="lg" className="gap-2 border-white text-white hover:bg-white/10">
                Meet the Squad
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <StatCard icon={Trophy} value="12" label="Trophies" />
          <StatCard icon={Users} value="45K+" label="Members" />
          <StatCard icon={Calendar} value="38" label="Matches/Season" />
          <StatCard icon={Calendar} value="1905" label="Founded" />
        </div>
      </div>
    </section>
  )
}

function StatCard({ icon: Icon, value, label }: { icon: typeof Trophy; value: string; label: string }) {
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
      <Icon className="w-8 h-8 mx-auto mb-2 text-accent-400" />
      <div className="text-2xl md:text-3xl font-bold">{value}</div>
      <div className="text-sm text-primary-200">{label}</div>
    </div>
  )
}
