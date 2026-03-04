import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Portofolio - Surya Grafika",
  description: "Galeri hasil karya percetakan Surya Grafika yang telah dipercaya oleh ribuan pelanggan.",
};

const categories = ["Semua", "Brosur", "Banner", "Kartu Nama", "Packaging", "Kalender", "Undangan"];

const portfolioItems = [
  { category: "Brosur", title: "Brosur Restoran Nusantara", client: "Restoran Nusantara", color: "from-orange-400 to-red-500", icon: "📋" },
  { category: "Banner", title: "Banner Promosi Toko Elektronik", client: "Toko Elektronik Jaya", color: "from-blue-400 to-indigo-500", icon: "🪧" },
  { category: "Kartu Nama", title: "Kartu Nama Profesional", client: "PT. Konsultan Prima", color: "from-sky-400 to-sky-600", icon: "💳" },
  { category: "Packaging", title: "Box Kemasan Kue Premium", client: "Bakery Manis", color: "from-pink-400 to-rose-500", icon: "📦" },
  { category: "Kalender", title: "Kalender Dinding 2025", client: "PT. Asuransi Sejahtera", color: "from-green-400 to-emerald-500", icon: "📅" },
  { category: "Undangan", title: "Undangan Pernikahan Mewah", client: "Keluarga Bapak Ahmad", color: "from-purple-400 to-violet-500", icon: "🎀" },
  { category: "Brosur", title: "Flyer Event Musik", client: "EO Harmoni", color: "from-yellow-400 to-amber-500", icon: "📋" },
  { category: "Banner", title: "Spanduk Kampanye Sosial", client: "Yayasan Peduli", color: "from-teal-400 to-cyan-500", icon: "🪧" },
  { category: "Kartu Nama", title: "Kartu Nama Kreatif", client: "Studio Desain Kreatif", color: "from-fuchsia-400 to-pink-500", icon: "💳" },
  { category: "Packaging", title: "Kemasan Produk Herbal", client: "Herbal Nusantara", color: "from-lime-400 to-green-500", icon: "📦" },
  { category: "Brosur", title: "Company Profile Perusahaan", client: "PT. Konstruksi Maju", color: "from-sky-500 to-blue-600", icon: "📋" },
  { category: "Undangan", title: "Undangan Ulang Tahun", client: "Keluarga Bapak Hendra", color: "from-rose-400 to-pink-500", icon: "🎀" },
];

const clients = [
  "PT. Maju Bersama", "Restoran Nusantara", "Toko Bunga Indah", "PT. Asuransi Sejahtera",
  "Bakery Manis", "Studio Kreatif", "PT. Konstruksi Maju", "Yayasan Peduli",
];

export default function PortofolioPage() {
  return (
    <div className="bg-sky-50">
      {/* Page Header */}
      <section className="gradient-hero text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Portofolio</h1>
          <p className="text-sky-200 text-lg max-w-2xl mx-auto">
            Galeri hasil karya terbaik kami yang telah dipercaya oleh ribuan pelanggan.
          </p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                  cat === "Semua"
                    ? "bg-sky-600 text-white"
                    : "bg-white text-sky-700 border border-sky-200 hover:bg-sky-50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {portfolioItems.map((item, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm card-hover border border-sky-100">
                <div className={`bg-gradient-to-br ${item.color} h-40 flex items-center justify-center`}>
                  <span className="text-6xl">{item.icon}</span>
                </div>
                <div className="p-4">
                  <span className="text-xs font-semibold text-sky-500 bg-sky-50 px-2 py-1 rounded-full">
                    {item.category}
                  </span>
                  <h3 className="font-bold text-sky-800 mt-2 text-sm">{item.title}</h3>
                  <p className="text-sky-500 text-xs mt-1">{item.client}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-sky-900 mb-2">Klien yang Mempercayai Kami</h2>
            <p className="text-sky-600">Bergabung bersama ratusan pelanggan setia Surya Grafika</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {clients.map((client) => (
              <div key={client} className="bg-sky-50 rounded-xl p-4 text-center border border-sky-100">
                <div className="w-12 h-12 bg-sky-200 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-sky-700 font-bold text-lg">{client.charAt(0)}</span>
                </div>
                <p className="text-sky-700 text-sm font-medium">{client}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-hero py-16 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ingin Karya Anda Ada di Sini?</h2>
          <p className="text-sky-200 mb-8">Hubungi kami dan wujudkan kebutuhan cetak Anda bersama Surya Grafika.</p>
          <Link href="/kontak" className="bg-white text-sky-700 px-8 py-3 rounded-full font-semibold hover:bg-sky-50 transition-colors">
            Mulai Proyek Anda
          </Link>
        </div>
      </section>
    </div>
  );
}
