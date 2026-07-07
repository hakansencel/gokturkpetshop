import React, { useState } from "react";
import { Fish, MapPin, Phone, ChevronRight, Sparkles, Truck, Leaf, Cat, Dog, Bird, Shell, Map } from "lucide-react";

const pData = {
  freshwater: { t: "Tatlı Su Balıkları", i: ["Lepistes", "Beta Balığı", "Japon Balığı", "Melek Balığı", "Discus", "Neon Tetra", "Kardinal Tetra", "Siyah Neon Tetra", "Kırmızı Burun Tetra", "Serpae Tetra", "Limon Tetra", "Ember Tetra", "Glofish Tetra", "Zebra Danio", "Leopar Danio", "İnci Danio", "Rasbora", "Moli", "Plati", "Kılıç Kuyruk", "Gurami", "Cüce Vatoz", "Çöpçü Balığı", "Elma Salyangozu"] },
  saltwater: { t: "Tuzlu Su Balıkları", i: ["Palyaço Balığı", "Blue Tang", "Yellow Tang", "Aslan Balığı", "Melek Balığı", "Kelebek Balığı", "Gobies", "Blenny", "Damselfish", "Wrasse", "Firefish", "Mandarin Balığı", "Karides", "Deniz Yıldızı", "Mercan Çeşitleri", "Anemon"] },
  birds: { t: "Kuş Çeşitleri", i: ["Muhabbet Kuşu", "Kanarya", "Sultan Papağanı", "Cennet Papağanı", "Sevda Papağanı", "Hint Bülbülü", "Zebra İspinozu", "Forpus Papağanı", "Jako Papağanı", "Güvercin"] },
  reptiles: { t: "Sürüngenler & Teraryum", i: ["Leopard Gecko", "Crested Gecko", "Sakallı Ejder", "Bukalemun", "Yeşil İguana", "Mısır Yılanı", "Top Piton", "Su Kaplumbağası", "Kurbağa Türleri"] },
  food: { t: "Mamalar ve Yemler", i: ["Kedi Mamaları", "Köpek Mamaları", "Yavru Mama Çeşitleri", "Yaş Mama ve Ödül Mamaları", "Kuş Yemleri", "Balık Yemleri", "Dip ve Tablet Yemler", "Sürüngen Yemleri", "Vitamin ve Destek Ürünleri"] },
  cats: { t: "Kedi Ürünleri", i: ["Kedi Mamaları", "Yaş Mama ve Ödül Mamaları", "Kedi Kumu", "Kum Kabı ve Kürekleri", "Tırmalama Tahtaları", "Kedi Oyuncakları", "Kedi Tasmaları", "Taşıma Çantaları", "Kedi Yatakları", "Tarama ve Bakım Ürünleri"] },
  dogs: { t: "Köpek Ürünleri", i: ["Köpek Mamaları", "Yaş Mama ve Ödül Mamaları", "Köpek Tasmaları", "Gezdirme Kayışları", "Göğüs Tasmaları", "Köpek Oyuncakları", "Köpek Yatakları", "Şampuan ve Bakım Ürünleri", "Tuvalet Eğitim Ürünleri"] }
};

const cats = [
  { id: "freshwater", icon: Fish, title: "Tatlı Su Balıkları", text: "Melek balığı, diskus, neon tetra ve daha fazlası.", grad: "from-cyan-100 to-blue-200" },
  { id: "saltwater", icon: Fish, title: "Tuzlu Su Balıkları", text: "Palyaço balığı, aslan balığı, mercan ve egzotik türler.", grad: "from-blue-100 to-teal-200" },
  { id: "cats", icon: Cat, title: "Kedi", text: "Mama, kum kabı, oyuncak ve aksesuarlar.", grad: "from-orange-100 to-amber-200" },
  { id: "dogs", icon: Dog, title: "Köpek", text: "Tasma, mama, yatak ve bakım ürünleri.", grad: "from-yellow-100 to-orange-200" },
  { id: "birds", icon: Bird, title: "Kuş", text: "Kafes, yem, tünek ve kuş aksesuarları.", grad: "from-lime-100 to-green-200" },
  { id: "reptiles", icon: Shell, title: "Sürüngenler", text: "Teraryum, ısıtıcı, canlı yem ve ekipmanlar.", grad: "from-emerald-100 to-stone-200" }
];

