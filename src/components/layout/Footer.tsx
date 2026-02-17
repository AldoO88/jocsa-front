import Link from 'next/link';
import { Facebook, Instagram, Twitter, Send } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0A0D10] text-gray-400 pt-16 pb-8 border-t border-white/5">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        
        {/* Columna 1: Branding */}
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <div className="bg-[#E3261E] px-2 py-1 rounded text-white font-black italic">JOCSA</div>
            <span className="text-white font-bold text-xs tracking-widest uppercase">Auto Partes</span>
          </div>
          <p className="text-sm leading-relaxed">
            Líderes en distribución de auto partes y accesorios de alta gama. Pasión por la ingeniería y el rendimiento automotriz.
          </p>
          <div className="flex gap-4">
            <Facebook size={18} className="hover:text-white cursor-pointer transition-colors" />
            <Instagram size={18} className="hover:text-white cursor-pointer transition-colors" />
            <Twitter size={18} className="hover:text-white cursor-pointer transition-colors" />
          </div>
        </div>

        {/* Columna 2: Menú */}
        <div>
          <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-6 underline decoration-[#E3261E] decoration-2 underline-offset-8">Menú</h4>
          <ul className="space-y-4 text-sm">
            <li><Link href="/nosotros" className="hover:text-white transition-colors">Sobre Nosotros</Link></li>
            <li><Link href="/tiendas" className="hover:text-white transition-colors">Nuestras Tiendas</Link></li>
            <li><Link href="/envios" className="hover:text-white transition-colors">Envíos y Entregas</Link></li>
            <li><Link href="/garantia" className="hover:text-white transition-colors">Garantías</Link></li>
          </ul>
        </div>

        {/* Columna 3: Soporte */}
        <div>
          <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-6 underline decoration-[#E3261E] decoration-2 underline-offset-8">Soporte</h4>
          <ul className="space-y-4 text-sm">
            <li><Link href="/account" className="hover:text-white transition-colors">Mi Cuenta</Link></li>
            <li><Link href="/tracking" className="hover:text-white transition-colors">Rastrear Pedido</Link></li>
            <li><Link href="/devoluciones" className="hover:text-white transition-colors">Devoluciones</Link></li>
            <li><Link href="/faq" className="hover:text-white transition-colors">Preguntas Frecuentes</Link></li>
          </ul>
        </div>

        {/* Columna 4: Newsletter */}
        <div>
          <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-6 underline decoration-[#E3261E] decoration-2 underline-offset-8">Newsletter</h4>
          <p className="text-sm mb-6">Recibe ofertas exclusivas y lanzamientos directamente en tu correo.</p>
          <form className="relative">
            <input 
              type="email" 
              placeholder="Tu email" 
              className="w-full bg-white/5 border border-white/10 rounded-lg py-3 px-4 text-sm focus:outline-none focus:border-[#E3261E] transition-all"
            />
            <button className="absolute right-2 top-1.5 bg-[#E3261E] p-2 rounded-md hover:bg-red-700 transition-colors">
              <Send size={16} className="text-white" />
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="container mx-auto px-6 pt-8 border-t border-white/5 flex flex-col md:row justify-between items-center gap-4 text-[10px] uppercase tracking-widest">
        <p>© 2026 JOCSA Auto Partes. Todos los derechos reservados.</p>
        <div className="flex gap-6">
          <Link href="/terminos" className="hover:text-white">Términos y Condiciones</Link>
          <Link href="/privacidad" className="hover:text-white">Aviso de Privacidad</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;