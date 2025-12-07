import profileImage from '../img/ppp.jpeg'

function About() {
  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Hakkımda
        </h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="flex justify-center md:justify-start">
            <img
              src={profileImage}
              alt="Yusuf Tetik"
              className="w-80 h-80 md:w-96 md:h-96 rounded-lg object-cover shadow-lg"
            />
          </div>
          <div className="space-y-6">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Merhaba, ben Yusuf Tetik. Bursa İnegöl doğumluyum. Süleyman Demirel Üniversitesi Bilgisayar Mühendisliği bölümünden
              mezun oldum. Kendini sürekli geliştirmeye önem veren, analitik ve çözüm odaklı bir geliştiriciyim. Staj deneyimlerim,
              üniversite projelerim ve topluluk çalışmalarım sayesinde takım çalışması kültürü edindim; iş birliğine dayalı ortamlarda
              sorumluluk almayı ve etkili iletişim kurmayı önemsiyorum.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Modern web teknolojileriyle full-stack geliştirme üzerine çalışıyorum. React, Next.js ve Node.js ekosisteminde
              kullanıcı odaklı, performanslı ve ölçeklenebilir web uygulamaları geliştiriyorum. Ayrıca yapay zekâ teknolojilerine 
              olan ilgim doğrultusunda AI destekli çözümler üretmekte ve geliştirdiğim projelerde bu teknolojileri
              etkin şekilde kullanmaktayım.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

