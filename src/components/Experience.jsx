import { useTranslation } from 'react-i18next'
import { experienceData } from '../constants/data'

export default function Experience() {
  const { t } = useTranslation()

  return (
    <section className="section-padding bg-gray-950">
      <div className="max-container">
        <h2 className="hidden text-5xl font-black text-white sm:mb-16 sm:block sm:text-6xl">
          {t('experience.title')}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {experienceData.map((job, index) => (
            <div
              key={index}
              className="card card-hover group"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-black text-white mb-1 group-hover:text-[var(--accent)] transition-colors">
                    {t(`experience.jobs.${index}.position`)}
                  </h3>
                  <p className="text-[var(--accent)] font-bold text-lg">
                    {t(`experience.jobs.${index}.company`)}
                  </p>
                </div>
              </div>

              <div className="space-y-3 mb-4">
                <p className="text-gray-400 text-sm font-semibold">
                  {t(`experience.jobs.${index}.period`)}
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-300 leading-relaxed">
                  {t(`experience.jobs.${index}.description`, { returnObjects: true }).map((point, pointIndex) => (
                    <li key={pointIndex}>{point}</li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-gray-700 pt-4">
                <p className="text-gray-400 text-sm font-semibold mb-3">
                  {t('experience.skills')}
                </p>
                <div className="flex flex-wrap gap-2">
                  {t(`experience.jobs.${index}.skills`, { returnObjects: true }).map((skill, idx) => (
                    <span
                      key={idx}
                      className="bg-gray-800 text-[var(--accent)] font-bold text-xs px-3 py-1 rounded-full border border-gray-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
