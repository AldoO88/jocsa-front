import Image from "next/image";
import logo from '@/assets/images/logo.png';
export default function Home() {
  return (
    <div className="items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      
      <Image 
        src={logo} 
        alt="JOCSA Auto Partes Logo" 
        className="w-96 h-96"
        priority // Carga esta imagen primero, es importante para el LCP
      />

      <h1 className="text-4xl font-bold text-center m-4">PROXIMAMENTE</h1>
    </div>
  );
}
