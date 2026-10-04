import { useTranslation } from 'react-i18next'

export default function About() {
  const { t } = useTranslation()

  return (
    <section className="section-padding bg-gray-950">
      <div className="max-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Name and About */}
          <div className="space-y-6">
            <div>
              <h1 className="mb-4 text-4xl font-black leading-tight text-white sm:text-6xl">
                {t('about.name')}
              </h1>
              <p className="text-xl sm:text-2xl font-bold text-[var(--accent)] mb-8">
                {t('about.title')}
              </p>
            </div>
            
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              {t('about.description')}
            </p>

            <div className="pt-4">
              <a
                href="/Bashar-Mestrih-Resume-1.pdf"
                download="Bashar-Mestrih-Resume.pdf"
                className="inline-block bg-[var(--accent)] hover:bg-[var(--accent)] text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg shadow-[var(--accent-50)] hover:shadow-[var(--accent-75)]"
              >
                {t('about.cta')}
              </a>
            </div>
          </div>

          {/* Right side - Image Card */}
          <div className="flex justify-center">
            <div className="card card-hover w-full max-w-sm">
              <div className="mb-6">
                <div className="w-full h-64 bg-gradient-to-br from-[var(--accent)] to-purple-600 rounded-lg flex items-center justify-center overflow-hidden">
                  <img 
                    src={t('about.imageUrl') || 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop'}
                    alt={t('about.name')}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <p className="text-gray-400 text-sm font-semibold uppercase tracking-wide">
                    {t('about.email')}
                  </p>
                  <p className="text-white font-bold text-lg">
                    mestbashar@gmail.com
                  </p>
                </div>
                
                <div className="border-t border-gray-700 pt-4">
                  <p className="text-gray-400 text-sm font-semibold uppercase tracking-wide">
                    {t('about.location')}
                  </p>
                  <p className="text-white font-bold text-lg">
                    {t('about.locationValue')}
                  </p>
                </div>

                <div className="border-t border-gray-700 pt-4">
                  <p className="text-gray-400 text-sm font-semibold uppercase tracking-wide">
                    {t('about.experience')}
                  </p>
                  <p className="text-white font-bold text-lg">
                    {t('about.yearsExp')}
                  </p>
                </div>

                <div className="border-t border-gray-700 pt-4">
                  <p className="text-gray-400 text-sm font-semibold uppercase tracking-wide mb-3">
                    {t('about.codingLanguages')}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {t('about.codingLanguagesList', { returnObjects: true }).map((language) => (
                      <span
                        key={language}
                        className="rounded-full border border-gray-700 bg-gray-800 px-3 py-1 text-xs font-bold text-[var(--accent)]"
                      >
                        {language}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="border-t border-gray-700 pt-4">
                  <p className="text-gray-400 text-sm font-semibold uppercase tracking-wide mb-3">
                    {t('about.frameworks')}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {t('about.frameworksList', { returnObjects: true }).map((framework) => (
                      <span
                        key={framework}
                        className="rounded-full border border-gray-700 bg-gray-800 px-3 py-1 text-xs font-bold text-[var(--accent)]"
                      >
                        {framework}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
