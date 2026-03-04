import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWA from "@/components/FloatingWA";
import PageTransition from "@/components/PageTransition";

export const metadata: Metadata = {
  title: "Surya Grafika - Percetakan Profesional",
  description: "Surya Grafika adalah usaha percetakan yang telah berdiri lebih dari 20 tahun, melayani kebutuhan cetak untuk perusahaan, pabrik, dan perkantoran.",
  keywords: "percetakan, cetak, brosur, banner, kartu nama, spanduk, undangan, surya grafika, sukabumi",
  icons: {
    icon: "/favicon.ico",
    apple: "/logo.png",
  },
  verification: {
    google: "TfuI95xpSTKAEXXBldFJRKMF5hvCgKZcl6_qX8SxLf0",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        {/* Google Analytics GA4 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-ZH8BPDE3R5"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-ZH8BPDE3R5');
          `}
        </Script>
      </head>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <PageTransition>
            {children}
          </PageTransition>
        </main>
        <Footer />
        <FloatingWA />
      </body>
    </html>
  );
}
