import React, { useState, useEffect } from "react";

const cats = [
  { id: "freshwater", title: "Tatlı Su Balıkları", text: "Melek balığı, diskus ve neon tetra.", grad: "from-cyan-100 to-blue-200", folder: "baliklar", cover: "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?w=500&auto=format&fit=crop&q=80", items: ["Lepistes", "Beta Balığı", "Japon Balığı", "Melek Balığı", "Discus", "Neon Tetra", "Kardinal Tetra", "Siyah Neon Tetra", "Rasbora", "Moli", "Plati", "Kılıç Kuyruk", "Gurami", "Cüce Vatoz", "Çöpçü Balığı", "Elma Salyangozu"] },
  { id: "saltwater", title: "Tuzlu Su Balıkları", text: "Palyaço balığı, aslan balığı ve mercanlar.", grad: "from-blue-100 to-teal-200", folder: "baliklar", cover: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=500&auto=format&fit=crop&q=80", items: ["Palyaço Balığı", "Blue Tang", "Yellow Tang", "Aslan Balığı", "Melek Balığı", "Kelebek Balığı", "Gobies", "Blenny", "Damselfish", "Karides", "Mercan Çeşitleri", "Anemon"] },
  { id: "cats", title: "Kedi Ürünleri", text: "Mama, kum, oyuncak ve aksesuarlar.", grad: "from-orange-100 to-amber-200", folder: "kediler", cover: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=500&auto=format&fit=crop&q=80", items: ["Kedi Mamaları", "Yaş Mama", "Kedi Kumu", "Kum Kabı", "Tırmalama Tahtası", "Kedi Oyuncakları", "Kedi Tasmaları", "Taşıma Çantası", "Kedi Yatakları"] },
  { id: "dogs", title: "Köpek Ürünleri", text: "Tasma, mama, yatak ve bakım ürünleri.", grad: "from-yellow-100 to-orange-200", folder: "kopekler", cover: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=500&auto=format&fit=crop&q=80", items: ["Köpek Mamaları", "Ödül Mamaları", "Köpek Tasmaları", "Gezdirme Kayışları", "Köpek Oyuncakları", "Köpek Yatakları", "Şampuan ve Bakım"] },
  { id: "birds", title: "Kuş Çeşitleri", text: "Kafes, yem ve kuş aksesuarları.", grad: "from-lime-100 to-green-200", folder: "kuslar", cover: "https://images.unsplash.com/photo-1452570053594-1b985d6ea890?w=500&auto=format&fit=crop&q=80", items: ["Muhabbet Kuşu", "Kanarya", "Sultan Papağanı", "Cennet Papağanı", "Sevda Papağanı", "Hint Bülbülü", "Zebra İspinozu", "Kafes ve Yem"] },
  { id: "reptiles", title: "Sürüngenler", text: "Teraryum, ısıtıcı ve ekipmanlar.", grad: "from-emerald-100 to-stone-200", folder: "surengenler", cover: "https://images.unsplash.com/photo-1504450758481-7338eba7524a?w=500&auto=format&fit=crop&q=80", items: ["Leopard Gecko", "Crested Gecko", "Sakallı Ejder", "Bukalemun", "Yeşil İguana", "Mısır Yılanı", "Top Piton", "Su Kaplumbağası"] }
];

export default function GokturkPetshopSite() {
  const [page, setPage] = useState("home");
  const [showPopup, setShowPopup] = useState(true);
  const active = cats.find(c => c.id === page);

  const whatsappNumber = "905325599778";
  const getWhatsAppLink = (message) => `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  useEffect(() => {
    if (page === "home") {
      document.title = "Göktürk Petshop | Akvaryum ve Evcil Hayvan Dünyası";
    } else if (active) {
      document.title = `${active.title} | Göktürk Petshop`;
    }
  }, [page, active]);

  const getUrl = (item, folder) => {
    const fName = item.replace(/Ç/g, "c").replace(/ç/g, "c").replace(/Ğ/g, "g").replace(/ğ/g, "g").replace(/I/g, "i").replace(/ı/g, "i").replace(/İ/g, "i").replace(/Ö/g, "o").replace(/ö/g, "o").replace(/Ş/g, "s").replace(/ş/g, "s").replace(/Ü/g, "u").replace(/ü/g, "u").toLowerCase().trim().replace(/[^a-z0-9\s-]/g, "").replace(/\s+/g, "-").replace(/-+/g, "-");
    return `/images/${folder}/${fName}.jpg`; 
  };

  // İÇ SAYFA (ÜRÜNLER LİSTESİ)
  if (page !== "home" && active) {
    return (
      <div className="min-h-screen bg-[#f8fafc] text-slate-800 px-4 py-12 md:px-8">
        <div className="max-w-6xl mx-auto">
          <button onClick={() => { setPage("home"); window.scrollTo({ top: 0, behavior: "smooth" }); }} className="mb-8 text-sm font-semibold text-cyan-600 hover:text-cyan-700 hover:underline transition">← Ana Sayfaya Dön</button>
          <h1 className="text-3xl font-black mb-2 text-slate-900">{active.title}</h1>
          <p className="text-slate-500 mb-10">Göktürk Petshop güvencesiyle aradığınız tüm türler ve ürünler.</p>
          <div className="grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {active.items.map((item, idx) => (
              <div key={idx} className="bg-white border border-slate-200/80 rounded-3xl p-4 flex flex-col justify-between hover:shadow-xl hover:border-cyan-500/30 transition duration-300 group shadow-sm">
                <div>
                  <div className="w-full h-44 mb-3 rounded-2xl overflow-hidden relative bg-slate-100">
                    <img src={getUrl(item, active.folder)} alt={item} className="w-full h-full object-cover relative z-10" onError={(e) => { e.target.style.display = 'none'; }} />
                    <div className="absolute inset-0 flex flex-col items-center justify-center border border-slate-200 bg-slate-50 gap-3 text-cyan-600 z-0"><span className="text-2xl">🐾</span><span className="text-xs font-bold uppercase opacity-60 tracking-wider">Göktürk Petshop</span></div>
                  </div>
                  <h3 className="font-bold text-base text-slate-800 group-hover:text-cyan-600 transition">{item}</h3>
                </div>
                <a href={getWhatsAppLink(`Merhaba, ${active.title} kategorisindeki "${item}" ürünü/canlısı hakkında fiyat ve stok bilgisi alabilir miyim?`)} target="_blank" rel="noopener noreferrer" className="mt-4 w-full text-center bg-cyan-50 text-cyan-600 py-2.5 px-3 rounded-xl text-xs font-bold hover:bg-cyan-500 hover:text-white transition-all duration-300">Fiyat Sor</a>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // ANA SAYFA
  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-700 antialiased selection:bg-cyan-500 selection:text-white">
      
      {/* POPUP RESMİ */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[200] flex items-center justify-center p-4 overflow-y-auto">
          <div className="absolute inset-0" onClick={() => setShowPopup(false)}></div>
          <div className="relative z-10 my-auto animate-in fade-in zoom-in-95 duration-300">
            <img 
              src="/popup-image.jpg" 
              alt="Özel Fırsat Popup" 
              className="max-w-full max-h-[85vh] h-auto w-auto rounded-3xl shadow-2xl border-4 border-white object-contain"
              onError={() => setShowPopup(false)}
            />
            <button 
              onClick={() => setShowPopup(false)} 
              className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-cyan-500 text-white flex items-center justify-center text-lg font-black shadow-lg hover:bg-cyan-600 transition cursor-pointer z-20 border-2 border-white"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* HERO (GİRİŞ KAPAK ALANI) */}
      <div className="relative overflow-hidden border-b border-slate-100 bg-gradient-to-b from-cyan-50/50 to-[#f8fafc] py-20 md:py-32">
        <div className="px-4 md:px-8 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-center md:text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-4 py-1.5 text-xs font-bold text-cyan-600 mb-6 shadow-sm">✨ Canlı Dostlarınız İçin En İyisi</div>
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6">Göktürk <span className="text-cyan-600">Petshop</span></h1>
            <p className="text-lg text-slate-500 mb-8 max-w-md">Akvaryum dünyasından evcil hayvan aksesuarlarına kadar aradığınız her şey.</p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
              <a href={getWhatsAppLink("Merhaba Göktürk Petshop, sizinle iletişime geçmek istiyorum.")} target="_blank" rel="noopener noreferrer" className="rounded-2xl bg-cyan-500 text-white font-bold px-8 py-3.5 text-sm flex items-center gap-2 w-full sm:w-auto justify-center hover:bg-cyan-600 shadow-md hover:shadow-lg transition cursor-pointer">İletişime Geçin</a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="rounded-2xl border border-slate-200 bg-white text-slate-600 font-bold px-8 py-3.5 text-sm w-full sm:w-auto text-center hover:bg-slate-50 transition shadow-sm">Instagram'da Takip Et</a>
            </div>
          </div>
          <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white bg-white shadow-xl"><img src="/pet.jpg" alt="Logo" className="w-full h-full object-cover" /></div>
        </div>
      </div>

      {/* KATEGORİ KARTLARI */}
      <div className="px-4 md:px-8 max-w-6xl mx-auto py-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {cats.map((cat, i) => (
          <div 
            key={i} 
            className="rounded-3xl border border-slate-200/60 bg-white p-5 flex flex-col justify-between cursor-pointer hover:border-cyan-500/40 hover:shadow-xl transition-all duration-300 group shadow-sm" 
            onClick={() => { setPage(cat.id); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          >
            <div>
              <div className="w-full h-44 rounded-2xl overflow-hidden mb-5 bg-slate-50 border border-slate-100 relative">
                <img 
                  src={cat.cover} 
                  alt={cat.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  onError={(e) => { e.target.src = "/pet.jpg"; }}
                />
              </div>
              <h3 className="text-xl font-black text-slate-800 mb-2 group-hover:text-cyan-600 transition">{cat.title}</h3>
              <p className="text-sm text-slate-500 mb-6 leading-relaxed">{cat.text}</p>
            </div>
            <div className="text-sm font-bold text-cyan-600 flex items-center gap-1 group-hover:gap-2 transition-all">Çeşitleri İncele ➔</div>
          </div>
        ))}
      </div>

      {/* ÖZELLİKLER ŞERİDİ */}
      <div className="bg-white border-y border-slate-100 py-12">
        <div className="max-w-6xl mx-auto px-4 grid gap-6 grid-cols-2 md:grid-cols-4">
          {["Geniş Ürün Yelpazesi", "Akvaryum Ürünleri", "Kaliteli Markalar", "Hızlı Teslimat"].map((t, i) => (
            <div key={i} className="bg-slate-50 border border-slate-100 rounded-2xl p-5 flex flex-col items-center text-center shadow-sm">
              <span className="text-3xl mb-3">⭐</span>
              <span className="font-bold text-sm text-slate-700">{t}</span>
            </div>
          ))}
        </div>
      </div>

      {/* İLETİŞİM & HARİTA BÖLÜMÜ */}
      <div className="px-4 md:px-8 max-w-6xl mx-auto py-24 grid gap-12 md:grid-cols-2 items-center">
        <div>
          <h2 className="text-3xl font-black text-slate-900 mb-6">Mağazamızı Ziyaret Edin</h2>
          <p className="text-slate-500 mb-8 leading-relaxed">İstanbul Göktürk'teki sıcak mağazamızda sizi ve minik dostlarınızı ağırlamaktan mutluluk duyarız.</p>
          <div className="space-y-5">
            <div className="flex gap-4 items-start">
              <span className="text-xl bg-cyan-50 text-cyan-600 p-2.5 rounded-xl border border-cyan-100">📍</span>
              <div><h4 className="font-bold text-slate-800 mb-0.5">Adres</h4><p className="text-sm text-slate-500">Göktürk Merkez Mh. [Sokak Adı], No: [No], Eyüpsultan / İstanbul</p></div>
            </div>
            <div className="flex gap-4 items-start">
              <span className="text-xl bg-green-50 text-green-600 p-2.5 rounded-xl border border-green-100">📞</span>
              <div><h4 className="font-bold text-slate-800 mb-0.5">Telefon / WhatsApp</h4><p className="text-sm text-slate-500">+90 532 559 97 78</p></div>
            </div>
          </div>
        </div>
        <div className="h-80 w-full bg-slate-50 border border-slate-200 rounded-3xl overflow-hidden relative shadow-lg">
          <a href="http://googleusercontent.com/maps.google.com/3" target="_blank" rel="noopener noreferrer" className="w-full h-full bg-slate-50 flex flex-col items-center justify-center p-6 text-center gap-4 group hover:bg-slate-100/70 transition">
            <div className="w-16 h-12 rounded-2xl bg-cyan-50 border border-cyan-100 flex items-center justify-center text-xl group-hover:scale-110 transition duration-300 text-cyan-600">🧭</div>
            <div>
              <h4 className="text-lg font-bold text-slate-800 mb-1">Canlı Yol Tarifi</h4>
              <p className="text-xs text-slate-500 max-w-xs mx-auto">Google Haritalar üzerinden dükkanımızın tam konumuna ulaşmak için tıklayın.</p>
            </div>
            <div className="inline-flex items-center gap-2 bg-cyan-500 text-white font-bold px-6 py-2.5 text-xs rounded-xl shadow-md">Haritada Aç ➔</div>
          </a>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="border-t border-slate-200/60 bg-white py-8 text-center text-xs font-medium text-slate-400"><p>© 2026 Göktürk Petshop. Tüm Hakları Saklıdır.</p></footer>
    </div>
