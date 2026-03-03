'use client'
import { FileDown, Eye, Package, Truck, CheckCircle2, Clock } from 'lucide-react';

const ORDERS_MOCK = [
  { id: 'JO-9852', date: '24/10/2024', total: '$4,250.00', status: 'En camino', items: 3, hasInvoice: true },
  { id: 'JO-9744', date: '12/10/2024', total: '$1,100.00', status: 'Entregado', items: 1, hasInvoice: true },
  { id: 'JO-9610', date: '05/09/2024', total: '$890.00', status: 'Cancelado', items: 2, hasInvoice: false },
];

const StatusBadge = ({ status }: { status: string }) => {
  const styles: any = {
    'En camino': 'bg-blue-50 text-blue-600',
    'Entregado': 'bg-green-50 text-green-600',
    'Cancelado': 'bg-red-50 text-red-600',
    'Pendiente': 'bg-amber-50 text-amber-600',
  };
  return (
    <span className={`text-[9px] font-black uppercase px-3 py-1 rounded-full tracking-tighter ${styles[status]}`}>
      {status}
    </span>
  );
};

const OrderList = () => {
  return (
    <div className="space-y-4">
      {/* HEADER TABLA (SOLO DESKTOP) */}
      <div className="hidden md:grid grid-cols-6 px-6 mb-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">
        <div className="col-span-1">Pedido</div>
        <div className="col-span-1 text-center">Fecha</div>
        <div className="col-span-1 text-center">Artículos</div>
        <div className="col-span-1 text-center">Estado</div>
        <div className="col-span-1 text-center">Total</div>
        <div className="col-span-1 text-right">Acciones</div>
      </div>

      {/* FILAS DE PEDIDOS */}
      {ORDERS_MOCK.map((order) => (
        <div key={order.id} className="group">
          {/* VISTA DESKTOP */}
          <div className="hidden md:grid grid-cols-6 items-center bg-white border border-slate-50 p-6 rounded-[2rem] hover:shadow-xl hover:shadow-slate-200/50 hover:border-[#E3261E]/20 transition-all">
            <div className="font-black text-slate-800 text-sm">{order.id}</div>
            <div className="text-center text-xs font-bold text-slate-500">{order.date}</div>
            <div className="text-center text-xs font-bold text-slate-500">{order.items} uni.</div>
            <div className="flex justify-center"><StatusBadge status={order.status} /></div>
            <div className="text-center font-black text-slate-800">{order.total}</div>
            <div className="flex justify-end gap-2">
              <button title="Ver detalles" className="p-2 text-slate-400 hover:text-[#E3261E] hover:bg-red-50 rounded-xl transition-all">
                <Eye size={18} />
              </button>
              {order.hasInvoice && (
                <button title="Descargar Factura" className="p-2 bg-[#0A0D10] text-white rounded-xl hover:bg-[#E3261E] transition-all flex items-center gap-2 px-4">
                  <FileDown size={16} /> <span className="text-[9px] font-black uppercase">XML+PDF</span>
                </button>
              )}
            </div>
          </div>

          {/* VISTA MOBILE (CARDS) */}
          <div className="md:hidden bg-white border border-slate-100 p-6 rounded-[2.5rem] space-y-4">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Pedido</p>
                <h3 className="font-black text-slate-800">{order.id}</h3>
              </div>
              <StatusBadge status={order.status} />
            </div>
            
            <div className="grid grid-cols-2 gap-4 py-4 border-y border-slate-50">
              <div>
                <p className="text-[9px] font-black text-slate-400 uppercase mb-1">Fecha</p>
                <p className="text-xs font-bold text-slate-600">{order.date}</p>
              </div>
              <div>
                <p className="text-[9px] font-black text-slate-400 uppercase mb-1">Total</p>
                <p className="text-xs font-black text-slate-800">{order.total}</p>
              </div>
            </div>

            <div className="flex gap-2">
              <button className="flex-1 bg-slate-50 text-slate-600 py-3 rounded-xl font-black text-[10px] uppercase tracking-widest flex items-center justify-center gap-2">
                <Eye size={14} /> Detalles
              </button>
              {order.hasInvoice && (
                <button className="flex-1 bg-[#E3261E] text-white py-3 rounded-xl font-black text-[10px] uppercase tracking-widest flex items-center justify-center gap-2 shadow-lg shadow-red-200">
                  <FileDown size={14} /> Factura
                </button>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default OrderList;