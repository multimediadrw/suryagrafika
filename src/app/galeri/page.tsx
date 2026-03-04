import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Galeri - Surya Grafika",
  description: "Galeri hasil karya percetakan Surya Grafika yang telah dipercaya oleh ribuan pelanggan.",
};

const categories = ["Semua", "Cetak Form", "Cetak A3", "Surat Jalan", "Spanduk", "Kartu Nama", "Undangan"];

const galleryItems = [
  { category: "Cetak Form", title: "Form Produksi Pabrik", client: "PT. Industri Maju", color: "bg-sky-700" },
  { category: "Spanduk", title: "Spanduk Promosi Toko", client: "Toko Elektronik Jaya", color: "bg-blue-800" },
  { category: "Kartu Nama", title: "Kartu Nama Profesional", client: "PT. Konsultan Prima", color: "bg-sky-600" },
  { category: "Surat Jalan", title: "Nota NCR 3 Rangkap", client: "CV. Distribusi Cepat", color: "bg-indigo-700" },
  { category: "Cetak A3", title: "Poster Acara Perusahaan", client: "PT. Asuransi Sejahtera", color: "bg-sky-800" },
  { category: "Undangan", title: "Undangan Pernikahan Mewah", client: "Keluarga Bapak Ahmad", color: "bg-blue-700" },
  { category: "Cetak Form", title: "Formulir Absensi Karyawan", client: "PT. Sumber Daya", color: "bg-sky-700" },
  { category: "Spanduk", title: "Spanduk HUT Perusahaan", client: "PT. Maju Bersama", color: "bg-indigo-800" },
  { category: "Kartu Nama", title: "Kartu Nama Desainer", client: "Studio Kreatif", color: "bg-sky-600" },
  { category: "Cetak A3", title: "Brosur Produk A3", client: "Toko Bunga Indah", color: "bg-blue-800" },
  { category: "Surat Jalan", title: "Faktur Penjualan Custom", client: "CV. Niaga Jaya", color: "bg-sky-800" },
  { category: "Undangan", title: "Undangan Ulang Tahun", client: "Keluarga Bapak Hendra", color: "bg-blue-700" },
];

export default function GaleriPage() {
  return (
    <div className="bg-sky-50">
      {/* Page Header */}
      <section className="gradient-hero text-white py-24 pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Galeri Karya</h1>
          <p className="text-sky-200 text-lg max-w-2xl mx-auto">
            Kumpulan hasil karya terbaik kami yang telah dipercaya oleh ribuan pelanggan.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
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
            {galleryItems.map((item, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm card-hover border border-sky-100">
                <div className={`${item.color} h-44 flex items-center justify-center`}>
                  <svg className="w-16 h-16 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                  </svg>
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
