import React from 'react';

// crea una interfaz para las props del botón componente, ButtonProps extiende o hereda todas las propiedades estándar de un botón HTML (React.ButtonHTMLAttributes<HTMLButtonElement>) y añade dos propiedades opcionales: 'variant' para definir el estilo del botón y 'fullWidth' para hacer que el botón ocupe todo el ancho disponible.
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'white';
    fullWidth?: boolean;
} 

// Define el componente Button que acepta las props definidas en ButtonProps. Utiliza las variantes para aplicar diferentes estilos CSS basados en la prop 'variant'. También maneja la prop 'fullWidth' para hacer que el botón ocupe todo el ancho disponible si es necesario. className permite agregar clases CSS adicionales definidas por el usuario y {...props} pasa cualquier otra prop estándar del botón HTML al elemento button como onClick, disable, type, etc..
export const Button = ({ children, variant = 'primary', fullWidth, className, ...props}: ButtonProps) => {
    const variants = {
        primary: 'bg-[#E3261E] text-white hover:bg-red-700',
        secondary: 'bg-[#1A2530] text-white hover:bg-slate-800',
        outline: 'border-2 border-white text-white hover:bg-white hover:text-black',
        white: 'bg-white text-black hover:bg-gray-100'
    }

    return(
        <button
            className={`px-6 py-3 rounded-md font-bold transition-all duration-300 ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
            {...props}
        >
            {children}
        </button>
    )
} 