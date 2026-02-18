import { Link } from 'react-router-dom'
import Button from '../components/Button'
import ProductCard from '../components/ProductCard'
import CategorySection from '../components/CategorySection'
import products from '../data/products'

function Home() {
    const featuredProducts = products.slice(0, 4)

    return (
        <div>
            {/* ==================== Hero Section ==================== */}
            <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=1920&h=1080&fit=crop"
                        alt="Luxury jewellery showcase"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-gold/10 blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-48 h-48 rounded-full bg-gold/10 blur-3xl"></div>

                {/* Content */}
                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in-up">
                    <span className="inline-block px-6 py-2 border border-gold/40 rounded-full text-gold-300 font-poppins text-xs tracking-[0.3em] uppercase mb-6 backdrop-blur-sm">
                        Welcome to Patel Jwellers
                    </span>
                    <h1 className="font-playfair text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
                        Where Elegance<br />
                        <span className="gold-text">Meets Artistry</span>
                    </h1>
                    <p className="font-poppins text-white/70 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
                        Discover our exquisite collection of handcrafted jewellery, where every piece
                        tells a story of tradition, passion, and unparalleled beauty.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button to="/products" variant="primary" size="lg">
                            Explore Collection
                        </Button>
                        <Button to="/contact" variant="secondary" size="lg" className="!bg-white/10 !text-white !border-white/30 hover:!bg-white hover:!text-gray-900">
                            Book Appointment
                        </Button>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 animate-bounce">
                    <span className="font-poppins text-xs tracking-widest uppercase">Scroll</span>
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </div>
            </section>

            {/* ==================== Stats Bar ==================== */}
            <section className="bg-gray-950 py-8">
                <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
                    {[
                        { number: '12+', label: 'Years of Legacy' },
                        { number: '10K+', label: 'Happy Customers' },
                        { number: '5K+', label: 'Unique Designs' },
                        { number: '100%', label: 'Certified Gold' },
                    ].map((stat, i) => (
                        <div key={i} className="text-center">
                            <div className="font-playfair text-3xl md:text-4xl font-bold gold-text mb-1">{stat.number}</div>
                            <div className="font-poppins text-gray-400 text-sm">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ==================== Featured Products ==================== */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Section Header */}
                    <div className="text-center mb-14">
                        <span className="text-gold font-poppins text-sm font-medium tracking-[0.3em] uppercase">Handpicked for You</span>
                        <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-4">
                            Featured Collection
                        </h2>
                        <div className="luxury-divider"></div>
                    </div>

                    {/* Products Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                        {featuredProducts.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>

                    {/* View All Button */}
                    <div className="text-center">
                        <Button to="/products" variant="outline" size="lg">
                            View All Products
                            <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Button>
                    </div>
                </div>
            </section>

            {/* ==================== Categories ==================== */}
            <CategorySection />

            {/* ==================== About Preview ==================== */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* Image */}
                        <div className="relative">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                                <img
                                    src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&h=600&fit=crop"
                                    alt="Patel Jwellers Store"
                                    loading="lazy"
                                    className="w-full h-[400px] md:h-[500px] object-cover"
                                />
                            </div>
                            {/* Decorative gold frame accent */}
                            <div className="absolute -bottom-6 -right-6 w-48 h-48 border-2 border-gold/30 rounded-2xl -z-10"></div>
                            {/* Experience badge */}
                            <div className="absolute -bottom-4 -left-4 bg-white shadow-xl rounded-2xl px-6 py-4 border border-gold/20">
                                <div className="font-playfair text-3xl font-bold text-gold">38+</div>
                                <div className="font-poppins text-xs text-gray-500 uppercase tracking-wider">Years Legacy</div>
                            </div>
                        </div>

                        {/* Content */}
                        <div>
                            <span className="text-gold font-poppins text-sm font-medium tracking-[0.3em] uppercase">Our Story</span>
                            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-6">
                                A Legacy of<br />Timeless Beauty
                            </h2>
                            <div className="luxury-divider-left mb-6"></div>
                            <p className="font-poppins text-gray-600 leading-relaxed mb-4">
                                Since 1985, Patel Jwellers has been crafting extraordinary pieces that celebrate
                                life's most precious moments. Our master artisans blend age-old techniques with
                                contemporary design to create jewellery that transcends time.
                            </p>
                            <p className="font-poppins text-gray-600 leading-relaxed mb-8">
                                Every gemstone is hand-selected, every setting meticulously crafted, and every
                                piece finished to perfection. We don't just create jewellery — we create heirlooms.
                            </p>
                            <Button to="/about" variant="primary" size="md">
                                Read Our Story
                                <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* ==================== CTA / WhatsApp Enquiry ==================== */}
            <section className="relative py-24 overflow-hidden">
                {/* Background */}
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1515562141589-67f0d1d55b60?w=1920&h=600&fit=crop"
                        alt="Jewellery background"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-950/95 to-gray-900/90"></div>
                </div>

                <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
                    <span className="inline-block px-5 py-1.5 border border-gold/40 rounded-full text-gold-300 font-poppins text-xs tracking-[0.3em] uppercase mb-6">
                        Get in Touch
                    </span>
                    <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                        Have Something in Mind?
                    </h2>
                    <p className="font-poppins text-gray-300 text-lg max-w-2xl mx-auto mb-10">
                        Whether you're looking for the perfect engagement ring or a custom bridal set,
                        our experts are here to help. Reach out to us on WhatsApp for instant assistance.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button
                            href="https://wa.me/918200405932?text=Hi! I'd like to enquire about your jewellery collection."
                            variant="whatsapp"
                            size="lg"
                        >
                            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                            Chat on WhatsApp
                        </Button>
                        <Button to="/contact" variant="secondary" size="lg" className="!border-white/30 !text-white hover:!bg-white hover:!text-gray-900">
                            Visit Our Store
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home
