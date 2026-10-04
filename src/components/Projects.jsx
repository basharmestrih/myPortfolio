import { useTranslation } from 'react-i18next'
import { projectsData } from '../constants/data'

export default function Projects() {
  const { t } = useTranslation()

  return (
    <section className="section-padding bg-gray-950">
      <div className="max-container">
        <h2 className="hidden text-5xl font-black text-white sm:mb-16 sm:block sm:text-6xl">
          {t('projects.title')}
        </h2>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="card card-hover h-full overflow-hidden p-2 sm:p-6"
            >
              <img
                src={t(`projects.items.${index}.imageUrl`) || 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop'}
                alt={t(`projects.items.${index}.name`)}
                className={index === 7 ? "mb-5 block h-48 w-full rounded-lg object-cover sm:mb-6 sm:h-64" : "mb-5 block h-auto w-full rounded-lg sm:mb-6"}
              />

              <div className="p-4 pt-0 sm:p-0">
                <h3 className="mb-4 text-3xl font-black text-white sm:text-4xl">
                  {t(`projects.items.${index}.name`)}
                </h3>

                <p className="mb-6 text-base leading-relaxed text-gray-300 sm:text-lg">
                  {t(`projects.items.${index}.description`)}
                </p>

                <div className="mb-6 border-t border-gray-700 pt-6">
                  <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-gray-400">
                    {t('projects.frameworks')}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {t(`projects.items.${index}.frameworks`, { returnObjects: true }).map((framework, idx) => (
                      <span
                        key={idx}
                        className="rounded-lg border border-[var(--accent-50)] bg-transparent px-4 py-2 text-sm font-bold text-[var(--accent)]"
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
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[var(--accent)] px-6 py-3 font-bold text-white shadow-lg shadow-[var(--accent-50)] transition-all duration-300 hover:bg-[var(--accent)] hover:shadow-[var(--accent-75)]"
                >
                  {t('projects.viewProject')}
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
