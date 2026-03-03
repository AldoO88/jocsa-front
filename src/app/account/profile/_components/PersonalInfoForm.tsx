// src/app/account/profile/_components/PersonalInfoForm.tsx
"use client";

import { useState } from "react";
import { User, Phone, Mail, Edit2, Save, X, Hash, Calendar } from 'lucide-react';
import { Input } from "@/components/ui/Input";
import SystemField from "@/components/ui/SystemField";

const PersonalInfoForm = () => {

    const [isEditing, setIsEditing] = useState(false);

    // Estos datos vendrán de tu DB mediante props o un fetch
    const clientData = {
        id: "JOC-88291",
        joinedDate: "12/03/2023",
        nombre: "Ricardo",
        apellidos: "Jiménez Estrada",
        telefono: "+52 55 1234 5678",
        email: "r.jimenez@example.com"
  };

  return (
    <div className="space-y-8">
      {/* Encabezado del Formulario */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="flex items-center gap-3">
          <div className="w-2 h-8 bg-[#E3261E] rounded-full" />
          <h2 className="text-2xl font-black uppercase tracking-tighter text-slate-800">
            Información Personal
          </h2>
        </div>

        {!isEditing ? (
          <button 
            onClick={() => setIsEditing(true)}
            className="group flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-100 text-slate-600 font-bold text-xs uppercase tracking-widest hover:bg-[#E3261E] hover:text-white transition-all shadow-sm"
          >
            <Edit2 size={14} className="group-hover:rotate-12 transition-transform" /> 
            Editar Perfil
          </button>
        ) : (
          <div className="flex gap-3">
            <button 
              onClick={() => setIsEditing(false)}
              className="px-5 py-2.5 rounded-full border border-slate-200 text-slate-400 font-bold text-xs uppercase tracking-widest hover:bg-slate-50 transition-all"
            >
              <X size={14} className="inline mr-1" /> Cancelar
            </button>
            <button 
              className="px-5 py-2.5 rounded-full bg-green-600 text-white font-bold text-xs uppercase tracking-widest hover:bg-green-700 transition-all shadow-md shadow-green-200"
            >
              <Save size={14} className="inline mr-1" /> Guardar
            </button>
          </div>
        )}
      </div>

      {/* Grid de Datos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8">
        
        {/* INFO DE SISTEMA (LECTURA) */}
        <SystemField label="ID Cliente" value={clientData.id} icon={Hash} />
        <SystemField label="Miembro desde" value={clientData.joinedDate} icon={Calendar} />

        {/* INFO EDITABLE */}
        <Input 
          label="Nombre(s)" 
          defaultValue={clientData.nombre} 
          disabled={!isEditing} 
          icon={User}
          className={!isEditing ? "opacity-100 pointer-events-none border-transparent bg-transparent pl-0" : ""}
        />
        <Input 
          label="Apellidos" 
          defaultValue={clientData.apellidos} 
          disabled={!isEditing}
          className={!isEditing ? "opacity-100 pointer-events-none border-transparent bg-transparent pl-0" : ""}
        />
        <Input 
          label="Teléfono" 
          icon={Phone} 
          defaultValue={clientData.telefono} 
          disabled={!isEditing} 
        />
        <Input 
          label="Correo Electrónico" 
          icon={Mail} 
          defaultValue={clientData.email} 
          disabled={!isEditing} 
        />
      </div>
    </div>
  );
}

export default PersonalInfoForm;