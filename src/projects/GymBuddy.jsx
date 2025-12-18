import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const images = {
  search: new URL('../img/gymbuddy/arama.png', import.meta.url).href,
  detail: new URL('../img/gymbuddy/detay.png', import.meta.url).href,
  auth: new URL('../img/gymbuddy/giriş.png', import.meta.url).href,
  result: new URL('../img/gymbuddy/sonuç.png', import.meta.url).href,
}

function GymBuddy() {
  const navigate = useNavigate()
  const { t } = useTranslation()

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-5xl mx-auto space-y-10">
        <button
          onClick={() => navigate(-1)}
          className="text-primary-600 dark:text-primary-400 hover:underline"
        >
          {t('projects.backButton')}
        </button>

        <header className="space-y-3">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
            {t('projects.items.gymbuddy.title')}
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            {t('projects.items.gymbuddy.detailSubtitle')}
          </p>
        </header>

        <article className="space-y-8">
          <section className="space-y-4">
            <p className="text-gray-700 dark:text-gray-300">
              {t('projects.items.gymbuddy.section1')}
            </p>
            <img
              src={images.search}
              alt="GymBuddy search screen"
              className="w-full rounded-xl shadow-lg object-cover"
            />
          </section>

          <section className="space-y-4">
            <p className="text-gray-700 dark:text-gray-300">
              {t('projects.items.gymbuddy.section2')}
            </p>
            <img
              src={images.detail}
              alt="GymBuddy exercise detail screen"
              className="w-full rounded-xl shadow-lg object-cover"
            />
          </section>

          <section className="space-y-4">
            <p className="text-gray-700 dark:text-gray-300">
              {t('projects.items.gymbuddy.section3')}
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <img
                src={images.auth}
                alt="GymBuddy login screen"
                className="w-full rounded-xl shadow-lg object-cover"
              />
              <img
                src={images.result}
                alt="GymBuddy search results screen"
                className="w-full rounded-xl shadow-lg object-cover"
              />
            </div>
          </section>
        </article>
      </div>
    </section>
  )
}

export default GymBuddy
