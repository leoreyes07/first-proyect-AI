import { ShoppingBag, Percent, Sparkles } from 'lucide-react'
import { ProductCard, ProductList } from '@/features/shop/components'
import { products, getFeaturedProducts, getSaleProducts, getNewProducts } from '@/features/shop/data'

export function ShopPage() {
  const featuredProducts = getFeaturedProducts()
  const saleProducts = getSaleProducts()
  const newProducts = getNewProducts()

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-2">
            <ShoppingBag className="w-8 h-8 text-primary-200" />
            <h1 className="text-4xl font-bold text-white">Official Store</h1>
          </div>
          <p className="text-primary-100">
            Get the latest Wolves FC merchandise and official products
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        {featuredProducts.length > 0 && (
          <section className="mb-12">
            <div className="flex items-center gap-2 mb-6">
              <Sparkles className="w-6 h-6 text-primary-600" />
              <h2 className="text-2xl font-bold">Featured Products</h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              {featuredProducts.slice(0, 4).map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>
        )}

        {saleProducts.length > 0 && (
          <section className="mb-12">
            <div className="flex items-center gap-2 mb-6">
              <Percent className="w-6 h-6 text-red-500" />
              <h2 className="text-2xl font-bold">Sale Items</h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              {saleProducts.slice(0, 4).map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>
        )}

        {newProducts.length > 0 && (
          <section className="mb-12">
            <div className="flex items-center gap-2 mb-6">
              <Sparkles className="w-6 h-6 text-green-500" />
              <h2 className="text-2xl font-bold">New Arrivals</h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              {newProducts.slice(0, 4).map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>
        )}

        <section>
          <h2 className="text-2xl font-bold mb-6">All Products</h2>
          <ProductList products={products} />
        </section>
      </div>
    </div>
  )
}
