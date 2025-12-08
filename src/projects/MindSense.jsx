import { useNavigate } from 'react-router-dom'

const images = {
  home: new URL('../img/mindsense/anasayfaa.jpeg', import.meta.url).href,
  training: new URL('../img/mindsense/eğitim.jpeg', import.meta.url).href,
  login: new URL('../img/mindsense/girişş.jpeg', import.meta.url).href,
  signup: new URL('../img/mindsense/kayıtoll.jpeg', import.meta.url).href,
  teacher: new URL('../img/mindsense/öğretmenpaneli.jpeg', import.meta.url).href,
}

function MindSense() {
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
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">MindSense – AI-Powered Education</h1>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Yapay zekâ destekli içerik analiziyle öğrenci ve eğitmenlere kişiselleştirilmiş öğrenme deneyimleri sunan,
            etkileşimli bir eğitim platformu.
          </p>
        </header>

        <article className="space-y-8">
          <section className="space-y-4">
            <p className="text-gray-700 dark:text-gray-300">
              MindSense; metin, görsel ve video içeriklerini analiz ederek özetler, kavram haritaları ve sınav soruları
              üretir. Öğrenciler odaklanmak istedikleri konuya göre içerik önerileri alırken, eğitmenler de sınıf
              yönetimi ve performans takibini merkezi bir panelden yapabilir.
            </p>
            <img
              src={images.home}
              alt="MindSense ana sayfa"
              className="w-full rounded-xl shadow-lg object-cover"
            />
          </section>

          <section className="space-y-4">
            <p className="text-gray-700 dark:text-gray-300">
              İçerik analizi akışı; yüklenen materyalin türüne göre (metin/görsel/video) farklı pipeline’lar çalıştırır,
              özetler ve ek kaynak önerileri üretir. Kullanıcılar bu çıktıları kişiselleştirilmiş çalışma planlarına
              dönüştürebilir.
            </p>
            <img
              src={images.training}
              alt="MindSense eğitim içeriği"
              className="w-full rounded-xl shadow-lg object-cover"
            />
          </section>

          <section className="space-y-4">
            <p className="text-gray-700 dark:text-gray-300">
              Giriş/kayıt akışı sade tutulurken, öğretmen panelinde sınıf bazlı içerik paylaşımı, bildirimler ve öğrenci
              ilerleme takibi bulunur. Tasarım; açık/koyu tema desteği ve mobil uyumla güçlendirilmiştir.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <img
                src={images.login}
                alt="MindSense giriş ekranı"
                className="w-full rounded-xl shadow-lg object-cover"
              />
              <img
                src={images.signup}
                alt="MindSense kayıt ol ekranı"
                className="w-full rounded-xl shadow-lg object-cover"
              />
              <img
                src={images.teacher}
                alt="MindSense öğretmen paneli"
                className="w-full rounded-xl shadow-lg object-cover"
              />
            </div>
          </section>
        </article>
      </div>
    </section>
  )
}

export default MindSense

