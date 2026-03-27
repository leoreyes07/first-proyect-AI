import { Link } from 'react-router-dom'
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react'

const socialLinks = [
  { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
  { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
  { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
  { icon: Youtube, href: 'https://youtube.com', label: 'YouTube' },
]

const footerLinks = {
  club: [
    { label: 'History', href: '/history' },
    { label: 'Stadium', href: '/stadium' },
    { label: 'Contact', href: '/contact' },
  ],
  fans: [
    { label: 'Membership', href: '/membership' },
    { label: 'Fan Groups', href: '/fan-groups' },
    { label: 'Shop', href: '/shop' },
  ],
  matches: [
    { label: 'Tickets', href: '/tickets' },
    { label: 'Schedule', href: '/matches' },
    { label: 'Standings', href: '/standings' },
  ],
}

export function Footer() {
  return (
    <footer className="bg-dark-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src="/favicon.svg" alt="Wolves FC" className="w-10 h-10" />
              <span className="text-xl font-heading font-bold">WOLVES FC</span>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Professional football club committed to sporting excellence and supporting our community.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-dark-700 rounded-lg hover:bg-primary-600 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">The Club</h4>
            <ul className="space-y-2">
              {footerLinks.club.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">For Fans</h4>
            <ul className="space-y-2">
              {footerLinks.fans.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                <span>Wolves Arena Stadium, Main Street 123</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>+1 900 123 456</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span>info@wolvesfc.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-dark-700 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © 2024 Wolves FC. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">
              Privacy
            </Link>
            <Link to="/terms" className="text-gray-400 hover:text-white transition-colors">
              Terms
            </Link>
            <Link to="/cookies" className="text-gray-400 hover:text-white transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
