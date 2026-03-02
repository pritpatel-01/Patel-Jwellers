import { useState } from 'react'
import { Link } from 'react-router-dom'

// ── Ladies collection circles ──────────────────────────────────────────────
const ladiesItems = [
    { id: 1, name: 'Har', slug: 'har', emoji: '📿', color: '#f9c74f' },
    { id: 2, name: 'Zalar', slug: 'zalar', emoji: '✨', color: '#f8961e' },
    { id: 3, name: 'Dokiyu', slug: 'dokiyu', emoji: '💛', color: '#f3722c' },
    { id: 4, name: 'Kangan', slug: 'kangan', emoji: '💍', color: '#f9c74f' },
    { id: 5, name: 'Pendant Set', slug: 'pendant-set', emoji: '🔮', color: '#90be6d' },
    { id: 6, name: 'Chokar', slug: 'chokar', emoji: '💫', color: '#f8961e' },
    { id: 7, name: 'Mangalsutra', slug: 'mangalsutra', emoji: '🪙', color: '#ffd166' },
    { id: 8, name: 'Mala', slug: 'mala', emoji: '📿', color: '#f3722c' },
    { id: 9, name: 'Short Mangalsutra', slug: 'short-mangalsutra', emoji: '🪙', color: '#f9844a' },
    { id: 10, name: 'Ear Rings', slug: 'ear-rings', emoji: '💎', color: '#43aa8b' },
    { id: 11, name: 'Tanmaniya', slug: 'tanmaniya', emoji: '✨', color: '#f9c74f' },
    { id: 12, name: 'Pendant', slug: 'pendant', emoji: '🔮', color: '#f8961e' },
    { id: 13, name: 'Pochi', slug: 'pochi', emoji: '💛', color: '#4d908e' },
    { id: 14, name: 'Long Set', slug: 'long-set', emoji: '📿', color: '#f3722c' },
    { id: 15, name: 'Dana', slug: 'dana', emoji: '🪙', color: '#f9c74f' },
    { id: 16, name: 'Chudo', slug: 'chudo', emoji: '💍', color: '#f8961e' },
    { id: 17, name: 'Bracelet', slug: 'bracelet', emoji: '💫', color: '#90be6d' },
    { id: 18, name: 'Chain', slug: 'chain', emoji: '⛓️', color: '#f9844a' },
    { id: 19, name: 'Copper Kadli', slug: 'copper-kadli', emoji: '🔶', color: '#b5838d' },
    { id: 20, name: 'Watch', slug: 'watch', emoji: '⌚', color: '#6d6875' },
    { id: 21, name: 'Ring', slug: 'ring', emoji: '💍', color: '#f9c74f' },
]

// ── Gents collection circles ───────────────────────────────────────────────
const gentsItems = [
    { id: 1, name: 'Spring Balt Bracelet', slug: 'spring-bolt-bracelet', emoji: '🔩', color: '#c5a047' },
    { id: 2, name: 'Bracelet', slug: 'bracelet', emoji: '💪', color: '#b8860b' },
    { id: 3, name: 'Watch', slug: 'watch', emoji: '⌚', color: '#8b6914' },
    { id: 4, name: 'Ring', slug: 'ring', emoji: '💍', color: '#c5a047' },
    { id: 5, name: 'Chain', slug: 'chain', emoji: '⛓️', color: '#d4a017' },
    { id: 6, name: 'Mala', slug: 'mala', emoji: '📿', color: '#b8860b' },
    { id: 7, name: 'Rudraksha Mala', slug: 'rudraksha-mala', emoji: '🌿', color: '#8b6914' },
    { id: 8, name: 'Kada', slug: 'kada', emoji: '🔱', color: '#c5a047' },
    { id: 9, name: 'Pendant', slug: 'pendant', emoji: '🔮', color: '#d4a017' },
]

// ── Tab definitions ────────────────────────────────────────────────────────
const tabs = [
    { key: 'ladies', label: 'Ladies' },
    { key: 'gents', label: 'Gents' },
    { key: 'kids', label: 'Kids' },
]

// ── Circular link item ─────────────────────────────────────────────────────
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
                            background: `radial-gradient(circle at 35% 35%, ${item.color}cc, ${item.color}55 70%, #b8860b33)`,
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

// ── Coming Soon placeholder ────────────────────────────────────────────────
function ComingSoon({ tab }) {
    return (
        <div className="gold-col-coming-soon">
            <div className="gold-col-cs-icon">🏗️</div>
            <h3 className="gold-col-cs-title">{tab} Collection</h3>
            <p className="gold-col-cs-sub">Coming Soon — Stay tuned!</p>
        </div>
    )
}

// ── Main Page ──────────────────────────────────────────────────────────────
export default function GoldCollection() {
    const [activeTab, setActiveTab] = useState('ladies')

    const tabConfig = {
        ladies: { title: 'Ladies Gold Collection', eyebrow: 'Ladies', hint: 'Tap any category to browse its products', items: ladiesItems, route: '/gold/ladies' },
        gents: { title: 'Gents Gold Collection', eyebrow: 'Gents', hint: 'Tap any category to browse its products', items: gentsItems, route: '/gold/gents' },
        kids: null,
    }

    const current = tabConfig[activeTab]

    return (
        <div className="gold-col-page">
            {/* ── Hero Banner ── */}
            <section className="gold-col-hero">
                <div className="gold-col-hero-overlay" />
                <div className="gold-col-hero-content">
                    <Link to="/" className="gold-col-back-link">← Back to Home</Link>
                    <span className="gold-col-eyebrow">Patel Jwellers</span>
                    <h1 className="gold-col-hero-title">
                        Gold <span className="gold-col-accent">Collections</span>
                    </h1>
                    <p className="gold-col-hero-sub">
                        Explore our fine gold jewellery crafted with love and tradition
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
                                <p className="gc-hint">{current.hint}</p>
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
