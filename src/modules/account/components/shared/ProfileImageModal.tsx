//src/components/account/ProfileImageModal.tsx

'use client'
import { useState, useRef } from 'react';
import { Camera, Trash2, X, Upload, User, Check } from 'lucide-react';

interface ProfileImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentImage?: string;
}

const ProfileImageModal = ({ isOpen, onClose, currentImage }: ProfileImageModalProps) => {
  const [preview, setPreview] = useState(currentImage);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!isOpen) return null;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setIsUploading(true);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
        setIsUploading(false);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-[#0A0D10]/60 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="bg-white w-full max-w-md rounded-[3rem] p-8 shadow-2xl overflow-hidden relative animate-in zoom-in-95 duration-300">
        
        {/* BOTÓN CERRAR */}
        <button onClick={onClose} className="absolute top-6 right-6 p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-400">
          <X size={20} />
        </button>

        <div className="text-center space-y-6">
          <div>
            <h3 className="text-xl font-black uppercase tracking-tighter text-slate-800">Foto de Perfil</h3>
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mt-1">Personaliza tu cuenta JOCSA</p>
          </div>

          {/* ÁREA DE PREVIEW */}
          <div className="relative w-40 h-40 mx-auto">
            <div className="w-full h-full rounded-[2.5rem] bg-slate-100 overflow-hidden border-4 border-white shadow-xl flex items-center justify-center">
              {preview ? (
                <img src={preview} alt="Profile" className="w-full h-full object-cover" />
              ) : (
                <User size={60} className="text-slate-300" />
              )}
            </div>
            
            {/* BOTÓN FLOTANTE DE CARGA */}
            <button 
              onClick={() => fileInputRef.current?.click()}
              className="absolute -bottom-2 -right-2 bg-[#E3261E] text-white p-4 rounded-2xl shadow-lg hover:scale-110 transition-transform active:scale-95"
            >
              <Camera size={20} />
            </button>
            <input 
              type="file" 
              ref={fileInputRef} 
              className="hidden" 
              accept="image/*" 
              onChange={handleFileChange} 
            />
          </div>

          {/* OPCIONES */}
          <div className="grid grid-cols-1 gap-3 pt-4">
            {preview && (
              <button 
                onClick={() => setPreview(undefined)}
                className="flex items-center justify-center gap-2 w-full py-4 text-[10px] font-black uppercase tracking-widest text-red-500 hover:bg-red-50 rounded-2xl transition-all"
              >
                <Trash2 size={16} /> Eliminar Foto Actual
              </button>
            )}
            
            <button 
              onClick={onClose}
              className="bg-[#0A0D10] text-white w-full py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-[#E3261E] transition-all flex items-center justify-center gap-2 shadow-xl shadow-slate-200"
            >
              <Check size={18} /> Guardar Cambios
            </button>
          </div>

          <p className="text-[9px] text-slate-400 font-bold uppercase tracking-tighter">
            Formatos aceptados: JPG, PNG o WEBP. Máx 2MB.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProfileImageModal;