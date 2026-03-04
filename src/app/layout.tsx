import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Surya Grafika - Percetakan Profesional",
  description: "Surya Grafika adalah percetakan profesional yang melayani berbagai kebutuhan cetak Anda dengan kualitas terbaik dan harga terjangkau.",
  keywords: "percetakan, cetak, brosur, banner, kartu nama, spanduk, undangan, surya grafika",
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
