// src/app/login/LoginForm.tsx
'use client';

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { useAuth } from "@/context/auth.context";
import { useAuthForm } from "@/hooks/useAuthForm";
import { Mail, Lock, ArrowRight } from 'lucide-react';
import Link from "next/link";
import { LoginCredentials } from "@/types";

interface LoginCredentialsForm extends LoginCredentials {
  [key: string]: string;
}

const LoginForm = () => {
    const { loginUser } = useAuth(); // Usamos el hook de autenticación para obtener el estado de la autenticación

    // Usamos el hook personalizado useAuthForm para manejar el estado del formulario de login, la función de envío y los errores de la API
    const {
      formData,
      apiError,
      isLoading,
      handleChange,
      handleSubmit,
    } = useAuthForm<LoginCredentialsForm>(
      { email: '', password: '' }, // Estado inicial
      loginUser// Función de envío que llama a loginUser del contexto de autenticación
    );

    return (
        <form className="space-y-6" onSubmit={handleSubmit}>
            <Input 
                label="Correo Electrónico" 
                icon={Mail} 
                placeholder="tu@email.com" 
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={formData.email}
                onChange={handleChange}
            />
        
        <div className="space-y-2">
            <Input 
                label="Contraseña" 
                icon={Lock} 
                placeholder="••••••••"  
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={formData.password}
                onChange={handleChange}
            />
            <div className="text-right">
            <Link href="#" className="text-xs font-bold text-[#E3261E] hover:underline">¿Olvidaste tu contraseña?</Link>
            </div>
        </div>

        {apiError && (
            <div className="p-3 bg-red-100 border border-red-300 text-red-800 rounded-md text-sm">
              {apiError}
            </div>
          )}

        <Button 
            type="submit"
            disabled={isLoading}
            className="w-full py-4 bg-[#E3261E] text-white flex justify-center items-center gap-2 group">
            {isLoading ? 'INICIANDO...' : (
                           <> INICIAR SESIÓN <ArrowRight size={18} className='group-hover:translate-x-1 transition-transform font-bold' /></>
                        )}
        </Button>
        <div className="relative py-4">
                <div className='absolute inset-0 flex items-center'><span className='w-full border-t border-slate-200'/></div>
                <div className='relative flex justify-center text-[10px] uppercase font-bold text-slate-400'>
                    <span className='bg-white px-4 tracking-widest}'>O continúa con</span>
                </div>
            </div>
            <button className='w-full border border-slate-200 py-3 rounded-xl flex items-center justify-center gap-3 text-sm font-bold text-slate-600 hover:bg-slate-50 transition-colors'>
                <img src='/icons/google-logo.svg' alt='Google' className='w-5 h-5'/>Inicia Sesión con Google
        </button>

        <p className="text-center text-sm text-slate-500 mt-8">
            ¿No tienes cuenta? <Link href="/auth/signup" className="text-[#E3261E] font-bold hover:underline">Crea una aquí</Link>
        </p>
      </form>
    )
}

export default LoginForm;