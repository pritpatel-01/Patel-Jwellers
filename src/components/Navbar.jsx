import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
]

function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const location = useLocation()

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        setIsOpen(false)
    }, [location])

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                ? 'bg-white/95 backdrop-blur-md shadow-lg py-3'
                : 'bg-transparent py-5'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-3 group">
                        <img src="/logo.jpeg" alt="Patel Jwellers Logo" className="w-11 h-11 rounded-lg object-contain bg-white p-0.5 shadow-lg group-hover:shadow-gold-400/40 transition-shadow duration-300" />
                        <span className={`font-playfair text-2xl font-bold tracking-wide transition-colors duration-300 ${scrolled ? 'text-gray-900' : 'text-white'
                            }`}>
                            Patel Jwellers
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`relative font-poppins text-sm font-medium tracking-wider uppercase transition-colors duration-300 group ${location.pathname === link.path
                                    ? scrolled ? 'text-gold' : 'text-gold-300'
                                    : scrolled ? 'text-gray-700 hover:text-gold' : 'text-white/90 hover:text-white'
                                    }`}
                            >
                                {link.name}
                                <span
                                    className={`absolute -bottom-1 left-0 h-0.5 bg-gold transition-all duration-300 ${location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'
                                        }`}
                                />
                            </Link>
                        ))}
                        <Link
                            to="/contact"
                            className="ml-2 px-6 py-2.5 bg-gradient-to-r from-gold-500 to-gold-600 text-white font-poppins text-sm font-medium rounded-full hover:from-gold-600 hover:to-gold-700 transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-gold-400/30 transform hover:-translate-y-0.5"
                        >
                            Enquire Now
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className={`md:hidden p-2 rounded-lg transition-colors duration-300 ${scrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
                            }`}
                        aria-label="Toggle menu"
                    >
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            {isOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
                        }`}
                >
                    <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-xl p-6 space-y-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`block px-4 py-3 rounded-xl font-poppins text-sm font-medium tracking-wide transition-all duration-200 ${location.pathname === link.path
                                    ? 'bg-gold-50 text-gold-700'
                                    : 'text-gray-700 hover:bg-gray-50 hover:text-gold'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            to="/contact"
                            className="block mt-3 px-4 py-3 bg-gradient-to-r from-gold-500 to-gold-600 text-white text-center font-poppins text-sm font-medium rounded-xl shadow-md"
                        >
                            Enquire Now
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
