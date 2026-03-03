import { Check, Package, Truck, ArrowRight, Download, ShoppingBag } from 'lucide-react';
import Link from 'next/link';
import OrderDetails from './_components/OrderDetails';

const SuccessPage = () => {
  return (
    <div className="min-h-screen bg-[#F8FAFC] py-12 px-6">
      <div className="container mx-auto max-w-4xl">
        
        {/* HERO DE ÉXITO */}
        <div className="text-center space-y-6 mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="w-24 h-24 bg-green-500 rounded-[2.5rem] flex items-center justify-center mx-auto shadow-xl shadow-green-200">
            <Check size={48} className="text-white" strokeWidth={3} />
          </div>
          
          <div className="space-y-2">
            <h1 className="text-4xl font-black uppercase tracking-tighter text-slate-800">¡Pedido Confirmado!</h1>
            <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.3em]">Gracias por confiar en JOCSA Autopartes</p>
          </div>

          <div className="inline-flex items-center gap-3 px-6 py-2 bg-white rounded-full border border-slate-100 shadow-sm">
            <span className="text-[10px] font-black uppercase text-slate-400">Orden:</span>
            <span className="text-[10px] font-black uppercase text-slate-800">#JO-9852-2024</span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {/* DETALLES DE LA ORDEN */}
          <OrderDetails />

          {/* ACCIONES FINALES */}
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center pt-8">
            <Link 
              href="/shop" 
              className="w-full md:w-auto px-10 py-5 bg-[#0A0D10] text-white rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-[#E3261E] transition-all flex items-center justify-center gap-3 shadow-xl shadow-slate-200"
            >
              <ShoppingBag size={18} /> Seguir Comprando
            </Link>
            
            <Link 
              href="/account/orders" 
              className="w-full md:w-auto px-10 py-5 bg-white text-slate-800 border border-slate-200 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:border-slate-800 transition-all flex items-center justify-center gap-3"
            >
              Rastrear Pedido <ArrowRight size={18} />
            </Link>
          </div>
        </div>

        {/* FOOTER DE AYUDA */}
        <p className="text-center mt-16 text-[9px] font-bold text-slate-400 uppercase tracking-widest">
          ¿Tienes dudas? Contáctanos al <span className="text-[#E3261E]">800-JOCSA-HELP</span> o vía WhatsApp.
        </p>
      </div>
    </div>
  );
}

export default SuccessPage;