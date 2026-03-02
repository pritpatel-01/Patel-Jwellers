const products = [
    // ── 22kt Gold ──────────────────────────────────────────────
    {
        id: 1,
        name: 'Royal Gold Necklace',
        category: '22kt Gold',
        image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=600&fit=crop',
        price: '₹1,25,000',
        description: 'Exquisite handcrafted 22K gold necklace with intricate filigree work. A timeless piece that embodies royal elegance.',
    },
    {
        id: 5,
        name: 'Gold Temple Earrings',
        category: '22kt Gold',
        image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=600&h=600&fit=crop',
        price: '₹45,000',
        description: 'Traditional gold temple earrings featuring Lakshmi motif. Hand-finished with antique gold patina.',
    },
    {
        id: 9,
        name: 'Gold Bangles Set',
        category: '22kt Gold',
        image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=600&h=600&fit=crop',
        price: '₹95,000',
        description: 'Set of six 22K gold bangles with delicate meenakari work. Perfect blend of tradition and contemporary style.',
    },

    // ── 18kt Gold ──────────────────────────────────────────────
    {
        id: 13,
        name: 'Gold Diamond Pendant Set',
        category: '18kt Gold',
        image: 'https://images.unsplash.com/photo-1515562141589-67f0d1d55b60?w=600&h=600&fit=crop',
        price: '₹1,65,000',
        description: 'Stunning 18K gold pendant necklace with solitaire diamond. Versatile piece for casual and formal occasions.',
    },
    {
        id: 14,
        name: 'Modern Gold Ring',
        category: '18kt Gold',
        image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&h=600&fit=crop',
        price: '₹55,000',
        description: 'Contemporary 18K gold ring with geometric design, perfect for everyday luxury.',
    },
    {
        id: 15,
        name: 'Gold Chain Bracelet',
        category: '18kt Gold',
        image: 'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=600&h=600&fit=crop',
        price: '₹78,000',
        description: 'Delicate 18K gold chain bracelet with lobster clasp. Lightweight and perfect for layering.',
    },

    // ── Rose Gold ──────────────────────────────────────────────
    {
        id: 16,
        name: 'Rose Gold Ring',
        category: 'Rose Gold',
        image: 'https://images.unsplash.com/photo-1607703703674-df96af81dffa?w=600&h=600&fit=crop',
        price: '₹42,000',
        description: 'Romantic rose gold solitaire ring, a symbol of modern love and elegance.',
    },
    {
        id: 17,
        name: 'Rose Gold Bangle',
        category: 'Rose Gold',
        image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=600&fit=crop',
        price: '₹68,000',
        description: 'Contemporary rose gold bangle with floral engraving. A perfect fusion of tradition and modernity.',
    },
    {
        id: 18,
        name: 'Rose Gold Earrings',
        category: 'Rose Gold',
        image: 'https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?w=600&h=600&fit=crop',
        price: '₹32,000',
        description: 'Delicate rose gold drop earrings with pearl accents. Effortless elegance for every occasion.',
    },

    // ── Silver ─────────────────────────────────────────────────
    {
        id: 3,
        name: 'Silver Charm Bracelet',
        category: 'Silver',
        image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&h=600&fit=crop',
        price: '₹15,000',
        description: 'Sterling silver charm bracelet with hand-selected charms. Lightweight, elegant, and perfect for everyday wear.',
    },
    {
        id: 7,
        name: 'Silver Oxidised Jhumka',
        category: 'Silver',
        image: 'https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?w=600&h=600&fit=crop',
        price: '₹8,500',
        description: 'Artisan-crafted oxidised silver jhumkas with intricate tribal motifs. Statement pieces with bohemian charm.',
    },
    {
        id: 11,
        name: 'Silver Anklet Pair',
        category: 'Silver',
        image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=600&h=600&fit=crop',
        price: '₹6,500',
        description: 'Handmade sterling silver anklets with tiny bell charms. Traditional yet modern design for everyday elegance.',
    },

    // ── Gold Coins & Biscuits ──────────────────────────────────
    {
        id: 19,
        name: '1g Gold Coin',
        category: 'Gold Coins',
        image: 'https://images.unsplash.com/photo-1610375461246-83df859d849d?w=600&h=600&fit=crop',
        price: '₹7,200',
        description: '24K pure certified gold coin weighing 1 gram. Perfect as a gift or investment. BIS hallmarked.',
    },
    {
        id: 20,
        name: '5g Gold Biscuit',
        category: 'Gold Coins',
        image: 'https://images.unsplash.com/photo-1610375461246-83df859d849d?w=600&h=600&fit=crop',
        price: '₹36,000',
        description: '24K pure 999 gold biscuit of 5 grams. Certified and hallmarked — ideal for gifting and investment.',
    },
    {
        id: 21,
        name: '10g Gold Biscuit',
        category: 'Gold Coins',
        image: 'https://images.unsplash.com/photo-1610375461246-83df859d849d?w=600&h=600&fit=crop',
        price: '₹72,000',
        description: 'Premium 24K 999 hallmarked gold biscuit of 10 grams. Trusted for investment and auspicious gifting.',
    },

    // ── Artificial Jewellery ───────────────────────────────────
    {
        id: 22,
        name: 'Kundan Necklace Set',
        category: 'Artificial',
        image: 'https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?w=600&h=600&fit=crop',
        price: '₹2,500',
        description: 'Vibrant Kundan necklace and earring set with colourful stones. Perfect for festivals and celebrations.',
    },
    {
        id: 23,
        name: 'Meenakari Bangles Set',
        category: 'Artificial',
        image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=600&h=600&fit=crop',
        price: '₹1,800',
        description: 'Traditional meenakari work bangles in vibrant colours. Lightweight and stunning for daily or festive wear.',
    },
    {
        id: 24,
        name: 'Oxidised Jhumka Set',
        category: 'Artificial',
        image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=600&h=600&fit=crop',
        price: '₹950',
        description: 'Intricately crafted oxidised fashion jhumkas with multicolor stones. Trendy and affordable ethnic jewellery.',
    },
]

export default products
