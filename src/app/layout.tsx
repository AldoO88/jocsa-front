// src/app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import "./globals.css";
import Header from '@/components/layout/Header';
import Navbar from '@/components/layout/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'JOCSA Auto Partes',
  description: "La mejor calidad en autopartes y refacciones para tu vehículo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Header />
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}

