import { useTranslation } from 'react-i18next'
import profileImage from '../img/ppp.jpeg'

function About() {
  const { t } = useTranslation()
  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          {t('about.title')}
        </h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="flex justify-center md:justify-start">
            <img
              src={profileImage}
              alt="Yusuf Tetik"
              className="w-80 h-80 md:w-96 md:h-96 rounded-lg object-cover shadow-lg"
            />
          </div>
          <div className="space-y-6">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              {t('about.paragraph1')}
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              {t('about.paragraph2')}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

