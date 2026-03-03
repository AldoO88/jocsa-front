//src/app/account/settings/_components/SecurityForm.tsx

'use client'
import { Shield, Key, Smartphone, ChevronRight } from 'lucide-react';
import { Input } from '@/components/ui/Input';

const SecurityForm = () =>{
  return (
    <div className="space-y-8">
      <div className="flex items-center gap-3">
        <div className="p-3 bg-slate-50 rounded-2xl text-slate-400">
          <Shield size={24} />
        </div>
        <h2 className="text-sm font-black uppercase tracking-widest text-slate-800">Seguridad de la Cuenta</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Cambio de Contraseña */}
        <div className="space-y-6">
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Cambiar Contraseña</p>
          <div className="space-y-4">
            <Input label="Contraseña Actual" type="password" />
            <Input label="Nueva Contraseña" type="password" />
            <Input label="Confirmar Nueva Contraseña" type="password" />
            <button className="bg-[#0A0D10] text-white px-8 py-3 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-[#E3261E] transition-all">
              Actualizar Contraseña
            </button>
          </div>
        </div>

        {/* 2FA y Sesiones */}
        <div className="space-y-6">
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Autenticación de Dos Pasos</p>
          <div className="bg-slate-50 rounded-[2rem] p-6 border border-slate-100">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3 text-slate-600">
                <Smartphone size={20} />
                <span className="text-xs font-bold">Verificación por SMS</span>
              </div>
              <div className="w-10 h-6 bg-slate-200 rounded-full p-1 cursor-pointer">
                <div className="w-4 h-4 bg-white rounded-full shadow-sm" />
              </div>
            </div>
            <p className="text-[10px] text-slate-500 leading-relaxed">
              Añade una capa extra de seguridad. Enviaremos un código a tu celular al iniciar sesión.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecurityForm;