import { skills } from '../data/skills'

function Skills() {
  const getLevelColor = (level) => {
    switch (level) {
      case 'İleri':
        return 'bg-primary-600 dark:bg-primary-500'
      case 'Orta':
        return 'bg-primary-400 dark:bg-primary-600'
      case 'Temel':
        return 'bg-primary-300 dark:bg-primary-700'
      default:
        return 'bg-gray-400'
    }
  }

  return (
    <section
      id="skills"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Yetenekler
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-2xl font-semibold mb-6 text-primary-600 dark:text-primary-400">
                {category.category}
              </h3>
              <div className="space-y-4">
                {category.items.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 dark:text-gray-300 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {skill.level}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full transition-all duration-300 ${getLevelColor(
                          skill.level
                        )}`}
                        style={{
                          width:
                            skill.level === 'İleri'
                              ? '85%'
                              : skill.level === 'Orta'
                              ? '65%'
                              : '45%',
                        }}
                      />
                    </div>
                  </div>
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

