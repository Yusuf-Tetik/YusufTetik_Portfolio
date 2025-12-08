import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleNav = (sectionId) => {
    if (location.pathname !== '/') {
      navigate('/')
      setTimeout(() => scrollToSection(sectionId), 120)
    } else {
      scrollToSection(sectionId)
    }
  }

  const navLinks = [
    { id: 'hero', label: 'Ana Sayfa' },
    { id: 'about', label: 'Hakkımda' },
    { id: 'skills', label: 'Yetenekler' },
    { id: 'projects', label: 'Projeler' },
    { id: 'experience', label: 'Deneyim' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-xl font-bold text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
            >
              Yusuf Tetik
            </button>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNav(link.id)}
                  className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 px-3 py-2 text-sm font-medium transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => handleNav('hero')}
              className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 px-3 py-2 text-sm font-medium"
            >
              Menü
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

