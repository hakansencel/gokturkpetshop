import React, { useState } from "react";
import {
  Fish,
  Cat,
  Dog,
  Bird,
  Shell,
  MapPin,
  Phone,
  ChevronRight,
  Sparkles,
  Truck,
  Leaf,
  Waves,
} from "lucide-react";

function cx(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Button({ className = "", children, ...props }) {
  return (
    <button
      className={cx(
        "inline-flex items-center gap-2 rounded-2xl bg-[#1a1b2a] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#22233a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#070814]",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

function Card({ className = "", children, ...props }) {
  return (
    <div
      className={cx(
        "rounded-3xl border border-white/10 bg-white/5 shadow-sm",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

function CardContent({ className = "", children, ...props }) {
  return <div className={cx("p-6", className)} {...props}>{children}</div>;
}

function InstagramIcon({ className = "" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://w3.org"
    >
      <rect x="2" y="2" width="20" height="20" rx="6" stroke="currentColor" strokeWidth="2" />
      <path d="M16 7h.01" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

export default function GokturkPetshopSite() {
  const whatsappUrl = "https://wa.me.";
  const instagramUrl = "https://instagram.com";
  const logoSrc = "/pet.jpg";

  const [activePage, setActivePage] = useState("home");

  const scrollTop = () => {
    window.setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 0);
  };

  const freshwaterFishNames = [
    "Lepistes", "Beta Balığı", "Japon Balığı", "Melek Balığı", "Discus", "Neon Tetra",
    "Kardinal Tetra", "Siyah Neon Tetra", "Kırmızı Burun Tetra", "Serpae Tetra", "Limon Tetra",
    "Ember Tetra", "Glofish Tetra", "Zebra Danio", "Leopar Danio", "İnci Danio", "Rasbora",
    "Harlequin Rasbora", "Chili Rasbora", "Kiraz Barb", "Kaplan Barb", "Altın Barb", "Moli",
    "Siyah Moli", "Balon Moli", "Plati", "Kılıç Kuyruk", "Endler Lepistes", "Gurami",
    "Cüce Gurami", "İnci Gurami", "Bal Gurami", "Cennet Balığı", "Ramirezi", "Apistogramma",
    "Kribensis", "Sarı Prenses", "Yunus Ciklet", "Frontosa", "Astronot Balığı", "Papağan Ciklet",
    "Flowerhorn", "Jack Dempsey", "Green Terror", "Ahli Ciklet", "Arowana", "Bıçak Balığı",
    "Cam Kedi Balığı", "Çöpçü Balığı", "Komando Çöpçü", "Albino Çöpçü", "Panda Çöpçü",
    "Bronz Çöpçü", "Vatoz", "Cüce Vatoz", "Albino Vatoz", "Leopar Vatoz", "Otocinclus",
    "Siyam Yosun Yiyici", "Çin Yosun Yiyici", "Kuhli Loach", "Clown Loach", "Botia",
    "Gökkuşağı Balığı", "Boesemani Rainbow", "Praecox Rainbow", "Killifish", "Balta Balığı",
    "Cam Balığı", "Fil Burun Balığı", "Tatlı Su Kelebek Balığı", "Tatlı Su Karidesi",
    "Amano Karides", "Kiraz Karides", "Nerite Salyangoz", "Elma Salyangozu"
  ];

  const saltwaterFishNames = [
    "Palyaço Balığı", "Blue Tang", "Yellow Tang", "Aslan Balığı", "Melek Balığı",
    "Kelebek Balığı", "Gobies", "Blenny", "Damselfish", "Wrasse", "Firefish",
    "Mandarin Balığı", "Kardinal Balığı", "Tavşan Balığı", "Karides", "Deniz Yıldızı",
    "Mercan Çeşitleri", "Anemon"
  ];

  const cageBirdNames = [
    "Muhabbet Kuşu", "Kanarya", "Sultan Papağanı", "Cennet Papağanı", "Sevda Papağanı",
    "Hint Bülbülü", "Zebra İspinozu", "Java İspinozu", "Bengal İspinozu", "Forpus Papağanı",
    "Kakariki Papağanı", "Rozella Papağanı", "Alexander Papağanı", "Jako Papağanı",
    "Amazon Papağanı", "Ara Papağanı", "Kakadu Papağanı", "Güvercin"
  ];

  const terrariumReptileNames = [
    "Leopard Gecko", "Crested Gecko", "Tokay Gecko", "Fat Tail Gecko", "Sakallı Ejder",
    "Bukalemun", "Panter Bukalemun", "Yeşil İguana", "Mısır Yılanı", "Kral Yılanı",
    "Süt Yılanı", "Top Piton", "Kaplumbağa", "Su Kaplumbağası", "Kara Kaplumbağası",
    "Kurbağa Türleri"
  ];

  const foodProductNames = [
    "Kedi Mamaları", "Köpek Mamaları", "Yavru Mama Çeşitleri", "Yaş Mama ve Ödül Mamaları",
    "Kuş Yemleri", "Kanarya ve Muhabbet Kuşu Yemleri", "Balık Yemleri", "Dip ve Tablet Yemler",
    "Sürüngen Yemleri", "Kaplumbağa Yemleri", "Vitamin ve Destek Ürünleri", "Mama ve Yem Aksesuarları"
  ];

  const catProductNames = [
    "Kedi Mamaları", "Yaş Mama ve Ödül Mamaları", "Kedi Kumu", "Kum Kabı ve Kürekleri",
    "Tırmalama Tahtaları", "Kedi Oyuncakları", "Kedi Tasmaları", "Taşıma Çantaları",
    "Kedi Yatakları", "Mama ve Su Kapları", "Tarama ve Bakım Ürünleri", "Vitamin ve Destek Ürünleri"
  ];

  const dogProductNames = [
    "Köpek Mamaları", "Yaş Mama ve Ödül Mamaları", "Köpek Tasmaları", "Gezdirme Kayışları",
    "Göğüs Tasmaları", "Köpek Oyuncakları", "Köpek Yatakları", "Mama ve Su Kapları",
    "Şampuan ve Bakım Ürünleri", "Tarama Ürünleri", "Tuvalet Eğitim Ürünleri", "Vitamin ve Destek Ürünleri"
  ];

  // Sayfa içeriğine göre başlık, liste ve görsel ipucu belirleme
  let pageTitle = "";
  let pageItems = [];
  let pageHint = "";

  if (activePage === "freshwater") {
    pageTitle = "Tatlı Su Balıkları";
    pageItems = freshwaterFishNames;
    pageHint = "aquarium fish";
  } else if (activePage === "saltwater") {
    pageTitle = "Tuzlu Su Balıkları";
    pageItems = saltwaterFishNames;
    pageHint = "marine fish coral";
  } else if (activePage === "birds") {
    pageTitle = "Kuş Çeşitleri";
    pageItems = cageBirdNames;
    pageHint = "pet bird cage";
  } else if (activePage === "reptiles") {
    pageTitle = "Sürüngenler & Teraryum";
    pageItems = terrariumReptileNames;
    pageHint = "reptile lizard gecko";
  } else if (activePage === "food") {
    pageTitle = "Mamalar ve Yemler";
    pageItems = foodProductNames;
    pageHint = "pet food packing";
  } else if (activePage === "cats") {
    pageTitle = "Kedi Ürünleri";
    pageItems = catProductNames;
    pageHint = "cat accessory product";
  } else if (activePage === "dogs") {
    pageTitle = "Köpek Ürünleri";
    pageItems = dogProductNames;
    pageHint = "dog accessory care";
  }

  // Eğer alt sayfalardan birindeysek bu arayüz basılacak
  if (activePage !== "home") {
    return (
      <div className="min-h-screen bg-[#070814] text-white px-4 py-12 md:px-8">
        <div className="max-w-6xl mx-auto">
          <button
            onClick={() => { setActivePage("home"); scrollTop(); }}
            className="mb-8 text-sm font-medium text-cyan-400 hover:text-cyan-300 transition flex items-center gap-1"
          >
            ← Ana Sayfaya Dön
          </button>
          <h1 className="text-3xl md:text-4xl font-extrabold mb-2 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            {pageTitle}
          </h1>
          <p className="text-slate-400 mb-10">Göktürk Petshop güvencesiyle aradığınız tüm türler ve ürünler.</p>

          <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {pageItems.map((item, index) => {
              const searchKeyword = encodeURIComponent(`${item} ${pageHint}`);
              const imageUrl = `https://unsplash.com{index}&q=${searchKeyword}`;
              
              return (
                <div key={index} className="bg-white/5 border border-white/10 rounded-3xl p-4 flex flex-col justify-between hover:border-cyan-500/30 transition group">
                  <div>
                    <img
                      src={imageUrl}
                      alt={item}
                      className="w-full h-44 object-cover rounded-2xl mb-3 shadow-inner bg-slate-800"
                      loading="lazy"
                    />
                    <h3 className="font-bold text-base text-slate-100 group-hover:text-cyan-400 transition">{item}</h3>
                  </div>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                                        className="mt-4 w-full text-center bg-cyan-500/10 hover:bg-cyan-500 text-cyan-400 hover:text-white text-xs font-semibold py-2 px-3 rounded-xl transition"
                  >
                    Fiyat Sor
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  // ANA SAYFA ARAYÜZÜ
  return (
    <div className="min-h-screen bg-[#070814] text-slate-100 antialiased selection:bg-cyan-500 selection:text-white">
      {/* Hero */}
      <div className="relative overflow-hidden border-b border-white/5 bg-gradient-to-b from-[#0a0c1a] to-[#070814] py-20 md:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.08),transparent_45%)]" />
        <div className="px-4 md:px-8 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 relative">
          <div className="flex-1 text-center md:text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-xs font-medium text-cyan-400 mb-6">
              <Sparkles className="w-3.5 h-3.5" /> Canlı Dostlarınız İçin En İyisi
            </div>
            <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white mb-6 leading-tight">
              Göktürk <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent">Petshop</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-xl mx-auto md:mx-0 mb-8 leading-relaxed">
              Akvaryum dünyasından evcil hayvan aksesuarlarına kadar aradığınız her şey. Geniş ürün yelpazemizle hizmetinizdeyiz.
            </p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
              <a href={whatsappUrl} target="_blank" rel="noreferrer">
                <Button className="w-full sm:w-auto bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-bold px-8 shadow-lg shadow-cyan-500/20">
                  <Phone className="w-4 h-4 fill-current" /> İletişime Geçin
                </Button>
              </a>
              <a href={instagramUrl} target="_blank" rel="noreferrer">
                <Button className="w-full sm:w-auto border border-white/10 bg-white/5 hover:bg-white/10 text-white px-8">
                  <InstagramIcon className="w-4 h-4" /> Instagram'da Takip Et
                </Button>
              </a>
            </div>
          </div>
          <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white/10 shadow-2xl relative group bg-slate-800 flex items-center justify-center">
            <img 
              src={logoSrc} 
              alt="Göktürk Petshop Logo" 
              className="w-full h-full object-cover transition duration-500 group-hover:scale-105" 
              onError={(e) => { e.target.src = 'https://unsplash.com'; }} 
            />
          </div>
        </div>
      </div>

      {/* İstatistikler */}
      <div className="border-b border-white/5 bg-[#090a18] py-12">
        <div className="px-4 md:px-8 max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl md:text-4xl font-extrabold text-white mb-1">500+</div>
            <div className="text-xs md:text-sm text-slate-400 font-medium tracking-wide uppercase">Ürün Çeşidi</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-extrabold text-white mb-1">50+</div>
            <div className="text-xs md:text-sm text-slate-400 font-medium tracking-wide uppercase">Balık Türü</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-extrabold text-white mb-1">7/24</div>
            <div className="text-xs md:text-sm text-slate-400 font-medium tracking-wide uppercase">Destek</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-extrabold text-white mb-1">100%</div>
            <div className="text-xs md:text-sm text-slate-400 font-medium tracking-wide uppercase">Müşteri Memnuniyeti</div>
          </div>
        </div>
      </div>

      {/* Kategoriler Bölümü */}
      <div className="px-4 md:px-8 max-w-6xl mx-auto py-24">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-extrabold tracking-tight text-white mb-4">Ürün ve Canlı Kategorilerimiz</h2>
          <p className="text-slate-400">Mağazamızda bulunan popüler pet ürünleri ve canlı popülasyonu grupları.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card className="hover:border-white/20 hover:bg-white/[0.07] transition cursor-pointer group flex flex-col justify-between" onClick={() => { setActivePage("freshwater"); scrollTop(); }}>
            <CardContent className="p-8">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-100 to-blue-200 flex items-center justify-center text-slate-900 mb-6 group-hover:scale-110 transition duration-300">
                <Fish className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Tatlı Su Balıkları</h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-6">Melek balığı, diskus, neon tetra og daha fazlası.</p>
              <div className="text-sm font-semibold text-cyan-400 flex items-center gap-1 group-hover:text-cyan-300">
                Çeşitleri İncele <ChevronRight className="w-4 h-4 transition group-hover:translate-x-1" />
              </div>
            </CardContent>
          </Card>

          <Card className="hover:border-white/20 hover:bg-white/[0.07] transition cursor-pointer group flex flex-col justify-between" onClick={() => { setActivePage("saltwater"); scrollTop(); }}>
            <CardContent className="p-8">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-100 to-teal-200 flex items-center justify-center text-slate-900 mb-6 group-hover:scale-110 transition duration-300">
                <Waves className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Tuzlu Su Balıkları</h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-6">Palyaço balığı, aslan balığı, mercan og egzotik türler.</p>
              <div className="text-sm font-semibold text-cyan-400 flex items-center gap-1 group-hover:text-cyan-300">
                Çeşitleri İncele <ChevronRight className="w-4 h-4 transition group-hover:translate-x-1" />
              </div>
            </CardContent>
          </Card>

          <Card className="hover:border-white/20 hover:bg-white/[0.07] transition cursor-pointer group flex flex-col justify-between" onClick={() => { setActivePage("cats"); scrollTop(); }}>
            <CardContent className="p-8">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-100 to-amber-200 flex items-center justify-center text-slate-900 mb-6 group-hover:scale-110 transition duration-300">
                <Cat className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Kedi</h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-6">Mama, kum kabı, oyuncak og aksesuarlar.</p>
              <div className="text-sm font-semibold text-cyan-400 flex items-center gap-1 group-hover:text-cyan-300">
                Çeşitleri İncele <ChevronRight className="w-4 h-4 transition group-hover:translate-x-1" />
              </div>
            </CardContent>
          </Card>

          <Card className="hover:border-white/20 hover:bg-white/[0.07] transition cursor-pointer group flex flex-col justify-between" onClick={() => { setActivePage("dogs"); scrollTop(); }}>
            <CardContent className="p-8">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-yellow-100 to-orange-200 flex items-center justify-center text-slate-900 mb-6 group-hover:scale-110 transition duration-300">
                <Dog className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Köpek</h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-6">Tasma, mama, yatak og bakım ürünleri.</p>
              <div className="text-sm font-semibold text-cyan-400 flex items-center gap-1 group-hover:text-cyan-300">
                Çeşitleri İncele <ChevronRight className="w-4 h-4 transition group-hover:translate-x-1" />
              </div>
            </CardContent>
          </Card>

          <Card className="hover:border-white/20 hover:bg-white/[0.07] transition cursor-pointer group flex flex-col justify-between" onClick={() => { setActivePage("birds"); scrollTop(); }}>
            <CardContent className="p-8">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-lime-100 to-green-200 flex items-center justify-center text-slate-900 mb-6 group-hover:scale-110 transition duration-300">
                <Bird className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Kuş</h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-6">Kafes, yem, tünek og kuş aksesuarları.</p>
              <div className="text-sm font-semibold text-cyan-400 flex items-center gap-1 group-hover:text-cyan-300">
                Çeşitleri İncele <ChevronRight className="w-4 h-4 transition group-hover:translate-x-1" />
              </div>
            </CardContent>
          </Card>

          <Card className="hover:border-white/20 hover:bg-white/[0.07] transition cursor-pointer group flex flex-col justify-between" onClick={() => { setActivePage("reptiles"); scrollTop(); }}>
            <CardContent className="p-8">
