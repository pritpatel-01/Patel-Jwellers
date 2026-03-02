import { useParams, Link } from 'react-router-dom'
import { useState } from 'react'

// ── Unsplash silver jewellery images ──────────────────────────────────────
const IMG = {
    silver1: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=600&h=600&fit=crop',
    silver2: 'https://images.unsplash.com/photo-1624811533744-f85d5325d49c?w=600&h=600&fit=crop',
    silver3: 'https://images.unsplash.com/photo-1515562141589-67f0d1d55b60?w=600&h=600&fit=crop',
    ring1: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&h=600&fit=crop',
    ring2: 'https://images.unsplash.com/photo-1543294001-f7cd5d7fb516?w=600&h=600&fit=crop',
    ring3: 'https://images.unsplash.com/photo-1589124889073-263566ae5e4d?w=600&h=600&fit=crop',
    earring1: 'https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=600&h=600&fit=crop',
    earring2: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=600&h=600&fit=crop',
    necklace1: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=600&fit=crop',
    necklace2: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=600&fit=crop',
    necklace3: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&h=600&fit=crop',
    bracelet1: 'https://images.unsplash.com/photo-1631982690223-8aa4e575bf81?w=600&h=600&fit=crop',
    bracelet2: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&h=600&fit=crop',
    chain1: 'https://images.unsplash.com/photo-1589128777073-263566ae5e4d?w=600&h=600&fit=crop',
    chain2: 'https://images.unsplash.com/photo-1601821765780-754fa98637be?w=600&h=600&fit=crop',
    mala1: 'https://images.unsplash.com/photo-1610375461246-83df859d849d?w=600&h=600&fit=crop',
    mala2: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=600&h=600&fit=crop',
    watch1: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&h=600&fit=crop',
    watch2: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=600&h=600&fit=crop',
    anklet1: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=600&h=600&fit=crop',
    anklet2: 'https://images.unsplash.com/photo-1610694955371-d4a3e0ce4b52?w=600&h=600&fit=crop',
    ms1: 'https://images.unsplash.com/photo-1631982690223-8aa4e575bf81?w=600&h=600&fit=crop',
    ms2: 'https://images.unsplash.com/photo-1624811533744-f85d5325d49c?w=600&h=600&fit=crop',
}

const p = (name, price, image, desc) => ({ name, price, image, desc })

