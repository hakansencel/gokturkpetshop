import React from "react";
import { Fish, MapPin, Phone, ChevronRight, Sparkles, Truck, Leaf, Map } from "lucide-react";
import { categories } from "./data";

export default function HomeContent({ setActivePage }) {
  const wh = "https://wa.me.";
  const go = (id) => { setActivePage(id); window.scrollTo({ top: 0, behavior: "smooth" }); };
  
  // Müşterilerin dükkan konumunu doğrudan telefonlarındaki harita uygulamasında açacak resmi Google Haritalar linki
  const googleMapsUrl = "https://google.com";

  return (
    <div className="min-h-screen bg-[#070814] text-slate-100 antialiased">
      <div className="relative overflow-hidden border-b border-white/5 bg-gradient-to-b from-[#0a0c1a] to-[#070814] py-20 md:py-32">
        <div className="px-4 md:px-8 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-center md:text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-xs font-medium text-cyan-400 mb-6"><Sparkles className="w-3.5 h-3.5" /> Canlı Dostlarınız İçin En İyisi</div>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6">Göktürk <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent">Petshop</span></h1>
            <p className="text-lg text-slate-400 mb-8">Akvaryum dünyasından evcil hayvan aksesuarlarına kadar her şey.</p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
              <a href={wh} target="_blank" rel="noreferrer"><button className="rounded-2xl bg-cyan-500 text-slate-950 font-bold px-8 py-3 text-sm flex items-center gap-2 justify-center w-full sm:w-auto"><Phone className="w-4 h-4 fill-current"/> İletişime Geçin</button></a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer"><button className="rounded-2xl border border-white/10 bg-white/5 text-white px-8 py-3 text-sm w-full sm:w-auto">Instagram'da Takip Et</button></a>
            </div>
          </div>
          <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white/10 bg-slate-800"><img src="/pet.jpg" alt="Logo" className="w-full h-full object-cover" /></div>
        </div>
      </div>
      
      <div className="px-4 md:px-8 max-w-6xl mx-auto py-24 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((cat, i) => {
          const Icon = cat.icon;
          return (
            <div key={i} className="rounded-3xl border border-white/10 bg-white/5 p-8 flex flex-col justify-between cursor-pointer hover:border-white/20 transition-all duration-300" onClick={() => go(cat.id)}>
              <div>
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br flex items-center justify-center text-slate-900 mb-6 ${cat.grad}`}><Icon className="w-6 h-6" /></div>
                <h3 className="text-xl font-bold text-white mb-2">{cat.title}</h3>
                <p className="text-sm text-slate-400 mb-6">{cat.text}</p>
              </div>
              <div className="text-sm font-semibold text-cyan-400 flex items-center gap-1">Çeşitleri İncele <ChevronRight className="w-4 h-4" /></div>
            </div>
          );
        })}
      </div>

      <div className="bg-[#090a18] border-y border-white/5 py-24 text-center">
        <div className="px-4 md:px-8 max-w-6xl mx-auto grid gap-6 grid-cols-2 md:grid-cols-4">
          {[{ i: Sparkles, t: "Geniş Ürün Yelpazesi" }, { i: Fish, t: "Akvaryum Ürünleri" }, { i: Leaf, t: "Kaliteli Ürünler" }, { i: Truck, t: "Hızlı Teslimat" }].map((f, i) => {
            const Icon = f.i; return <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col items-center"><Icon className="w-8 h-8 text-cyan-400 mb-4" /><span className="font-semibold text-sm text-slate-200">{f.t}</span></div>;
          })}
        </div>
      </div>

      <div className="px-4 md:px-8 max-w-6xl mx-auto py-24 grid gap-12 md:grid-cols-2 items-center">
        <div>
          <h2 className="text-3xl font-extrabold text-white mb-6">Mağazamızı Ziyaret Edin</h2>
          <p className="text-slate-400 mb-8">İstanbul Göktürk'teki sıcak mağazamızda sizi ve minik dostlarınızı ağırlamaktan mutluluk duyarız.</p>
          <div className="space-y-4">
            <div className="flex gap-4 items-start"><MapPin className="w-5 h-5 text-cyan-400 mt-0.5" /><div><h4 className="font-bold text-white mb-1">Adres</h4><p className="text-sm text-slate-400">Göktürk, İstanbul / Türkiye</p></div></div>
            <div className="flex gap-4 items-start"><Phone className="w-5 h-5 text-cyan-400 mt-0.5" /><div><h4 className="font-bold text-white mb-1">Telefon / WhatsApp</h4><p className="text-sm text-slate-400">+90 532 559 97 78</p></div></div>
          </div>
        </div>
        
        {/* Hata veren iframe yerine asla engellenmeyecek olan butonlu harita tasarımı */}
        <div className="h-80 w-full bg-[#0d0e22] border border-white/10 rounded-3xl overflow-hidden relative shadow-2xl flex flex-col items-center justify-center p-6 text-center gap-4 group hover:border-cyan-500/30 transition-all duration-300">
          <div className="w-16 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition duration-300">
            <Map className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-lg font-bold text-white mb-1">Canlı Yol Tarifi</h4>
            <p className="text-xs text-slate-400 max-w-xs mx-auto">Google Haritalar üzerinden dükkanımızın tam konumuna ulaşmak ve yol tarifi almak için aşağıdaki butona tıklayın.</p>
          </div>
          <a 
            href={googleMapsUrl} 
            target="_blank" 
            rel="noreferrer" 
            className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-bold px-6 py-2.5 text-xs rounded-xl transition duration-200 shadow-md shadow-cyan-500/10"
          >
            Haritada Aç <ChevronRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
      <footer className="border-t border-white/5 bg-[#05060f] py-8 text-center text-xs text-slate-500"><p>© {new Date().getFullYear()} Göktürk Petshop. Tüm Hakları Saklıdır.</p></footer>
    </div>
  );
}
