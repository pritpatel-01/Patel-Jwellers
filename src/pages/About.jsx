import Button from '../components/Button'

const values = [
    {
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
        ),
        title: 'Certified Purity',
        description: 'Every piece comes with BIS hallmark certification guaranteeing authentic gold and precious metals.',
    },
    {
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
            </svg>
        ),
        title: 'Master Craftsmanship',
        description: 'Our artisans carry decades of expertise, creating intricate designs that blend tradition with innovation.',
    },
    {
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
        ),
        title: 'Customer First',
        description: 'From personalized consultations to after-sale support, your happiness is our top priority.',
    },
    {
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
        title: 'Fair Pricing',
        description: 'Transparent pricing with no hidden charges. We offer competitive rates on all our jewellery.',
    },
]

function About() {
    return (
        <div>
            {/* Hero Banner */}
            <section className="relative h-72 md:h-80 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=1920&h=400&fit=crop"
                        alt="About Patel Jwellers"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50"></div>
                </div>
                <div className="relative z-10 text-center px-4">
                    <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3">
                        Our Story
                    </h1>
                    <p className="font-poppins text-white/70 text-lg max-w-xl mx-auto">
                        A legacy of elegance, craftsmanship, and trust
                    </p>
                </div>
            </section>

            {/* Story Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        {/* Image Composition */}
                        <div className="relative">
                            <div className="rounded-2xl overflow-hidden shadow-2xl">
                                <img
                                    src="https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=800&h=600&fit=crop"
                                    alt="Our jewellery workshop"
                                    loading="lazy"
                                    className="w-full h-[450px] object-cover"
                                />
                            </div>
                            <div className="absolute -bottom-6 -right-6 w-40 h-40 border-2 border-gold/30 rounded-2xl -z-10"></div>
                        </div>

                        {/* Content */}
                        <div>
                            <span className="text-gold font-poppins text-sm font-medium tracking-[0.3em] uppercase">Since 1985</span>
                            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-6">
                                Crafting Dreams<br />Into Reality
                            </h2>
                            <div className="luxury-divider-left mb-6"></div>
                            <div className="space-y-4 font-poppins text-gray-600 leading-relaxed">
                                <p>
                                    Patel Jwellers began as a small family workshop in the heart of Junagadh,
                                    founded with a vision to create jewellery that
                                    captures the essence of Indian artistry while embracing modern elegance.
                                </p>
                                <p>
                                    Over nearly four decades, we have grown into one of the most trusted names in
                                    the jewellery industry. Our commitment to quality, authenticity, and customer
                                    satisfaction has remained unchanged since day one.
                                </p>
                                <p>
                                    Today, the second generation continues the legacy, combining traditional
                                    craftsmanship with cutting-edge design technology to bring you pieces that
                                    are truly one of a kind.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Values */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <span className="text-gold font-poppins text-sm font-medium tracking-[0.3em] uppercase">What We Believe</span>
                        <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-4">
                            Our Values
                        </h2>
                        <div className="luxury-divider"></div>
                    </div>

                    {/* Values Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-xl border border-gray-100 hover:border-gold-200 transition-all duration-500 group transform hover:-translate-y-2"
                            >
                                <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-gold-50 text-gold flex items-center justify-center group-hover:bg-gold group-hover:text-white transition-all duration-300">
                                    {value.icon}
                                </div>
                                <h3 className="font-playfair text-xl font-semibold text-gray-900 mb-3">
                                    {value.title}
                                </h3>
                                <p className="font-poppins text-gray-500 text-sm leading-relaxed">
                                    {value.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Store Image / Visit Us */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                        <img
                            src="https://images.unsplash.com/photo-1600003014755-ba31aa59c4b6?w=1200&h=500&fit=crop"
                            alt="Patel Jwellers Store"
                            loading="lazy"
                            className="w-full h-[400px] md:h-[500px] object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent"></div>
                        <div className="absolute inset-0 flex items-center">
                            <div className="px-8 md:px-16 max-w-lg">
                                <h2 className="font-playfair text-3xl md:text-4xl font-bold text-white mb-4">
                                    Visit Our Showroom
                                </h2>
                                <p className="font-poppins text-gray-300 text-sm leading-relaxed mb-6">
                                    Experience our collections in person. Our knowledgeable staff provides
                                    personalized guidance to help you find the perfect piece.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-3">
                                    <Button to="/contact" variant="primary" size="md">
                                        Get Directions
                                    </Button>
                                    <Button
                                        href="https://wa.me/918200405932?text=Hi! I'd like to visit your showroom. What are your timings?"
                                        variant="whatsapp"
                                        size="md"
                                    >
                                        Book Visit
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About
