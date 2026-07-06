import React from "react";
import { Fish, Cat, Dog, Bird, Shell, Leaf } from "lucide-react";
import { pagesData } from "./data"; // BAŞINDAKİ FAZLALIK NOKTAYI (.) SİLDİK, BÖYLECE DOSYAYI ARTIK ANINDA BULACAK

function Placeholder({ type }) {
  const c = {
    freshwater: { I: Fish, b: "bg-cyan-950/40", t: "text-cyan-400", d: "border-cyan-500/20" },
    saltwater: { I: Fish, b: "bg-blue-950/40", t: "text-blue-400", d: "border-blue-500/20" },
    birds: { I: Bird, b: "bg-lime-950/40", t: "text-lime-400", d: "border-lime-500/20" },
    reptiles: { I: Shell, b: "bg-emerald-950/40", t: "text-emerald-400", d: "border-emerald-500/20" },
    food: { I: Leaf, b: "bg-amber-950/40", t: "text-amber-400", d: "border-amber-500/20" },
    cats: { I: Cat, b: "bg-orange-950/40", t: "text-orange-400", d: "border-orange-500/20" },
    dogs: { I: Dog, b: "bg-yellow-950/40", t: "text-yellow-400", d: "border-yellow-500/20" }
  }[type] || { I: Fish, b: "bg-slate-900", t: "text-slate-400", d: "border-white/10" };
  const Icon = c.I;
  return (
    <div className={`w-full h-44 rounded-2xl mb-3 flex flex-col items-center justify-center border gap-3 ${c.b} ${c.d}`}>
      <Icon className={`w-12 h-12 stroke-[1.5] ${c.t}`} />
      <span className={`text-xs font-medium tracking-wider uppercase opacity-60 ${c.t}`}>Göktürk Petshop</span>
    </div>
  );
}

export default function SubPage({ activePage, setActivePage }) {
  const p = pagesData[activePage];
  const wh = "https://wa.me";
  return (
    <div className="min-h-screen bg-[#070814] text-white px-4 py-12 md:px-8">
      <div className="max-w-6xl mx-auto">
        <button onClick={() => { setActivePage("home"); window.scrollTo({ top: 0, behavior: "smooth" }); }} className="mb-8 text-sm font-medium text-cyan-400 hover:text-cyan-300">← Ana Sayfaya Dön</button>
        <h1 className="text-3xl md:text-4xl font-extrabold mb-2 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">{p.title}</h1>
        <p className="text-slate-400 mb-10">Göktürk Petshop güvencesiyle aradığınız tüm türler ve Rooms.</p>
        <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {p.items.map((item, idx) => (
            <div key={idx} className="bg-white/5 border border-white/10 rounded-3xl p-4 flex flex-col justify-between hover:border-cyan-500/30 transition group">
              <div><Placeholder type={activePage} /><h3 className="font-bold text-base text-slate-100 group-hover:text-cyan-400 transition-colors">{item}</h3></div>
              <a href={wh} target="_blank" rel="noreferrer" className="mt-4 w-full text-center bg-cyan-500/10 hover:bg-cyan-500 text-cyan-400 hover:text-white text-xs font-semibold py-2 px-3 rounded-xl transition">Fiyat Sor</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
