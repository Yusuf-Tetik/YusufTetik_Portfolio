import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'
import cvFile from '../YusufTetik_Cv (3).pdf'

function Hero() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6">
          Yusuf Tetik
        </h1>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-primary-600 dark:text-primary-400 mb-6">
          Junior Software Engineer
        </h2>
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
        Modern web teknolojileri ve yapay zekâ entegrasyonlarıyla yenilikçi, ölçeklenebilir web uygulamaları geliştiriyorum.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
          <button
            onClick={() => window.open(cvFile, '_blank')}
            className="px-8 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 transition-colors shadow-lg hover:shadow-xl"
          >
            CV'yi İndir
          </button>
          <button
            onClick={() => scrollToSection('experience')}
            className="px-8 py-3 bg-white dark:bg-gray-800 text-primary-600 dark:text-primary-400 border-2 border-primary-600 dark:border-primary-400 rounded-lg font-semibold hover:bg-primary-50 dark:hover:bg-gray-700 transition-colors"
          >
            Deneyimlerim
          </button>
        </div>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Bana bu kanallardan ulaşabilirsiniz;
        </p>
        <div className="flex justify-center gap-6">
          <a
            href="https://www.linkedin.com/in/yusuftetik/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/Yusuf-Tetik"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="mailto:yusuffttetik@gmail.com"
            className="text-3xl text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero

