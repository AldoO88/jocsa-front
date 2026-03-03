'use client';

import { User, FileText, History, Save } from 'lucide-react';
import { Input } from '@/components/ui/Input';
import AccountSidebar from '@/components/account/AccountSidebar';
import PersonalInfoForm from './_components/PersonalInfoForm';
import OrdersOverview from '@/components/account/Sections/OrdersOverview';
import PaymentsOverview from '@/components/account/Sections/PaymentsOverview';
import InvoicesOverview from '@/components/account/Sections/InvoicesOverview';
import FiscalOverview from '@/components/account/Sections/FiscalOverview';
import AddressOverview from '@/components/account/Sections/AddressOvweview';

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