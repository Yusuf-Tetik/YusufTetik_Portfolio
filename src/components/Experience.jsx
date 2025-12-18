import { useTranslation } from 'react-i18next'

function Experience() {
  const { t } = useTranslation()
  const experienceItems = t('experienceData.items', { returnObjects: true })

  return (
    <section
      id="experience"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          {t('experience.title')}
        </h2>
        <div className="space-y-8">
          {experienceItems.map((exp, index) => (
            <div
              key={exp.id}
              className="relative pl-8 pb-8 border-l-2 border-primary-400 dark:border-primary-600"
            >
              {index !== experienceItems.length - 1 && (
                <div className="absolute left-[-6px] top-0 w-3 h-3 bg-primary-600 dark:bg-primary-400 rounded-full" />
              )}
              <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {exp.role}
                    </h3>
                    <p className="text-primary-600 dark:text-primary-400 font-medium">
                      {exp.companyName}
                    </p>
                  </div>
                  <span className="text-sm text-gray-500 dark:text-gray-400 mt-2 sm:mt-0">
                    {exp.dateRange}
                  </span>
                </div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {exp.shortDescription}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience

