import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const images = {
  home: new URL('../img/yobex/anasayfa.png', import.meta.url).href,
  detail: new URL('../img/yobex/detay.png', import.meta.url).href,
  login: new URL('../img/yobex/girişyap.png', import.meta.url).href,
  discount: new URL('../img/yobex/indirim.png', import.meta.url).href,
  signup: new URL('../img/yobex/kayıtol.png', import.meta.url).href,
}

function Yobex() {
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
            {t('projects.items.yobex.title')}
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            {t('projects.items.yobex.detailSubtitle')}
          </p>
        </header>

        <article className="space-y-8">
          <section className="space-y-4">
            <p className="text-gray-700 dark:text-gray-300">
              {t('projects.items.yobex.section1')}
            </p>
            <figure className="space-y-2">
              <img
                src={images.home}
                alt={t('projects.items.yobex.imageHome')}
                className="w-full rounded-xl shadow-lg object-cover"
              />
              <figcaption className="text-sm text-gray-500 dark:text-gray-400 italic">
                {t('projects.items.yobex.imageHome')}
              </figcaption>
            </figure>
          </section>

          <section className="space-y-4">
            <p className="text-gray-700 dark:text-gray-300">
              {t('projects.items.yobex.section2')}
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <figure className="space-y-2">
                <img
                  src={images.detail}
                  alt={t('projects.items.yobex.imageDetail')}
                  className="w-full rounded-xl shadow-lg object-cover"
                />
                <figcaption className="text-sm text-gray-500 dark:text-gray-400 italic">
                  {t('projects.items.yobex.imageDetail')}
                </figcaption>
              </figure>
              <figure className="space-y-2">
                <img
                  src={images.discount}
                  alt={t('projects.items.yobex.imageDiscount')}
                  className="w-full rounded-xl shadow-lg object-cover"
                />
                <figcaption className="text-sm text-gray-500 dark:text-gray-400 italic">
                  {t('projects.items.yobex.imageDiscount')}
                </figcaption>
              </figure>
            </div>
          </section>

          <section className="space-y-4">
            <p className="text-gray-700 dark:text-gray-300">
              {t('projects.items.yobex.section3')}
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <figure className="space-y-2">
                <img
                  src={images.login}
                  alt={t('projects.items.yobex.imageLogin')}
                  className="w-full rounded-xl shadow-lg object-cover"
                />
                <figcaption className="text-sm text-gray-500 dark:text-gray-400 italic">
                  {t('projects.items.yobex.imageLogin')}
                </figcaption>
              </figure>
              <figure className="space-y-2">
                <img
                  src={images.signup}
                  alt={t('projects.items.yobex.imageSignup')}
                  className="w-full rounded-xl shadow-lg object-cover"
                />
                <figcaption className="text-sm text-gray-500 dark:text-gray-400 italic">
                  {t('projects.items.yobex.imageSignup')}
                </figcaption>
              </figure>
            </div>
          </section>
        </article>
      </div>
    </section>
  )
}

export default Yobex
