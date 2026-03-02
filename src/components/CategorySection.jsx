import { Link } from 'react-router-dom'

// Top-level categories shown as cards on home page
const categoryData = [
    {
        name: 'Gold',
        label: 'Gold',
        image: '/gold_jewellery.png',
        description: '18kt & 22kt gold masterpieces',
        filterKey: 'gold-collection',
    },
    {
        name: 'Rose Gold',
        label: 'Rose Gold',
        image: '/rose_gold_jewellery.png',
        description: 'Romantic rose gold for a modern touch',
        filterKey: 'rose-gold-collection',
    },
    {
        name: 'Silver',
        label: 'Silver',
        image: '/silver_jewellery.png',
        description: 'Elegant sterling silver artistry',
        filterKey: 'silver-collection',
    },
    {
        name: 'Gold Coins & Biscuits',
        label: 'Gold Coins & Biscuits',
        image: '/gold_coins_biscuits.png',
        description: '24K gold coins & biscuits – pure investment',
        filterKey: 'Gold Coins',
    },
    {
        name: 'Artificial Jewellery',
        label: 'Artificial Jewellery',
        image: '/artificial_jewellery.png',
        description: 'Vibrant fashion jewellery for every occasion',
        filterKey: 'Artificial',
    },
]

function CategorySection() {
    return (
        <section className="py-16 sm:py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-10 sm:mb-14">
                    <span className="text-gold font-poppins text-xs sm:text-sm font-medium tracking-[0.3em] uppercase">Our Collections</span>
                    <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-4">
                        Browse by Category
                    </h2>
                    <div className="luxury-divider"></div>
                </div>

                {/* Category Grid — 2 cols on mobile, 3 on lg */}
                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5 lg:gap-6">
                    {categoryData.map((cat) => (
                        <div
                            key={cat.name}
                            className="group relative h-44 sm:h-60 lg:h-72 rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 sm:hover:-translate-y-2"
                        >
                            {/* Background Image */}
                            <img
                                src={cat.image}
                                alt={`${cat.name} jewellery`}
                                loading="lazy"
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />

                            {/* Label bar */}
                            <div className="absolute bottom-0 left-0 right-0 bg-black/55 backdrop-blur-sm px-3 py-2 sm:px-4 sm:py-3">
                                <h3 className="font-playfair text-sm sm:text-lg lg:text-xl font-bold text-white leading-tight text-center">
                                    {cat.label}
                                </h3>
                            </div>

                            {/* Whole card is a link */}
                            <Link
                                to={
                                    cat.name === 'Gold' ? '/gold-collection'
                                        : cat.name === 'Silver' ? '/silver-collection'
                                            : cat.name === 'Rose Gold' ? '/rose-gold-collection'
                                                : `/products?category=${cat.filterKey}`
                                }
                                className="absolute inset-0"
                                aria-label={`Browse ${cat.label}`}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default CategorySection
