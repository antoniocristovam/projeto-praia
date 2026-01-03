import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const menuItems = [
    { label: 'Início', href: '#hero' },
    { label: 'Sobre', href: '#about' },
    { label: 'Acomodações', href: '#accommodations' },
    { label: 'Experiência', href: '#experience' },
    { label: 'Localização', href: '#location' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-effect shadow-lg py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="section-padding container-width">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="flex items-center space-x-2">
            <div className="text-2xl md:text-3xl font-display font-bold">
              <span className={isScrolled ? 'text-ocean-600' : 'text-white drop-shadow-lg'}>
                Prive
              </span>
              <span className={isScrolled ? 'text-ocean-800' : 'text-white/90 drop-shadow-lg'}>
                {' '}Beach
              </span>
            </div>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`font-medium transition-colors hover:text-ocean-500 ${
                  isScrolled ? 'text-gray-700' : 'text-white drop-shadow'
                }`}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#accommodations"
              className={`btn-primary ${!isScrolled && 'shadow-xl'}`}
            >
              Reservar Agora
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 ${isScrolled ? 'text-gray-700' : 'text-white'}`}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-6 pb-6 glass-effect rounded-2xl p-6 animate-fade-in">
            <div className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-gray-700 font-medium hover:text-ocean-600 transition-colors py-2"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#accommodations"
                onClick={() => setIsMobileMenuOpen(false)}
                className="btn-primary text-center"
              >
                Reservar Agora
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar

