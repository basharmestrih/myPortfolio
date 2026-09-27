import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import Header from './components/Header'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  const { i18n } = useTranslation()
  const [activeSection, setActiveSection] = useState('about')

  return (
    <div className="bg-gray-950 min-h-screen text-white">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <main className="pt-20">
        {activeSection === 'about' && <About />}
        {activeSection === 'experience' && <Experience />}
        {activeSection === 'projects' && <Projects />}
        {activeSection === 'contact' && <Contact />}
      </main>

      <footer className="border-t border-gray-800 py-8 px-4 text-center text-gray-400 mt-20">
        <p>&copy; 2024 All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
