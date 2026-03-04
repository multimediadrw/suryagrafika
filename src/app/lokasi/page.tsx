import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lokasi - Surya Grafika",
  description: "Temukan lokasi Surya Grafika di Cisarua, Kabupaten Sukabumi, Jawa Barat.",
};

export default function LokasiPage() {
  const googleMapsLink = "https://maps.app.goo.gl/S3owX828cU65evWbA";

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Page Header */}
      <section className="gradient-hero text-white py-24 pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Lokasi Kami</h1>
          <p className="text-sky-200 text-lg max-w-2xl mx-auto">
            Kunjungi kami langsung di Cisarua, Kabupaten Sukabumi, Jawa Barat.
          </p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-12 space-y-6">
        {/* Maps Embed Card */}
        <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
          <div className="relative w-full" style={{ height: "300px" }}>
            <iframe
              src="https://maps.google.com/maps?q=4QGJ%2B26+Cisarua+Kabupaten+Sukabumi+Jawa+Barat&t=&z=16&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokasi Surya Grafika"
            />
          </div>
          <div className="p-5 flex items-center space-x-3 border-t border-gray-100">
            <div className="w-10 h-10 bg-sky-100 rounded-full flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
            </div>
            <div>
              <p className="font-semibold text-gray-900 text-sm">Cisarua, Sukabumi</p>
              <div className="flex items-center space-x-1 mt-0.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block"></span>
                <span className="text-xs text-emerald-600 font-medium">LIVE</span>
              </div>
            </div>
          </div>
        </div>

        {/* Info Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <h2 className="text-center font-bold text-gray-900 text-lg mb-1">Surya Grafika</h2>
          <p className="text-center text-gray-500 text-sm mb-6">
            4QGJ+26 Cisarua, Kabupaten Sukabumi, Jawa Barat
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
            <div>
              <p className="font-semibold text-gray-800 text-sm mb-1">Jam Operasional</p>
              <p className="text-gray-500 text-sm">Senin - Sabtu: 07.00 - 15.30</p>
            </div>
            <div>
              <p className="font-semibold text-gray-800 text-sm mb-1">Kontak</p>
              <p className="text-gray-500 text-sm">
                WhatsApp:{" "}
                <a href="https://wa.me/6285860765740" className="text-sky-600 hover:underline">
                  +62 858-6076-5740
                </a>
              </p>
              <p className="text-gray-500 text-sm">
                Email:{" "}
                <a href="mailto:suryagrafikagroup@gmail.com" className="text-sky-600 hover:underline">
                  suryagrafikagroup@gmail.com
                </a>
              </p>
            </div>
          </div>

          <div className="text-center">
            <a
              href={googleMapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 border border-gray-300 text-gray-700 px-6 py-2.5 rounded-full text-sm font-medium hover:bg-gray-50 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>Buka di Google Maps</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
