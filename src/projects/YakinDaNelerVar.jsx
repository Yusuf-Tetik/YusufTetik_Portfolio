import { useNavigate } from 'react-router-dom'

const images = {
  register: new URL('../img/yakındanelervar/01-register.png', import.meta.url).href,
  adminEmpty: new URL('../img/yakındanelervar/02-admin-events-empty.png', import.meta.url).href,
  dashboard: new URL('../img/yakındanelervar/03-admin-dashboard.png', import.meta.url).href,
  home: new URL('../img/yakındanelervar/04-home-and-cards.png', import.meta.url).href,
  calendar: new URL('../img/yakındanelervar/05-trainings-calendar.png', import.meta.url).href,
}

function YakinDaNelerVar() {
  const navigate = useNavigate()

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-5xl mx-auto space-y-10">
        <button
          onClick={() => navigate(-1)}
          className="text-primary-600 dark:text-primary-400 hover:underline"
        >
          ← Geri dön
        </button>

        <header className="space-y-3">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Yakında Neler Var?</h1>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Şirket içi etkinlik ve eğitimleri tek yerde toplayan, takvim ve kart görünümleriyle takip etmeyi kolaylaştıran
            full-stack bir web uygulaması.
          </p>
        </header>

        <article className="space-y-8">
          <section className="space-y-4">
            <p className="text-gray-700 dark:text-gray-300">
              Kayıt akışı yeni kullanıcıların hızlıca giriş yapmasını sağlarken, rol bazlı yetkilendirme admin paneline
              erişimi yönetir. Supabase üzerinde veritabanı ve kimlik doğrulama kullanılarak geliştirilmiştir.
            </p>
            <img
              src={images.register}
              alt="Yakında Neler Var kayıt ekranı"
              className="w-full rounded-xl shadow-lg object-cover"
            />
          </section>

          <section className="space-y-4">
            <p className="text-gray-700 dark:text-gray-300">
              Admin paneli; etkinlik ve eğitim ekleme, güncelleme, silme akışlarını içerir. Boş veri durumları için
              duruma özel ekranlar bulunur.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <img
                src={images.adminEmpty}
                alt="Admin paneli boş liste"
                className="w-full rounded-xl shadow-lg object-cover"
              />
              <img
                src={images.dashboard}
                alt="Admin dashboard"
                className="w-full rounded-xl shadow-lg object-cover"
              />
            </div>
          </section>

          <section className="space-y-4">
            <p className="text-gray-700 dark:text-gray-300">
              Son kullanıcı tarafında kartlar ve takvim görünümüyle yaklaşan etkinlikler kolayca takip edilir. Filtreleme,
              favori listesi ve hatırlatıcı ayarlarıyla deneyim desteklenir.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <img
                src={images.home}
                alt="Kullanıcı ana sayfa ve kartlar"
                className="w-full rounded-xl shadow-lg object-cover"
              />
              <img
                src={images.calendar}
                alt="Takvim görünümü"
                className="w-full rounded-xl shadow-lg object-cover"
              />
            </div>
          </section>
        </article>
      </div>
    </section>
  )
}

export default YakinDaNelerVar

