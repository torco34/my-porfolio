import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Geist, Geist_Mono } from "next/font/google";

import Header from "../components/dashboard/Header";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  const messages = await getMessages();

  // Debug: log locale and messages
  console.log("Current locale:", locale);
  console.log("Messages loaded:", Object.keys(messages).length > 0);

  return (
    <html lang={locale}>
      <body className="bg-white">
        <NextIntlClientProvider messages={messages}>
          <div className="min-h-screen flex flex-col">
            <Header />

            <main className="flex-1 p-6 ">
              <div className="max-w-7xl mx-auto">{children}</div>
            </main>

            <Footer />
            <WhatsAppButton />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
