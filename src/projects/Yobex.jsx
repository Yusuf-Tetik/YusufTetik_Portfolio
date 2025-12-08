import { useNavigate } from 'react-router-dom'

const images = {
  home: new URL('../img/yobex/anasayfa.png', import.meta.url).href,
  detail: new URL('../img/yobex/detay.png', import.meta.url).href,
  login: new URL('../img/yobex/girişyap.png', import.meta.url).href,
  discount: new URL('../img/yobex/indirim.png', import.meta.url).href,
  signup: new URL('../img/yobex/kayıtol.png', import.meta.url).href,
}

function Yobex() {
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
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">YOBEX – Full Stack E-Ticaret</h1>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Ürün listeleme, detay, sepet ve sipariş akışlarını içeren; üye/ misafir kullanıcı deneyimini destekleyen modern
            bir e-ticaret uygulaması.
          </p>
        </header>

        <article className="space-y-8">
          <section className="space-y-4">
            <p className="text-gray-700 dark:text-gray-300">
              Ana sayfa, kategori bazlı ürün listeleri, filtreleme ve arama özellikleriyle hızlı keşif deneyimi sunar. Öne
              çıkan kampanyalar ve banner alanları kullanıcıya özel fırsatları vurgular.
            </p>
            <img
              src={images.home}
              alt="Yobex ana sayfa"
              className="w-full rounded-xl shadow-lg object-cover"
            />
          </section>

          <section className="space-y-4">
            <p className="text-gray-700 dark:text-gray-300">
              Ürün detay sayfasında görsel galerisi, stok bilgisi, varyant seçimleri ve benzer ürünler önerisi bulunur.
              Sepete ekleme ve favori listesine alma işlemleri tek tıkla yapılır.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <img
                src={images.detail}
                alt="Yobex ürün detay"
                className="w-full rounded-xl shadow-lg object-cover"
              />
              <img
                src={images.discount}
                alt="Yobex kampanya sayfası"
                className="w-full rounded-xl shadow-lg object-cover"
              />
            </div>
          </section>

          <section className="space-y-4">
            <p className="text-gray-700 dark:text-gray-300">
            Uygulama, kullanıcıların kolayca hesap oluşturup giriş yapabileceği basit bir kimlik doğrulama akışı sunar. 
            Kayıt olan kullanıcılar, kişisel hesapları üzerinden alışveriş sürecini daha rahat takip edebilir.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <img
                src={images.login}
                alt="Yobex giriş ekranı"
                className="w-full rounded-xl shadow-lg object-cover"
              />
              <img
                src={images.signup}
                alt="Yobex kayıt ol ekranı"
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

