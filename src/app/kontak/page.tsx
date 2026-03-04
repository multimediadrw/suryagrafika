"use client";

import { useState } from "react";

export default function KontakPage() {
  const [formData, setFormData] = useState({
    nama: "",
    email: "",
    telepon: "",
    layanan: "",
    pesan: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-sky-50">
      {/* Page Header */}
      <section className="gradient-hero text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Hubungi Kami</h1>
          <p className="text-sky-200 text-lg max-w-2xl mx-auto">
            Kami siap membantu Anda. Hubungi kami melalui form di bawah atau saluran komunikasi yang tersedia.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-sky-900 mb-6">Informasi Kontak</h2>
              </div>

              {[
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  ),
                  title: "Alamat",
                  content: "Jl. Percetakan No. 1, Kota Anda, Indonesia",
                },
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  ),
                  title: "Telepon",
                  content: "+62 812-3456-7890",
                },
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  ),
                  title: "Email",
                  content: "info@suryagrafika.com",
                },
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                  title: "Jam Operasional",
                  content: "Senin - Sabtu: 08.00 - 17.00 WIB",
                },
              ].map((item) => (
                <div key={item.title} className="flex items-start space-x-4 bg-white rounded-xl p-4 border border-sky-100 shadow-sm">
                  <div className="w-10 h-10 bg-sky-100 rounded-full flex items-center justify-center text-sky-600 flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-sky-800 text-sm">{item.title}</h3>
                    <p className="text-sky-600 text-sm mt-0.5">{item.content}</p>
                  </div>
                </div>
              ))}

              {/* WhatsApp Button */}
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-3 bg-green-500 text-white px-6 py-3 rounded-xl hover:bg-green-600 transition-colors w-full"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <span className="font-semibold">Chat via WhatsApp</span>
              </a>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-sky-100">
                <h2 className="text-2xl font-bold text-sky-900 mb-6">Kirim Pesan</h2>

                {submitted ? (
                  <div className="text-center py-12">
                    <div className="text-6xl mb-4">✅</div>
                    <h3 className="text-xl font-bold text-sky-800 mb-2">Pesan Terkirim!</h3>
                    <p className="text-sky-600">
                      Terima kasih telah menghubungi kami. Tim kami akan segera merespons pesan Anda dalam 1x24 jam.
                    </p>
                    <button
                      onClick={() => { setSubmitted(false); setFormData({ nama: "", email: "", telepon: "", layanan: "", pesan: "" }); }}
                      className="mt-6 bg-sky-600 text-white px-6 py-2 rounded-full hover:bg-sky-700 transition-colors"
                    >
                      Kirim Pesan Lain
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-sky-700 mb-1">Nama Lengkap *</label>
                        <input
                          type="text"
                          name="nama"
                          value={formData.nama}
                          onChange={handleChange}
                          required
                          placeholder="Masukkan nama Anda"
                          className="w-full border border-sky-200 rounded-xl px-4 py-3 text-sky-800 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent bg-sky-50/50"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-sky-700 mb-1">Email *</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="email@contoh.com"
                          className="w-full border border-sky-200 rounded-xl px-4 py-3 text-sky-800 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent bg-sky-50/50"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-sky-700 mb-1">Nomor Telepon</label>
                        <input
                          type="tel"
                          name="telepon"
                          value={formData.telepon}
                          onChange={handleChange}
                          placeholder="+62 812-xxxx-xxxx"
                          className="w-full border border-sky-200 rounded-xl px-4 py-3 text-sky-800 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent bg-sky-50/50"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-sky-700 mb-1">Layanan yang Diinginkan</label>
                        <select
                          name="layanan"
                          value={formData.layanan}
                          onChange={handleChange}
                          className="w-full border border-sky-200 rounded-xl px-4 py-3 text-sky-800 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent bg-sky-50/50"
                        >
                          <option value="">Pilih layanan...</option>
                          <option value="cetak-digital">Cetak Digital</option>
                          <option value="brosur-flyer">Brosur & Flyer</option>
                          <option value="banner-spanduk">Banner & Spanduk</option>
                          <option value="kartu-nama">Kartu Nama</option>
                          <option value="packaging">Packaging & Box</option>
                          <option value="kalender">Kalender & Agenda</option>
                          <option value="undangan">Undangan</option>
                          <option value="lainnya">Lainnya</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-sky-700 mb-1">Pesan / Deskripsi Kebutuhan *</label>
                      <textarea
                        name="pesan"
                        value={formData.pesan}
                        onChange={handleChange}
                        required
                        rows={5}
                        placeholder="Ceritakan kebutuhan cetak Anda secara detail..."
                        className="w-full border border-sky-200 rounded-xl px-4 py-3 text-sky-800 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent bg-sky-50/50 resize-none"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-sky-600 text-white py-3 rounded-xl font-semibold hover:bg-sky-700 transition-colors"
                    >
                      Kirim Pesan
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-sky-100 rounded-2xl h-64 flex items-center justify-center border border-sky-200">
            <div className="text-center">
              <div className="text-5xl mb-3">📍</div>
              <p className="text-sky-700 font-semibold">Lokasi Surya Grafika</p>
              <p className="text-sky-500 text-sm">Jl. Percetakan No. 1, Kota Anda</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
