//src/app/account/orders/page.tsx
'use client'
import { Package } from 'lucide-react';
import OrderFilters from './_components/OrderFilters';
import OrderList from './_components/OrderList';

const OrdersPage = () => {
    return (
        <section className="bg-white rounded-[3rem] p-8 md:p-12 shadow-sm border border-slate-100">
            <div className="flex flex-col justify-between items-start gap-6 mb-10">
              <div>
                <h1 className="text-2xl font-black uppercase tracking-tighter text-slate-800 flex items-center gap-3">
                  <span className="w-2 h-8 bg-[#E3261E] rounded-full inline-block" />
                  Mis Pedidos
                </h1>
                <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.2em] mt-1">
                  Gestiona tus compras y descarga tus facturas
                </p>
              </div>
              <OrderFilters />
            </div>

            <OrderList />
          </section>
    );
}

export default OrdersPage;