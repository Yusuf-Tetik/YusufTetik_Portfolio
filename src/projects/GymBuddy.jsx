import { useNavigate } from 'react-router-dom'

const images = {
  search: new URL('../img/gymbuddy/arama.png', import.meta.url).href,
  detail: new URL('../img/gymbuddy/detay.png', import.meta.url).href,
  auth: new URL('../img/gymbuddy/giriş.png', import.meta.url).href,
  result: new URL('../img/gymbuddy/sonuç.png', import.meta.url).href,
}

function GymBuddy() {
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
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">GymBuddy – Egzersiz Rehberi</h1>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Çalıştırmak istediğiniz kas gruplarına göre egzersiz arayabileceğiniz, detayları inceleyip programınıza
            ekleyebileceğiniz modern bir fitness rehberi.
          </p>
        </header>

        <article className="space-y-8">
          <section className="space-y-4">
            <p className="text-gray-700 dark:text-gray-300">
              GymBuddy, kullanıcıların kas grubu, ekipman veya egzersiz adına göre arama yapabildiği, sonuçları filtreleyip
              detay sayfasında adım adım yönergeleri görebildiği hafif ve hızlı bir web uygulamasıdır.
            </p>
            <img
              src={images.search}
              alt="GymBuddy arama ekranı"
              className="w-full rounded-xl shadow-lg object-cover"
            />
          </section>

          <section className="space-y-4">
            <p className="text-gray-700 dark:text-gray-300">
              Detay sayfasında egzersizin hedeflediği kas grubu, gerekli ekipman, adım adım uygulama yönergeleri ve görseller
              bulunur. Bu yapı, kullanıcıların doğru formu öğrenmesini kolaylaştırır.
            </p>
            <img
              src={images.detail}
              alt="GymBuddy egzersiz detay ekranı"
              className="w-full rounded-xl shadow-lg object-cover"
            />
          </section>

          <section className="space-y-4">
            <p className="text-gray-700 dark:text-gray-300">
            Uygulamanın ana sayfası, kullanıcıyı egzersiz keşfetmeye yönlendiren sade ve motive edici bir arayüz sunar.
             Kas grubu seçimi sonrası kullanıcı, seçtiği bölgeye uygun egzersizlerin görselleri, hedef kas etiketleri ve 
             isimleriyle düzenli bir grid şeklinde listelendiği sonuç ekranına yönlendirilir. Bu yapı, aranan egzersizlere 
             hızlı ve anlaşılır şekilde ulaşmayı sağlar.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <img
                src={images.auth}
                alt="GymBuddy giriş ekranı"
                className="w-full rounded-xl shadow-lg object-cover"
              />
              <img
                src={images.result}
                alt="GymBuddy arama sonuç ekranı"
                className="w-full rounded-xl shadow-lg object-cover"
              />
            </div>
          </section>
        </article>
      </div>
    </section>
  )
}

export default GymBuddy

