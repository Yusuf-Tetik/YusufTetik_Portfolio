import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Footer from './components/Footer'
import ThemeToggle from './components/ThemeToggle'
import GymBuddy from './projects/GymBuddy'
import MindSense from './projects/MindSense'
import YakinDaNelerVar from './projects/YakinDaNelerVar'
import Yobex from './projects/Yobex'
import NestJsECommerceBackend from './projects/NestJsECommerceBackend'

function App() {
  const [darkMode, setDarkMode] = useState(true)

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    // Varsayılan dark mode, kullanıcı light seçtiyse light mode
    if (savedTheme === 'light') {
      setDarkMode(false)
      document.documentElement.classList.remove('dark')
    } else {
      setDarkMode(true)
      document.documentElement.classList.add('dark')
    }
  }, [])

  const toggleTheme = () => {
    const newDarkMode = !darkMode
    setDarkMode(newDarkMode)
    if (newDarkMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }

  const HomePage = () => (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
    </>
  )

  return (
    <div className="min-h-screen">
      <ThemeToggle darkMode={darkMode} toggleTheme={toggleTheme} />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects/gymbuddy" element={<GymBuddy />} />
          <Route path="/projects/mindsense" element={<MindSense />} />
          <Route path="/projects/yakindanelervar" element={<YakinDaNelerVar />} />
          <Route path="/projects/yobex" element={<Yobex />} />
          <Route path="/projects/nestjs-ecommerce-backend" element={<NestJsECommerceBackend />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App

