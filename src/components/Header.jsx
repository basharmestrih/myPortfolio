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
    <header className="fixed left-3 right-3 top-3 z-50 rounded-3xl border border-gray-800 bg-gray-950/90 shadow-xl shadow-black/25 backdrop-blur-md sm:left-0 sm:right-0 sm:top-0 sm:rounded-none sm:border-x-0 sm:border-t-0 sm:shadow-none">
      <div className="max-container px-3 py-2 sm:px-4 sm:py-4">
        <nav className="flex sm:items-center sm:justify-between">
          <div className="hidden text-2xl font-bold text-[var(--accent)] sm:block">
            Portfolio
          </div>
          
          <ul className="grid w-full grid-cols-4 gap-1 sm:flex sm:w-auto">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => setActiveSection(item.id)}
                  className={`w-full rounded-lg px-2 py-2 text-xs font-bold transition-all duration-300 sm:w-auto sm:px-4 sm:text-base ${
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
