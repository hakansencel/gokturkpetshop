import React, { useState, useEffect } from "react";

const cats = [
  { id: "freshwater", title: "Tatlı Su Balıkları", text: "Melek balığı, diskus ve neon tetra.", grad: "from-cyan-100 to-blue-200", folder: "baliklar", cover: "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?w=500&auto=format&fit=crop&q=80", items: ["Lepistes", "Beta Balığı", "Japon Balığı", "Melek Balığı", "Discus", "Neon Tetra", "Kardinal Tetra", "Siyah Neon Tetra", "Rasbora", "Moli", "Plati", "Kılıç Kuyruk", "Gurami", "Cüce Vatoz", "Çöpçü Balığı", "Elma Salyangozu"] },
  { id: "saltwater", title: "Tuzlu Su Balıkları", text: "Palyaço balığı, aslan balığı ve mercanlar.", grad: "from-blue-100 to-teal-200", folder: "baliklar", cover: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=500&auto=format&fit=crop&q=80", items: ["Palyaço Balığı", "Blue Tang", "Yellow Tang", "Aslan Balığı", "Melek Balığı", "Kelebek Balığı", "Gobies", "Blenny", "Damselfish", "Karides", "Mercan Çeşitleri", "Anemon"] },
  { id: "cats", title: "Kedi Ürünleri", text: "Mama, kum, oyuncak ve aksesuarlar.", grad: "from-orange-100 to-amber-200", folder: "kediler", cover: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=500&auto=format&fit=crop&q=80", items: ["Kedi Mamaları", "Yaş Mama", "Kedi Kumu", "Kum Kabı", "Tırmalama Tahtası", "Kedi Oyuncakları", "Kedi Tasmaları", "Taşıma Çantası", "Kedi Yatakları"] },
  { id: "dogs", title: "Köpek Ürünleri", text: "Tasma, mama, yatak ve bakım ürünleri.", grad: "from-yellow-100 to-orange-200", folder: "kopekler", cover: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=500&auto=format&fit=crop&q=80", items: ["Köpek Mamaları", "Ödül Mamaları", "Köpek Tasmaları", "Gezdirme Kayışları", "Köpek Oyuncakları", "Köiek Yatakları", "Şampuan ve Bakım"] },
  { id: "birds", title: "Kuş Çeşitleri", text: "Kafes, yem ve kuş aksesuarları.", grad: "from-lime-100 to-green-200", folder: "kuslar", cover: "https://images.unsplash.com/photo-1452570053594-1b985d6ea890?w=500&auto=format&fit=crop&q=80", items: ["Muhabbet Kuşu", "Kanarya", "Sultan Papağanı", "Cennet Papağanı", "Sevda Papağanı", "Hint Bülbülü", "Zebra İspinozu", "Kafes ve Yem"] },
  { id: "reptiles", title: "Sürüngenler", text: "Teraryum, ısıtıcı ve ekipmanlar.", grad: "from-emerald-100 to-stone-200", folder: "surengenler", cover: "https://images.unsplash.com/photo-1504450758481-7338eba7524a?w=500&auto=format&fit=crop&q=80", items: ["Leopard Gecko", "Crested Gecko", "Sakallı Ejder", "Bukalemun", "Yeşil İguana", "Mısır Yılanı", "Top Piton", "Su Kaplumbağası"] }
];

export default function App() {
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
          <p className="text-slate-500 mb-10">Göktürk Petshop güvencesiyle aradığınız tüm türler ver ürünler.</p>
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
            <p className="text-lg text-slate-500 mb-8 max-w-md">A
