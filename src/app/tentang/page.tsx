import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tentang Kami - Surya Grafika",
  description: "Mengenal lebih dekat Surya Grafika, percetakan profesional dengan pengalaman lebih dari 10 tahun.",
};

const team = [
  { name: "Hendra Wijaya", role: "Direktur Utama", initial: "HW" },
  { name: "Rina Kusuma", role: "Manajer Produksi", initial: "RK" },
  { name: "Doni Prasetyo", role: "Kepala Desainer", initial: "DP" },
  { name: "Maya Sari", role: "Customer Service", initial: "MS" },
];

const milestones = [
  { year: "2014", event: "Surya Grafika didirikan dengan 2 mesin cetak." },
  { year: "2016", event: "Ekspansi layanan digital printing dan banner." },
  { year: "2018", event: "Membuka cabang kedua dan menambah 10 karyawan." },
  { year: "2020", event: "Meluncurkan layanan online dan pengiriman ke seluruh Indonesia." },
  { year: "2022", event: "Meraih penghargaan percetakan terbaik tingkat regional." },
  { year: "2024", event: "Melayani lebih dari 5.000 pelanggan setia di seluruh Indonesia." },
];

export default function TentangPage() {
  return (
    <div className="bg-sky-50">
      {/* Page Header */}
      <section className="gradient-hero text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Tentang Kami</h1>
          <p className="text-sky-200 text-lg max-w-2xl mx-auto">
            Mengenal lebih dekat Surya Grafika, mitra percetakan terpercaya Anda.
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-sky-500 font-semibold text-sm uppercase tracking-wider">Siapa Kami</span>
              <h2 className="text-3xl md:text-4xl font-bold text-sky-900 mt-2 mb-6">
                Percetakan Profesional Sejak 2014
              </h2>
              <p className="text-sky-700 leading-relaxed mb-4">
                Surya Grafika adalah perusahaan percetakan profesional yang telah berdiri sejak tahun 2014. Dengan pengalaman lebih dari 10 tahun, kami telah melayani ribuan pelanggan dari berbagai segmen, mulai dari UMKM, perusahaan besar, hingga instansi pemerintah.
              </p>
              <p className="text-sky-700 leading-relaxed mb-4">
                Kami berkomitmen untuk memberikan hasil cetakan berkualitas tinggi dengan menggunakan teknologi mesin cetak terkini dan bahan-bahan pilihan. Setiap produk yang kami hasilkan melewati proses quality control yang ketat untuk memastikan kepuasan pelanggan.
              </p>
              <p className="text-sky-700 leading-relaxed">
                Kepercayaan pelanggan adalah aset terbesar kami. Itulah mengapa kami selalu berusaha memberikan pelayanan terbaik, harga yang transparan, dan pengerjaan yang tepat waktu.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: "🎯", title: "Visi", desc: "Menjadi percetakan terpercaya dan terdepan di Indonesia." },
                { icon: "💡", title: "Misi", desc: "Memberikan solusi cetak berkualitas dengan harga terjangkau." },
                { icon: "⭐", title: "Nilai", desc: "Integritas, kualitas, dan kepuasan pelanggan adalah prioritas kami." },
                { icon: "🤝", title: "Komitmen", desc: "Pengerjaan tepat waktu dan layanan purna jual terbaik." },
              ].map((item) => (
                <div key={item.title} className="bg-sky-50 rounded-2xl p-5 border border-sky-100">
                  <div className="text-3xl mb-2">{item.icon}</div>
                  <h3 className="font-bold text-sky-800 mb-1">{item.title}</h3>
                  <p className="text-sky-600 text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-20 gradient-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-sky-500 font-semibold text-sm uppercase tracking-wider">Perjalanan Kami</span>
            <h2 className="text-3xl md:text-4xl font-bold text-sky-900 mt-2 mb-4">Sejarah Surya Grafika</h2>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-0.5 h-full w-0.5 bg-sky-200"></div>
            <div className="space-y-8">
              {milestones.map((m, i) => (
                <div key={m.year} className={`flex items-center gap-8 ${i % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
                  <div className={`w-1/2 ${i % 2 === 0 ? "text-right" : "text-left"}`}>
                    <div className="bg-white rounded-xl p-4 shadow-sm border border-sky-100 inline-block">
                      <p className="text-sky-600 text-sm">{m.event}</p>
                    </div>
                  </div>
                  <div className="w-10 h-10 bg-sky-600 rounded-full flex items-center justify-center text-white font-bold text-xs flex-shrink-0 z-10">
                    {m.year.slice(2)}
                  </div>
                  <div className="w-1/2">
                    <span className="text-sky-700 font-bold text-lg">{m.year}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-sky-500 font-semibold text-sm uppercase tracking-wider">Tim Kami</span>
            <h2 className="text-3xl md:text-4xl font-bold text-sky-900 mt-2 mb-4">Orang-Orang di Balik Surya Grafika</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {team.map((member) => (
              <div key={member.name} className="text-center">
                <div className="w-20 h-20 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-sky-700 font-bold text-xl">{member.initial}</span>
                </div>
                <h3 className="font-bold text-sky-800">{member.name}</h3>
                <p className="text-sky-500 text-sm">{member.role}</p>
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
