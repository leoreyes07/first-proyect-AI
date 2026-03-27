import { Link } from 'react-router-dom'
import { Users, Gift, Percent, Ticket } from 'lucide-react'
import { Button } from '@/components/ui'

const benefits = [
  {
    icon: Ticket,
    title: 'Guaranteed tickets',
    description: 'Priority access to matches and exclusive events',
  },
  {
    icon: Users,
    title: 'Community',
    description: 'Join 45,000+ Wolves members',
  },
  {
    icon: Gift,
    title: 'Exclusive discounts',
    description: '20% off at official store',
  },
  {
    icon: Percent,
    title: 'Special offers',
    description: 'Member-only promotions',
  },
]

export function MembershipCTA() {
  return (
    <section className="py-16 bg-gradient-to-r from-primary-700 to-primary-900 text-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Become a Member
            </h2>
            <p className="text-primary-100 text-lg mb-6">
              Join the Wolves family and enjoy exclusive benefits, priority ticket access, and more.
            </p>
            <ul className="space-y-4 mb-8">
              {benefits.map((benefit) => (
                <li key={benefit.title} className="flex items-start gap-3">
                  <div className="p-2 bg-white/10 rounded-lg">
                    <benefit.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold">{benefit.title}</h4>
                    <p className="text-primary-200 text-sm">{benefit.description}</p>
                  </div>
                </li>
              ))}
            </ul>
            <Link to="/membership">
              <Button variant="secondary" size="lg" className="bg-white text-primary-700 hover:bg-gray-100">
                Become a Member
              </Button>
            </Link>
          </div>
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-4">Subscription Plans</h3>
              <div className="space-y-4">
                <MembershipPlan name="Basic" price="49" features={['Priority tickets', '10% off store']} />
                <MembershipPlan name="Premium" price="99" features={['All Basic perks', '20% discount', 'Meet & greet']} popular />
                <MembershipPlan name="VIP" price="199" features={['All Premium perks', 'VIP area access', 'Free jersey']} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function MembershipPlan({ name, price, features, popular }: { name: string; price: string; features: string[]; popular?: boolean }) {
  return (
    <div className={`p-4 rounded-xl ${popular ? 'bg-primary-600 border-2 border-accent-400' : 'bg-white/10'}`}>
      <div className="flex items-center justify-between mb-2">
        <span className="font-semibold">{name}</span>
        <span className="text-2xl font-bold">${price}<span className="text-sm font-normal">/year</span></span>
      </div>
      <ul className="space-y-1">
        {features.map((feature) => (
          <li key={feature} className="text-sm text-primary-100 flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-accent-400 rounded-full" />
            {feature}
          </li>
        ))}
      </ul>
    </div>
  )
}
