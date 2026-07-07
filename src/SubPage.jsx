import React from "react";
import { Fish } from "lucide-react";

export default function SubPage({ active, setPage }) {
  const getUrl = (item) => {
    const fName = item.replace(/Ç/g, "c").replace(/ç/g, "c").replace(/Ğ/g, "g").replace(/ğ/g, "g").replace(/I/g, "i").replace(/ı/g, "i").replace(/İ/g, "i").replace(/Ö/g, "o").replace(/ö/g, "o").replace(/Ş/g, "s").replace(/ş/g, "s").replace(/Ü/g, "u").replace(/ü/g, "u").toLowerCase().trim().replace(/[^a-z0-9\s-]/g, "").replace(/\s+/g, "-").replace(/-+/g, "-");
    return `/baliklar/${fName}.jpg`;
  };

  return (
    <div className="min-h-screen bg-[#070814] text-white px-4 py-12 md:px-8">
      <div className="max-w-6xl mx-auto">
        <button onClick={() => { setPage("home"); window.scrollTo({ top: 0, behavior: "smooth" }); }} className="mb-8 text-sm font-medium text-cyan-400 hover:text-cyan-300">← Ana Sayfaya Dön</button>
        <h1 className="text-3xl md:text-4xl font-extrabold mb-2 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">{active.title}</h1>
        <p className="text-slate-400 mb-10">Göktürk Petshop güvencesiyle aradığınız tüm türler ve ürünler.</p>
        <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {active.items.map((item, idx) => (
            <div key={idx} className="bg-white/5 border border-white/10 rounded-3xl p-4 flex flex-col justify-between hover:border-cyan-500/30 transition group">
              <div>
                <div className="w-full h-44 mb-3 rounded-2xl overflow-hidden relative bg-slate-900">
                  <img src={getUrl(item)} alt={item} className="w-full h-full object-cover relative z-10" onError={(e) => { e.target.style.display = 'none'; }} />
                  <div className="absolute inset-0 flex flex-col items-center justify-center border border-cyan-500/20 bg-cyan-950/40 gap-3 text-cyan-400 z-0"><Fish className="w-12 h-12" /><span className="text-xs font-medium uppercase opacity-60">Göktürk Petshop</span></div>
                </div>
                <h3 className="font-bold text-base text-slate-100 group-hover:text-cyan-400">{item}</h3>
              </div>
              <a href="https://wa.me" target="_blank" rel="noopener noreferrer" className="mt-4 w-full text-center bg-cyan-500/10 hover:bg-cyan-500 text-cyan-400 hover:text-white text-xs font-semibold py-2 px-3 rounded-xl transition">Fiyat Sor</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