// ── All Silver Ladies data keyed by URL slug ───────────────────────────────
const silverLadiesData = {
    kandora: {
        display: 'Kandora',
        products: [
            p('Classic Silver Kandora', '₹4,500', IMG.silver1, 'Traditional silver kandora with intricate design'),
            p('Antique Silver Kandora', '₹6,200', IMG.silver2, 'Oxidised antique finish silver kandora'),
            p('Designer Kandora', '₹5,800', IMG.silver3, 'Designer silver kandora with floral pattern'),
            p('Plain Silver Kandora', '₹3,800', IMG.silver1, 'Simple polished plain silver kandora'),
            p('Oxidised Kandora', '₹5,200', IMG.silver2, 'Oxidised black finish silver kandora'),
        ],
    },
    mangalsutra: {
        display: 'Mangalsutra',
        products: [
            p('Traditional Silver MS', '₹3,200', IMG.ms1, 'Traditional black bead silver mangalsutra'),
            p('Modern Silver MS', '₹4,500', IMG.ms2, 'Modern slim design silver mangalsutra'),
            p('Diamond Cut Silver MS', '₹5,800', IMG.ms1, 'Diamond cut silver mangalsutra'),
            p('Short Silver MS', '₹2,800', IMG.ms2, 'Short contemporary silver mangalsutra for daily wear'),
        ],
    },
    ring: {
        display: 'Ring',
        products: [
            p('Plain Silver Ring', '₹800', IMG.ring1, 'Simple polished plain silver ring'),
            p('Stone Silver Ring', '₹1,500', IMG.ring2, 'Silver ring with semi-precious stone'),
            p('Oxidised Silver Ring', '₹1,200', IMG.ring3, 'Oxidised finish silver ring'),
            p('Floral Silver Ring', '₹1,100', IMG.ring1, 'Floral design silver ring'),
            p('Adjustable Silver Ring', '₹900', IMG.ring2, 'Adjustable silver band ring'),
        ],
    },
    bracelet: {
        display: 'Bracelet',
        products: [
            p('Silver Link Bracelet', '₹2,200', IMG.bracelet1, 'Classic silver link chain bracelet'),
            p('Charm Bracelet', '₹2,800', IMG.bracelet2, 'Silver charm bracelet'),
            p('Bangle Bracelet', '₹1,800', IMG.silver3, 'Silver bangle-style bracelet'),
            p('Adjustable Bracelet', '₹1,500', IMG.bracelet1, 'Adjustable silver bracelet with oxidised finish'),
            p('Stone Bracelet', '₹3,200', IMG.bracelet2, 'Silver bracelet with turquoise stone'),
        ],
    },
    mala: {
        display: 'Mala',
        products: [
            p('Silver Bead Mala', '₹5,500', IMG.mala1, 'Traditional silver bead mala necklace'),
            p('Oxidised Mala', '₹6,800', IMG.mala2, 'Oxidised silver mala with ethnic design'),
            p('Temple Silver Mala', '₹7,200', IMG.mala1, 'Temple design silver mala'),
            p('Light Silver Mala', '₹4,200', IMG.mala2, 'Lightweight silver mala for daily wear'),
        ],
    },
    chain: {
        display: 'Chain',
        products: [
            p('Box Silver Chain', '₹1,800', IMG.chain1, 'Classic box link silver chain'),
            p('Rope Silver Chain', '₹2,200', IMG.chain2, 'Rope pattern silver chain'),
            p('Figaro Silver Chain', '₹2,000', IMG.chain1, 'Figaro link silver chain'),
            p('Anklet Chain', '₹1,500', IMG.chain2, 'Delicate silver chain for anklet'),
            p('Snake Chain', '₹2,500', IMG.chain1, 'Sleek snake pattern silver chain'),
        ],
    },
    'ear-ring': {
        display: 'Ear Ring',
        products: [
            p('Jhumka Earrings', '₹1,800', IMG.earring1, 'Classic silver jhumka earrings'),
            p('Stud Earrings', '₹800', IMG.earring2, 'Silver stud earrings with crystal'),
            p('Hoop Earrings', '₹1,200', IMG.earring1, 'Silver hoop earrings'),
            p('Chandbali Earrings', '₹2,400', IMG.earring2, 'Chandbali style silver earrings'),
            p('Dangle Earrings', '₹1,600', IMG.earring1, 'Long drop dangle silver earrings'),
        ],
    },
    necklace: {
        display: 'Necklace',
        products: [
            p('Layered Silver Necklace', '₹3,500', IMG.necklace1, 'Multi-layered delicate silver necklace'),
            p('Pendant Necklace', '₹2,800', IMG.necklace2, 'Silver necklace with stone pendant'),
            p('Choker Necklace', '₹3,200', IMG.necklace3, 'Silver choker necklace'),
            p('Oxidised Necklace', '₹4,500', IMG.necklace1, 'Oxidised silver necklace with ethnic look'),
        ],
    },
    zanzari: {
        display: 'Zanzari',
        products: [
            p('Classic Silver Zanzari', '₹2,200', IMG.anklet1, 'Traditional silver zanzari anklet'),
            p('Beaded Zanzari', '₹2,800', IMG.anklet2, 'Silver zanzari with bead work'),
            p('Oxidised Zanzari', '₹3,200', IMG.anklet1, 'Oxidised silver zanzari set of 2'),
            p('Plain Silver Zanzari', '₹1,800', IMG.anklet2, 'Simple plain silver zanzari pair'),
            p('Designer Zanzari', '₹3,800', IMG.anklet1, 'Designer silver zanzari with motifs'),
        ],
    },
    payal: {
        display: 'Payal',
        products: [
            p('Classic Silver Payal', '₹2,500', IMG.anklet2, 'Traditional silver payal anklet pair'),
            p('Heavy Silver Payal', '₹4,200', IMG.anklet1, 'Heavy silver payal with ghungroo'),
            p('Thin Silver Payal', '₹1,800', IMG.anklet2, 'Thin delicate silver payal for daily wear'),
            p('Oxidised Silver Payal', '₹3,200', IMG.anklet1, 'Oxidised silver payal with leaf design'),
        ],
    },
    watch: {
        display: 'Watch',
        products: [
            p('Ladies Silver Watch', '₹5,500', IMG.watch1, 'Elegant ladies silver-tone watch'),
            p('Slim Silver Watch', '₹7,200', IMG.watch2, 'Ultra-slim ladies silver watch'),
            p('Crystal Silver Watch', '₹8,500', IMG.watch1, 'Ladies silver watch with crystal bezel'),
            p('Classic Silver Watch', '₹6,800', IMG.watch2, 'Classic round-face silver watch for ladies'),
        ],
    },
}

