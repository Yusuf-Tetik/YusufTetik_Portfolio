function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 dark:bg-black text-gray-300 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <p className="mb-2">
          © {currentYear} Yusuf Tetik. Tüm hakları saklıdır.
        </p>
        <p className="text-sm text-gray-500">
         Made by Yusuf Tetik
        </p>
      </div>
    </footer>
  )
}

export default Footer

