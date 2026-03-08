import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const images = {
  home: new URL('../img/mindsense/anasayfaa.jpeg', import.meta.url).href,
  training: new URL('../img/mindsense/eğitim.jpeg', import.meta.url).href,
  login: new URL('../img/mindsense/girişş.jpeg', import.meta.url).href,
  signup: new URL('../img/mindsense/kayıtoll.jpeg', import.meta.url).href,
  teacher: new URL('../img/mindsense/öğretmenpaneli.jpeg', import.meta.url).href,
}

function MindSense() {
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
            {t('projects.items.mindsense.title')}
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            {t('projects.items.mindsense.detailSubtitle')}
          </p>
        </header>

        <article className="space-y-8">
          <section className="space-y-4">
            <p className="text-gray-700 dark:text-gray-300">
              {t('projects.items.mindsense.section1')}
            </p>
            <figure className="space-y-2">
              <img
                src={images.home}
                alt={t('projects.items.mindsense.imageHome')}
                className="w-full rounded-xl shadow-lg object-cover"
              />
              <figcaption className="text-sm text-gray-500 dark:text-gray-400 italic">
                {t('projects.items.mindsense.imageHome')}
              </figcaption>
            </figure>
          </section>

          <section className="space-y-4">
            <p className="text-gray-700 dark:text-gray-300">
              {t('projects.items.mindsense.section2')}
            </p>
            <figure className="space-y-2">
              <img
                src={images.training}
                alt={t('projects.items.mindsense.imageTraining')}
                className="w-full rounded-xl shadow-lg object-cover"
              />
              <figcaption className="text-sm text-gray-500 dark:text-gray-400 italic">
                {t('projects.items.mindsense.imageTraining')}
              </figcaption>
            </figure>
          </section>

          <section className="space-y-4">
            <p className="text-gray-700 dark:text-gray-300">
              {t('projects.items.mindsense.section3')}
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <figure className="space-y-2">
                <img
                  src={images.login}
                  alt={t('projects.items.mindsense.imageLogin')}
                  className="w-full rounded-xl shadow-lg object-cover"
                />
                <figcaption className="text-sm text-gray-500 dark:text-gray-400 italic">
                  {t('projects.items.mindsense.imageLogin')}
                </figcaption>
              </figure>
              <figure className="space-y-2">
                <img
                  src={images.signup}
                  alt={t('projects.items.mindsense.imageSignup')}
                  className="w-full rounded-xl shadow-lg object-cover"
                />
                <figcaption className="text-sm text-gray-500 dark:text-gray-400 italic">
                  {t('projects.items.mindsense.imageSignup')}
                </figcaption>
              </figure>
            </div>
          </section>

          <section className="space-y-4">
            <p className="text-gray-700 dark:text-gray-300">
              {t('projects.items.mindsense.section4')}
            </p>
            <figure className="space-y-2">
              <img
                src={images.teacher}
                alt={t('projects.items.mindsense.imageTeacher')}
                className="w-full rounded-xl shadow-lg object-cover"
              />
              <figcaption className="text-sm text-gray-500 dark:text-gray-400 italic">
                {t('projects.items.mindsense.imageTeacher')}
              </figcaption>
            </figure>
          </section>
        </article>
      </div>
    </section>
  )
}

export default MindSense
