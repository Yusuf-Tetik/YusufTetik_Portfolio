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
            <img
              src={images.home}
              alt="Yobex homepage"
              className="w-full rounded-xl shadow-lg object-cover"
            />
          </section>

          <section className="space-y-4">
            <p className="text-gray-700 dark:text-gray-300">
              {t('projects.items.yobex.section2')}
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <img
                src={images.detail}
                alt="Yobex product detail"
                className="w-full rounded-xl shadow-lg object-cover"
              />
              <img
                src={images.discount}
                alt="Yobex campaign page"
                className="w-full rounded-xl shadow-lg object-cover"
              />
            </div>
          </section>

          <section className="space-y-4">
            <p className="text-gray-700 dark:text-gray-300">
              {t('projects.items.yobex.section3')}
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <img
                src={images.login}
                alt="Yobex login screen"
                className="w-full rounded-xl shadow-lg object-cover"
              />
              <img
                src={images.signup}
                alt="Yobex signup screen"
                className="w-full rounded-xl shadow-lg object-cover"
              />
            </div>
          </section>
        </article>
      </div>
    </section>
  )
}

export default Yobex
