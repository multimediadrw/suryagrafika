import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-3">
              <Image
                src="/logo.png"
                alt="Surya Grafika"
                width={28}
                height={28}
                className="object-contain"
              />
              <span className="font-bold text-sky-700 text-base">Surya Grafika</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              Percetakan Surya Grafika adalah mitra terpercaya untuk segala kebutuhan cetak Anda di Sukabumi.
            </p>
          </div>

          {/* Tautan Cepat */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-4 text-sm">Tautan Cepat</h4>
            <ul className="space-y-2">
              {[
                { label: "Beranda", href: "/" },
                { label: "Tentang Kami", href: "/tentang" },
                { label: "Galeri", href: "/galeri" },
                { label: "Kontak", href: "/kontak" },
                { label: "Lokasi", href: "/lokasi" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-gray-500 hover:text-sky-600 text-sm transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Layanan Kami */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-4 text-sm">Layanan Kami</h4>
            <ul className="space-y-2">
              {[
                "Cetak Form",
                "Cetak A3",
                "Surat Jalan atau Nota",
                "Spanduk",
                "Kartu Nama",
                "Undangan",
              ].map((item) => (
                <li key={item}>
                  <span className="text-gray-500 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontak */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-4 text-sm">Kontak</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <svg className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <span className="text-gray-500 text-sm">4QGJ+26 Cisarua, Kabupaten Sukabumi, Jawa Barat</span>
              </li>
              <li className="flex items-center space-x-2">
                <svg className="w-4 h-4 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                <a href="https://wa.me/6285860765740" className="text-gray-500 hover:text-sky-600 text-sm transition-colors">+62 858-6076-5740</a>
              </li>
              <li className="flex items-center space-x-2">
                <svg className="w-4 h-4 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                <a href="mailto:suryagrafikagroup@gmail.com" className="text-gray-500 hover:text-sky-600 text-sm transition-colors">suryagrafikagroup@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-100 mt-10 pt-6 text-center">
          <p className="text-gray-400 text-xs">
            &copy; {new Date().getFullYear()} Surya Grafika. Semua hak dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
}
