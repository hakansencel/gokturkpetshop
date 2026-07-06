import React, { useState } from "react";
import { motion } from "framer-motion";
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
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="2"
        y="2"
        width="20"
        height="20"
        rx="6"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M16 7h.01"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
}

export default function GokturkPetshopSite() {
  const whatsappUrl =
    "https://wa.me/905325599778?text=Merhaba%2C%20G%C3%B6kt%C3%BCrk%20PetShop%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum.";
  const instagramUrl = "https://www.instagram.com/gokturk.petshop/";

  const logoSrc = "/pet.jpg";
  const categories = [
    {
      icon: Fish,
      title: "Tatlı Su Balıkları",
      text: "Melek balığı, diskus, neon tetra ve daha fazlası.",
      gradient: "from-cyan-100 to-blue-200",
      action: () => openFreshwaterPage()
    },
    {
      icon: Waves,
      title: "Tuzlu Su Balıkları",
      text: "Palyaço balığı, aslan balığı, mercan ve egzotik türler.",
      gradient: "from-blue-100 to-teal-200",
      action: () => openSaltwaterPage()
    },
    {
      icon: Cat,
      title: "Kedi",
      text: "Mama, kum kabı, oyuncak ve aksesuarlar.",
      gradient: "from-orange-100 to-amber-200",
      action: () => openCatPage()
    },
    {
      icon: Dog,
      title: "Köpek",
      text: "Tasma, mama, yatak ve bakım ürünleri.",
      gradient: "from-yellow-100 to-orange-200",
      action: () => openDogPage()
    },
    {
      icon: Bird,
      title: "Kuş",
      text: "Kafes, yem, tünek ve kuş aksesuarları.",
      gradient: "from-lime-100 to-green-200",
      action: () => openBirdPage()
    },
    {
      icon: Shell,
      title: "Sürüngenler",
      text: "Teraryum, ısıtıcı, canlı yem ve ekipmanlar.",
      gradient: "from-emerald-100 to-stone-200",
      action: () => openReptilePage()
    },
    {
      icon: Leaf,
      title: "Mamalar ve Yemler",
      text: "Kedi, köpek, kuş, balık ve sürüngenler için mama ve yem çeşitleri.",
      gradient: "from-amber-100 to-lime-200",
      action: () => openFoodPage()
    },
  ];

  const features = [
    { icon: Sparkles, title: "Geniş Ürün Yelpazesi" },
    { icon: Fish, title: "Akvaryum ve Pet Ürünleri" },
    { icon: Leaf, title: "Doğal & Kaliteli Ürünler" },
    { icon: Truck, title: "Hızlı Teslimat" },
  ];

  const stats = [
    { num: "500+", label: "Ürün Çeşidi" },
    { num: "50+", label: "Balık Türü" },
    { num: "7/24", label: "Destek" },
    { num: "100%", label: "Müşteri Memnuniyeti" },
  ];

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
    "Amano Karides", "Kiraz Karides", "Nerite Salyangoz", "Elma Salyangozu",
  ];

  const saltwaterFishNames = [
    "Palyaço Balığı", "Blue Tang", "Yellow Tang", "Aslan Balığı", "Melek Balığı",
    "Kelebek Balığı", "Gobies", "Blenny", "Damselfish", "Wrasse", "Firefish",
    "Mandarin Balığı", "Kardinal Balığı", "Tavşan Balığı", "Karides", "Deniz Yıldızı",
    "Mercan Çeşitleri", "Anemon",
  ];

  const cageBirdNames = [
    "Muhabbet Kuşu", "Kanarya", "Sultan Papağanı", "Cennet Papağanı", "Sevda Papağanı",
    "Hint Bülbülü", "Zebra İspinozu", "Java İspinozu", "Bengal İspinozu", "Forpus Papağanı",
    "Kakariki Papağanı", "Rozella Papağanı", "Alexander Papağanı", "Jako Papağanı",
    "Amazon Papağanı", "Ara Papağanı", "Kakadu Papağanı", "Güvercin",
  ];

  const terrariumReptileNames = [
    "Leopard Gecko", "Crested Gecko", "Tokay Gecko", "Fat Tail Gecko", "Sakallı Ejder",
    "Bukalemun", "Panter Bukalemun", "Yeşil İguana", "Mısır Yılanı", "Kral Yılanı",
    "Süt Yılanı", "Top Piton", "Kaplumbağa", "Su Kaplumbağası", "Kara Kaplumbağası",
    "Kurbağa Türleri",
  ];

  const foodProductNames = [
    "Kedi Mamaları", "Köpek Mamaları", "Yavru Mama Çeşitleri", "Yaş Mama ve Ödül Mamaları",
    "Kuş Yemleri", "Kanarya ve Muhabbet Kuşu Yemleri", "Balık Yemleri", "Dip ve Tablet Yemler",
    "Sürüngen Yemleri", "Kaplumbağa Yemleri", "Vitamin ve Destek Ürünleri", "Mama ve Yem Aksesuarları",
  ];

  const catProductNames = [
    "Kedi Mamaları", "Yaş Mama ve Ödül Mamaları", "Kedi Kumu", "Kum Kabı ve Kürekleri",
    "Tırmalama Tahtaları", "Kedi Oyuncakları", "Kedi Tasmaları", "Taşıma Çantaları",
    "Kedi Yatakları", "Mama ve Su Kapları", "Tarama ve Bakım Ürünleri", "Vitamin ve Destek Ürünleri",
  ];

  const dogProductNames = [
    "Köpek Mamaları", "Yaş Mama ve Ödül Mamaları", "Köpek Tasmaları", "Gezdirme Kayışları",
    "Göğüs Tasmaları", "Köpek Oyuncakları", "Köpek Yatakları", "Mama ve Su Kapları",
    "Şampuan ve Bakım Ürünleri", "Tarama Ürünleri", "Tuvalet Eğitim Ürünleri", "Vitamin ve Destek Ürünleri",
  ];

  const [activePage, setActivePage] = useState("home");

  const scrollTop = () => {
    window.setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 0);
  };

  const openFreshwaterPage = () => { setActivePage("freshwater"); scrollTop(); };
  const openSaltwaterPage = () => { setActivePage("saltwater"); scrollTop(); };
  const openBirdPage = () => { setActivePage("birds"); scrollTop(); };
  const openCatPage = () => { setActivePage("cats"); scrollTop(); };
  const openDogPage = () => { setActivePage("dogs"); scrollTop(); };
  const openReptilePage = () => { setActivePage("reptiles"); scrollTop(); };
  const openFoodPage = () => { setActivePage("food"); scrollTop(); };

  // Otomatik Resim Getiren Yardımcı Bileşen
  function AutoImage({ name, categoryHint, index }) {
    const searchKeyword = encodeURIComponent(`${name} ${categoryHint}`);
    const imageUrl = `https://unsplash.com{index}&q=${searchKeyword}`;
    return (
      <img
        src={imageUrl}
        alt={name}
        className="w-full h-44 object-cover rounded-2xl mb-3 shadow-inner bg-slate-800"
        loading="lazy"
      />
    );
  }

  // Alt Sayfa Render Fonksiyonu
  const renderGridPage = (title, items, hint) => (
    <div className="min-h-screen bg-[#070814] text-white px-4 py-12 md:px-8">
      <div className="max-w-6xl mx-auto">
        <button 
          onClick={() => { setActivePage("home"); scrollTop(); }}
          className="mb-8 text-sm font-medium text-cyan-400 hover:text-cyan-300 transition flex items-center gap-1"
        >
          ← Ana Sayfaya Dön
        </button>
        <h1 className="text-3xl md:text-4xl font-extrabold mb-2 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          {title}
        </h1>
        <p className="text-slate-400 mb-10">Göktürk Petshop güvencesiyle aradığınız tüm türler ve ürünler.</p>
        
        <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {items.map((item, index) => (
            <div key={index} className="bg-white/5 border border-white/10 rounded-3xl p-4 flex flex-col justify-between hover:border-cyan-500/3xl transition group">
              <div>
                <AutoImage name={item} categoryHint={hint} index={index} />
                <h3 className="font-bold text-base text-slate-100 group-hover:text-cyan-400 transition">{item}</h3>
              </div>
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-4 w-full text-center bg-cyan-500/10 hover:bg-cyan-500 text-cyan-400 hover:text-white text-xs font-semibold py-2 px-3 rounded-xl transition"
              >
