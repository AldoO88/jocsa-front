// src/components/home/HeroForm.tsx
'use client';

import { Button } from "../ui/Button";
import { CarFront } from "lucide-react";

const HeroForm = () => {
    return (
        <div className="bg-white p-8 rounded-xl shadow-2xl max-w-md lg:ml-auto w-full">
            <h2 className="flex items-center gap-3 font-orbitron font-bold text-gray-900 mb-6 uppercase tracking-tighter text-2xl">
                <span className="p-2 bg-white text-[#E3261E] rounded"><CarFront /></span>
                Busca tu auto
            </h2>
                    <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                        <div className="space-y-1">
                            <label className="text-[12px] font-bold text-gray-400 uppercase">Marca</label>
                            <select className="w-full bg-gray-50 border-none rounded-lg p-3 text-lg focus:ring-2 focus:ring-[#E3261E]">
                                <option>Seleccionar Marca</option>
                            </select>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-1">
                                <label className="text-[12px] font-bold text-gray-400 uppercase">Modelo</label>
                                <select className="w-full bg-gray-50 border-none rounded-lg p-3 text-lg"><option>Modelo</option></select>
                            </div>
                            <div className="space-y-1">
                                <label className="text-[12px] font-bold text-gray-400 uppercase">Año</label>
                                <select className="w-full bg-gray-50 border-none rounded-lg p-3 text-lg"><option>Año</option></select>
                            </div>
                        </div>
                        <Button className="w-full bg-[#E3261E] py-4 mt-4 shadow-lg shadow-red-500/30">
                            FILTRAR RESULTADOS
                        </Button>
                    </form>
                </div>
    );
};

export default HeroForm;