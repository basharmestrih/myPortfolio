import { useTranslation } from 'react-i18next'
import { socialLinks } from '../constants/data'

export default function Contact() {
  const { t } = useTranslation()

  return (
    <section className="section-padding bg-gray-950 min-h-[calc(100vh-80px)] flex items-center">
      <div className="max-container w-full">
        <div className="text-center mb-16">
          <h2 className="text-5xl sm:text-6xl font-black text-white mb-4">
            {t('contact.title')}
          </h2>
          <p className="text-gray-300 text-lg sm:text-xl">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Contact Info Card */}
          <div className="card card-hover">
            <h3 className="text-2xl font-black text-white mb-6">
              {t('contact.getInTouch')}
            </h3>
            
            <div className="space-y-4">
              <div>
                <p className="text-gray-400 text-sm font-semibold uppercase tracking-wide mb-2">
                  {t('contact.email')}
                </p>
                <a
                  href="mailto:mestbashar@gmail.com"
                  className="text-[var(--accent)] font-bold text-lg hover:text-[var(--accent)] transition-colors"
                >
                  mestbashar@gmail.com
                </a>
              </div>

              <div className="border-t border-gray-700 pt-4">
                <p className="text-gray-400 text-sm font-semibold uppercase tracking-wide mb-2">
                  {t('contact.phone')}
                </p>
                <a
                  href="tel:+963937138915"
                  className="text-[var(--accent)] font-bold text-lg hover:text-[var(--accent)] transition-colors"
                >
                  +963 937 138 915
                </a>
              </div>

              <div className="border-t border-gray-700 pt-4">
                <p className="text-gray-400 text-sm font-semibold uppercase tracking-wide mb-2">
                  {t('contact.location')}
                </p>
                <p className="text-white font-bold text-lg">
                  Aleppo, Syria
                </p>
              </div>
            </div>
          </div>

          {/* Social Links Card */}
          <div className="card card-hover">
            <h3 className="text-2xl font-black text-white mb-6">
              {t('contact.followMe')}
            </h3>
            
            <div className="grid grid-cols-2 gap-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-gray-800 hover:bg-[var(--accent)] p-4 rounded-lg transition-all duration-300 group border border-gray-700 hover:border-[var(--accent)]"
                >
                  <div className="w-8 h-8 flex items-center justify-center shrink-0">
                    <img
                      src={link.icon}
                      alt={`${link.name} logo`}
                      className="w-7 h-7 object-contain"
                    />
                  </div>
                  <div>
                    <p className="text-gray-300 group-hover:text-white font-bold text-sm">
                      {link.name}
                    </p>
                    <p className="text-gray-500 group-hover:text-gray-200 text-xs">
                      {link.handle}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
