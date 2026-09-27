import { useTranslation } from 'react-i18next'

export default function Header({ activeSection, setActiveSection }) {
  const { t } = useTranslation()
  
  const navItems = [
    { id: 'about', label: t('nav.about') },
    { id: 'experience', label: t('nav.experience') },
    { id: 'projects', label: t('nav.projects') },
    { id: 'contact', label: t('nav.contact') },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 bg-gray-950/80 backdrop-blur-md border-b border-gray-800 z-50">
      <div className="max-container py-4 px-4">
        <nav className="flex justify-between items-center">
          <div className="text-2xl font-bold text-[var(--accent)]">
            Portfolio
          </div>
          
          <ul className="flex gap-1 sm:gap-2">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => setActiveSection(item.id)}
                  className={`px-4 py-2 rounded-lg font-bold text-sm sm:text-base transition-all duration-300 ${
                    activeSection === item.id
                      ? 'bg-[var(--accent)] text-white shadow-lg shadow-[var(--accent-50)]'
                      : 'text-gray-300 hover:text-white hover:bg-gray-800'
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
