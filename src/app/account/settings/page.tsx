//src/app/account/settings/page.tsx
'use client'
import AccountSidebar from '@/components/account/AccountSidebar';
import SecurityForm from './_components/SecurityForm';
import NotificationSettings from './_components/NotificationSettings';
import DangerZone from './_components/DangerZone';

const SettingsPagev= () => {
  return (
          <section className="bg-white rounded-[3rem] p-8 md:p-12 shadow-sm border border-slate-100">
            <div className="mb-10">
              <h1 className="text-2xl font-black uppercase tracking-tighter text-slate-800 flex items-center gap-3">
                <span className="w-2 h-8 bg-[#E3261E] rounded-full inline-block" />
                Configuración
              </h1>
              <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.2em] mt-1">
                Privacidad, seguridad y preferencias de contacto
              </p>
            </div>

            <div className="space-y-12">
              <SecurityForm />
              <div className="h-px bg-slate-100 w-full" />
              <NotificationSettings />
              <div className="h-px bg-slate-100 w-full" />
              <DangerZone />
            </div>
          </section>
  );
}

export default SettingsPagev;