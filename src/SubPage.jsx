import React from "react";
import { Fish, Cat, Dog, Bird, Shell, Leaf } from "lucide-react";
import { pagesData } from "./data";

// Fotoğraf yüklenmeyen canlılar için arka planda duracak yedek şık ikon yapısı
function Placeholder({ type }) {
  const configs = {
    freshwater: { I: Fish, b: "bg-cyan-950/40", t: "text-cyan-400", d: "border-cyan-500/20" },
    saltwater: { I: Fish, b: "bg-blue-950/40", t: "text-blue-400", d: "border-blue-500/20" },
    birds: { I: Bird, b: "bg-lime-950/40", t: "text-lime-400", d: "border-lime-500/20" },
    reptiles: { I: Shell, b: "bg-emerald-950/40", t: "text-emerald-400", d: "border-emerald-500/20" },
    food: { I: Leaf, b: "bg-amber-950/40", t: "text-amber-400", d: "border-amber-500/20" },
    cats: { I: Cat, b: "bg-orange-950/40", t: "text-orange-400", d: "border-orange-500/20" },
    dogs: { I: Dog, b: "bg-yellow-950/40", t: "text-yellow-400", d: "border-yellow-500/20" }
  };
  const c = configs[type] || configs.freshwater;
  const Icon = c.I;
  return (
    <div className={`w-full h-44 rounded-2xl flex flex-col items-center justify-center border gap-3 ${c.b} ${c.d}`}>
      <Icon className={`w-12 h-12 stroke-[1.5] ${c.t}`} />
      <span className={`text-xs font-medium tracking-wider uppercase opacity-60 ${c.t}`}>Göktürk Petshop</span>
    </div>
  );
}

export default function SubPage({ activePage, setActivePage }) {
  const p = pagesData[activePage];
  const whUrl = "https://wa.me.";

  return (
    <div className="min-h-screen bg-[#070814] text-white px-4 py-12 md:px-8">
      <div className="max-w-6xl mx-auto">
        <button onClick={() => { setActivePage("home"); window.scrollTo({ top: 0, behavior: "smooth" }); }} className="mb-8 text-sm font-medium text-cyan-400 hover:text-cyan-300">← Ana Sayfaya Dön</button>
        <h1 className="text-3xl md:text-4xl font-extrabold mb-2 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">{p.title}</h1>
        <p className="text-slate-400 mb-10">Göktürk Petshop güvencesiyle aradığınız tüm türler ve ürünler.</p>
        <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {p.items.map((item, idx) => (
            <div key={idx} className="bg-white/5 border border-white/10 rounded-3xl p-4 flex flex-col justify-between hover:border-cyan-500/30 transition group">
              <div>
                <div className="w-full h-44 mb-3 rounded-2xl overflow-hidden relative bg-slate-900">
                  {/* React için en kararlı resim kontrol yöntemi: HTML Image onError kontrolü */}
                  <img 
                    src={`/baliklar/${item.toLowerCase().trim().replace(/ğ/g, "g").replace(/ü/g, "u").replace(/ş/g, "s").replace(/ı/g, "i").replace(/ö/g, "o").replace(/ç/g, "s").replace(/\s+/g, "-")}.jpg`}
                    alt={item} 
                    className="w-full h-full object-cover"
                    loading="lazy" 
                    onError={(e) => {
                      // Eğer klasörde bu isimde gerçek resim yoksa, tarayıcı anında bizim yedek yer tutucu bileşenimizi buraya çizer
                      e.target.style.display = 'none';
                      const container = e.target.parentElement;
                      if (container && !container.querySelector('.placeholder-fallback')) {
                        const placeholderDiv = document.createElement('div');
                        placeholderDiv.className = 'placeholder-fallback w-full h-full';
                        container.appendChild(placeholderDiv);
                        // Basitçe içini ikon tasarımımızla dolduruyoruz
                        placeholderDiv.innerHTML = `<div class="w-full h-full rounded-2xl flex flex-col items-center justify-center border border-cyan-500/20 bg-cyan-950/40 gap-3"><svg xmlns="http://w3.org" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="text-cyan-400"><path d="M2 16s4.5-1-4.5-4-4.5-4-4.5-4H2Z"/><path d="M22 12c0-3.5-3.5-6-8-6s-8 2.5-8 6 3.5 6 8 6 8-2.5 8-6Z"/><path d="M12 10V9"/><path d="M16 11.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"/></svg><span class="text-xs font-medium tracking-wider uppercase opacity-60 text-cyan-400">Göktürk Petshop</span></div>`;
                      }
                    }} 
                  />
                </div>
                <h3 className="font-bold text-base text-slate-100 group-hover:text-cyan-400 transition-colors">{item}</h3>
              </div>
              <a href={whUrl} target="_blank" rel="noreferrer" className="mt-4 w-full text-center bg-cyan-500/10 hover:bg-cyan-500 text-cyan-400 hover:text-white text-xs font-semibold py-2 px-3 rounded-xl transition">Fiyat Sor</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
