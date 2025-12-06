function About() {
  const infoCards = [
    { 
      title: 'Frontend', 
      description: 'React, Next.js, JavaScript, TypeScript, TailwindCSS, HTML, CSS' 
    },
    { 
      title: 'Backend', 
      description: '.NET, Node.js, Express.js, MySQL, MongoDB, Supabase, PostgreSQL' 
    },
    { 
      title: 'Yapay Zeka & Veri Bilimi', 
      description: 'Python, NumPy, Pandas, Matplotlib, Scikit-learn, TensorFlow, PyTorch, AI entegrasyonları' 
    }
  ];

  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Hakkımda
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
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
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-1 gap-4">
            {infoCards.map((card, index) => (
              <div
                key={index}
                className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-semibold text-primary-600 dark:text-primary-400 mb-2">
                  {card.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

