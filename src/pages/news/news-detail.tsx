import { useParams, Link, Navigate } from 'react-router-dom'
import { ArrowLeft, Clock, Calendar, Share2, Twitter, Facebook, Linkedin } from 'lucide-react'
import { Button, Badge, Avatar, Card } from '@/components/ui'
import { NewsCard, NewsGallery } from '@/features/news/components'
import { getNewsById, getLatestNews } from '@/features/news/data'
import { format } from 'date-fns'

export function NewsDetailPage() {
  const { id } = useParams<{ id: string }>()
  const article = id ? getNewsById(id) : undefined

  if (!article) {
    return <Navigate to="/news" replace />
  }

  const formattedDate = format(new Date(article.date), 'MMMM dd, yyyy')
  const relatedNews = getLatestNews(3).filter((n) => n.id !== article.id).slice(0, 3)

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: article.title,
        text: article.excerpt,
        url: window.location.href,
      })
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <article className="max-w-4xl mx-auto px-4 py-8">
        <Link to="/news">
          <Button variant="ghost" className="mb-6 -ml-2">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to News
          </Button>
        </Link>

        <header className="mb-8">
          <Badge variant="primary" className="mb-4">
            {article.category}
          </Badge>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{article.title}</h1>
          <p className="text-xl text-gray-600 mb-6">{article.excerpt}</p>

          <div className="flex flex-wrap items-center gap-4 pb-6 border-b border-gray-200">
            <div className="flex items-center gap-3">
              {article.authorAvatar ? (
                <Avatar src={article.authorAvatar} fallback={article.author[0]} size="md" />
              ) : (
                <Avatar fallback={article.author[0]} size="md" />
              )}
              <div>
                <p className="font-medium">{article.author}</p>
                <p className="text-sm text-gray-500">Staff Writer</p>
              </div>
            </div>
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {formattedDate}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {article.readTime} min read
              </span>
            </div>
          </div>
        </header>

        <div className="relative h-64 md:h-96 mb-8 rounded-xl overflow-hidden">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover"
          />
        </div>

        {article.videoUrl && (
          <div className="mb-8">
            <div className="aspect-video rounded-xl overflow-hidden bg-black">
              <iframe
                src={article.videoUrl}
                title="Video"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        )}

        <div
          className="prose prose-lg max-w-none mb-8"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />

        {article.tags && article.tags.length > 0 && (
          <div className="mb-8">
            <h3 className="text-sm font-semibold text-gray-500 mb-3">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}

        <Card className="p-6 mb-8">
          <div className="flex items-center justify-between">
            <span className="text-gray-600">Share this article</span>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" onClick={handleShare}>
                <Share2 className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => window.open(`https://twitter.com/intent/tweet?url=${window.location.href}`, '_blank')}
              >
                <Twitter className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`, '_blank')}
              >
                <Facebook className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${window.location.href}`, '_blank')}
              >
                <Linkedin className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </Card>

        {article.gallery && article.gallery.length > 0 && (
          <div className="mb-12">
            <NewsGallery images={article.gallery} title="Photo Gallery" />
          </div>
        )}

        <section className="border-t border-gray-200 pt-12">
          <h2 className="text-2xl font-bold mb-6">Related News</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {relatedNews.map((news) => (
              <NewsCard key={news.id} article={news} />
            ))}
          </div>
        </section>
      </article>
    </div>
  )
}
