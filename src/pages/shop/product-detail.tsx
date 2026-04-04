import { useState } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { ArrowLeft, ShoppingCart, Heart, Share2, Minus, Plus, Truck, Shield, RotateCcw } from 'lucide-react'
import { Button, Card, CardContent, Badge } from '@/components/ui'
import { ProductCard } from '@/features/shop/components'
import { getProductById, getProductsByCategory } from '@/features/shop/data'

export function ProductDetailPage() {
  const { id } = useParams<{ id: string }>()
  const product = id ? getProductById(id) : undefined

  const [selectedSize, setSelectedSize] = useState<string | undefined>()
  const [selectedColor, setSelectedColor] = useState<string | undefined>()
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)

  if (!product) {
    return <Navigate to="/shop" replace />
  }

  const relatedProducts = getProductsByCategory(product.category)
    .filter((p) => p.id !== product.id)
    .slice(0, 4)

  const allImages = product.images || [product.image]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <Link to="/shop">
          <Button variant="ghost" className="mb-6 -ml-2">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Shop
          </Button>
        </Link>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <div className="relative aspect-square bg-white rounded-xl overflow-hidden mb-4">
              <img
                src={allImages[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              {product.discount && (
                <Badge variant="danger" className="absolute top-4 left-4">
                  -{product.discount}% OFF
                </Badge>
              )}
            </div>

            {allImages.length > 1 && (
              <div className="flex gap-3">
                {allImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImage === index
                        ? 'border-primary-600'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          <div>
            <p className="text-sm text-primary-600 uppercase tracking-wide mb-2">
              {product.category}
            </p>
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>

            <div className="flex items-center gap-4 mb-6">
              <span className="text-3xl font-bold text-primary-600">
                ${product.price.toFixed(2)}
              </span>
              {product.originalPrice && (
                <span className="text-xl text-gray-400 line-through">
                  ${product.originalPrice.toFixed(2)}
                </span>
              )}
            </div>

            <p className="text-gray-600 mb-6">{product.description}</p>

            {product.sizes && product.sizes.length > 0 && (
              <div className="mb-6">
                <p className="font-semibold mb-3">Size</p>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 border rounded-lg transition-all ${
                        selectedSize === size
                          ? 'border-primary-600 bg-primary-50 text-primary-600'
                          : 'border-gray-300 hover:border-gray-400'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {product.colors && product.colors.length > 0 && (
              <div className="mb-6">
                <p className="font-semibold mb-3">Color</p>
                <div className="flex flex-wrap gap-2">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`px-4 py-2 border rounded-lg transition-all ${
                        selectedColor === color
                          ? 'border-primary-600 bg-primary-50 text-primary-600'
                          : 'border-gray-300 hover:border-gray-400'
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="mb-6">
              <p className="font-semibold mb-3">Quantity</p>
              <div className="flex items-center gap-4">
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 hover:bg-gray-100 transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="px-4 font-medium">{quantity}</span>
                  <button
                    onClick={() => setQuantity(Math.min(product.stockCount || 10, quantity + 1))}
                    className="p-2 hover:bg-gray-100 transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
                {product.stockCount && (
                  <span className="text-sm text-gray-500">
                    {product.stockCount} in stock
                  </span>
                )}
              </div>
            </div>

            <div className="flex gap-4 mb-8">
              <Button
                className="flex-1"
                size="lg"
                disabled={!product.inStock}
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                Add to Cart
              </Button>
              <Button variant="outline" size="lg">
                <Heart className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg">
                <Share2 className="w-5 h-5" />
              </Button>
            </div>

            <Card>
              <CardContent className="p-4">
                <div className="grid sm:grid-cols-3 gap-4 text-center">
                  <div className="flex items-center justify-center gap-2 text-gray-600">
                    <Truck className="w-5 h-5" />
                    <span className="text-sm">Free Shipping</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-gray-600">
                    <Shield className="w-5 h-5" />
                    <span className="text-sm">Secure Payment</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-gray-600">
                    <RotateCcw className="w-5 h-5" />
                    <span className="text-sm">30-Day Returns</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {relatedProducts.length > 0 && (
          <section className="mt-16">
            <h2 className="text-2xl font-bold mb-6">You May Also Like</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  )
}
