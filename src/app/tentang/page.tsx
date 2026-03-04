import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tentang Kami - Surya Grafika",
  description: "Surya Grafika adalah usaha percetakan yang telah berdiri lebih dari 20 tahun, melayani kebutuhan cetak untuk perusahaan, pabrik, dan perkantoran.",
};

export default function TentangPage() {
  return (
    <div className="bg-sky-50">
      {/* Page Header */}
      <section className="gradient-hero text-white py-24 pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Tentang Kami</h1>
          <p className="text-sky-200 text-lg max-w-2xl mx-auto">
            Lebih dari 20 tahun melayani kebutuhan cetak dengan kepercayaan dan konsistensi.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Surya Grafika adalah usaha percetakan yang telah berdiri lebih dari 20 tahun, melayani kebutuhan cetak untuk perusahaan, pabrik, dan perkantoran dengan mengutamakan ketepatan, konsistensi, dan kepercayaan.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Berawal dari usaha keluarga, Surya Grafika tumbuh bersama para klien yang mempercayakan kebutuhan cetak dalam jumlah besar dan berulang. Hingga hari ini, kami tetap menjaga nilai utama yang sama: pekerjaan rapi, komunikasi jelas, dan komitmen terhadap kualitas.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Kami memahami bahwa bagi bisnis, hasil cetak bukan sekadar kertas—melainkan bagian dari operasional, administrasi, dan profesionalitas perusahaan. Karena itu, kami berusaha menjadi partner percetakan yang mudah diajak diskusi, transparan dalam proses, dan siap menyesuaikan kebutuhan klien.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Dengan pengalaman panjang, sistem kerja yang terbukti, serta pendekatan yang personal, Surya Grafika hadir untuk memberikan solusi cetak yang aman, efisien, dan dapat diandalkan.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed font-medium">
              Bagi kami, kepercayaan klien adalah aset utama yang terus kami jaga, hari ini dan ke depannya.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-[#1a3a6b]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            {[
              {
                icon: (
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                ),
                title: "Ketepatan",
                desc: "Setiap pesanan dikerjakan dengan presisi dan perhatian penuh terhadap detail.",
              },
              {
                icon: (
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                  </svg>
                ),
                title: "Konsistensi",
                desc: "Kualitas yang sama terjaga di setiap pesanan, berapapun jumlahnya.",
              },
              {
                icon: (
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
                  </svg>
                ),
                title: "Kepercayaan",
                desc: "Hubungan jangka panjang dengan klien dibangun atas dasar transparansi dan kejujuran.",
              },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  {item.icon}
                </div>
                <h3 className="font-bold text-white text-lg mb-2">{item.title}</h3>
                <p className="text-blue-200 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-hero py-16 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Siap Bekerja Sama dengan Kami?</h2>
          <p className="text-sky-200 mb-8">Hubungi kami dan dapatkan penawaran terbaik untuk kebutuhan cetak Anda.</p>
          <Link href="/kontak" className="bg-white text-sky-700 px-8 py-3 rounded-full font-semibold hover:bg-sky-50 transition-colors">
            Hubungi Kami
          </Link>
        </div>
      </section>
    </div>
  );
}
