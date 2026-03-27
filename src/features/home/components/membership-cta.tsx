import { Link } from 'react-router-dom'
import { Users, Gift, Percent, Ticket } from 'lucide-react'
import { Button } from '@/components/ui'

const benefits = [
  {
    icon: Ticket,
    title: 'Entradas garantizadas',
    description: 'Acceso prioritario a partidos y eventos exclusivos',
  },
  {
    icon: Users,
    title: 'Comunidad',
    description: 'Forma parte de los 45,000 socios wolves',
  },
  {
    icon: Gift,
    title: 'Descuentos exclusivos',
    description: '20% de descuento en tienda oficial',
  },
  {
    icon: Percent,
    title: 'Ofertas especiales',
    description: 'Promociones solo para socios',
  },
]

export function MembershipCTA() {
  return (
    <section className="py-16 bg-gradient-to-r from-primary-700 to-primary-900 text-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Conviértete en Socio
            </h2>
            <p className="text-primary-100 text-lg mb-6">
              Únete a la familia Wolves y disfruta de beneficios exclusivos, acceso prioritario a entradas y mucho más.
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
                Hazte Socio
              </Button>
            </Link>
          </div>
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-4">Planes de Suscripción</h3>
              <div className="space-y-4">
                <MembershipPlan name="Básico" price="49" features={['Entradas anticipadas', 'Descuento 10% en tienda']} />
                <MembershipPlan name="Premium" price="99" features={['Todo lo de Básico', '20% descuento', 'Meet & greet']} popular />
                <MembershipPlan name="VIP" price="199" features={['Todo lo de Premium', 'Acesso area VIP', 'Camiseta gratuita']} />
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
        <span className="text-2xl font-bold">€{price}<span className="text-sm font-normal">/año</span></span>
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
