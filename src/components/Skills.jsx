import { useTranslation } from 'react-i18next'
import { skills } from '../data/skills'

function Skills() {
  const { t } = useTranslation()
  return (
    <section
      id="skills"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          {t('skills.title')}
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-3 text-primary-600 dark:text-primary-400">
                {t(`skills.categories.${category.category}`, category.category)}
              </h3>
              <div className="flex flex-wrap gap-x-2 gap-y-1">
                {category.items.map((item, itemIndex) => (
                  <span
                    key={itemIndex}
                    className="text-gray-700 dark:text-gray-300"
                  >
                    {item}
                    {itemIndex < category.items.length - 1 && ','}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
