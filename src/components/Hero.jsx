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
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => window.open('/cv.pdf', '_blank')}
            className="px-8 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 transition-colors shadow-lg hover:shadow-xl"
          >
            CV'yi İndir
          </button>
          <button
            onClick={() => scrollToSection('projects')}
            className="px-8 py-3 bg-white dark:bg-gray-800 text-primary-600 dark:text-primary-400 border-2 border-primary-600 dark:border-primary-400 rounded-lg font-semibold hover:bg-primary-50 dark:hover:bg-gray-700 transition-colors"
          >
            Projeleri Gör
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero

