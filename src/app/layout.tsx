// src/app/layout.tsx
import type { Metadata } from 'next';
import { orbitron, inter } from './fonts';
import "./globals.css";
import Header from '@/components/layout/Header';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { AuthProvider } from '@/context/auth.context';

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
    <html lang="es" className={`${orbitron.variable} ${inter.variable}`}  >
      <body className={inter.className}>
        <AuthProvider>
        {/* <Header /> */}
        <Navbar />
        <main>{children}</main>
        <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}

