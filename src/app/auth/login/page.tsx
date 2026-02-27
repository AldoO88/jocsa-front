// src/app/login/page.tsx
"use client";

import AuthCard from "@/components/auth/AuthCard";
import LoginForm from "./LoginForm";

export default function LoginPage() {

  return (
    <AuthCard>
      <div className="mb-10">
        <h2 className="text-3xl font-black text-[#1A2530] uppercase tracking-tight">Bienvenido</h2>
        <p className="text-slate-500 text-sm mt-2">Ingresa tus credenciales para acceder</p>
      </div>
      <LoginForm />
    </AuthCard>

  );
}