// ── Full product card ──────────────────────────────────────────────────────
function ProductCard({ product, category }) {
    const [loaded, setLoaded] = useState(false)
    const msg = encodeURIComponent(
        `Hi! I'm interested in the "${product.name}" (Silver Ladies – ${category}) priced at ${product.price}. Can you share more details?`
    )
    const waLink = `https://wa.me/918200405932?text=${msg}`

    return (
        <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:-translate-y-2 transform">
            <div className="relative aspect-square bg-gray-50 overflow-hidden">
                {!loaded && (
                    <div className="absolute inset-0 bg-gray-100 animate-pulse flex items-center justify-center">
                        <svg className="w-10 h-10 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                    </div>
                )}
                <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    onLoad={() => setLoaded(true)}
                    className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-105 ${loaded ? 'opacity-100' : 'opacity-0'}`}
                />
                <div className="absolute top-3 left-3 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-poppins font-semibold text-slate-600 shadow-sm">
                    {category}
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-all duration-500 flex items-center justify-center">
                    <span className="px-5 py-2 bg-white/90 text-gray-900 font-poppins text-sm font-medium rounded-full opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                        View Details
                    </span>
                </div>
            </div>
            <div className="p-5">
                <h3 className="font-playfair text-lg font-semibold text-gray-900 mb-1 group-hover:text-slate-600 transition-colors duration-300">
                    {product.name}
                </h3>
                <p className="text-gray-500 text-xs font-poppins leading-relaxed mb-4 line-clamp-2">
                    {product.desc}
                </p>
                <div className="flex items-center justify-between gap-2">
                    <span className="font-playfair text-xl font-bold text-slate-600">{product.price}</span>
                    <a
                        href={waLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 px-4 py-2 bg-green-500 hover:bg-green-600 text-white text-xs font-poppins font-semibold rounded-full transition-all duration-300 shadow-sm hover:shadow-md hover:scale-105"
                    >
                        <svg className="w-3.5 h-3.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                        Enquire
                    </a>
                </div>
            </div>
        </div>
    )
}

// ── Page ───────────────────────────────────────────────────────────────────
export default function SilverLadiesItemPage() {
    const { item } = useParams()
    const data = silverLadiesData[item]

    if (!data) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center gap-4">
                <h2 className="font-playfair text-3xl text-gray-700">Collection not found</h2>
                <Link to="/silver-collection" className="text-slate-600 hover:underline font-poppins">
                    ← Back to Silver Collection
                </Link>
            </div>
        )
    }

    return (
        <div>
            {/* ── Hero ── */}
            <section className="relative h-64 md:h-80 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=1920&h=400&fit=crop"
                        alt={data.display}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/50 to-slate-900/70" />
                </div>
                <div className="relative z-10 text-center px-4">
                    <Link
                        to="/silver-collection"
                        className="inline-block text-slate-300 hover:text-white font-poppins text-sm mb-3 transition-colors"
                    >
                        ← Ladies Silver Collection
                    </Link>
                    <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2">
                        {data.display}
                    </h1>
                    <p className="font-poppins text-white/70 text-base">
                        {data.products.length} design{data.products.length !== 1 ? 's' : ''} available
                    </p>
                </div>
            </section>

            {/* ── Products ── */}
            <section className="py-16 bg-gray-50 min-h-screen">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {data.products.map((product, i) => (
                            <div
                                key={i}
                                className="animate-fade-in-up"
                                style={{ animationDelay: `${i * 100}ms`, animationFillMode: 'both' }}
                            >
                                <ProductCard product={product} category={data.display} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
