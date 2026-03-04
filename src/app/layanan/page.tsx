import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Layanan - Surya Grafika",
  description: "Berbagai layanan percetakan profesional dari Surya Grafika untuk kebutuhan bisnis dan personal Anda.",
};

const services = [
  {
    icon: "🖨️",
    title: "Cetak Digital",
    description: "Cetak digital berkualitas tinggi dengan teknologi terkini. Cocok untuk kebutuhan cetak dalam jumlah kecil hingga besar.",
    features: ["Resolusi tinggi 1440 dpi", "Berbagai ukuran kertas", "Pengerjaan cepat 1-2 hari", "Warna akurat dan tajam"],
    price: "Mulai Rp 500/lembar",
  },
  {
    icon: "📋",
    title: "Brosur & Flyer",
    description: "Brosur dan flyer menarik untuk promosi bisnis Anda. Tersedia dalam berbagai ukuran dan jenis lipatan.",
    features: ["Ukuran A4, A5, DL", "Lipatan 2, 3, atau 4 sisi", "Kertas art paper 100-150 gsm", "Full color printing"],
    price: "Mulai Rp 300/lembar",
  },
  {
    icon: "🪧",
    title: "Banner & Spanduk",
    description: "Banner dan spanduk besar untuk promosi outdoor dan indoor. Tahan cuaca dan warna tidak mudah pudar.",
    features: ["Bahan flexi korea/jepang", "Ukuran custom", "Finishing jahit/mata ayam", "Tahan air dan UV"],
    price: "Mulai Rp 15.000/m²",
  },
  {
    icon: "💳",
    title: "Kartu Nama",
    description: "Kartu nama profesional yang meninggalkan kesan mendalam. Berbagai pilihan bahan dan finishing premium.",
    features: ["Art carton 260-400 gsm", "Finishing laminasi/UV spot", "Emboss & deboss tersedia", "Cetak 2 sisi"],
    price: "Mulai Rp 50.000/100 lembar",
  },
  {
    icon: "📦",
    title: "Packaging & Box",
    description: "Kemasan produk custom yang menarik dan fungsional. Perkuat branding produk Anda dengan kemasan berkualitas.",
    features: ["Desain custom", "Berbagai jenis karton", "Finishing glossy/matte", "MOQ fleksibel"],
    price: "Hubungi untuk harga",
  },
  {
    icon: "📅",
    title: "Kalender & Agenda",
    description: "Kalender dan agenda custom untuk media promosi perusahaan yang efektif sepanjang tahun.",
    features: ["Kalender dinding/meja", "Agenda hard/soft cover", "Custom branding", "Cetak full color"],
    price: "Mulai Rp 15.000/pcs",
  },
  {
    icon: "📰",
    title: "Majalah & Katalog",
    description: "Cetak majalah, katalog produk, dan company profile dengan kualitas premium.",
    features: ["Cover tebal 260 gsm", "Isi art paper 120 gsm", "Jilid lem/kawat/spiral", "Full color printing"],
    price: "Hubungi untuk harga",
  },
  {
    icon: "🎀",
    title: "Undangan & Souvenir",
    description: "Undangan pernikahan, ulang tahun, dan acara lainnya dengan desain elegan dan berkelas.",
    features: ["Desain custom", "Kertas premium", "Amplop tersedia", "Finishing eksklusif"],
    price: "Mulai Rp 2.000/pcs",
  },
  {
    icon: "🏷️",
    title: "Stiker & Label",
    description: "Stiker dan label produk berkualitas tinggi untuk berbagai kebutuhan branding dan packaging.",
    features: ["Bahan vinyl/kertas", "Tahan air", "Ukuran custom", "Cetak full color"],
    price: "Mulai Rp 200/pcs",
  },
];

export default function LayananPage() {
  return (
    <div className="bg-sky-50">
      {/* Page Header */}
      <section className="gradient-hero text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Layanan Kami</h1>
          <p className="text-sky-200 text-lg max-w-2xl mx-auto">
            Berbagai layanan percetakan profesional untuk memenuhi semua kebutuhan bisnis dan personal Anda.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-white rounded-2xl overflow-hidden shadow-sm card-hover border border-sky-100"
              >
                <div className="bg-gradient-to-r from-sky-500 to-sky-600 p-6">
                  <div className="text-4xl mb-2">{service.icon}</div>
                  <h3 className="text-xl font-bold text-white">{service.title}</h3>
                </div>
                <div className="p-6">
                  <p className="text-sky-700 text-sm leading-relaxed mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-4">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-center space-x-2 text-sm text-sky-600">
                        <svg className="w-4 h-4 text-sky-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="border-t border-sky-100 pt-4 flex items-center justify-between">
                    <span className="text-sky-600 font-semibold text-sm">{service.price}</span>
                    <Link
                      href="/kontak"
                      className="bg-sky-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-sky-700 transition-colors"
                    >
                      Pesan
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Order */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="bg-sky-50 rounded-3xl p-10 border border-sky-100">
            <div className="text-5xl mb-4">💬</div>
            <h2 className="text-2xl md:text-3xl font-bold text-sky-900 mb-4">Butuh Layanan Custom?</h2>
            <p className="text-sky-700 mb-6">
              Tidak menemukan layanan yang Anda butuhkan? Hubungi kami dan kami akan membantu mewujudkan kebutuhan cetak Anda.
            </p>
            <Link
              href="/kontak"
              className="bg-sky-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-sky-700 transition-colors inline-block"
            >
              Konsultasi Gratis
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
