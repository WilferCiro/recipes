import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AllProviders from "@/components/providers/all-providers";
import AppLayout from "@/components/layouts/app-layout";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  openGraph: {
    images: ["/meta/meta.jpg"],
  },
  title: "Recetas Deliciosas | Cocina Fácil, Rápida y Casera",
  description:
    "Descubre cientos de recetas caseras fáciles y rápidas para todos los gustos. Desde platos tradicionales hasta opciones saludables y creativas. ¡Inspírate y cocina como un chef!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Analytics />
        <AppLayout>
          <AllProviders>{children}</AllProviders>
        </AppLayout>
      </body>
    </html>
  );
}
