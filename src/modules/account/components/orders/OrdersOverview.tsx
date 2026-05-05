// src/components/account/Sections/OrdersOverview.tsx

'use client'
import { Package, ChevronRight } from 'lucide-react';
import Link from 'next/link';


const OrdersOverview = () => {
  const orders = [
    { id: '#JO-9852', date: 'Hace 2 horas', total: '$2,450.00', status: 'En Camino' },
    { id: '#JO-9744', date: '20 Feb, 2024', total: '$1,100.00', status: 'Entregado' },
    { id: '#JO-9610', date: '15 Feb, 2024', total: '$890.00', status: 'Entregado' },
  ];

  return (
    <div className="bg-white rounded-[2.5rem] p-8 shadow-xl border border-slate-100 h-full flex flex-col">
      <div className="flex justify-between items-center mb-8">
        <h3 className="font-black uppercase text-sm tracking-tighter text-slate-800 flex items-center gap-2">
          <Package size={20} className="text-[#E3261E]" /> Últimos Pedidos
        </h3>
        <Link href="/account/orders" className="text-[10px] font-black text-slate-400 hover:text-[#E3261E] uppercase tracking-widest transition-colors">Ver historial</Link>
      </div>
      
      <div className="space-y-2 flex-1">
        {orders.map((order) => (
          <div key={order.id} className="flex items-center justify-between p-4 hover:bg-slate-50 rounded-2xl transition-all group">
            <div>
              <p className="text-sm font-black text-slate-800 group-hover:text-[#E3261E] transition-colors">{order.id}</p>
              <p className="text-[10px] text-slate-400 font-bold uppercase">{order.date} • {order.total}</p>
            </div>
            <div className="flex items-center gap-4">
              <span className={`text-[9px] font-black px-3 py-1 rounded-full uppercase tracking-tight ${
                order.status === 'En Camino' ? 'bg-blue-50 text-blue-600' : 'bg-green-50 text-green-600'
              }`}>
                {order.status}
              </span>
              <ChevronRight size={14} className="text-slate-300 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OrdersOverview;