"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import ScrollReveal from "@/components/ScrollReveal";

const heroSlides = [
  {
    src: "/hero/hero1.jpg",
    alt: "Mesin Percetakan Digital Surya Grafika",
  },
  {
    src: "/hero/hero2.webp",
    alt: "Proses Cetak Digital Berkualitas Tinggi",
  },
];

const services = [
  {
    title: "Cetak Form",
    description: "Kebutuhan skala besar untuk kebutuhan produksi, catatan office, dll.",
    icon: (
      <svg className="w-10 h-10 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: "Cetak A3",
    description: "Cetak dokumen ukuran A3 dengan kualitas tinggi.",
    icon: (
      <svg className="w-10 h-10 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0110.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0l.229 2.523a1.125 1.125 0 01-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0021 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 00-1.913-.247M6.34 18H5.25A2.25 2.25 0 013 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 011.913-.247m10.5 0a48.536 48.536 0 00-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5zm-3 0h.008v.008H15V10.5z" />
      </svg>
    ),
  },
  {
    title: "Surat Jalan atau Nota",
    description: "Nota NCR, surat jalan, dan faktur custom.",
    icon: (
      <svg className="w-10 h-10 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h1.5C5.496 19.5 6 18.996 6 18.375m-3.75.125a1.125 1.125 0 01-1.125-1.125v-1.5c0-.621.504-1.125 1.125-1.125m0 3.75h1.5M3.375 15.75h1.5m0 0c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m1.5-3.75H6m0 0v-1.5m0 1.5h12m0 0v1.5m0-1.5h1.5m1.5 3.75h-1.5m1.5 0a1.125 1.125 0 001.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-1.5m1.5-3.75H18m0 0v-1.5m-12 1.5V9.375a1.125 1.125 0 011.125-1.125h7.5a1.125 1.125 0 011.125 1.125v6.375M6 15.75V9.375" />
      </svg>
    ),
  },
  {
    title: "Spanduk",
    description: "Spanduk promosi outdoor dan indoor.",
    icon: (
      <svg className="w-10 h-10 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v1.5M3 21v-6m0 0l2.77-.693a9 9 0 016.208.682l.108.054a9 9 0 006.086.71l3.114-.732a48.524 48.524 0 01-.005-10.499l-3.11.732a9 9 0 01-6.085-.711l-.108-.054a9 9 0 00-6.208-.682L3 4.5M3 15V4.5" />
      </svg>
    ),
  },
  {
    title: "Kartu Nama",
    description: "Kartu nama profesional dan elegan.",
    icon: (
      <svg className="w-10 h-10 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
      </svg>
    ),
  },
  {
    title: "Undangan",
    description: "Undangan pernikahan dan acara resmi.",
    icon: (
      <svg className="w-10 h-10 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
  },
];

const whyUs = [
  {
    title: "Harga Kompetitif",
    description: "Penawaran harga terbaik untuk setiap kebutuhan cetak Anda.",
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      </svg>
    ),
  },
  {
    title: "Komunikatif",
    description: "Pelayanan ramah dan responsif untuk konsultasi.",
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
  {
    title: "Melayani Pesanan Urgent",
    description: "Siap membantu kebutuhan cetak mendadak Anda.",
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Pengerjaan Cepat",
    description: "Proses produksi efisien dan tepat waktu.",
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-sky-50">
      {/* Hero Section - Fullscreen Slideshow */}
      <section className="relative min-h-screen overflow-hidden">
        {/* Slides */}
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              className="object-cover object-center"
              priority={index === 0}
            />
          </div>
        ))}

        {/* Overlay biru tipis */}
        <div className="absolute inset-0 bg-sky-900/55" />

        {/* Konten Hero */}
        <div className="relative z-10 min-h-screen flex items-center pt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
            <div className="max-w-2xl">
              <span className="inline-block bg-sky-400/30 text-sky-100 text-sm font-semibold px-4 py-1 rounded-full mb-6 border border-sky-400/40">
                Percetakan Profesional
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white">
                Cetak Impian Anda Bersama{" "}
                <span className="text-sky-300">Surya Grafika</span>
              </h1>
              <p className="text-sky-100 text-lg mb-10 leading-relaxed max-w-xl">
                Solusi percetakan profesional untuk segala kebutuhan bisnis dan industri. Kualitas terbaik dengan harga kompetitif.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/kontak"
                  className="bg-white text-sky-700 px-8 py-3 rounded-full font-semibold hover:bg-sky-50 transition-colors text-center shadow-lg"
                >
                  Pesan Sekarang
                </Link>
                <Link
                  href="/galeri"
                  className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors text-center"
                >
                  Lihat Galeri
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Indikator Slide - kanan bawah */}
        <div className="absolute bottom-8 right-8 z-20 flex items-center gap-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentSlide
                  ? "w-8 h-3 bg-white"
                  : "w-3 h-3 bg-white/50 hover:bg-white/80"
              }`}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Layanan Kami</h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Kami menyediakan berbagai layanan percetakan berkualitas tinggi
            </p>
          </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <ScrollReveal key={service.title} direction="up" delay={idx * 80}>
              <div
                className="bg-white border border-sky-100 rounded-xl p-7 card-hover cursor-pointer shadow-sm h-full"
              >
                <div className="mb-5 text-sky-600">{service.icon}</div>
                <h3 className="text-lg font-bold text-sky-900 mb-2">{service.title}</h3>
                <p className="text-sky-600 text-sm leading-relaxed">{service.description}</p>
              </div>
              </ScrollReveal>
            ))}
          </div>
          <div className="text-center mt-12">
            <a
              href="https://wa.me/6285860765740"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-green-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-600 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              <span>Hubungi Kami untuk Produk Lainnya</span>
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Dark Blue Background */}
      <section className="py-20 bg-[#1a3a6b]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Mengapa Harus Kami?</h2>
          </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyUs.map((item, idx) => (
              <ScrollReveal key={item.title} direction="up" delay={idx * 100}>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  {item.icon}
                </div>
                <h3 className="font-bold text-white mb-2">{item.title}</h3>
                <p className="text-blue-200 text-sm leading-relaxed">{item.description}</p>
              </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Kami */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
          <div className="text-center mb-12">
            <span className="text-sky-500 font-semibold text-sm uppercase tracking-wider">Kepercayaan</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-3">Partner Kami</h2>
            <p className="text-gray-500 max-w-xl mx-auto text-sm">
              Dipercaya oleh berbagai perusahaan dan instansi untuk kebutuhan cetak mereka.
            </p>
          </div>
          </ScrollReveal>
          <div className="marquee-wrapper py-4">
            <div className="marquee-track">
              {[
                { src: '/partner/younghyun-star.png', name: 'PT. YoungHyun Star' },
                { src: '/partner/doosan-jaya-sukabumi.png', name: 'PT. Doosan Jaya Sukabumi' },
                { src: '/partner/doosan-dunia-busana.png', name: 'PT. Doosan Dunia Busana' },
                { src: '/partner/doosan-jaya.png', name: 'PT. Busana Indah Global' },
                { src: '/partner/sengsil.png', name: 'PT. Sengsil Indonesia' },
                { src: '/partner/younghyun-star.png', name: 'PT. YoungHyun Star' },
                { src: '/partner/doosan-jaya-sukabumi.png', name: 'PT. Doosan Jaya Sukabumi' },
                { src: '/partner/doosan-dunia-busana.png', name: 'PT. Doosan Dunia Busana' },
                { src: '/partner/doosan-jaya.png', name: 'PT. Busana Indah Global' },
                { src: '/partner/sengsil.png', name: 'PT. Sengsil Indonesia' },
              ].map((partner, i) => (
                <div key={i} className="flex flex-col items-center justify-center mx-10 min-w-[140px]">
                  <div className="w-32 h-20 flex items-center justify-center">
                    <img
                      src={partner.src}
                      alt={partner.name}
                      className="max-h-16 max-w-[120px] object-contain transition-all duration-300"
                    />
                  </div>
                  <p className="text-xs text-gray-400 mt-2 text-center whitespace-nowrap">{partner.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="gradient-hero py-16 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <ScrollReveal direction="up">
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
              href="https://wa.me/6285860765740"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors"
            >
              Chat WhatsApp
            </a>
          </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
