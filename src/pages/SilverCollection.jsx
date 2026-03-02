import { useState } from 'react'
import { Link } from 'react-router-dom'

// ── Silver Ladies collection circles ──────────────────────────────────────
const ladiesItems = [
    { id: 1, name: 'Kandora', slug: 'kandora', emoji: '🌸', color: '#b0b8c1' },
    { id: 2, name: 'Mangalsutra', slug: 'mangalsutra', emoji: '🪙', color: '#9badb7' },
    { id: 3, name: 'Ring', slug: 'ring', emoji: '💍', color: '#c0c8d0' },
    { id: 4, name: 'Bracelet', slug: 'bracelet', emoji: '💫', color: '#a8b4be' },
    { id: 5, name: 'Mala', slug: 'mala', emoji: '📿', color: '#b8c4cc' },
    { id: 6, name: 'Chain', slug: 'chain', emoji: '⛓️', color: '#9badb7' },
    { id: 7, name: 'Ear Ring', slug: 'ear-ring', emoji: '💎', color: '#c0c8d0' },
    { id: 8, name: 'Necklace', slug: 'necklace', emoji: '✨', color: '#a8b4be' },
    { id: 9, name: 'Zanzari', slug: 'zanzari', emoji: '🔔', color: '#b0b8c1' },
    { id: 10, name: 'Payal', slug: 'payal', emoji: '🎶', color: '#9badb7' },
    { id: 11, name: 'Watch', slug: 'watch', emoji: '⌚', color: '#8899a6' },
]

// ── Silver Gents collection circles ───────────────────────────────────────
const gentsItems = [
    { id: 1, name: 'Ring', slug: 'ring', emoji: '💍', color: '#8899a6' },
    { id: 2, name: 'Laki', slug: 'laki', emoji: '🪙', color: '#9badb7' },
    { id: 3, name: 'Rolex Kada', slug: 'rolex-kada', emoji: '🔱', color: '#7a8e9b' },
    { id: 4, name: 'Mala', slug: 'mala', emoji: '📿', color: '#b0b8c1' },
    { id: 5, name: 'Rudraksha Mala', slug: 'rudraksha-mala', emoji: '🌿', color: '#8899a6' },
    { id: 6, name: 'Chain', slug: 'chain', emoji: '⛓️', color: '#9badb7' },
    { id: 7, name: 'Watch', slug: 'watch', emoji: '⌚', color: '#7a8e9b' },
]

const tabs = [
    { key: 'ladies', label: 'Ladies' },
    { key: 'gents', label: 'Gents' },
    { key: 'kids', label: 'Kids' },
]

function CircleGrid({ items, baseRoute }) {
    return (
        <div className="gold-col-grid">
            {items.map((item) => (
                <Link
                    key={item.id}
                    to={`${baseRoute}/${item.slug}`}
                    className="gold-col-item"
                    style={{ textDecoration: 'none' }}
                >
                    <div
                        className="gold-col-circle"
                        style={{
                            background: `radial-gradient(circle at 35% 35%, ${item.color}dd, ${item.color}88 70%, #6b828e44)`,
                        }}
                    >
                        <span className="gold-col-emoji">{item.emoji}</span>
                    </div>
                    <p className="gold-col-label">{item.name}</p>
                </Link>
            ))}
        </div>
    )
}

function ComingSoon({ tab }) {
    return (
        <div className="gold-col-coming-soon">
            <div className="gold-col-cs-icon">🏗️</div>
            <h3 className="gold-col-cs-title">{tab} Collection</h3>
            <p className="gold-col-cs-sub">Coming Soon — Stay tuned!</p>
        </div>
    )
}

export default function SilverCollection() {
    const [activeTab, setActiveTab] = useState('ladies')

    const tabConfig = {
        ladies: { title: 'Ladies Silver Collection', eyebrow: 'Ladies', items: ladiesItems, route: '/silver/ladies' },
        gents: { title: 'Gents Silver Collection', eyebrow: 'Gents', items: gentsItems, route: '/silver/gents' },
        kids: null,
    }

    const current = tabConfig[activeTab]

    return (
        <div className="gold-col-page">
            {/* ── Hero Banner ── */}
            <section className="relative h-72 md:h-96 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=1920&h=400&fit=crop"
                        alt="Silver Collection"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-900/75 via-slate-900/55 to-slate-900/75" />
                </div>
                <div className="relative z-10 text-center px-4">
                    <Link to="/" className="inline-block text-slate-300 hover:text-white font-poppins text-sm mb-4 transition-colors">
                        ← Back to Home
                    </Link>
                    <div className="font-poppins text-slate-300 text-xs tracking-[0.3em] uppercase mb-2">
                        Patel Jwellers
                    </div>
                    <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3">
                        Silver <span style={{ color: '#c0c8d0' }}>Collections</span>
                    </h1>
                    <p className="font-poppins text-white/70 text-base max-w-md mx-auto">
                        Explore our sterling silver jewellery crafted with elegance and tradition
                    </p>
                </div>
            </section>

            {/* ── Tab Switcher ── */}
            <section className="gold-col-tabs-section">
                <div className="gold-col-tabs-wrapper">
                    {tabs.map((tab) => (
                        <button
                            key={tab.key}
                            className={`gold-col-tab-btn${activeTab === tab.key ? ' active' : ''}`}
                            onClick={() => setActiveTab(tab.key)}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>
            </section>

            {/* ── Collection Grid ── */}
            <section className="gold-col-grid-section">
                <div className="gold-col-container">
                    {current ? (
                        <>
                            <div className="gold-col-section-header">
                                <span className="gold-col-section-eyebrow">{current.eyebrow}</span>
                                <h2 className="gold-col-section-title">{current.title}</h2>
                                <div className="gold-col-divider" />
                                <p className="gc-hint">Tap any category to browse its products</p>
                            </div>
                            <CircleGrid items={current.items} baseRoute={current.route} />
                        </>
                    ) : (
                        <ComingSoon tab="Kids" />
                    )}
                </div>
            </section>
        </div>
    )
}
