import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Ticket, ShoppingBag, User } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/news', label: 'News' },
  { href: '/team', label: 'Squad' },
  { href: '/matches', label: 'Matches' },
  { href: '/shop', label: 'Shop' },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  return (
    <header className="sticky top-0 z-40 w-full bg-white border-b border-gray-100">
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center gap-2">
              <img src="/favicon.svg" alt="Wolves FC" className="w-8 h-8" />
              <span className="text-xl font-heading font-bold text-primary-600">WOLVES FC</span>
            </Link>

            <div className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={cn(
                    'text-sm font-medium transition-colors hover:text-primary-600',
                    location.pathname === link.href ? 'text-primary-600' : 'text-gray-600'
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Link to="/tickets">
              <Button variant="primary" size="sm" className="gap-2">
                <Ticket className="w-4 h-4" />
                Tickets
              </Button>
            </Link>
            <Link to="/shop">
              <Button variant="ghost" size="sm" className="p-2">
                <ShoppingBag className="w-5 h-5" />
              </Button>
            </Link>
            <Button variant="ghost" size="sm" className="p-2">
              <User className="w-5 h-5" />
            </Button>
          </div>

          <button
            className="md:hidden p-2 text-gray-600 hover:text-primary-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={cn(
                    'text-base font-medium py-2',
                    location.pathname === link.href ? 'text-primary-600' : 'text-gray-600'
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex gap-3 pt-4 border-t border-gray-100">
                <Link to="/tickets" className="flex-1">
                  <Button variant="primary" className="w-full gap-2">
                    <Ticket className="w-4 h-4" />
                    Tickets
                  </Button>
                </Link>
                <Link to="/shop">
                  <Button variant="outline">
                    <ShoppingBag className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
