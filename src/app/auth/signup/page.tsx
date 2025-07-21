// src/app/registro/page.tsx
"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import authService from '@/services/authService'; // Reutilizamos nuestro servicio

// Icono para el formulario de registro
const SignupIcon = () => (
    <svg className="w-12 h-12 mx-auto text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3.375 19.5h17.25a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 20.625 4.5H3.375A2.25 2.25 0 0 0 1.125 6.75v10.5A2.25 2.25 0 0 0 3.375 19.5Z" />
    </svg>
);

const initSignupForm = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
}


export default function SignupPage() {
    const router = useRouter();

    const [signupForm, setSignupForm] = useState(initSignupForm);

    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleSignupForm = (nameField: any, value: any) => {
        setSignupForm(prevState => ({ ...prevState, [nameField]: value }));
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        setIsLoading(true);

        //const formData = { firstName, lastName, email, password, confirmPassword };

        try {
            // Llamamos al método `signup` de nuestro servicio
            await authService.signup(signupForm);

            // Si el registro es exitoso, redireccionamos al usuario a la página de login
            // para que inicie sesión con su nueva cuenta.
            router.push('/auth/login');

        } catch (err: any) {
            const errorMessage = err.response?.data?.message || 'No se pudo crear la cuenta.';
            setError(errorMessage);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4 py-12">
            <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8 space-y-6">
                
                <div className="text-center">
                    <SignupIcon />
                    <h1 className="text-3xl font-bold text-gray-900 mt-2">Crear una Cuenta</h1>
                    <p className="text-gray-600">Únete y encuentra las mejores refacciones.</p>
                </div>

                <form className="space-y-4" onSubmit={handleSubmit}>
                    {/* Campo de Nombre */}
                    <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                            Nombre(s)
                        </label>
                        <input
                            id="firstName"
                            name="firstName"
                            type="text"
                            autoComplete="given-name"
                            required
                            value={signupForm.firstName}
                            onChange={(e) => handleSignupForm('firstName', e.target.value)}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"
                        />
                    </div>

                    {/* Campo de Apellidos */}
                    <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                            Apellidos
                        </label>
                        <input
                            id="lastName"
                            name="lastName"
                            type="text"
                            autoComplete="family-name"
                            required
                            value={signupForm.lastName}
                            onChange={(e) => handleSignupForm('lastName', e.target.value)}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"
                        />
                    </div>
                    
                    {/* El resto de los campos son similares al login */}
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Correo Electrónico
                        </label>
                        <input id="email" name="email" type="email" required value={signupForm.email} onChange={(e) => handleSignupForm('email', e.target.value)} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500" />
                    </div>
                    <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                            Télefono
                        </label>
                        <input id="phone" name="phone" type="phone" required value={signupForm.phone} onChange={(e) => handleSignupForm('phone', e.target.value)} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500" />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Contraseña
                        </label>
                        <input id="password" name="password" type="password" required value={signupForm.password} onChange={(e) => handleSignupForm('password', e.target.value)} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500" />
                    </div>
                    <div>
                        <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                            Confirmar Contraseña
                        </label>
                        <input id="confirmPassword" name="confirmPassword" type="password" required value={signupForm.confirmPassword} onChange={(e) => handleSignupForm('confirmPassword', e.target.value)} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500" />
                    </div>
                    
                    {error && (
                        <div className="p-3 bg-red-100 border border-red-300 text-red-800 rounded-md text-sm">
                            {error}
                        </div>
                    )}
                    
                    <div>
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full flex justify-center mt-4 py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 disabled:bg-gray-400"
                        >
                            {isLoading ? 'Creando cuenta...' : 'Crear Cuenta'}
                        </button>
                    </div>
                </form>

                <div className="text-sm text-center">
                    <Link href="/auth/login" className="font-medium text-red-600 hover:text-red-500">
                        ¿Ya tienes una cuenta? Inicia sesión
                    </Link>
                </div>
            </div>
        </div>
    );
}