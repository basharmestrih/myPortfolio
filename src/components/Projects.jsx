import { useTranslation } from 'react-i18next'
import { projectsData } from '../constants/data'

export default function Projects() {
  const { t } = useTranslation()

  return (
    <section className="section-padding bg-gray-950">
      <div className="max-container">
        <h2 className="text-5xl sm:text-6xl font-black mb-16 text-white">
          {t('projects.title')}
        </h2>

        <div className="space-y-8">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch"
            >
              {/* Image on left for odd projects, right for even */}
              <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="card h-full overflow-hidden group">
                  <div className="w-full h-64 sm:h-80 bg-gray-900 rounded-lg flex items-center justify-center overflow-hidden p-0">
                    <img
                      src={t(`projects.items.${index}.imageUrl`) || 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop'}
                      alt={t(`projects.items.${index}.name`)}
                      className="w-full h-full object-contain transition-transform duration-300"
                    />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="card card-hover h-full">
                  <h3 className="text-3xl sm:text-4xl font-black text-white mb-4">
                    {t(`projects.items.${index}.name`)}
                  </h3>

                  <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-6">
                    {t(`projects.items.${index}.description`)}
                  </p>

                  <div className="mb-6 border-t border-gray-700 pt-6">
                    <p className="text-gray-400 text-sm font-semibold mb-3 uppercase tracking-wide">
                      {t('projects.frameworks')}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {t(`projects.items.${index}.frameworks`, { returnObjects: true }).map((framework, idx) => (
                        <span
                          key={idx}
                          className="bg-transparent text-[var(--accent)] font-bold text-sm px-4 py-2 rounded-lg border border-[var(--accent-50)]"
                        >
                          {framework}
                        </span>
                      ))}
                    </div>
                  </div>

                  <a
                    href={t(`projects.items.${index}.link`) || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 bg-[var(--accent)] hover:bg-[var(--accent)] text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg shadow-[var(--accent-50)] hover:shadow-[var(--accent-75)]"
                  >
                    {t('projects.viewProject')}
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
