import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const P = 'projects.items.nestjs-ecommerce-backend'

function NestJsECommerceBackend() {
  const navigate = useNavigate()
  const { t } = useTranslation()

  const techRows = [
    { area: 'techStackAreaFramework', value: 'techStackValueFramework' },
    { area: 'techStackAreaDatabase', value: 'techStackValueDatabase' },
    { area: 'techStackAreaORM', value: 'techStackValueORM' },
    { area: 'techStackAreaInfra', value: 'techStackValueInfra' },
    { area: 'techStackAreaDocs', value: 'techStackValueDocs' },
    { area: 'techStackAreaSecurity', value: 'techStackValueSecurity' },
  ]

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
            {t(`${P}.title`)}
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            {t(`${P}.detailSubtitle`)}
          </p>
        </header>

        <article className="space-y-10">
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              {t(`${P}.aboutTitle`)}
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {t(`${P}.aboutProject`)}
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              {t(`${P}.highlightsTitle`)}
            </h2>
            <ul className="list-disc list-inside space-y-3 text-gray-700 dark:text-gray-300 leading-relaxed pl-2">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <li key={i}>{t(`${P}.highlight${i}`)}</li>
              ))}
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              {t(`${P}.techStackTitle`)}
            </h2>
            <div className="overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-700">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead className="bg-gray-50 dark:bg-gray-800">
                  <tr>
                    <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">
                      {t(`${P}.techStackColArea`)}
                    </th>
                    <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">
                      {t(`${P}.techStackColTech`)}
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700 bg-white dark:bg-gray-900">
                  {techRows.map((row, idx) => (
                    <tr key={idx}>
                      <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">
                        {t(`${P}.${row.area}`)}
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">
                        {t(`${P}.${row.value}`)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              {t(`${P}.apiOverview`)}
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {t(`${P}.section2`)}
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {t(`${P}.section3`)}
            </p>
          </section>
        </article>
      </div>
    </section>
  )
}

export default NestJsECommerceBackend
