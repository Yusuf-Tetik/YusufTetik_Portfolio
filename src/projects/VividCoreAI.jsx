import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import home1Img from '../img/vividcoreai/home1.png'
import home2Img from '../img/vividcoreai/home2.png'
import home3Img from '../img/vividcoreai/home3.png'
import statsImg from '../img/vividcoreai/stats.png'
import iletisimImg from '../img/vividcoreai/iletişim.png'

const P = 'projects.items.vividcore-ai'

function VividCoreAI() {
  const navigate = useNavigate()
  const { t } = useTranslation()

  const images = [
    { src: home1Img, captionKey: 'imageHome1' },
    { src: home2Img, captionKey: 'imageHome2' },
    { src: home3Img, captionKey: 'imageHome3' },
    { src: statsImg, captionKey: 'imageStats' },
    { src: iletisimImg, captionKey: 'imageIletisim' },
  ]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-violet-50/30 dark:bg-violet-950/20 min-h-screen">
      <div className="max-w-5xl mx-auto space-y-10">
        <button
          onClick={() => navigate(-1)}
          className="text-primary-600 dark:text-primary-400 hover:underline"
        >
          {t('projects.backButton')}
        </button>

        <div className="flex items-center gap-3 py-2">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-violet-200 dark:bg-violet-800/80 text-violet-800 dark:text-violet-200 text-sm font-semibold">
            <span className="w-2 h-2 rounded-full bg-violet-500" />
            {t('projects.commercialProjectLabel')}
          </span>
        </div>

        <header className="space-y-3 pb-6 border-b border-violet-200 dark:border-violet-800">
          <h1 className="text-4xl font-bold text-violet-900 dark:text-violet-100">
            {t(`${P}.detailTitle`)}
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            {t(`${P}.detailIntro`)}
          </p>
        </header>

        <article className="space-y-10">
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-violet-800 dark:text-violet-300">
              {t(`${P}.highlightsTitle`)}
            </h2>
            <ul className="list-disc list-inside space-y-3 text-gray-700 dark:text-gray-300 leading-relaxed pl-2">
              {[1, 2, 3, 4].map((i) => (
                <li key={i}>{t(`${P}.highlight${i}`)}</li>
              ))}
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-violet-800 dark:text-violet-300">
              {t(`${P}.developmentTitle`)}
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {t(`${P}.developmentIntro`)}
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 leading-relaxed pl-2">
              {[1, 2, 3].map((i) => (
                <li key={i}>{t(`${P}.development${i}`)}</li>
              ))}
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-violet-800 dark:text-violet-300">
              {t(`${P}.technicalTitle`)}
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 leading-relaxed pl-2">
              {[1, 2, 3, 4].map((i) => (
                <li key={i}>{t(`${P}.technical${i}`)}</li>
              ))}
            </ul>
          </section>

          {images.map(({ src, captionKey }, idx) => (
            <figure key={idx} className="space-y-2">
              <img
                src={src}
                alt={t(`${P}.${captionKey}`)}
                className="w-full rounded-xl shadow-lg object-cover"
              />
              <figcaption className="text-sm text-gray-500 dark:text-gray-400 italic">
                {t(`${P}.${captionKey}`)}
              </figcaption>
            </figure>
          ))}
        </article>
      </div>
    </section>
  )
}

export default VividCoreAI
