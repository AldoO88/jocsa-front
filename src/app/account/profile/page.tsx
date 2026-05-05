'use client';

import { User, FileText, History, Save } from 'lucide-react';
import { Input } from '@/shared/components/ui/Input';
import AccountSidebar from '@/modules/account/components/shared/AccountSidebar';
import PersonalInfoForm from '../../../modules/account/components/profile/PersonalInfoForm';
import OrdersOverview from '@/modules/account/components/orders/OrdersOverview';
import PaymentsOverview from '@/modules/account/components/payments/PaymentsOverview';
import InvoicesOverview from '@/modules/account/components/invoices/InvoicesOverview';
import FiscalOverview from '@/modules/account/components/fiscal-information/FiscalOverview';
import AddressOverview from '@/modules/account/components/addresses/AddressOvweview';

const ProfilePage = () => {
  return (
      <div>
          {/* Sección: Información Personal */}
         <section className="bg-white rounded-[3rem] p-10 shadow-xl border border-slate-100">
            <PersonalInfoForm />
          </section>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Pedidos (Toma 2 columnas en pantallas grandes) */}
            <div className="lg:col-span-2 mt-6">
              <OrdersOverview />
            </div>

            {/* Pagos (Tarjeta con estilo Oscuro Premium) */}
            <PaymentsOverview />

            {/* Facturas */}
            <InvoicesOverview />

            {/* Información Fiscal */}
            <FiscalOverview />

            {/* Dirección Predeterminada */}
            <AddressOverview />

          </div>
      </div>
  );
}

export default ProfilePage;