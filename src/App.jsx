import React, { useState } from "react";
import { Fish, MapPin, Phone, ChevronRight, Sparkles, Truck, Leaf, Cat, Dog, Bird, Shell, Compass } from "lucide-react";

const cats = [
  { id: "freshwater", icon: Fish, title: "Tatlı Su Balıkları", text: "Melek balığı, diskus ve neon tetra.", grad: "from-cyan-100 to-blue-200", items: ["Lepistes", "Beta Balığı", "Japon Balığı", "Melek Balığı", "Discus", "Neon Tetra", "Kardinal Tetra", "Siyah Neon Tetra", "Rasbora", "Moli", "Plati", "Kılıç Kuyruk", "Gurami", "Cüce Vatoz", "Çöpçü Balığı", "Elma Salyangozu"] },
  { id: "saltwater", icon: Fish, title: "Tuzlu Su Balıkları", text: "Palyaço balığı, aslan balığı ve mercanlar.", grad: "from-blue-100 to-teal-200", items: ["Palyaço Balığı", "Blue Tang", "Yellow Tang", "Aslan Balığı", "Melek Balığı", "Kelebek Balığı", "Gobies", "Blenny", "Damselfish", "Karides", "Mercan Çeşitleri", "Anemon"] },
  { id: "cats", icon: Cat, title: "Kedi Ürünleri", text: "Mama, kum, oyuncak ve aksesuarlar.", grad: "from-orange-100 to-amber-200", items: ["Kedi Mamaları", "Yaş Mama", "Kedi Kumu", "Kum Kabı", "Tırmalama Tahtası", "Kedi Oyuncakları", "Kedi Tasmaları", "Taşıma Çantası", "Kedi Yatakları"] },
  { id: "dogs", icon: Dog, title: "Köpek Ürünleri", text: "Tasma, mama, yatak ve bakım ürünleri.", grad: "from-yellow-100 to-orange-200", items: ["Köpek Mamaları", "Ödül Mamaları", "Köpek Tasmaları", "Gezdirme Kayışları", "Köpek Oyuncakları", "Köpek Yatakları", "Şampuan ve Bakım"] },
  { id: "birds", icon: Bird, title: "Kuş Çeşitleri", text: "Kafes, yem ve kuş aksesuarları.", grad: "from-lime-100 to-green-200", items: ["Muhabbet Kuşu", "Kanarya", "Sultan Papağanı", "Cennet Papağanı", "Sevda Papağanı", "Hint Bülbülü", "Zebra İspinozu", "Kafes ve Yem"] },
  { id: "reptiles", icon: Shell, title: "Sürüngenler", text: "Teraryum, ısıtıcı ve ekipmanlar.", grad: "from-emerald-100 to-stone-200", items: ["Leopard Gecko", "Crested Gecko", "Sakallı Ejder", "Bukalemun", "Yeşil İguana", "Mısır Yılanı", "Top Piton", "Su Kaplumbağası"] }
];

