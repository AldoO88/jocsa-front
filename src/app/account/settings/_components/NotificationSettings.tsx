'use client'
import { Bell, Mail, MessageSquare, Truck } from 'lucide-react';

const NotificationSettings = () => {
  const settings = [
    { title: 'Actualización de Pedidos', desc: 'Alertas sobre el estado de tu envío y entregas.', icon: Truck, active: true },
    { title: 'Promociones JOCSA', desc: 'Ofertas exclusivas y lanzamientos de nuevas autopartes.', icon: Mail, active: false },
    { title: 'Seguridad y Cuenta', desc: 'Avisos sobre inicios de sesión y cambios de datos.', icon: Bell, active: true }
  ];

  return (
    <div className="space-y-8">
      <div className="flex items-center gap-3">
        <div className="p-3 bg-slate-50 rounded-2xl text-slate-400">
          <Bell size={24} />
        </div>
        <h2 className="text-sm font-black uppercase tracking-widest text-slate-800">Preferencias de Notificación</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {settings.map((item, idx) => (
          <div key={idx} className="bg-white border-2 border-slate-50 p-6 rounded-[2.5rem] hover:border-slate-100 transition-all flex flex-col">
            <div className={`w-10 h-10 rounded-xl mb-4 flex items-center justify-center ${item.active ? 'bg-red-50 text-[#E3261E]' : 'bg-slate-50 text-slate-300'}`}>
              <item.icon size={20} />
            </div>
            <h3 className="text-[11px] font-black uppercase tracking-tight text-slate-800 mb-2">{item.title}</h3>
            <p className="text-[10px] text-slate-400 font-medium leading-relaxed mb-6 flex-1">{item.desc}</p>
            <button className={`w-full py-2.5 rounded-xl font-black text-[9px] uppercase tracking-widest transition-all ${
              item.active ? 'bg-green-50 text-green-600' : 'bg-slate-50 text-slate-400 hover:bg-slate-100'
            }`}>
              {item.active ? 'Activado' : 'Desactivado'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NotificationSettings;