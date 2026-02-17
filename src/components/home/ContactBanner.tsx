import { Wrench } from 'lucide-react';

export default function ContactBanner() {
  return (
    <section className="container mx-auto px-6 mb-20 py-8">
      <div className="relative overflow-hidden bg-gradient-to-br from-[#E3261E] to-[#B01B15] rounded-3xl p-10 md:p-16 flex items-center shadow-2xl shadow-red-900/20">
        
        {/* Contenido de Texto */}
        <div className="relative z-10 max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase leading-none mb-6 italic">
            ¿Buscas algo <br /> 
            <span className="not-italic">específico?</span>
          </h2>
          <p className="text-red-100 text-lg mb-8 max-w-md font-medium">
            Nuestros expertos te ayudan a encontrar la pieza exacta para tu modelo. Chat en vivo disponible de lunes a viernes.
          </p>
          <button className="bg-white text-[#E3261E] px-10 py-4 rounded-full font-black text-sm uppercase tracking-wider hover:bg-gray-100 transition-all hover:scale-105 active:scale-95 shadow-lg">
            Contactar Experto
          </button>
        </div>

        {/* Elemento Decorativo (Icono de fondo) */}
        <div className="absolute right-[-20px] bottom-[-40px] md:right-10 md:bottom-[-20px] opacity-10 transform -rotate-12 pointer-events-none">
          <Wrench size={400} strokeWidth={1} className="text-white" />
        </div>
        
        {/* Overlay sutil para mejorar legibilidad */}
        <div className="absolute inset-0 bg-black/5 pointer-events-none" />
      </div>
    </section>
  );
}