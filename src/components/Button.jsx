import { Link } from 'react-router-dom'

function Button({ children, to, href, variant = 'primary', size = 'md', className = '', ...props }) {
    const baseClasses = 'inline-flex items-center justify-center font-poppins font-medium rounded-full transition-all duration-300 transform hover:-translate-y-0.5'

    const variants = {
        primary: 'bg-gradient-to-r from-gold-500 to-gold-600 text-white hover:from-gold-600 hover:to-gold-700 shadow-md hover:shadow-lg hover:shadow-gold-400/30',
        secondary: 'bg-white text-gray-900 border-2 border-gold hover:bg-gold hover:text-white shadow-sm hover:shadow-md',
        outline: 'bg-transparent text-gold border-2 border-gold hover:bg-gold hover:text-white',
        dark: 'bg-gray-900 text-white hover:bg-gray-800 shadow-md hover:shadow-lg',
        whatsapp: 'bg-green-500 text-white hover:bg-green-600 shadow-md hover:shadow-lg',
    }

    const sizes = {
        sm: 'px-5 py-2 text-xs tracking-wide',
        md: 'px-7 py-3 text-sm tracking-wide',
        lg: 'px-9 py-4 text-base tracking-wider',
    }

    const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`

    if (to) {
        return (
            <Link to={to} className={classes} {...props}>
                {children}
            </Link>
        )
    }

    if (href) {
        return (
            <a href={href} className={classes} target="_blank" rel="noopener noreferrer" {...props}>
                {children}
            </a>
        )
    }

    return (
        <button className={classes} {...props}>
            {children}
        </button>
    )
}

export default Button
