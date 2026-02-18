import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import products from '../data/products'

const categories = ['All', 'Gold', 'Silver', 'Diamond', 'Bridal']

function Products() {
    const [searchParams, setSearchParams] = useSearchParams()
    const [activeCategory, setActiveCategory] = useState('All')
    const [filteredProducts, setFilteredProducts] = useState(products)

    // Read category from URL params
    useEffect(() => {
        const categoryParam = searchParams.get('category')
        if (categoryParam && categories.includes(categoryParam)) {
            setActiveCategory(categoryParam)
        }
    }, [searchParams])

    // Filter products when category changes
    useEffect(() => {
        if (activeCategory === 'All') {
            setFilteredProducts(products)
        } else {
            setFilteredProducts(products.filter((p) => p.category === activeCategory))
        }
    }, [activeCategory])

    const handleCategoryClick = (category) => {
        setActiveCategory(category)
        if (category === 'All') {
            setSearchParams({})
        } else {
            setSearchParams({ category })
        }
    }

    return (
        <div>
            {/* Hero Banner */}
            <section className="relative h-72 md:h-80 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=1920&h=400&fit=crop"
                        alt="Our jewellery collection"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50"></div>
                </div>
                <div className="relative z-10 text-center px-4">
                    <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3">
                        Our Collection
                    </h1>
                    <p className="font-poppins text-white/70 text-lg max-w-xl mx-auto">
                        Explore our exquisite range of handcrafted jewellery
                    </p>
                </div>
            </section>

            {/* Filter & Products */}
            <section className="py-16 bg-gray-50 min-h-screen">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Category Filters */}
                    <div className="flex flex-wrap justify-center gap-3 mb-12">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => handleCategoryClick(category)}
                                className={`px-6 py-2.5 rounded-full font-poppins text-sm font-medium transition-all duration-300 ${activeCategory === category
                                        ? 'bg-gradient-to-r from-gold-500 to-gold-600 text-white shadow-lg shadow-gold-400/25'
                                        : 'bg-white text-gray-600 hover:text-gold border border-gray-200 hover:border-gold-300 shadow-sm'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    {/* Results count */}
                    <div className="mb-8 text-center">
                        <p className="font-poppins text-gray-500 text-sm">
                            Showing <span className="font-semibold text-gray-800">{filteredProducts.length}</span> {filteredProducts.length === 1 ? 'piece' : 'pieces'}
                            {activeCategory !== 'All' && (
                                <> in <span className="font-semibold text-gold">{activeCategory}</span></>
                            )}
                        </p>
                    </div>

                    {/* Products Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {filteredProducts.map((product, index) => (
                            <div
                                key={product.id}
                                className="animate-fade-in-up"
                                style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'both' }}
                            >
                                <ProductCard product={product} />
                            </div>
                        ))}
                    </div>

                    {/* Empty state */}
                    {filteredProducts.length === 0 && (
                        <div className="text-center py-20">
                            <svg className="w-16 h-16 mx-auto text-gray-300 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                            </svg>
                            <h3 className="font-playfair text-2xl text-gray-700 mb-2">No products found</h3>
                            <p className="font-poppins text-gray-500">Try selecting a different category</p>
                        </div>
                    )}
                </div>
            </section>
        </div>
    )
}

export default Products
