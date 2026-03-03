//src/app/account/fiscal-information/_components/FiscalForm.tsx

'use client'
import { useState, useRef } from 'react';
import { 
  Upload, FileText, Info, Loader2, Save, 
  RefreshCcw, FileCheck, X, File 
} from 'lucide-react';
import { Input } from '@/components/ui/Input';

export default function FiscalForm() {
  const [isUploading, setIsUploading] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<{ name: string; size: string } | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploading(true);
    
    // Simulación de procesamiento (OCR)
    setTimeout(() => {
      setUploadedFile({
        name: file.name,
        size: (file.size / 1024 / 1024).toFixed(2) + ' MB'
      });
      setIsUploading(false);
      // Aquí podrías disparar la función que llena los inputs automáticamente
    }, 1500);
  };

  const removeFile = () => {
    setUploadedFile(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  return (
    <div className="space-y-10">
      
      {/* SECCIÓN DE CARGA / ESTADO DEL ARCHIVO */}
      <div className="relative">
        {!uploadedFile ? (
          // VISTA: ÁREA DE CARGA (VACÍA)
          <div className={`border-2 border-dashed rounded-[2.5rem] p-12 transition-all flex flex-col items-center justify-center text-center ${
            isUploading ? 'border-[#E3261E] bg-red-50/20' : 'border-slate-200 hover:border-[#E3261E] bg-slate-50/50 group'
          }`}>
            <input 
              type="file" 
              ref={fileInputRef}
              className="absolute inset-0 opacity-0 cursor-pointer" 
              onChange={handleFileUpload}
              accept=".pdf"
            />
            
            {isUploading ? (
              <div className="space-y-4">
                <Loader2 size={40} className="text-[#E3261E] animate-spin mx-auto" />
                <p className="text-sm font-black uppercase text-slate-600 tracking-tighter">Leyendo Constancia...</p>
              </div>
            ) : (
              <>
                <div className="bg-white p-4 rounded-2xl shadow-sm mb-4 group-hover:scale-110 transition-transform">
                  <Upload size={32} className="text-[#E3261E]" />
                </div>
                <h3 className="font-black text-slate-800 uppercase text-sm mb-2">Subir Constancia Fiscal (PDF)</h3>
                <p className="text-xs text-slate-400 max-w-[280px] leading-relaxed">
                  Haz clic o arrastra el archivo para <span className="text-[#E3261E] font-bold">autocompletar</span> tu formulario.
                </p>
              </>
            )}
          </div>
        ) : (
          // VISTA: ARCHIVO CARGADO CON ÉXITO
          <div className="bg-white border-2 border-[#E3261E] rounded-[2.5rem] p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg shadow-red-500/5 animate-in fade-in zoom-in duration-300">
            <div className="flex items-center gap-5">
              <div className="bg-red-50 p-4 rounded-2xl text-[#E3261E]">
                <FileCheck size={32} />
              </div>
              <div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Archivo detectado</p>
                <h3 className="font-black text-slate-800 text-sm truncate max-w-[200px] md:max-w-xs">
                  {uploadedFile.name}
                </h3>
                <p className="text-[10px] text-green-600 font-bold uppercase">{uploadedFile.size} • Listo para procesar</p>
              </div>
            </div>
            
            <button 
              onClick={removeFile}
              className="flex items-center gap-2 px-6 py-3 rounded-xl border border-slate-100 text-slate-400 hover:text-red-600 hover:bg-red-50 transition-all text-[10px] font-black uppercase tracking-widest"
            >
              <X size={14} /> Cambiar Archivo
            </button>
          </div>
        )}
      </div>

      {/* DIVISOR */}
      <div className="flex items-center gap-4">
        <div className="h-px bg-slate-100 flex-1" />
        <span className="text-[10px] font-black text-slate-300 uppercase tracking-[0.3em]">Datos de facturación</span>
        <div className="h-px bg-slate-100 flex-1" />
      </div>

      {/* FORMULARIO (Sigue igual que el anterior pero ahora con la lógica de carga integrada) */}
      <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input label="RFC" placeholder="ABCD123456XYZ" className="font-mono uppercase" />
        <Input label="Razón Social" placeholder="Como aparece en la constancia" />
        
        <div className="space-y-1.5">
          <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Régimen Fiscal</label>
          <select className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3.5 px-4 text-sm font-bold text-slate-700 outline-none focus:border-[#E3261E] appearance-none">
            <option>601 - General de Ley Personas Morales</option>
            <option>605 - Sueldos y Salarios</option>
            <option>626 - RESICO</option>
          </select>
        </div>

        <Input label="Código Postal Fiscal" placeholder="00000" />

        <div className="space-y-1.5 md:col-span-2">
          <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Uso de CFDI</label>
          <select className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3.5 px-4 text-sm font-bold text-slate-700 outline-none focus:border-[#E3261E] appearance-none">
            <option>G03 - Gastos en general</option>
            <option>S01 - Sin efectos fiscales</option>
            <option>CP01 - Pagos</option>
          </select>
        </div>

        {/* NOTA ACLARATORIA */}
        <div className="md:col-span-2 bg-blue-50/50 p-4 rounded-2xl border border-blue-100 flex gap-3">
          <Info size={18} className="text-blue-500 shrink-0" />
          <p className="text-[10px] text-blue-700 leading-relaxed">
            Asegúrate de que el <b>Código Postal</b> coincida exactamente con tu constancia actual, de lo contrario la factura será rechazada por el sistema CFDI 4.0.
          </p>
        </div>

        <div className="md:col-span-2 flex justify-end gap-4 mt-6">
          <button type="button" onClick={removeFile} className="flex items-center gap-2 text-[10px] font-black text-slate-300 uppercase tracking-widest hover:text-slate-500 transition-colors">
            <RefreshCcw size={14} /> Limpiar formulario
          </button>
          <button className="bg-[#0A0D10] text-white px-10 py-4 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-[#E3261E] transition-all flex items-center gap-2 shadow-xl shadow-slate-200">
            <Save size={18} /> Guardar Información
          </button>
        </div>
      </form>
    </div>
  );
}