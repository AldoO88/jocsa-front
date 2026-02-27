// src/components/auth/AuthWrapper.tsx
import Image from 'next/image';
import { CheckCircle2, Truck } from 'lucide-react';

interface AuthCardProps {
  children: React.ReactNode;
}

export default function AuthCard({ children }: AuthCardProps) {
  return (
    // Fondo de la página completo
    <div className="min-h-full w-full bg-[#F1F5F9] flex items-center justify-center p-4 md:p-10">
      
      {/* La Tarjeta Principal */}
      <div className="bg-white max-w-7xl flex flex-col md:flex-row rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.15)] overflow-hidden border border-white">
        
        {/* Lado Izquierdo: Imagen decorativa (Visible en MD+) */}
        <div className="relative hidden md:flex md:w-10/12 bg-[#0A0D10] p-10 flex-col justify-between">
          <div className="absolute inset-0 z-0">
            <Image 
              src="/images/auth/car-auth.png" 
              alt="Jocsa Performance"
              fill
              className="object-cover opacity-60 grayscale-[0.3]"
              priority
            />
            {/* Overlay degradado para texto legible */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
          </div>

          {/* Branding */}
          <div className="relative z-10">
            <div className="flex items-center gap-2">
              <div className="bg-jocsa-red p-1.5 rounded">
                <span className="font-black text-white text-2xl tracking-wide">JOCSA</span>
              </div>
              <span className="text-white/70 font-bold text-sm tracking-[0.2em] uppercase">Auto Partes</span>
            </div>
          </div>

          {/* Texto Motivador */}
          <div className="relative z-10">
            <h2 className="text-5xl font-black text-white uppercase leading-tight">
              Impulsa tu <br /><span className="text-jocsa-red not-italic text-[#E3261E]">Rendimiento</span>
            </h2>
            <p className="text-gray-300 text-xl mt-4 leading-relaxed max-w-full">
              Únete a la red de expertos en refacciones de alto desempeño. Accede a cátalogos exlusivos y ofertas especiales para tu vehículo.
            </p>

            <div className="flex gap-6 text-[10px] font-bold text-white uppercase tracking-widest z-10 mt-10">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#E3261E]" /> Productos Certificados
              </div>
              <div className="flex items-center gap-2">
                <Truck size={16} className="text-[#E3261E]" /> Envíos Priority
              </div>
            </div>
          </div>

          <div className="relative z-10 text-[10px] text-gray-500 uppercase tracking-widest">
            © 2026 JOCSA Auto Partes. Ingeniería de Precisión.
          </div>
        </div>

        {/* Lado Derecho: Contenido del Formulario */}
        <div className="w-full md:w-10/12 p-8 md:p-10 lg:p-12 flex flex-col justify-center">
          {children}
        </div>
      </div>
    </div>
  );
}