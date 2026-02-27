// src/app/registro/page.tsx
"use client";

import React from 'react';
import AuthCard from '@/components/auth/AuthCard';
import SignupForm from './SignupForm';


export default function SignupPage() {

    return (
        <AuthCard>
            <div className='mb-8'>
                <h2 className='text-3xl font-black text-[#1A2530] uppercase tracking-tight font-orbitron'> Crear Cuenta</h2>
                <p className='text-slate-500 text-sm mt-2'>Registrate para empezar tu experiencia JOCSA</p>
            </div>
            <SignupForm/>
        </AuthCard>
    );
}