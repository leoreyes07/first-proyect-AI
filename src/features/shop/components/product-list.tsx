import { useState, useMemo } from 'react'
import { Search } from 'lucide-react'
import { Button, Input } from '@/components/ui'
import { ProductCard } from './product-card'
import type { Product, ProductCategory } from '@/types'
import { productCategories } from '../data'

interface ProductListProps {
  products: Product[]
}

type SortOption = 'featured' | 'price-low' | 'price-high' | 'name'

export function ProductList({ products }: ProductListProps) {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory | 'All'>('All')
  const [searchQuery, setSearchQuery] = useState('')
  const [sortBy, setSortBy] = useState<SortOption>('featured')
  const [showSaleOnly, setShowSaleOnly] = useState(false)

  const filteredProducts = useMemo(() => {
    let filtered = products.filter((product) => {
      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory
      const matchesSearch =
        !searchQuery ||
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesSale = !showSaleOnly || product.discount !== undefined
      return matchesCategory && matchesSearch && matchesSale
    })

    switch (sortBy) {
      case 'price-low':
        filtered = filtered.sort((a, b) => a.price - b.price)
        break
      case 'price-high':
        filtered = filtered.sort((a, b) => b.price - a.price)
        break
      case 'name':
        filtered = filtered.sort((a, b) => a.name.localeCompare(b.name))
        break
      case 'featured':
      default:
        filtered = filtered.sort((a, b) => {
          if (a.featured && !b.featured) return -1
          if (!a.featured && b.featured) return 1
          return 0
        })
    }

    return filtered
  }, [products, selectedCategory, searchQuery, sortBy, showSaleOnly])

  return (
    <div className="space-y-6">
      <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
        <div className="flex flex-wrap gap-2">
          <Button
            variant={selectedCategory === 'All' ? 'primary' : 'outline'}
            size="sm"
            onClick={() => setSelectedCategory('All')}
          >
            All
          </Button>
          {productCategories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? 'primary' : 'outline'}
              size="sm"
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <Input
              type="search"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as SortOption)}
            className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
          >
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="name">Name</option>
          </select>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={showSaleOnly}
            onChange={(e) => setShowSaleOnly(e.target.checked)}
            className="w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
          />
          <span className="text-sm">Sale items only</span>
        </label>
        <span className="text-sm text-gray-500">
          ({filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'})
        </span>
      </div>

      {filteredProducts.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No products found matching your criteria.</p>
          <Button
            variant="outline"
            className="mt-4"
            onClick={() => {
              setSelectedCategory('All')
              setSearchQuery('')
              setShowSaleOnly(false)
            }}
          >
            Clear Filters
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  )
}
