import { useState } from 'react'
import Button from '../components/Button'

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        message: '',
    })
    const [submitted, setSubmitted] = useState(false)

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // In production, you'd send this to an API
        console.log('Form submitted:', formData)
        setSubmitted(true)
        setTimeout(() => {
            setSubmitted(false)
            setFormData({ name: '', phone: '', message: '' })
        }, 3000)
    }

    return (
        <div>
            {/* Hero Banner */}
            <section className="relative h-72 md:h-80 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=1920&h=400&fit=crop"
                        alt="Contact Patel Jwellers"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50"></div>
                </div>
                <div className="relative z-10 text-center px-4">
                    <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3">
                        Contact Us
                    </h1>
                    <p className="font-poppins text-white/70 text-lg max-w-xl mx-auto">
                        We'd love to hear from you
                    </p>
                </div>
            </section>

            {/* Contact Content */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-5 gap-12">
                        {/* Contact Info */}
                        <div className="lg:col-span-2">
                            <span className="text-gold font-poppins text-sm font-medium tracking-[0.3em] uppercase">Get in Touch</span>
                            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-6">
                                Let's Connect
                            </h2>
                            <div className="luxury-divider-left mb-8"></div>

                            <p className="font-poppins text-gray-600 leading-relaxed mb-10">
                                Whether you have a question about our collections, need help choosing the
                                perfect gift, or want to schedule a private viewing, we're here to help.
                            </p>

                            {/* Contact Details */}
                            <div className="space-y-6">
                                <div className="flex items-start gap-4 group">
                                    <div className="w-12 h-12 rounded-xl bg-gold-50 text-gold flex items-center justify-center flex-shrink-0 group-hover:bg-gold group-hover:text-white transition-all duration-300">
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-poppins font-semibold text-gray-900 text-sm mb-1">Our Store</h4>
                                        <p className="font-poppins text-gray-500 text-sm">Shop No.2, Dharmbhakti Apartment,<br />Giriraj Main Road, Junagadh 362001</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 group">
                                    <div className="w-12 h-12 rounded-xl bg-gold-50 text-gold flex items-center justify-center flex-shrink-0 group-hover:bg-gold group-hover:text-white transition-all duration-300">
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-poppins font-semibold text-gray-900 text-sm mb-1">Phone</h4>
                                        <a href="tel:+918200405932" className="font-poppins text-gray-500 text-sm hover:text-gold transition-colors">+91 82004 05932</a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 group">
                                    <div className="w-12 h-12 rounded-xl bg-gold-50 text-gold flex items-center justify-center flex-shrink-0 group-hover:bg-gold group-hover:text-white transition-all duration-300">
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-poppins font-semibold text-gray-900 text-sm mb-1">Email</h4>
                                        <a href="mailto:pritpatel1777@gmail.com" className="font-poppins text-gray-500 text-sm hover:text-gold transition-colors">pritpatel1777@gmail.com</a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 group">
                                    <div className="w-12 h-12 rounded-xl bg-gold-50 text-gold flex items-center justify-center flex-shrink-0 group-hover:bg-gold group-hover:text-white transition-all duration-300">
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-poppins font-semibold text-gray-900 text-sm mb-1">Business Hours</h4>
                                        <p className="font-poppins text-gray-500 text-sm">Mon - Sat: 10:00 AM - 8:00 PM<br />Sunday: 11:00 AM - 6:00 PM</p>
                                    </div>
                                </div>
                            </div>

                            {/* WhatsApp Button */}
                            <div className="mt-10">
                                <Button
                                    href="https://wa.me/918200405932?text=Hi! I'd like to enquire about your jewellery collection."
                                    variant="whatsapp"
                                    size="lg"
                                    className="w-full sm:w-auto"
                                >
                                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                    </svg>
                                    Chat on WhatsApp
                                </Button>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="lg:col-span-3">
                            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10 border border-gray-100">
                                <h3 className="font-playfair text-2xl font-bold text-gray-900 mb-2">
                                    Send us a Message
                                </h3>
                                <p className="font-poppins text-gray-500 text-sm mb-8">
                                    Fill in the form below and we'll get back to you shortly.
                                </p>

                                {submitted ? (
                                    <div className="text-center py-12 animate-scale-in">
                                        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
                                            <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <h4 className="font-playfair text-2xl font-bold text-gray-900 mb-2">Thank You!</h4>
                                        <p className="font-poppins text-gray-500">We'll get back to you within 24 hours.</p>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div>
                                            <label htmlFor="name" className="block font-poppins text-sm font-medium text-gray-700 mb-2">
                                                Full Name
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                placeholder="Enter your full name"
                                                className="w-full px-5 py-3.5 bg-gray-50 border border-gray-200 rounded-xl font-poppins text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gold-400/50 focus:border-gold transition-all duration-300"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="phone" className="block font-poppins text-sm font-medium text-gray-700 mb-2">
                                                Phone Number
                                            </label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                required
                                                placeholder="+91 98765 43210"
                                                className="w-full px-5 py-3.5 bg-gray-50 border border-gray-200 rounded-xl font-poppins text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gold-400/50 focus:border-gold transition-all duration-300"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="message" className="block font-poppins text-sm font-medium text-gray-700 mb-2">
                                                Your Message
                                            </label>
                                            <textarea
                                                id="message"
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                required
                                                rows={5}
                                                placeholder="Tell us what you're looking for..."
                                                className="w-full px-5 py-3.5 bg-gray-50 border border-gray-200 rounded-xl font-poppins text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gold-400/50 focus:border-gold transition-all duration-300 resize-none"
                                            ></textarea>
                                        </div>
                                        <button
                                            type="submit"
                                            className="w-full py-4 bg-gradient-to-r from-gold-500 to-gold-600 text-white font-poppins font-medium rounded-xl hover:from-gold-600 hover:to-gold-700 transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-gold-400/30 transform hover:-translate-y-0.5 text-sm tracking-wide"
                                        >
                                            Send Message
                                        </button>
                                    </form>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Google Map */}
            <section className="h-[400px] md:h-[450px] relative">
                <iframe
                    title="Patel Jwellers Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3708.86!2d70.46!3d21.52!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDMxJzEyLjAiTiA3MMKwMjcnMzYuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="grayscale hover:grayscale-0 transition-all duration-700"
                ></iframe>
                {/* Map overlay card */}
                <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-6 max-w-xs hidden md:block">
                    <h4 className="font-playfair text-lg font-bold text-gray-900 mb-1">Patel Jwellers</h4>
                    <p className="font-poppins text-gray-500 text-xs mb-3">Shop No.2, Dharmbhakti Apartment, Giriraj Main Road, Junagadh</p>
                    <a
                        href="https://maps.google.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-gold text-xs font-poppins font-medium hover:text-gold-700 transition-colors"
                    >
                        Open in Google Maps
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                    </a>
                </div>
            </section>
        </div>
    )
}

export default Contact
