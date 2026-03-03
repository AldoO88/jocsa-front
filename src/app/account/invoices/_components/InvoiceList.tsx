//src/app/account/invoices/_componentes/InvoiceList.tsx

"use client";
import { FileText, Download, ExternalLink, FileCode } from "lucide-react";

const INVOICES = [
  {
    id: "FAC-2024-001",
    orderId: "JO-9852",
    date: "24/10/2024",
    total: "$4,250.00",
    status: "Pagada",
  },
  {
    id: "FAC-2024-002",
    orderId: "JO-9744",
    date: "12/10/2024",
    total: "$1,100.00",
    status: "Pendiente",
  },
  {
    id: "FAC-2023-154",
    orderId: "JO-9610",
    date: "05/09/2024",
    total: "$890.00",
    status: "Cancelada",
  },
];

const InvoiceList = () => {
  return (
    <div className="space-y-4">
      {/* DESKTOP HEADER */}
      <div className="hidden md:grid grid-cols-6 px-8 mb-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">
        <div className="col-span-1">Folio / Pedido</div>
        <div className="col-span-1 text-center">Fecha Emisión</div>
        <div className="col-span-1 text-center">Estado</div>
        <div className="col-span-1 text-center">Monto Total</div>
        <div className="col-span-2 text-right">Documentos CFDI</div>
      </div>

      {INVOICES.map((inv) => (
        <div key={inv.id} className="group">
          {/* DESKTOP ROW */}
          <div className="hidden md:grid grid-cols-6 items-center bg-white border border-slate-100 p-6 rounded-[2rem] hover:border-[#E3261E]/30 transition-all group-hover:shadow-md">
            <div className="col-span-1">
              <p className="font-black text-slate-800 text-sm">{inv.id}</p>
              <p className="text-[9px] font-bold text-slate-400 uppercase">
                Ref: {inv.orderId}
              </p>
            </div>
            <div className="text-center text-xs font-bold text-slate-500">
              {inv.date}
            </div>
            <div className="flex justify-center">
              <span
                className={`text-[9px] font-black uppercase px-3 py-1 rounded-full ${
                  inv.status === "Pagada"
                    ? "bg-green-50 text-green-600"
                    : inv.status === "Pendiente"
                      ? "bg-amber-50 text-amber-600"
                      : "bg-red-50 text-red-600"
                }`}
              >
                {inv.status}
              </span>
            </div>
            <div className="text-center font-black text-slate-800">
              {inv.total}
            </div>
            <div className="col-span-2 flex justify-end gap-3">
              <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-50 text-slate-600 hover:bg-slate-100 transition-all text-[9px] font-black uppercase tracking-tighter">
                <FileText size={14} className="text-red-500" /> PDF
              </button>
              <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#0A0D10] text-white hover:bg-[#E3261E] transition-all text-[9px] font-black uppercase tracking-tighter">
                <FileCode size={14} className="text-blue-400" /> XML
              </button>
            </div>
          </div>

          {/* MOBILE CARD */}
          <div className="md:hidden bg-white border border-slate-100 p-6 rounded-[2.5rem] space-y-4">
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-3">
                <div className="bg-slate-50 p-3 rounded-xl text-slate-400">
                  <FileText size={20} />
                </div>
                <div>
                  <h3 className="font-black text-slate-800 text-sm">
                    {inv.id}
                  </h3>
                  <p className="text-[9px] font-bold text-slate-400 uppercase tracking-tighter">
                    Orden: {inv.orderId}
                  </p>
                </div>
              </div>
              <span
                className={`text-[8px] font-black uppercase px-2 py-1 rounded ${
                  inv.status === "Pagada"
                    ? "bg-green-50 text-green-600"
                    : "bg-amber-50 text-amber-600"
                }`}
              >
                {inv.status}
              </span>
            </div>

            <div className="flex justify-between items-center py-4 border-y border-slate-50">
              <span className="text-[10px] font-black text-slate-800 tracking-tighter">
                {inv.total}
              </span>
              <span className="text-[10px] font-bold text-slate-400 uppercase">
                {inv.date}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <button className="bg-slate-50 text-slate-600 py-3 rounded-xl font-black text-[9px] uppercase tracking-widest flex items-center justify-center gap-2">
                <Download size={14} /> PDF
              </button>
              <button className="bg-[#0A0D10] text-white py-3 rounded-xl font-black text-[9px] uppercase tracking-widest flex items-center justify-center gap-2">
                <Download size={14} /> XML
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default InvoiceList;