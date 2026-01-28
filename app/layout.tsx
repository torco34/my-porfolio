import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import Header from "./components/dashboard/Header";
import Sidebar from "./components/dashboard/Sidebar";
import Footer from "./components/Footer";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Torcoroma Arias | Desarrollador Frontend",
  description: "Portafolio profesional de Torcoroma Arias - Desarrollador Frontend especializado en React, Next.js y TypeScript",
  keywords: ["desarrollador frontend", "React", "Next.js", "TypeScript", "WordPress", "portafolio"],
  authors: [{ name: "Torcoroma Arias" }],
  openGraph: {
    title: "Torcoroma Arias | Desarrollador Frontend",
    description: "Portafolio profesional - Experto en desarrollo web moderno",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gray-50">
        <div className="min-h-screen flex flex-col">
          <div className="flex flex-1">
            <Sidebar />

            <div className="flex-1 flex flex-col">
              <Header />

              <main className="flex-1 p-6 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                  {children}
                </div>
              </main>
            </div>
          </div>
          
          <Footer />
        </div>
      </body>
    </html>
  );
}
