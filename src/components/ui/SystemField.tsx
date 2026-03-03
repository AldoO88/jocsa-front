
import React from 'react';
import { LucideIcon } from 'lucide-react';

//interfaz que define las propiedades que el componente Input puede recibir. Extiende las propiedades estándar de un elemento de entrada HTML (React.InputHTMLAttributes<HTMLInputElement>) y añade dos propiedades adicionales: 'label' para el texto de la etiqueta del campo de entrada y 'icon' para un icono opcional que se puede mostrar junto al campo de entrada. Esto permite que el componente Input sea flexible y reutilizable en diferentes contextos, ya que puede aceptar cualquier propiedad estándar de un input HTML además de las personalizadas para su funcionalidad específica.
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string; // propiedad obligatoria para el texto de la etiqueta del campo de entrada
    icon?: LucideIcon;
}

const SystemField = ({ label, icon: Icon, ...props }: any) => {
  return (
    <div className="space-y-2">
      <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] flex items-center gap-1.5">
        <Icon size={12} className="text-[#E3261E]" /> {label}
      </label>
      <div className="text-sm font-black text-slate-800 bg-slate-50 border border-slate-100 px-4 py-3.5 rounded-xl">
        {props.value}
      </div>
    </div>
  );
}

export default SystemField;