const wh = "https://wa.me.";

export default function GokturkPetshopSite() {
  const [page, setPage] = useState("home");
  const scr = () => window.scrollTo({ top: 0, behavior: "smooth" });

  if (page !== "home" && pData[page]) {
    const p = pData[page];
    return (
      <div className="min-h-screen bg-[#070814] text-white px-4 py-12 md:px-8">
        <div className="max-w-6xl mx-auto">
          <button onClick={() => { setPage("home"); scr(); }} className="mb-8 text-sm font-medium text-cyan-400 hover:text-cyan-300">← Ana Sayfaya Dön</button>
          <h1 className="text-3xl md:text-4xl font-extrabold mb-2 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">{p.t}</h1>
          <p className="text-slate-400 mb-10">Göktürk Petshop güvencesiyle aradığınız tüm türler ve ürünler.</p>
          <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {p.i.map((item, idx) => {
              const fName = item.replace(/Ç/g, "c").replace(/ç/g, "c").replace(/Ğ/g, "g").replace(/ğ/g, "g").replace(/I/g, "i").replace(/ı/g, "i").replace(/İ/g, "i").replace(/Ö/g, "o").replace(/ö/g, "o").replace(/Ş/g, "s").replace(/ş/g, "s").replace(/Ü/g, "u").replace(/ü/g, "u").toLowerCase().trim().replace(/[^a-z0-9\s-]/g, "").replace(/\s+/g, "-").replace(/-+/g, "-");
              return (
                <div key={idx} className="bg-white/5 border border-white/10 rounded-3xl p-4 flex flex-col justify-between hover:border-cyan-500/30 transition group">
                  <div className="w-full h-44 mb-3 rounded-2xl overflow-hidden relative bg-slate-900">
                    <img 
                      src={`/baliklar/${fName}.jpg`} 
                      alt={item} 
                      className="w-full h-full object-cover relative z-10" 
                      onError={(e) => {
                        e.target.style.display = 'none';
                        const container = e.target.parentElement;
                        if (container && !container.querySelector('.pf-fb')) {
                          const div = document.createElement('div');
                          div.className = 'pf-fb w-full h-full absolute inset-0 z-0';
                          container.appendChild(div);
                          div.innerHTML = `<div class="w-full h-full rounded-2xl flex flex-col items-center justify-center border border-cyan-500/20 bg-cyan-950/40 gap-3"><svg xmlns="http://w3.org" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="text-cyan-400"><path d="M2 16s4.5-1-4.5-4-4.5-4-4.5-4H2Z"/><path d="M22 12c0-3.5-3.5-6-8-6s-8 2.5-8 6 3.5 6 8 6 8-2.5 8-6Z"/><path d="M12 10V9"/><path d="M16 11.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"/></svg><span class="text-xs font-medium tracking-wider uppercase opacity-60 text-cyan-400">Göktürk Petshop</span></div>`;
                        }
                      }} 
                    />
                  </div>
                  <h3 className="font-bold text-base text-slate-100 group-hover:text-cyan-400">{item}</h3>
                  <a href={wh} target="_blank" rel="noreferrer" className="mt-4 w-full text-center bg-cyan-500/10 hover:bg-cyan-500 text-cyan-400 hover:text-white text-xs font-semibold py-2 px-3 rounded-xl transition">Fiyat Sor</a>
                </div>
              );
            })}
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
              <a href={wh} target="_blank" rel="noreferrer"><button className="rounded-2xl bg-cyan-500 text-slate-950 font-bold px-8 py-3 text-sm flex items-center gap-2 justify-center w-full sm:w-auto"><Phone className="w-4 h-4 fill-current"/> İletişime Geçin</button></a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer"><button className="rounded-2xl border border-white/10 bg-white/5 text-white px-8 py-3 text-sm w-full sm:w-auto">Instagram'da Takip Et</button></a>
            </div>
          </div>
          <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white/10 bg-slate-800"><img src="/pet.jpg" alt="Logo" className="w-full h-full object-cover" /></div>
                  </div>
      </div>

      {/* 2. KATEGORİ GRID ALANI */}
      <div className="px-4 md:px-8 max-w-6xl mx-auto py-24 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {cats.map((cat, i) => {
          const Icon = cat.icon;
          return (
            <div key={i} className="rounded-3xl border border-white/10 bg-white/5 p-8 flex flex-col justify-between cursor-pointer hover:border-white/20 transition duration-300" onClick={() => { setPage(cat.id); scr(); }}>
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

      {/* 3. ROZETLER / ÖZELLİKLER BÖLÜMÜ */}
      <div className="bg-[#090a18] border-y border-white/5 py-24 text-center">
        <div className="px-4 md:px-8 max-w-6xl mx-auto grid gap-6 grid-cols-2 md:grid-cols-4">
          {[{ i: Sparkles, t: "Geniş Ürün Yelpazesi" }, { i: Fish, t: "Akvaryum Ürünleri" }, { i: Leaf, t: "Kaliteli Ürünler" }, { i: Truck, t: "Hızlı Teslimat" }].map((f, i) => {
            const Icon = f.i; return <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col items-center"><Icon className="w-8 h-8 text-cyan-400 mb-4" /><span className="font-semibold text-sm text-slate-200">{f.t}</span></div>;
          })}
        </div>
      </div>

      {/* 4. İLETİŞİM VE HARİTA BUTONU ALANI */}
      <div className="px-4 md:px-8 max-w-6xl mx-auto py-24 grid gap-12 md:grid-cols-2 items-center">
        <div>
          <h2 className="text-3xl font-extrabold text-white mb-6">Mağazamızı Ziyaret Edin</h2>
          <p className="text-slate-400 mb-8">İstanbul Göktürk'teki sıcak mağazamızda sizi ve minik dostlarınızı ağırlamaktan mutluluk duyarız.</p>
          <div className="space-y-4">
            <div className="flex gap-4 items-start"><MapPin className="w-5 h-5 text-cyan-400 mt-0.5" /><div><h4 className="font-bold text-white mb-1">Adres</h4><p className="text-sm text-slate-400">Göktürk, İstanbul / Türkiye</p></div></div>
            <div className="flex gap-4 items-start"><Phone className="w-5 h-5 text-cyan-400 mt-0.5" /><div><h4 className="font-bold text-white mb-1">Telefon / WhatsApp</h4><p className="text-sm text-slate-400">+90 532 559 97 78</p></div></div>
          </div>
        </div>
        
        {/* DOĞRU LİNKLE GÜNCELLENEN VE ASLA ENGELLENMEYEN HARİTA ALANI */}
        <div className="h-80 w-full bg-slate-900 border border-white/10 rounded-3xl overflow-hidden relative shadow-2xl">
        {/* JAVASCRIPT KİLİTLENMESİNİ ÇÖZEN %100 GARANTİLİ DOĞRU LİNK YAPISI */}
<a 
  href="https://google.com.tr/maps"
  target="_blank"
  rel="noreferrer"
  className="w-full h-80 bg-[#0d0e22] flex flex-col items-center justify-center p-6 text-center gap-4 group transition-all duration-300 hover:bg-[#131535] rounded-3xl border border-white/10"
>
  <div className="w-16 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition duration-300">
    <Map className="w-6 h-6" />
  </div>
  <div>
    <h4 className="text-lg font-bold text-white mb-1">Canlı Yol Tarifi</h4>
    <p className="text-xs text-slate-400 max-w-xs mx-auto">Google Haritalar üzerinden dükkanımızın tam konumuna ulaşmak için tıklayın.</p>
  </div>
  <div className="inline-flex items-center gap-2 bg-cyan-500 text-slate-950 font-bold px-6 py-2.5 text-xs rounded-xl transition duration-200">
    Haritada Aç <ChevronRight className="w-3.5 h-3.5" />
  </div>
</a>


        </div>
      </div>

      {/* 5. FOOTER */}
      <footer className="border-t border-white/5 bg-[#05060f] py-8 text-center text-xs text-slate-500"><p>© {new Date().getFullYear()} Göktürk Petshop. Tüm Hakları Saklıdır.</p></footer>
    </div>
  );
}

        
