"use client";

import Link from "next/link";
import Image from "next/image";

const mobileServices = [
  {
    title: "Cetak Spanduk / Banner",
    desc: "Indoor & Outdoor, Cepat",
    color: "bg-sky-100",
    iconColor: "text-sky-600",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
  },
  {
    title: "Cetak Kartu Nama",
    desc: "Desain Custom, Kualitas Premium",
    color: "bg-orange-100",
    iconColor: "text-orange-500",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
      </svg>
    ),
  },
  {
    title: "Cetak Form / Nota",
    desc: "Nota NCR, Surat Jalan, Faktur",
    color: "bg-green-100",
    iconColor: "text-green-600",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: "Cetak Undangan",
    desc: "Pernikahan & Acara Resmi",
    color: "bg-purple-100",
    iconColor: "text-purple-600",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Cetak A3",
    desc: "Dokumen Ukuran Besar",
    color: "bg-sky-100",
    iconColor: "text-sky-600",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
      </svg>
    ),
  },
  {
    title: "Cetak Surat Jalan",
    desc: "Dokumen Administrasi Bisnis",
    color: "bg-yellow-100",
    iconColor: "text-yellow-600",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
  },
];

const galleryImages = [
  { src: "/galeri/foto1.jpg", alt: "Karya 1" },
  { src: "/galeri/foto2.jpg", alt: "Karya 2" },
  { src: "/galeri/foto3.jpg", alt: "Karya 3" },
  { src: "/galeri/foto4.jpg", alt: "Karya 4" },
  { src: "/galeri/foto5.jpg", alt: "Karya 5" },
  { src: "/galeri/foto6.jpg", alt: "Karya 6" },
];

export default function MobileHome() {
  return (
    <div className="min-h-screen bg-sky-50 pb-24">
      {/* Hero Banner */}
      <div className="bg-gradient-to-br from-sky-300 via-sky-200 to-sky-100 px-5 pt-5 pb-8 rounded-b-3xl">
        <h1 className="text-2xl font-bold text-sky-900 mb-1">
          Cari Jasa Cetak Terbaik? 👋
        </h1>
        <p className="text-sky-700 text-sm mb-5">Pilih layanan cetak kebutuhan Anda.</p>

        {/* Service Cards */}
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden divide-y divide-gray-100">
          {mobileServices.slice(0, 2).map((service) => (
            <Link
              key={service.title}
              href="/kontak"
              className="flex items-center gap-4 px-4 py-4 hover:bg-gray-50 transition-colors"
            >
              <div className={`w-12 h-12 rounded-xl ${service.color} flex items-center justify-center flex-shrink-0 ${service.iconColor}`}>
                {service.icon}
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-bold text-gray-800 text-sm">{service.title}</p>
                <p className="text-gray-500 text-xs mt-0.5">{service.desc}</p>
              </div>
              <svg className="w-4 h-4 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          ))}
        </div>
      </div>

      <div className="px-5 mt-6 space-y-6">
        {/* Semua Layanan */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-bold text-gray-800">Semua Layanan</h2>
            <Link href="/kontak" className="text-sky-500 text-sm font-medium flex items-center gap-1">
              Pesan <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </Link>
          </div>
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden divide-y divide-gray-100">
            {mobileServices.map((service) => (
              <Link
                key={service.title}
                href="/kontak"
                className="flex items-center gap-4 px-4 py-3.5 hover:bg-gray-50 transition-colors"
              >
                <div className={`w-11 h-11 rounded-xl ${service.color} flex items-center justify-center flex-shrink-0 ${service.iconColor}`}>
                  {service.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-gray-800 text-sm">{service.title}</p>
                  <p className="text-gray-400 text-xs mt-0.5">{service.desc}</p>
                </div>
                <svg className="w-4 h-4 text-gray-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            ))}
          </div>
        </div>

        {/* Karya Kami */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-bold text-gray-800">Karya Kami</h2>
            <Link href="/galeri" className="text-sky-500 text-sm font-medium flex items-center gap-1">
              Lihat Semua <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {galleryImages.map((img, idx) => (
              <div
                key={idx}
                className={`relative rounded-2xl overflow-hidden bg-gray-100 shadow-sm ${idx === 0 ? "col-span-2 h-52" : "h-36"}`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Partner Kami */}
        <div>
          <h2 className="text-lg font-bold text-gray-800 mb-3">Partner Kami</h2>
          <div className="grid grid-cols-3 gap-3">
            {[
              { src: "/partner/doosan-jaya-sukabumi.png", name: "DJS" },
              { src: "/partner/doosan-dunia-busana.png", name: "DDB" },
              { src: "/partner/younghyun-star.png", name: "YHS" },
              { src: "/partner/doosan-jaya.png", name: "BIG" },
              { src: "/partner/sengsil.png", name: "SI" },
            ].map((p, i) => (
              <div key={i} className="bg-white rounded-xl p-3 flex items-center justify-center shadow-sm border border-gray-100 h-16">
                <Image src={p.src} alt={p.name} width={80} height={40} className="object-contain max-h-10" />
              </div>
            ))}
          </div>
        </div>

        {/* CTA WhatsApp */}
        <a
          href="https://wa.me/6285860765740?text=Halo!%20saya%20ingin%20informasi%20lebih%20lanjut%20terkait%20produk%20percetakan%20anda!"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-3 w-full bg-[#25D366] text-white py-4 rounded-2xl font-semibold shadow-md hover:bg-[#20b858] transition-colors"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          Chat WhatsApp Sekarang
        </a>
      </div>
    </div>
  );
}
