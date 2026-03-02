import { Link } from 'react-router-dom'

// ── Rose Gold collection circles ───────────────────────────────────────────
const items = [
    { id: 1, name: 'Ring', slug: 'ring', emoji: '💍', color: '#e8a0a0' },
    { id: 2, name: 'Chain', slug: 'chain', emoji: '⛓️', color: '#d4857a' },
    { id: 3, name: 'Tanmaniya', slug: 'tanmaniya', emoji: '🪙', color: '#e8a0a0' },
    { id: 4, name: 'Ear Rings', slug: 'ear-rings', emoji: '💎', color: '#c97070' },
    { id: 5, name: 'Chain Pendant', slug: 'chain-pendant', emoji: '🔮', color: '#d4857a' },
    { id: 6, name: 'Bracelet', slug: 'bracelet', emoji: '💫', color: '#e8a0a0' },
    { id: 7, name: 'Watch', slug: 'watch', emoji: '⌚', color: '#c97070' },
]

export default function RoseGoldCollection() {
    return (
        <div className="gold-col-page">
            {/* ── Hero Banner ── */}
            <section className="relative h-72 md:h-96 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=1920&h=400&fit=crop"
                        alt="Rose Gold Collection"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-rose-900/75 via-rose-900/55 to-rose-900/75" />
                </div>
                <div className="relative z-10 text-center px-4">
                    <Link to="/" className="inline-block text-rose-200 hover:text-white font-poppins text-sm mb-4 transition-colors">
                        ← Back to Home
                    </Link>
                    <div className="font-poppins text-rose-200 text-xs tracking-[0.3em] uppercase mb-2">
                        Patel Jwellers
                    </div>
                    <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3">
                        Rose Gold <span style={{ color: '#f4a0a0' }}>Collection</span>
                    </h1>
                    <p className="font-poppins text-white/70 text-base max-w-md mx-auto">
                        Romantic rose gold jewellery crafted for a modern, elegant touch
                    </p>
                </div>
            </section>

            {/* ── Collection Grid ── */}
            <section className="gold-col-grid-section">
                <div className="gold-col-container">
                    <div className="gold-col-section-header">
                        <span className="gold-col-section-eyebrow" style={{ color: '#d4857a' }}>Rose Gold</span>
                        <h2 className="gold-col-section-title">Browse by Category</h2>
                        <div className="gold-col-divider" style={{ background: 'linear-gradient(90deg, transparent, #d4857a, transparent)' }} />
                        <p className="gc-hint">Tap any category to browse its products</p>
                    </div>
                    <div className="gold-col-grid">
                        {items.map((item) => (
                            <Link
                                key={item.id}
                                to={`/rose-gold/${item.slug}`}
                                className="gold-col-item"
                                style={{ textDecoration: 'none' }}
                            >
                                <div
                                    className="gold-col-circle"
                                    style={{
                                        background: `radial-gradient(circle at 35% 35%, ${item.color}cc, ${item.color}66 70%, #c9707044)`,
                                        borderColor: 'rgba(212, 133, 122, 0.4)',
                                    }}
                                >
                                    <span className="gold-col-emoji">{item.emoji}</span>
                                </div>
                                <p className="gold-col-label">{item.name}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
