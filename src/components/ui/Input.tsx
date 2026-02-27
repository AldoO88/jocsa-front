import React from 'react';
import { LucideIcon } from 'lucide-react';

//interfaz que define las propiedades que el componente Input puede recibir. Extiende las propiedades estándar de un elemento de entrada HTML (React.InputHTMLAttributes<HTMLInputElement>) y añade dos propiedades adicionales: 'label' para el texto de la etiqueta del campo de entrada y 'icon' para un icono opcional que se puede mostrar junto al campo de entrada. Esto permite que el componente Input sea flexible y reutilizable en diferentes contextos, ya que puede aceptar cualquier propiedad estándar de un input HTML además de las personalizadas para su funcionalidad específica.
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string; // propiedad obligatoria para el texto de la etiqueta del campo de entrada
    icon?: LucideIcon;
}

export const Input = ({ label, icon: Icon, ...props}: InputProps) => {
    return(
        <div className='space-x-1.5 w-full'>
            <label className='text-[10px] font-black text-slate-500 uppercase tracking-widest'>
                {label}
            </label>
            <div className='relative group'>
                {
                    Icon && (
                        <div className='absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#E3261E] transition-colors'>
                            <Icon size={18} />
                        </div>
                    )
                }
                <input 
                    {...props}
                    //w-full para que el input ocupe todo el ancho del contenedor padre, bg-[#F8FAFC] para un fondo claro, borde borde-slate-200 para un borde sutil, rounded-xl para bordes redondeados, py-3.5 para padding vertical, pl-12 si hay un icono (para dejar espacio para el icono) o px-4 si no hay icono (padding horizontal estándar), pr-4 para padding a la derecha, text-sm para tamaño de texto pequeño, outline-none para eliminar el contorno predeterminado del navegador, focus:border-[#E3261E] y focus:ring-1 focus:ring-[#E3261E] para estilos de enfoque personalizados, y transition-all para animar las transiciones de estilo.
                    className={`w-full bg-[#F8FAFC] border border-slate-200 rounded-xl py-3.5 ${
                        Icon ? 'p-12' : 'px-4'
                        } pr-4 text-xs outline-none focus:border-[#E3261E] focus:ring-1 focus:ring-[#E3261E] transition-all`}
                type="text" />
            </div>
        </div>
    )
}