export default function GokturkPetshopSite() {
  const [page, setPage] = useState("home");
  const active = cats.find(c => c.id === page);

  const getUrl = (item) => {
    const fName = item.replace(/Ç/g, "c").replace(/ç/g, "c").replace(/Ğ/g, "g").replace(/ğ/g, "g").replace(/I/g, "i").replace(/ı/g, "i").replace(/İ/g, "i").replace(/Ö/g, "o").replace(/ö/g, "o").replace(/Ş/g, "s").replace(/ş/g, "s").replace(/Ü/g, "u").replace(/ü/g, "u").toLowerCase().trim().replace(/[^a-z0-9\s-]/g, "").replace(/\s+/g, "-").replace(/-+/g, "-");
    return `/baliklar/${fName}.jpg`;
  };

  if (page !== "home" && active) {
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
                    <div className="absolute inset-0 flex flex-col items-center justify-center border border-cyan-500/20 bg-cyan-950/40 gap-3 text-cyan-400 z-0"><Fish className="w-12 h-12 stroke-[1.5]" /><span className="text-xs font-medium tracking-wider uppercase opacity-60">Göktürk Petshop</span></div>
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
  return (
    <div className="min-h-screen bg-[#070814] text-slate-100 antialiased selection:bg-cyan-500">
      <div className="relative overflow-hidden border-b border-white/5 bg-gradient-to-b from-[#0a0c1a] to-[#070814] py-20 md:py-32">
        <div className="px-4 md:px-8 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-center md:text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-xs font-medium text-cyan-400 mb-6"><Sparkles className="w-3.5 h-3.5" /> Canlı Dostlarınız İçin En İyisi</div>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6">Göktürk <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent">Petshop</span></h1>
            <p className="text-lg text-slate-400 mb-8">Akvaryum dünyasından evcil hayvan aksesuarlarına kadar her şey.</p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
              <a href="https://wa.me" target="_blank" rel="noopener noreferrer" className="rounded-2xl bg-cyan-500 text-slate-950 font-bold px-8 py-3 text-sm flex items-center gap-2 w-full sm:w-auto justify-center">İletişime Geçin</a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="rounded-2xl border border-white/10 bg-white/5 text-white px-8 py-3 text-sm w-full sm:w-auto text-center hover:bg-white/10 transition">Instagram'da Takip Et</a>
            </div>
          </div>
          <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white/10 bg-slate-800"><img src="/pet.jpg" alt="Logo" className="w-full h-full object-cover" /></div>
        </div>
      </div>

      <div className="px-4 md:px-8 max-w-6xl mx-auto py-24 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {cats.map((cat, i) => (
          <div key={i} className="rounded-3xl border border-white/10 bg-white/5 p-8 flex flex-col justify-between cursor-pointer hover:border-white/20 transition-all duration-300" onClick={() => { setPage(cat.id); scr(); }}>
            <div>
              <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br flex items-center justify-center text-slate-900 mb-6 ${cat.grad}`}>{React.createElement(cat.icon, { className: "w-6 h-6" })}</div>
              <h3 className="text-xl font-bold text-white mb-2">{cat.title}</h3>
              <p className="text-sm text-slate-400 mb-6">{cat.text}</p>
            </div>
            <div className="text-sm font-semibold text-cyan-400 flex items-center gap-1">Çeşitleri İncele <ChevronRight className="w-4 h-4" /></div>
          </div>
        ))}
      </div>

      <div className="bg-[#090a18] border-y border-white/5 py-24 grid gap-6 grid-cols-2 md:grid-cols-4">
        {[{ i: Sparkles, t: "Geniş Ürün Yelpazesi" }, { i: Fish, t: "Akvaryum Ürünleri" }, { i: Leaf, t: "Kaliteli Ürünler" }, { i: Truck, t: "Hızlı Teslimat" }].map((feat, i) => (
          <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col items-center">{React.createElement(feat.i, { className: "w-8 h-8 text-cyan-400 mb-4" })}<span className="font-semibold text-sm text-slate-200">{feat.t}</span></div>
        ))}
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
        <div className="h-80 w-full bg-slate-900 border border-white/10 rounded-3xl overflow-hidden relative shadow-2xl">
          <a href="https://google.com" target="_blank" rel="noopener noreferrer" className="w-full h-full bg-[#0d0e22] flex flex-col items-center justify-center p-6 text-center gap-4 group hover:bg-[#131535]">
            <div className="w-16 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition duration-300"><Compass className="w-6 h-6" /></div>
            <div>
              <h4 className="text-lg font-bold text-white mb-1">Canlı Yol Tarifi</h4>
              <p className="text-xs text-slate-400 max-w-xs mx-auto">Google Haritalar üzerinden dükkanımızın tam konumuna ulaşmak için tıklayın.</p>
            </div>
            <div className="inline-flex items-center gap-2 bg-cyan-500 text-slate-950 font-bold px-6 py-2.5 text-xs rounded-xl transition duration-200">Haritada Aç <ChevronRight className="w-3.5 h-3.5" /></div>
          </a>
        </div>
      </div>

      <footer className="border-t border-white/5 bg-[#05060f] py-8 text-center text-xs text-slate-500"><p>© {2026} Göktürk Petshop. Tüm Hakları Saklıdır.</p></footer>
    </div>
  );
}
