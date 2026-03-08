import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const images = {
  register: new URL('../img/yakındanelervar/01-register.png', import.meta.url).href,
  adminEmpty: new URL('../img/yakındanelervar/02-admin-events-empty.png', import.meta.url).href,
  dashboard: new URL('../img/yakındanelervar/03-admin-dashboard.png', import.meta.url).href,
  home: new URL('../img/yakındanelervar/04-home-and-cards.png', import.meta.url).href,
  calendar: new URL('../img/yakındanelervar/05-trainings-calendar.png', import.meta.url).href,
}

function YakinDaNelerVar() {
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
            {t('projects.items.yakindanelervar.title')}
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            {t('projects.items.yakindanelervar.detailSubtitle')}
          </p>
        </header>

        <article className="space-y-8">
          <section className="space-y-4">
            <p className="text-gray-700 dark:text-gray-300">
              {t('projects.items.yakindanelervar.section1')}
            </p>
            <figure className="space-y-2">
              <img
                src={images.register}
                alt={t('projects.items.yakindanelervar.imageRegister')}
                className="w-full rounded-xl shadow-lg object-cover"
              />
              <figcaption className="text-sm text-gray-500 dark:text-gray-400 italic">
                {t('projects.items.yakindanelervar.imageRegister')}
              </figcaption>
            </figure>
          </section>

          <section className="space-y-4">
            <p className="text-gray-700 dark:text-gray-300">
              {t('projects.items.yakindanelervar.section2')}
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <figure className="space-y-2">
                <img
                  src={images.adminEmpty}
                  alt={t('projects.items.yakindanelervar.imageAdminEmpty')}
                  className="w-full rounded-xl shadow-lg object-cover"
                />
                <figcaption className="text-sm text-gray-500 dark:text-gray-400 italic">
                  {t('projects.items.yakindanelervar.imageAdminEmpty')}
                </figcaption>
              </figure>
              <figure className="space-y-2">
                <img
                  src={images.dashboard}
                  alt={t('projects.items.yakindanelervar.imageDashboard')}
                  className="w-full rounded-xl shadow-lg object-cover"
                />
                <figcaption className="text-sm text-gray-500 dark:text-gray-400 italic">
                  {t('projects.items.yakindanelervar.imageDashboard')}
                </figcaption>
              </figure>
            </div>
          </section>

          <section className="space-y-4">
            <p className="text-gray-700 dark:text-gray-300">
              {t('projects.items.yakindanelervar.section3')}
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <figure className="space-y-2">
                <img
                  src={images.home}
                  alt={t('projects.items.yakindanelervar.imageHome')}
                  className="w-full rounded-xl shadow-lg object-cover"
                />
                <figcaption className="text-sm text-gray-500 dark:text-gray-400 italic">
                  {t('projects.items.yakindanelervar.imageHome')}
                </figcaption>
              </figure>
              <figure className="space-y-2">
                <img
                  src={images.calendar}
                  alt={t('projects.items.yakindanelervar.imageCalendar')}
                  className="w-full rounded-xl shadow-lg object-cover"
                />
                <figcaption className="text-sm text-gray-500 dark:text-gray-400 italic">
                  {t('projects.items.yakindanelervar.imageCalendar')}
                </figcaption>
              </figure>
            </div>
          </section>
        </article>
      </div>
    </section>
  )
}

export default YakinDaNelerVar
