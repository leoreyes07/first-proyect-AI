import { NewsCard, NewsList } from '@/features/news/components'
import { newsArticles, getFeaturedNews } from '@/features/news/data'

export function NewsPage() {
  const featuredArticle = getFeaturedNews()
  const regularArticles = newsArticles.filter((a) => !a.featured)

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-white mb-2">News</h1>
          <p className="text-primary-100">
            The latest updates, match reports, and exclusive interviews from Wolves FC
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        {featuredArticle && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Featured Story</h2>
            <NewsCard article={featuredArticle} variant="featured" />
          </section>
        )}

        <section>
          <h2 className="text-2xl font-bold mb-6">All News</h2>
          <NewsList articles={regularArticles} />
        </section>
      </div>
    </div>
  )
}
