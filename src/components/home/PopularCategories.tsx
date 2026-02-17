import Link from 'next/link';
import { 
  Settings, 
  Disc, 
  Lightbulb, 
  Zap, 
  Car, 
  Droplets, 
  ChevronRight 
} from 'lucide-react';

const categories = [
  { name: 'MOTOR', icon: Settings },
  { name: 'FRENOS', icon: Disc },
  { name: 'ILUMINACIÓN', icon: Lightbulb },
  { name: 'ELÉCTRICO', icon: Zap },
  { name: 'SUSPENSIÓN', icon: Car },
  { name: 'ACEITES', icon: Droplets },
];

export default function PopularCategories() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        {/* Header de la sección */}
        <div className="flex justify-between items-end mb-10">
          <div className="space-y-1">
            <div className="w-12 h-1 bg-[#E3261E]" />
            <h2 className="text-3xl font-black uppercase tracking-tighter text-[#1A2530]">
              Categorías Populares
            </h2>
          </div>
          <Link 
            href="/categorias" 
            className="flex items-center gap-1 text-[#E3261E] font-bold text-sm hover:translate-x-1 transition-transform"
          >
            Ver todas las categorías <ChevronRight size={16} />
          </Link>
        </div>

        {/* Grid de Iconos */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((cat) => (
            <Link 
              href={`/categoria/${cat.name.toLowerCase()}`} 
              key={cat.name} 
              className="group flex flex-col items-center"
            >
              <div className="w-full aspect-square bg-[#F4F7F9] rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-white group-hover:shadow-xl group-hover:-translate-y-1 border border-transparent group-hover:border-gray-100">
                <cat.icon 
                  size={48} 
                  strokeWidth={1.5} 
                  className="text-slate-400 group-hover:text-[#E3261E] transition-colors" 
                />
              </div>
              <span className="text-[11px] font-black text-slate-500 tracking-[0.2em] group-hover:text-slate-900 transition-colors uppercase">
                {cat.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}