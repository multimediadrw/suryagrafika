import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lokasi - Surya Grafika",
  description: "Temukan lokasi Surya Grafika dan kunjungi kami untuk konsultasi langsung.",
};

export default function LokasiPage() {
  return (
    <div className="bg-sky-50">
      {/* Page Header */}
      <section className="gradient-hero text-white py-24 pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Lokasi Kami</h1>
          <p className="text-sky-200 text-lg max-w-2xl mx-auto">
            Kunjungi kami langsung untuk konsultasi dan melihat sampel hasil cetakan.
          </p>
        </div>
      </section>

      {/* Location Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Info */}
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-sky-100">
                <h2 className="text-xl font-bold text-sky-900 mb-5">Informasi Lokasi</h2>
                <div className="space-y-5">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-sky-100 rounded-full flex items-center justify-center text-sky-600 flex-shrink-0">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-sky-800 text-sm">Alamat</h3>
                      <p className="text-sky-600 text-sm mt-1">Jl. Percetakan No. 1,<br />Kota Anda, Indonesia</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-sky-100 rounded-full flex items-center justify-center text-sky-600 flex-shrink-0">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-sky-800 text-sm">Jam Operasional</h3>
                      <div className="text-sky-600 text-sm mt-1 space-y-1">
                        <p>Senin - Jumat: 08.00 - 17.00 WIB</p>
                        <p>Sabtu: 08.00 - 15.00 WIB</p>
                        <p className="text-red-400">Minggu: Tutup</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-sky-100 rounded-full flex items-center justify-center text-sky-600 flex-shrink-0">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-sky-800 text-sm">Telepon</h3>
                      <p className="text-sky-600 text-sm mt-1">+62 812-3456-7890</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-sky-100 rounded-full flex items-center justify-center text-sky-600 flex-shrink-0">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-sky-800 text-sm">Email</h3>
                      <p className="text-sky-600 text-sm mt-1">info@suryagrafika.com</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Directions Button */}
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 bg-sky-600 text-white px-6 py-3 rounded-xl hover:bg-sky-700 transition-colors w-full"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
                <span className="font-semibold">Petunjuk Arah</span>
              </a>

              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 bg-green-500 text-white px-6 py-3 rounded-xl hover:bg-green-600 transition-colors w-full"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <span className="font-semibold">Chat WhatsApp</span>
              </a>
            </div>

            {/* Map */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-sky-100 h-full min-h-96">
                {/* Google Maps Embed Placeholder */}
                <div className="w-full h-full min-h-96 bg-sky-100 flex flex-col items-center justify-center">
                  <svg className="w-16 h-16 text-sky-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                  <p className="text-sky-700 font-semibold text-lg">Peta Lokasi</p>
                  <p className="text-sky-500 text-sm mt-1">Jl. Percetakan No. 1, Kota Anda</p>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 bg-sky-600 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-sky-700 transition-colors"
                  >
                    Buka di Google Maps
                  </a>
                  <p className="text-sky-400 text-xs mt-4 text-center max-w-xs">
                    Ganti URL Google Maps embed di sini setelah mendapatkan link dari Google Maps.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Find Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-sky-900 mb-2">Cara Menemukan Kami</h2>
            <p className="text-sky-600">Panduan arah menuju Surya Grafika</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: (
                  <svg className="w-8 h-8 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                  </svg>
                ),
                title: "Dari Pusat Kota",
                desc: "Ambil jalan utama ke arah selatan, belok kiri di perempatan lampu merah, lurus 500 meter.",
              },
              {
                icon: (
                  <svg className="w-8 h-8 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
                  </svg>
                ),
                title: "Dari Terminal Bus",
                desc: "Naik angkot jurusan Timur, turun di depan Pasar Besar, jalan kaki 200 meter ke kanan.",
              },
              {
                icon: (
                  <svg className="w-8 h-8 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                ),
                title: "Patokan Lokasi",
                desc: "Berada di sebelah Apotek Sehat, depan Minimarket Alfa, dekat Kantor Pos.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-sky-50 rounded-2xl p-6 border border-sky-100">
                <div className="w-14 h-14 bg-sky-100 rounded-xl flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="font-bold text-sky-800 mb-2">{item.title}</h3>
                <p className="text-sky-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
