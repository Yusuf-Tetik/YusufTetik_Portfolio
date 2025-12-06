import { useState } from 'react'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }))
    }
  }

  const validateForm = () => {
    const newErrors = {}
    if (!formData.name.trim()) {
      newErrors.name = 'İsim gereklidir'
    }
    if (!formData.email.trim()) {
      newErrors.email = 'E-posta gereklidir'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Geçerli bir e-posta adresi giriniz'
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Mesaj gereklidir'
    }
    return newErrors
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newErrors = validateForm()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }
    // Log form data (no backend)
    console.log('Form Data:', formData)
    alert('Mesajınız gönderildi! (Konsola bakın)')
    setFormData({ name: '', email: '', message: '' })
    setErrors({})
  }

  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/yusuftetik', icon: '🔗' },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/yusuftetik', icon: '🔗' },
    { name: 'E-posta', url: 'mailto:yusuftetik@example.com', icon: '📧' },
  ]

  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white">
          İletişim
        </h2>
        <p className="text-center text-gray-700 dark:text-gray-300 mb-12 text-lg">
          Projeleriniz veya işbirliği fırsatları hakkında konuşmak isterseniz, bana ulaşmaktan çekinmeyin!
        </p>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
              Sosyal Medya
            </h3>
            <div className="space-y-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  <span className="text-2xl">{link.icon}</span>
                  <span className="text-lg">{link.name}</span>
                </a>
              ))}
            </div>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                İsim
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white ${
                  errors.name ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                }`}
                placeholder="Adınız Soyadınız"
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-500">{errors.name}</p>
              )}
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                E-posta
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white ${
                  errors.email ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                }`}
                placeholder="email@example.com"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-500">{errors.email}</p>
              )}
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Mesaj
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white ${
                  errors.message ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                }`}
                placeholder="Mesajınızı buraya yazın..."
              />
              {errors.message && (
                <p className="mt-1 text-sm text-red-500">{errors.message}</p>
              )}
            </div>
            <button
              type="submit"
              className="w-full px-6 py-3 bg-primary-600 dark:bg-primary-500 text-white rounded-lg font-semibold hover:bg-primary-700 dark:hover:bg-primary-600 transition-colors"
            >
              Gönder
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact

