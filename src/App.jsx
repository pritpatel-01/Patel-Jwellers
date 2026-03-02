import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WhatsAppFAB from './components/WhatsAppFAB'
import Home from './pages/Home'
import Products from './pages/Products'
import About from './pages/About'
import Contact from './pages/Contact'
import GoldCollection from './pages/GoldCollection'
import LadiesItemPage from './pages/LadiesItemPage'
import GentsItemPage from './pages/GentsItemPage'
import SilverCollection from './pages/SilverCollection'
import SilverLadiesItemPage from './pages/SilverLadiesItemPage'
import SilverGentsItemPage from './pages/SilverGentsItemPage'
import RoseGoldCollection from './pages/RoseGoldCollection'
import RoseGoldItemPage from './pages/RoseGoldItemPage'

function ScrollToTop() {
    const { pathname } = useLocation()
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname])
    return null
}

function App() {
    return (
        <div className="flex flex-col min-h-screen">
            <ScrollToTop />
            <Navbar />
            <main className="flex-grow">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/gold-collection" element={<GoldCollection />} />
                    <Route path="/gold/ladies/:item" element={<LadiesItemPage />} />
                    <Route path="/gold/gents/:item" element={<GentsItemPage />} />
                    <Route path="/silver-collection" element={<SilverCollection />} />
                    <Route path="/silver/ladies/:item" element={<SilverLadiesItemPage />} />
                    <Route path="/silver/gents/:item" element={<SilverGentsItemPage />} />
                    <Route path="/rose-gold-collection" element={<RoseGoldCollection />} />
                    <Route path="/rose-gold/:item" element={<RoseGoldItemPage />} />
                </Routes>
            </main>
            <Footer />
            <WhatsAppFAB />
        </div>
    )
}

export default App
