import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Surya Grafika - Percetakan Profesional",
  description: "Surya Grafika adalah usaha percetakan yang telah berdiri lebih dari 20 tahun, melayani kebutuhan cetak untuk perusahaan, pabrik, dan perkantoran.",
  keywords: "percetakan, cetak, brosur, banner, kartu nama, spanduk, undangan, surya grafika, sukabumi",
  icons: {
    icon: "/favicon.ico",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
