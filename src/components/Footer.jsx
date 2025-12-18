import { useTranslation } from 'react-i18next'

function Footer() {
  const { t } = useTranslation()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 dark:bg-black text-gray-300 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <p className="mb-2">
          {t('footer.copyright', { year: currentYear })}
        </p>
        <p className="text-sm text-gray-500">
          {t('footer.madeBy')}
        </p>
      </div>
    </footer>
  )
}

export default Footer

