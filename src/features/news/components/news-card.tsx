import { Link } from 'react-router-dom'
import { Clock } from 'lucide-react'
import { Card, CardContent, Badge, Avatar } from '@/components/ui'
import type { NewsArticle } from '@/types'
import { format } from 'date-fns'

interface NewsCardProps {
  article: NewsArticle
  variant?: 'default' | 'featured' | 'compact'
}

export function NewsCard({ article, variant = 'default' }: NewsCardProps) {
  const formattedDate = format(new Date(article.date), 'dd MMM yyyy')

  if (variant === 'featured') {
    return (
      <Link to={`/news/${article.id}`}>
        <Card className="overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-lg">
          <div className="relative h-64 md:h-80">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            <Badge variant="primary" className="absolute top-4 left-4">
              {article.category}
            </Badge>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">{article.title}</h2>
              <p className="text-white/80 mb-4 line-clamp-2">{article.excerpt}</p>
              <div className="flex items-center gap-4 text-sm text-white/70">
                <div className="flex items-center gap-2">
                  {article.authorAvatar ? (
                    <Avatar src={article.authorAvatar} fallback={article.author[0]} size="sm" />
                  ) : (
                    <Avatar fallback={article.author[0]} size="sm" />
                  )}
                  <span>{article.author}</span>
                </div>
                <span>{formattedDate}</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {article.readTime} min
                </span>
              </div>
            </div>
          </div>
        </Card>
      </Link>
    )
  }

  if (variant === 'compact') {
    return (
      <Link to={`/news/${article.id}`}>
        <Card className="flex gap-4 p-4 transition-transform hover:-translate-y-0.5 hover:shadow-md">
          <img
            src={article.image}
            alt={article.title}
            className="w-24 h-24 object-cover rounded-lg flex-shrink-0"
          />
          <div className="flex flex-col justify-center">
            <Badge variant="secondary" className="w-fit mb-2 text-xs">
              {article.category}
            </Badge>
            <h3 className="font-semibold text-sm line-clamp-2 mb-1">{article.title}</h3>
            <span className="text-xs text-gray-500">{formattedDate}</span>
          </div>
        </Card>
      </Link>
    )
  }

  return (
    <Link to={`/news/${article.id}`}>
      <Card className="h-full transition-transform hover:-translate-y-1 hover:shadow-lg">
        <div className="relative h-48 overflow-hidden">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover transition-transform hover:scale-105"
          />
          <Badge variant="primary" className="absolute top-3 left-3">
            {article.category}
          </Badge>
        </div>
        <CardContent>
          <h3 className="font-semibold mb-2 line-clamp-2">{article.title}</h3>
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">{article.excerpt}</p>
          <div className="flex items-center justify-between text-sm text-gray-500">
            <div className="flex items-center gap-2">
              {article.authorAvatar ? (
                <Avatar src={article.authorAvatar} fallback={article.author[0]} size="sm" />
              ) : (
                <Avatar fallback={article.author[0]} size="sm" />
              )}
              <span className="truncate">{article.author}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {article.readTime} min
            </div>
          </div>
          <div className="mt-3 pt-3 border-t border-gray-100 text-xs text-gray-400">
            {formattedDate}
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
