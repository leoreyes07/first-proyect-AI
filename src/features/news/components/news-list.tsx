import { useState, useMemo } from 'react'
import { Search, ChevronLeft, ChevronRight } from 'lucide-react'
import { Button, Input } from '@/components/ui'
import { NewsCard } from './news-card'
import type { NewsArticle, NewsCategory, NewsFilters } from '@/types'
import { newsCategories } from '../data'

interface NewsListProps {
  articles: NewsArticle[]
  itemsPerPage?: number
}

export function NewsList({ articles, itemsPerPage = 9 }: NewsListProps) {
  const [filters, setFilters] = useState<NewsFilters>({ category: 'All', search: '' })
  const [currentPage, setCurrentPage] = useState(1)

  const filteredArticles = useMemo(() => {
    return articles.filter((article) => {
      const matchesCategory =
        filters.category === 'All' || article.category === filters.category
      const matchesSearch =
        !filters.search ||
        article.title.toLowerCase().includes(filters.search.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(filters.search.toLowerCase())
      return matchesCategory && matchesSearch
    })
  }, [articles, filters])

  const totalPages = Math.ceil(filteredArticles.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const paginatedArticles = filteredArticles.slice(startIndex, startIndex + itemsPerPage)

  const handleCategoryChange = (category: NewsCategory | 'All') => {
    setFilters((prev) => ({ ...prev, category }))
    setCurrentPage(1)
  }

  const handleSearchChange = (value: string) => {
    setFilters((prev) => ({ ...prev, search: value }))
    setCurrentPage(1)
  }

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row gap-4 justify-between items-start md:items-center">
        <div className="flex flex-wrap gap-2">
          <Button
            variant={filters.category === 'All' ? 'primary' : 'ghost'}
            size="sm"
            onClick={() => handleCategoryChange('All')}
          >
            All
          </Button>
          {newsCategories.map((category) => (
            <Button
              key={category}
              variant={filters.category === category ? 'primary' : 'ghost'}
              size="sm"
              onClick={() => handleCategoryChange(category)}
            >
              {category}
            </Button>
          ))}
        </div>
        <div className="relative w-full md:w-64">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <Input
            type="search"
            placeholder="Search news..."
            value={filters.search}
            onChange={(e) => handleSearchChange(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      {paginatedArticles.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500">No articles found matching your criteria.</p>
        </div>
      ) : (
        <>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {paginatedArticles.map((article) => (
              <NewsCard key={article.id} article={article} />
            ))}
          </div>

          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 mt-8">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <span className="text-sm text-gray-600">
                Page {currentPage} of {totalPages}
              </span>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          )}
        </>
      )}
    </div>
  )
}
