// src/app/auth/signup/SignupForm.tsx
'use client'

import { User, Mail, Phone, Lock, ArrowRight, User2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import Link from "next/link";
import { useAuthForm } from "@/hooks/useAuthForm";
import authService from "@/services/authService";
import { useRouter } from "next/navigation";

const initSignupForm = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
}

const SignupForm = () => {

    const router = useRouter();

    const {
        formData,
        apiError,
        isLoading,
        handleChange,
        handleSubmit,
    } = useAuthForm(
        initSignupForm, // Estado inicial diferente
        async (data) => { // Función de envío que llama a la función de registro del servicio de autenticación,se usa async para esperar la respuesta de la API antes de redirigir al usuario
            await authService.signup(data); // Llamamos a la función de registro del servicio de autenticación, que se encargará de enviar los datos a la API de Next.js
        }
    );

    const onFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        await handleSubmit(e);
        if (!apiError) {
            router.push('/auth/login?success=true');
        }
    };
    return (
        // space-y-5 es para agregar espacio entre los elementos del formulario
        <form className='space-y-3' onSubmit={onFormSubmit}>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <Input 
                    label='Nombre(s)' 
                    icon={User2} 
                    placeholder='Ej. Juan Pablo'
                    id="firstName"
                    name="firstName"
                    type="text"
                    autoComplete="given-name"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                />
                <Input 
                    label='Apellidos' 
                    icon={User2} 
                    placeholder='Ej. Perez Gómez'
                    id="lastName"
                    name="lastName"
                    type="text"
                    autoComplete="family-name"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                />
            
            </div>
            
                <Input 
                    label='Correo Electrónico' 
                    icon={Mail} 
                    placeholder='nombre@ejemplo.com' 
                    type='email'
                    id="email" 
                    name="email" 
                    required 
                    value={formData.email} 
                    onChange={handleChange} 
                />
                <Input 
                    label='Télefono' 
                    icon={Phone} 
                    placeholder='55 1234 5678'
                    id="phone" 
                    name="phone" 
                    type="phone" 
                    required 
                    value={formData.phone} 
                    onChange={handleChange}  
                />
            
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <Input 
                    label='Contraseña' 
                    icon={Lock} 
                    placeholder='********' 
                    id="password" 
                    name="password" 
                    type="password" 
                    required value={formData.password} 
                    onChange={handleChange} 
                />
                <Input 
                    label='Confirmar Contraseña' 
                    icon={Lock} 
                    placeholder='********' 
                    id="confirmPassword" 
                    name="confirmPassword" 
                    type="password" 
                    required 
                    value={formData.confirmPassword} 
                    onChange={handleChange} 
                />
            </div>

            <div className='flex items-center gap-2 py-2'>
                <input type='checkbox' id='terms' className='rounded border-slate-300 text-[#E3261E] focus:ring-[#E3261E]' />
                <label htmlFor='terms' className='text-[11px] text-slate-500'>
                    Acepto los <span className='text-[#E3261E] font-bold cursor-pointer'>Términos y Condiciones</span> y el <span className='text-[#E3261E] font-bold cursor-pointer'>Aviso de Privacidad</span>
                </label>
            </div>
            {apiError && (
                <div className="p-3 bg-red-100 border border-red-300 text-red-800 rounded-md text-sm">
                    {apiError}
                </div>
            )}
            <Button 
                type="submit"
                disabled={isLoading}
                className='w-full py-4 bg-[#E3261E] text-white flex items-center justify-center gap-2 group'
            >
                    {isLoading ? 'CREANDO CUENTA...' : (
                           <> CREAR CUENTA <ArrowRight size={18} className='group-hover:translate-x-1 transition-transform font-bold' /></>
                        )}
                
            </Button>

            <div className="relative py-4">
                <div className='absolute inset-0 flex items-center'><span className='w-full border-t border-slate-200'/></div>
                <div className='relative flex justify-center text-[10px] uppercase font-bold text-slate-400'>
                    <span className='bg-white px-4 tracking-widest}'>O continúa con</span>
                </div>
            </div>
            <button className='w-full border border-slate-200 py-3 rounded-xl flex items-center justify-center gap-3 text-sm font-bold text-slate-600 hover:bg-slate-50 transition-colors'>
                <img src='/icons/google-logo.svg' alt='Google' className='w-5 h-5'/> Registrate con Google
            </button>

            <p className="text-center text-sm text-slate-500 mt-8">
                ¿Ya tienes una cuenta? <Link href="/auth/login" className="text-[#E3261E] font-bold hover:underline">Inicia Sesión</Link>
            </p>
        </form>
    );
}

export default SignupForm;