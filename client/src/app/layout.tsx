import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ToastContainer } from "react-toastify";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TrendLama | Moda y Estilo Urbano",
  description: "Descubre en TrenLama las últimas tendencias en ropa urbana, deportiva y casual. Compra camisetas, pantalones, zapatillas y accesorios con estilo, calidad y comodidad.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className = {`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className = "mx-auto max-w-[1600px]">
          <Navbar />
          {children}
          <Footer />
        </div>
        <ToastContainer position = "bottom-right" />
      </body>
    </html>
  );
}
