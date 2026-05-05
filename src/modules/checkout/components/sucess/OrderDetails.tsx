import { MapPin, Truck, Calendar, CreditCard } from 'lucide-react';

const OrderDetails = () => {
  return (
    <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-sm border border-slate-100 divide-y divide-slate-50">
      
      {/* INFO DE ENTREGA */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pb-10">
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-[#E3261E]">
            <Truck size={18} />
            <h3 className="text-[11px] font-black uppercase tracking-widest">Método de Envío</h3>
          </div>
          <div className="pl-7">
            <p className="text-xs font-black text-slate-800 uppercase">Envío Express (2-3 Días)</p>
            <p className="text-[10px] font-bold text-slate-400 uppercase mt-1">Entrega estimada: 28 Oct - 30 Oct</p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-2 text-[#E3261E]">
            <MapPin size={18} />
            <h3 className="text-[11px] font-black uppercase tracking-widest">Dirección de Entrega</h3>
          </div>
          <div className="pl-7">
            <p className="text-xs font-black text-slate-800 uppercase">Ricardo Jiménez</p>
            <p className="text-[10px] font-bold text-slate-400 uppercase mt-1 leading-relaxed">
              Av. Insurgentes Sur 1234, Col. Del Valle, CDMX, 03100
            </p>
          </div>
        </div>
      </div>

      {/* RESUMEN DE PAGO */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-10">
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-[#E3261E]">
            <CreditCard size={18} />
            <h3 className="text-[11px] font-black uppercase tracking-widest">Método de Pago</h3>
          </div>
          <div className="pl-7 flex items-center gap-3">
             <div className="px-2 py-1 bg-slate-100 rounded text-[9px] font-black">VISA</div>
             <p className="text-xs font-black text-slate-800 uppercase tracking-widest">•••• 4242</p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-2 text-[#E3261E]">
            <Calendar size={18} />
            <h3 className="text-[11px] font-black uppercase tracking-widest">Fecha de Compra</h3>
          </div>
          <div className="pl-7">
            <p className="text-xs font-black text-slate-800 uppercase">24 de Octubre, 2024</p>
          </div>
        </div>
      </div>

      {/* MINI RESUMEN ECONÓMICO */}
      <div className="pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-[10px] font-bold text-slate-400 uppercase max-w-xs text-center md:text-left">
          Hemos enviado un correo electrónico con los detalles de tu factura y el enlace de seguimiento.
        </p>
        <div className="text-center md:text-right">
          <span className="text-[10px] font-black uppercase text-slate-400 tracking-widest block mb-1">Total Pagado</span>
          <span className="text-4xl font-black text-slate-800 tracking-tighter">$14,442.00</span>
        </div>
      </div>

    </div>
  );
}

export default OrderDetails;