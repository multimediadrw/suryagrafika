import Link from "next/link";

const services = [
  {
    icon: "🖨️",
    title: "Cetak Digital",
    description: "Cetak cepat dan berkualitas tinggi untuk kebutuhan bisnis dan personal Anda.",
  },
  {
    icon: "📋",
    title: "Brosur & Flyer",
    description: "Desain dan cetak brosur menarik untuk promosi bisnis Anda.",
  },
  {
    icon: "🪧",
    title: "Banner & Spanduk",
    description: "Banner dan spanduk ukuran besar untuk promosi outdoor maupun indoor.",
  },
  {
    icon: "💳",
    title: "Kartu Nama",
    description: "Kartu nama profesional dengan berbagai pilihan bahan dan finishing.",
  },
  {
    icon: "📦",
    title: "Packaging & Box",
    description: "Kemasan produk custom sesuai kebutuhan bisnis Anda.",
  },
  {
    icon: "📅",
    title: "Kalender & Agenda",
    description: "Cetak kalender dan agenda custom untuk promosi perusahaan.",
  },
];

const testimonials = [
  {
    name: "Budi Santoso",
    company: "PT. Maju Bersama",
    text: "Kualitas cetakan sangat bagus dan pengerjaan cepat. Sangat puas dengan pelayanan Surya Grafika!",
    rating: 5,
  },
  {
    name: "Siti Rahayu",
    company: "Toko Bunga Indah",
    text: "Harga terjangkau dengan hasil yang memuaskan. Sudah berlangganan selama 3 tahun.",
    rating: 5,
  },
  {
    name: "Ahmad Fauzi",
    company: "Restoran Nusantara",
    text: "Desain menu restoran kami sangat cantik. Tim Surya Grafika sangat profesional.",
    rating: 5,
  },
];

export default function Home() {
  return (
    <div className="bg-sky-50">
      {/* Hero Section */}
      <section className="gradient-hero text-white py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-sky-400/30 text-sky-100 text-sm font-semibold px-4 py-1 rounded-full mb-4">
                Percetakan Profesional #1
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Cetak Impian Anda Bersama{" "}
                <span className="text-sky-300">Surya Grafika</span>
              </h1>
              <p className="text-sky-100 text-lg mb-8 leading-relaxed">
                Kami hadir untuk memenuhi semua kebutuhan cetak Anda dengan kualitas terbaik, harga terjangkau, dan pengerjaan tepat waktu.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/kontak"
                  className="bg-white text-sky-700 px-8 py-3 rounded-full font-semibold hover:bg-sky-50 transition-colors text-center"
                >
                  Pesan Sekarang
                </Link>
                <Link
                  href="/layanan"
                  className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors text-center"
                >
                  Lihat Layanan
                </Link>
              </div>
            </div>
            <div className="hidden md:flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 bg-sky-400/20 rounded-full flex items-center justify-center">
                  <div className="w-64 h-64 bg-sky-400/30 rounded-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-8xl mb-4">🖨️</div>
                      <p className="text-white font-bold text-xl">Surya Grafika</p>
                      <p className="text-sky-200 text-sm">Percetakan Profesional</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-12 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "10+", label: "Tahun Pengalaman" },
              { value: "5000+", label: "Pelanggan Puas" },
              { value: "50+", label: "Jenis Produk" },
              { value: "24 Jam", label: "Layanan Express" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl md:text-4xl font-bold text-sky-600">{stat.value}</div>
                <div className="text-sky-800 text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 gradient-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-sky-500 font-semibold text-sm uppercase tracking-wider">Apa yang Kami Tawarkan</span>
            <h2 className="text-3xl md:text-4xl font-bold text-sky-900 mt-2 mb-4">Layanan Unggulan Kami</h2>
            <p className="text-sky-700 max-w-2xl mx-auto">
              Kami menyediakan berbagai layanan percetakan berkualitas tinggi untuk memenuhi semua kebutuhan bisnis dan personal Anda.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-white rounded-2xl p-6 shadow-sm card-hover border border-sky-100"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-sky-800 mb-2">{service.title}</h3>
                <p className="text-sky-600 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/layanan"
              className="bg-sky-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-sky-700 transition-colors inline-block"
            >
              Lihat Semua Layanan
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-sky-500 font-semibold text-sm uppercase tracking-wider">Keunggulan Kami</span>
              <h2 className="text-3xl md:text-4xl font-bold text-sky-900 mt-2 mb-6">
                Mengapa Memilih Surya Grafika?
              </h2>
              <div className="space-y-5">
                {[
                  { title: "Kualitas Terjamin", desc: "Menggunakan mesin cetak modern dan bahan berkualitas tinggi untuk hasil terbaik." },
                  { title: "Harga Terjangkau", desc: "Harga kompetitif tanpa mengorbankan kualitas produk cetakan Anda." },
                  { title: "Pengerjaan Cepat", desc: "Komitmen pengerjaan tepat waktu dengan layanan express tersedia." },
                  { title: "Tim Profesional", desc: "Didukung oleh tim berpengalaman yang siap membantu setiap kebutuhan Anda." },
                ].map((item) => (
                  <div key={item.title} className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-sky-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sky-800">{item.title}</h4>
                      <p className="text-sky-600 text-sm mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-sky-500 to-sky-700 rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Proses Pemesanan</h3>
              <div className="space-y-6">
                {[
                  { step: "01", title: "Konsultasi", desc: "Hubungi kami dan konsultasikan kebutuhan cetak Anda." },
                  { step: "02", title: "Desain & Approval", desc: "Tim kami menyiapkan desain dan menunggu persetujuan Anda." },
                  { step: "03", title: "Proses Cetak", desc: "Setelah disetujui, proses cetak segera dimulai." },
                  { step: "04", title: "Pengiriman", desc: "Produk dikirim ke alamat Anda atau bisa diambil langsung." },
                ].map((item) => (
                  <div key={item.step} className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sky-100">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="font-semibold">{item.title}</h4>
                      <p className="text-sky-200 text-sm mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 gradient-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-sky-500 font-semibold text-sm uppercase tracking-wider">Testimoni</span>
            <h2 className="text-3xl md:text-4xl font-bold text-sky-900 mt-2 mb-4">Apa Kata Pelanggan Kami</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white rounded-2xl p-6 shadow-sm border border-sky-100">
                <div className="flex mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sky-700 text-sm leading-relaxed mb-4 italic">&ldquo;{t.text}&rdquo;</p>
                <div>
                  <p className="font-semibold text-sky-800">{t.name}</p>
                  <p className="text-sky-500 text-xs">{t.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="gradient-hero py-16 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Siap Mencetak Bersama Kami?</h2>
          <p className="text-sky-200 mb-8 text-lg">
            Hubungi kami sekarang dan dapatkan konsultasi gratis untuk kebutuhan cetak Anda.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/kontak"
              className="bg-white text-sky-700 px-8 py-3 rounded-full font-semibold hover:bg-sky-50 transition-colors"
            >
              Hubungi Kami
            </Link>
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors"
            >
              Chat WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
