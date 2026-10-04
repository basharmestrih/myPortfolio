import { useTranslation } from 'react-i18next'
import { socialLinks } from '../constants/data'

export default function Contact() {
  const { t } = useTranslation()

  return (
    <section className="section-padding bg-gray-950 min-h-[calc(100vh-80px)] flex items-start sm:items-center">
      <div className="max-container w-full">
        <div className="mb-8 hidden text-center sm:mb-16 sm:block">
          <h2 className="text-5xl sm:text-6xl font-black text-white mb-4">
            {t('contact.title')}
          </h2>
          <p className="text-gray-300 text-lg sm:text-xl">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-5 sm:gap-8 md:grid-cols-2">
          {/* Contact Info Card */}
          <div className="card card-hover min-w-0">
            <h3 className="mb-5 text-xl font-black text-white sm:mb-6 sm:text-2xl">
              {t('contact.getInTouch')}
            </h3>
            
            <div className="space-y-4">
              <div>
                <p className="text-gray-400 text-sm font-semibold uppercase tracking-wide mb-2">
                  {t('contact.email')}
                </p>
                <a
                  href="mailto:mestbashar@gmail.com"
                  className="break-all text-base font-bold text-[var(--accent)] transition-colors hover:text-[var(--accent)] sm:text-lg"
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
                  className="break-all text-base font-bold text-[var(--accent)] transition-colors hover:text-[var(--accent)] sm:text-lg"
                >
                  +963 937 138 915
                </a>
              </div>

              <div className="border-t border-gray-700 pt-4">
                <p className="text-gray-400 text-sm font-semibold uppercase tracking-wide mb-2">
                  {t('contact.location')}
                </p>
                <p className="break-words text-base font-bold text-white sm:text-lg">
                  Aleppo, Syria
                </p>
              </div>
            </div>
          </div>

          {/* Social Links Card */}
          <div className="card card-hover min-w-0">
            <h3 className="mb-5 text-xl font-black text-white sm:mb-6 sm:text-2xl">
              {t('contact.followMe')}
            </h3>
            
            <div className="grid grid-cols-1 gap-3 min-[380px]:grid-cols-2 sm:gap-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex min-w-0 items-center gap-3 rounded-lg border border-gray-700 bg-gray-800 p-3 transition-all duration-300 hover:border-[var(--accent)] hover:bg-[var(--accent)] sm:p-4"
                >
                  <div className="w-8 h-8 flex items-center justify-center shrink-0">
                    <link.icon
                      aria-label={`${link.name} logo`}
                      className="w-7 h-7 fill-white"
                      role="img"
                    />
                  </div>
                  <div className="min-w-0">
                    <p className="truncate text-sm font-bold text-gray-300 group-hover:text-white">
                      {link.name}
                    </p>
                    <p className="break-words text-xs text-gray-500 group-hover:text-gray-200">
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
