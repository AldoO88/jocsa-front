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
    // orbitron para títulos y inter para texto general 
    <html lang="es" className={`${orbitron.variable} ${inter.variable}`}  >
      {/* className con las variables de fuente para que estén disponibles en toda la app */}
      <body className={inter.className}>
        {/* Envolvemos toda la aplicación con el AuthProvider para que el estado de autenticación esté disponible en todos los componentes hijos, incluyendo Navbar, Header, Footer y cualquier página o componente dentro de main */}
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

