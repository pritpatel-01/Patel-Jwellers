import { Link } from 'react-router-dom'

const categoryData = {
    Gold: {
        image: 'https://images.unsplash.com/photo-1610375461246-83df859d849d?w=600&h=400&fit=crop',
        description: 'Timeless 22K & 24K gold masterpieces',
        gradient: 'from-amber-900/80 to-yellow-700/60',
    },
    Silver: {
        image: 'https://images.unsplash.com/photo-1543294001-f7cd5d7fb516?w=600&h=400&fit=crop',
        description: 'Elegant sterling silver artistry',
        gradient: 'from-gray-800/80 to-gray-500/60',
    },
    Diamond: {
        image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&h=400&fit=crop',
        description: 'Brilliant certified diamond collections',
        gradient: 'from-blue-900/70 to-indigo-700/50',
    },
    Bridal: {
        image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=400&fit=crop',
        description: 'Exquisite bridal & wedding sets',
        gradient: 'from-rose-900/70 to-pink-700/50',
    },
}

function CategorySection() {
    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-14">
                    <span className="text-gold font-poppins text-sm font-medium tracking-[0.3em] uppercase">Our Collections</span>
                    <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-4">
                        Browse by Category
                    </h2>
                    <div className="luxury-divider"></div>
                </div>

                {/* Category Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {Object.entries(categoryData).map(([name, data]) => (
                        <Link
                            key={name}
                            to={`/products?category=${name}`}
                            className="group relative h-72 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                        >
                            {/* Background Image */}
                            <img
                                src={data.image}
                                alt={`${name} jewellery`}
                                loading="lazy"
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            {/* Gradient Overlay */}
                            <div className={`absolute inset-0 bg-gradient-to-t ${data.gradient} group-hover:opacity-90 transition-opacity duration-500`}></div>

                            {/* Content */}
                            <div className="absolute inset-0 flex flex-col items-center justify-end p-6 text-white">
                                <h3 className="font-playfair text-2xl font-bold mb-1 transform group-hover:-translate-y-2 transition-transform duration-500">
                                    {name}
                                </h3>
                                <p className="text-white/80 text-sm font-poppins mb-3 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                                    {data.description}
                                </p>
                                <span className="inline-flex items-center gap-1 text-gold-300 text-xs font-poppins font-medium tracking-wider uppercase opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
                                    Explore
                                    <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default CategorySection
