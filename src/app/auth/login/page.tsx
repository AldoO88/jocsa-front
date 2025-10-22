// src/app/login/page.tsx
"use client";

import Link from "next/link";
import { useAuth } from "@/context/auth.context";
import { useState } from "react";
import { useAuthForm } from "@/hooks/useAuthForm";

const LoginIcon = () => (
  <svg
    className="w-12 h-12 mx-auto text-red-600"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
    />
  </svg>
);

export default function LoginPage() {
    const { loginUser } = useAuth(); // Usamos el hook de autenticación para obtener el estado de la autenticación

    const {
      formData,
      apiError,
      isLoading,
      handleChange,
      handleSubmit,
    } = useAuthForm(
      { email: '', password: '' }, // Estado inicial
      loginUser // Acción de envío (debe aceptar un objeto { email, password })
    );

  // ...

  return (
    <div className="flex items-start justify-center min-h-screen bg-gray-50 px-4 py-36">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8 space-y-6">
        <div className="text-center">
          <LoginIcon />
          <h1 className="text-3xl font-bold text-gray-900 mt-2">
            Iniciar Sesión
          </h1>
          <p className="text-gray-600">Bienvenido a JOCSA Auto Partes</p>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700">
              Correo Electrónico
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-red-500 focus:border-red-500"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700">
              Contraseña
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              value={formData.password}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-red-500 focus:border-red-500"
            />
          </div>
          <div className="text-sm">
            <Link
              href="/"
              className="font-medium text-red-600 hover:text-red-500">
              ¿Olvidaste tu contraseña?
            </Link>
          </div>

          {apiError && (
            <div className="p-3 bg-red-100 border border-red-300 text-red-800 rounded-md text-sm">
              {apiError}
            </div>
          )}

          <div>
            <button
              type="submit"
              disabled={isLoading}
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 disabled:bg-gray-400 disabled:cursor-not-allowed">
              {isLoading ? "Iniciando..." : "Iniciar Sesión"}
            </button>
          </div>
        </form>

        <div className="text-sm text-center">
          <span>¿No tienes una cuenta? </span>
          <Link
            href="/auth/signup"
            className="font-medium text-red-600 hover:text-red-500">
            Regístrate
          </Link>
        </div>
      </div>
    </div>
  );
}
