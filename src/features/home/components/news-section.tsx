import { Link } from 'react-router-dom'
import { ArrowRight, Clock } from 'lucide-react'
import { Card, CardContent, Badge, Avatar } from '@/components/ui'

interface NewsItem {
  id: string
  title: string
  excerpt: string
  image: string
  date: string
  category: string
  readTime: number
  author: string
}

const news: NewsItem[] = [
  {
    id: '1',
    title: 'Wolves FC clinches historic victory at Camp Nou',
    excerpt: 'A goal in the 89th minute secured a memorable victory that will live long in the memories of fans.',
    image: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=800',
    date: '10 Mar 2024',
    category: 'Match',
    readTime: 3,
    author: 'Carlos Martinez',
  },
  {
    id: '2',
    title: 'New signing joins the first team',
    excerpt: 'The international midfielder arrives from FC Barcelona on a 4-year contract.',
    image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800',
    date: '8 Mar 2024',
    category: 'Transfers',
    readTime: 4,
    author: 'Laura Sanchez',
  },
  {
    id: '3',
    title: 'Wolves Arena to host Copa del Rey Final',
    excerpt: 'Our city stadium has been selected to host the national competition final.',
    image: 'https://images.unsplash.com/photo-1459865264687-595d652de67e?w=800',
    date: '5 Mar 2024',
    category: 'Club',
    readTime: 2,
    author: 'Pedro Garcia',
  },
]

export function NewsSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-heading font-bold">Latest News</h2>
          <Link to="/news" className="text-primary-600 hover:text-primary-700 font-medium flex items-center gap-1">
            View all <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {news.map((item, index) => (
            <Link key={item.id} to={`/news/${item.id}`}>
              <Card className={`h-full transition-transform hover:-translate-y-1 hover:shadow-lg ${index === 0 ? 'md:row-span-2' : ''}`}>
                <div className="relative h-48 overflow-hidden">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                  <Badge variant="primary" className="absolute top-3 left-3">
                    {item.category}
                  </Badge>
                </div>
                <CardContent className={index === 0 ? 'py-6' : ''}>
                  <h3 className={`font-semibold mb-2 line-clamp-2 ${index === 0 ? 'text-xl' : ''}`}>
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{item.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                      <Avatar fallback={item.author[0]} size="sm" />
                      <span>{item.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {item.readTime} min
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
