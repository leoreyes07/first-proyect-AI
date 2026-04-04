import { Link } from 'react-router-dom'
import { ShoppingCart, Heart, Tag } from 'lucide-react'
import { Card, CardContent, Badge, Button } from '@/components/ui'
import type { Product } from '@/types'

interface ProductCardProps {
  product: Product
  variant?: 'default' | 'compact'
}

export function ProductCard({ product, variant = 'default' }: ProductCardProps) {
  const hasDiscount = product.discount !== undefined
  const hasOriginalPrice = product.originalPrice !== undefined

  if (variant === 'compact') {
    return (
      <Link to={`/shop/${product.id}`}>
        <Card className="flex gap-4 p-4 transition-all hover:shadow-md">
          <div className="w-24 h-24 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center flex-1">
            <h3 className="font-semibold line-clamp-1">{product.name}</h3>
            <div className="flex items-center gap-2 mt-1">
              <span className="font-bold text-primary-600">${product.price.toFixed(2)}</span>
              {hasOriginalPrice && product.originalPrice && (
                <span className="text-sm text-gray-400 line-through">
                  ${product.originalPrice.toFixed(2)}
                </span>
              )}
            </div>
          </div>
        </Card>
      </Link>
    )
  }

  return (
    <Link to={`/shop/${product.id}`}>
      <Card className="overflow-hidden transition-all hover:shadow-lg group h-full">
        <div className="relative h-64 bg-gray-100 overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {product.isNew && (
              <Badge variant="primary" className="bg-green-500">
                NEW
              </Badge>
            )}
            {hasDiscount && (
              <Badge variant="danger" className="flex items-center gap-1">
                <Tag className="w-3 h-3" />
                -{product.discount}%
              </Badge>
            )}
          </div>

          <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
            <button
              type="button"
              className="p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors"
              onClick={(e) => {
                e.preventDefault()
              }}
            >
              <Heart className="w-4 h-4" />
            </button>
          </div>

          {!product.inStock && (
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <span className="text-white font-bold">Out of Stock</span>
            </div>
          )}
        </div>

        <CardContent className="p-4">
          <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">
            {product.category}
          </p>
          <h3 className="font-semibold mb-2 line-clamp-2 min-h-[2.5rem]">
            {product.name}
          </h3>
          
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xl font-bold text-primary-600">
              ${product.price.toFixed(2)}
            </span>
            {hasOriginalPrice && product.originalPrice && (
              <span className="text-sm text-gray-400 line-through">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>

          {product.sizes && product.sizes.length > 0 && (
            <div className="flex flex-wrap gap-1 mb-3">
              {product.sizes.slice(0, 5).map((size) => (
                <span
                  key={size}
                  className="px-2 py-0.5 text-xs bg-gray-100 rounded text-gray-600"
                >
                  {size}
                </span>
              ))}
              {product.sizes.length > 5 && (
                <span className="px-2 py-0.5 text-xs text-gray-400">
                  +{product.sizes.length - 5}
                </span>
              )}
            </div>
          )}

          <Button
            className="w-full"
            variant={product.inStock ? 'primary' : 'outline'}
            disabled={!product.inStock}
            onClick={(e) => {
              e.preventDefault()
            }}
          >
            <ShoppingCart className="w-4 h-4 mr-2" />
            {product.inStock ? 'Add to Cart' : 'Out of Stock'}
          </Button>
        </CardContent>
      </Card>
    </Link>
  )
}
