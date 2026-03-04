import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Galeri - Surya Grafika",
  description: "Galeri hasil karya percetakan Surya Grafika — cetak form, spanduk, kartu nama, undangan, dan berbagai produk cetak berkualitas.",
};

const photos = [
  {
    src: "/galeri/color-card.jpg",
    title: "Cetak Form",
    desc: "Form cetak skala besar untuk kebutuhan produksi dan office",
  },
  {
    src: "/galeri/service-report.jpg",
    title: "Surat Jalan / Nota NCR",
    desc: "Nota NCR dan surat jalan custom dua rangkap",
  },
  {
    src: "/galeri/order-form.jpg",
    title: "Cetak A3 / Formulir",
    desc: "Cetak dokumen dan formulir ukuran A3 kualitas tinggi",
  },
  {
    src: "/galeri/spanduk.jpg",
    title: "Spanduk",
    desc: "Spanduk promosi outdoor dan indoor full color",
  },
  {
    src: "/galeri/kartu-nama.jpg",
    title: "Kartu Nama",
    desc: "Kartu nama profesional dan elegan",
  },
  {
    src: "/galeri/undangan.jpg",
    title: "Undangan",
    desc: "Undangan pernikahan dan acara resmi",
  },
];

export default function GaleriPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <section className="gradient-hero text-white py-24 pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Galeri</h1>
          <p className="text-sky-200 text-lg max-w-2xl mx-auto">
            Hasil karya percetakan Surya Grafika — kualitas terbaik untuk setiap kebutuhan cetak Anda.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo) => (
            <div
              key={photo.src}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow group"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={photo.src}
                  alt={photo.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 text-base mb-1">{photo.title}</h3>
                <p className="text-gray-500 text-sm">{photo.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-hero py-14 text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Tertarik dengan Produk Kami?</h2>
          <p className="text-sky-200 mb-6">Hubungi kami untuk konsultasi dan penawaran harga terbaik.</p>
          <Link
            href="/kontak"
            className="inline-block bg-white text-sky-700 px-8 py-3 rounded-full font-semibold hover:bg-sky-50 transition-colors"
          >
            Hubungi Kami
          </Link>
        </div>
      </section>
    </div>
  );
}
