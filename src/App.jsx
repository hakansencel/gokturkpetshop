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
    },
    {
      icon: Waves,
      title: "Tuzlu Su Balıkları",
      text: "Palyaço balığı, aslan balığı, mercan ve egzotik türler.",
      gradient: "from-blue-100 to-teal-200",
    },
    {
      icon: Cat,
      title: "Kedi",
      text: "Mama, kum kabı, oyuncak ve aksesuarlar.",
      gradient: "from-orange-100 to-amber-200",
    },
    {
      icon: Dog,
      title: "Köpek",
      text: "Tasma, mama, yatak ve bakım ürünleri.",
      gradient: "from-yellow-100 to-orange-200",
    },
    {
      icon: Bird,
      title: "Kuş",
      text: "Kafes, yem, tünek ve kuş aksesuarları.",
      gradient: "from-lime-100 to-green-200",
    },
    {
      icon: Shell,
      title: "Sürüngenler",
      text: "Teraryum, ısıtıcı, canlı yem ve ekipmanlar.",
      gradient: "from-emerald-100 to-stone-200",
    },
    {
      icon: Leaf,
      title: "Mamalar ve Yemler",
      text: "Kedi, köpek, kuş, balık ve sürüngenler için mama ve yem çeşitleri.",
      gradient: "from-amber-100 to-lime-200",
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
    "Lepistes",
    "Beta Balığı",
    "Japon Balığı",
    "Melek Balığı",
    "Discus",
    "Neon Tetra",
    "Kardinal Tetra",
    "Siyah Neon Tetra",
    "Kırmızı Burun Tetra",
    "Serpae Tetra",
    "Limon Tetra",
    "Ember Tetra",
    "Glofish Tetra",
    "Zebra Danio",
    "Leopar Danio",
    "İnci Danio",
    "Rasbora",
    "Harlequin Rasbora",
    "Chili Rasbora",
    "Kiraz Barb",
    "Kaplan Barb",
    "Altın Barb",
    "Moli",
    "Siyah Moli",
    "Balon Moli",
    "Plati",
    "Kılıç Kuyruk",
    "Endler Lepistes",
    "Gurami",
    "Cüce Gurami",
    "İnci Gurami",
    "Bal Gurami",
    "Cennet Balığı",
    "Ramirezi",
    "Apistogramma",
    "Kribensis",
    "Sarı Prenses",
    "Yunus Ciklet",
    "Frontosa",
    "Astronot Balığı",
    "Papağan Ciklet",
    "Flowerhorn",
    "Jack Dempsey",
    "Green Terror",
    "Ahli Ciklet",
    "Arowana",
    "Bıçak Balığı",
    "Cam Kedi Balığı",
    "Çöpçü Balığı",
    "Komando Çöpçü",
    "Albino Çöpçü",
    "Panda Çöpçü",
    "Bronz Çöpçü",
    "Vatoz",
    "Cüce Vatoz",
    "Albino Vatoz",
    "Leopar Vatoz",
    "Otocinclus",
    "Siyam Yosun Yiyici",
    "Çin Yosun Yiyici",
    "Kuhli Loach",
    "Clown Loach",
    "Botia",
    "Gökkuşağı Balığı",
    "Boesemani Rainbow",
    "Praecox Rainbow",
    "Killifish",
    "Balta Balığı",
    "Cam Balığı",
    "Fil Burun Balığı",
    "Tatlı Su Kelebek Balığı",
    "Tatlı Su Karidesi",
    "Amano Karides",
    "Kiraz Karides",
    "Nerite Salyangoz",
    "Elma Salyangozu",
  ];

  const saltwaterFishNames = [
    "Palyaço Balığı",
    "Blue Tang",
    "Yellow Tang",
    "Aslan Balığı",
    "Melek Balığı",
    "Kelebek Balığı",
    "Gobies",
    "Blenny",
    "Damselfish",
    "Wrasse",
    "Firefish",
    "Mandarin Balığı",
    "Kardinal Balığı",
    "Tavşan Balığı",
    "Karides",
    "Deniz Yıldızı",
    "Mercan Çeşitleri",
    "Anemon",
  ];

  const cageBirdNames = [
    "Muhabbet Kuşu",
    "Kanarya",
    "Sultan Papağanı",
    "Cennet Papağanı",
    "Sevda Papağanı",
    "Hint Bülbülü",
    "Zebra İspinozu",
    "Java İspinozu",
    "Bengal İspinozu",
    "Forpus Papağanı",
    "Kakariki Papağanı",
    "Rozella Papağanı",
    "Alexander Papağanı",
    "Jako Papağanı",
    "Amazon Papağanı",
    "Ara Papağanı",
    "Kakadu Papağanı",
    "Güvercin",
  ];

  const terrariumReptileNames = [
    "Leopard Gecko",
    "Crested Gecko",
    "Tokay Gecko",
    "Fat Tail Gecko",
    "Sakallı Ejder",
    "Bukalemun",
    "Panter Bukalemun",
    "Yeşil İguana",
    "Mısır Yılanı",
    "Kral Yılanı",
    "Süt Yılanı",
    "Top Piton",
    "Kaplumbağa",
    "Su Kaplumbağası",
    "Kara Kaplumbağası",
    "Kurbağa Türleri",
  ];

  const foodProductNames = [
    "Kedi Mamaları",
    "Köpek Mamaları",
    "Yavru Mama Çeşitleri",
    "Yaş Mama ve Ödül Mamaları",
    "Kuş Yemleri",
    "Kanarya ve Muhabbet Kuşu Yemleri",
    "Balık Yemleri",
    "Dip ve Tablet Yemler",
    "Sürüngen Yemleri",
    "Kaplumbağa Yemleri",
    "Vitamin ve Destek Ürünleri",
    "Mama ve Yem Aksesuarları",
  ];

  const catProductNames = [
    "Kedi Mamaları",
    "Yaş Mama ve Ödül Mamaları",
    "Kedi Kumu",
    "Kum Kabı ve Kürekleri",
    "Tırmalama Tahtaları",
    "Kedi Oyuncakları",
    "Kedi Tasmaları",
    "Taşıma Çantaları",
    "Kedi Yatakları",
    "Mama ve Su Kapları",
    "Tarama ve Bakım Ürünleri",
    "Vitamin ve Destek Ürünleri",
  ];

  const dogProductNames = [
    "Köpek Mamaları",
    "Yaş Mama ve Ödül Mamaları",
    "Köpek Tasmaları",
    "Gezdirme Kayışları",
    "Göğüs Tasmaları",
    "Köpek Oyuncakları",
    "Köpek Yatakları",
    "Mama ve Su Kapları",
    "Şampuan ve Bakım Ürünleri",
    "Tarama Ürünleri",
    "Tuvalet Eğitim Ürünleri",
    "Vitamin ve Destek Ürünleri",
  ];

  const [activePage, setActivePage] = useState("home");

  const scrollTop = () => {
    window.setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 0);
  };

  const openFreshwaterPage = () => {
    setActivePage("freshwater");
    scrollTop();
  };

  const openSaltwaterPage = () => {
    setActivePage("saltwater");
    scrollTop();
  };

  const openBirdPage = () => {
    setActivePage("birds");
    scrollTop();
  };

  const openCatPage = () => {
    setActivePage("cats");
    scrollTop();
  };

  const openDogPage = () => {
    setActivePage("dogs");
    scrollTop();
  };

  const openReptilePage = () => {
    setActivePage("reptiles");
    scrollTop();
  };

  const openFoodPage = () => {
    setActivePage("foods");
    scrollTop();
  };

  const goHome = () => {
    setActivePage("home");
    scrollTop();
  };

  const renderListPage = ({
    pageLabel,
    title,
    description,
    names,
    icon: Icon,
    theme,
    listLabel,
    note,
  }) => (
    <section className={`relative overflow-hidden bg-gradient-to-br ${theme.background}`}>
      <div className={`absolute -left-24 top-20 h-72 w-72 rounded-full ${theme.blobLeft} blur-3xl`} />
      <div className={`absolute -right-24 bottom-10 h-96 w-96 rounded-full ${theme.blobRight} blur-3xl`} />

      <div className="relative mx-auto max-w-7xl px-5 py-16 md:py-24">
        <button
          type="button"
          onClick={goHome}
          className="mb-8 inline-flex items-center rounded-full bg-white px-5 py-3 text-sm font-black text-emerald-800 shadow-sm ring-1 ring-emerald-100 hover:bg-emerald-50"
        >
          ← Ana Sayfaya Dön
        </button>

        <div className="grid items-center gap-10 md:grid-cols-[1.1fr_0.9fr]">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className={`mb-4 text-sm font-black uppercase tracking-[0.28em] ${theme.accentText}`}>{pageLabel}</div>
            <h1 className="max-w-3xl text-5xl font-black leading-[0.95] tracking-tight text-[#12372a] md:text-7xl">
              {title}
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600">{description}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild className="rounded-full bg-emerald-700 px-8 py-6 text-base font-black text-white hover:bg-emerald-800">
                <a href={whatsappUrl}>Stok Bilgisi Al</a>
              </Button>
              <Button asChild variant="outline" className="rounded-full border-emerald-700 px-8 py-6 text-base font-black text-emerald-800">
                <a href="tel:+905325599778">Telefon Et</a>
              </Button>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7 }}>
            <div className={`rounded-[2.5rem] bg-white p-5 shadow-2xl ring-1 ${theme.ring}`}>
              <div className={`flex min-h-[360px] items-center justify-center rounded-[2rem] bg-gradient-to-br ${theme.heroGradient} p-8 text-white`}>
                <Icon className="h-40 w-40 drop-shadow-lg" />
              </div>
            </div>
          </motion.div>
        </div>

        <div className={`mt-16 rounded-[2.5rem] bg-white p-6 shadow-xl ring-1 ${theme.ring} md:p-8`}>
          <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <div className={`text-sm font-black uppercase tracking-[0.28em] ${theme.accentText}`}>{listLabel}</div>
              <h2 className="mt-3 text-3xl font-black md:text-4xl">Çeşitlerimiz</h2>
            </div>
            <div className={`rounded-full ${theme.countBg} px-5 py-3 text-sm font-black text-emerald-800`}>
              {names.length} çeşit
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {names.map((name) => (
              <a
                key={name}
                href={whatsappUrl}
                className={`group flex items-center justify-between rounded-2xl bg-gradient-to-br ${theme.itemGradient} px-5 py-4 font-bold text-[#173b2f] ring-1 ${theme.ring} transition hover:-translate-y-0.5 hover:shadow-md`}
              >
                <span>{name}</span>
                <ChevronRight className="h-4 w-4 text-emerald-600 transition group-hover:translate-x-1" />
              </a>
            ))}
          </div>

          <p className={`mt-8 rounded-3xl ${theme.noteBg} p-5 leading-7 text-slate-600`}>{note}</p>
        </div>
      </div>
    </section>
  );

  return (
    <div className="min-h-screen bg-[#f8faf7] text-[#173b2f]">
      <header className="sticky top-0 z-50 border-b border-emerald-100 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <button type="button" onClick={goHome} className="flex items-center gap-3 text-left">
            <div className="relative flex h-16 w-16 items-center justify-center overflow-hidden rounded-full bg-[#f2a51f] shadow-md ring-2 ring-[#2b1b12]/10">
              <img src={logoSrc} alt="Göktürk Petshop logo" className="h-full w-full object-cover" />
            </div>
            <div>
              <div className="text-xl font-black tracking-tight">Göktürk Petshop</div>
              <div className="text-xs font-bold uppercase tracking-[0.25em] text-[#f2a51f]"></div>
            </div>
          </button>

          <nav className="hidden items-center gap-8 text-sm font-bold text-slate-700 md:flex">
            <button type="button" onClick={goHome} className="hover:text-emerald-700">Ana Sayfa</button>
            <a href="#kategoriler" className="hover:text-emerald-700">Kategoriler</a>
            <a href="#hakkimizda" className="hover:text-emerald-700">Hakkımızda</a>
            <a href="#iletisim" className="hover:text-emerald-700">İletişim</a>
          </nav>

          <div className="flex items-center gap-3">
            <Button asChild variant="outline" className="hidden rounded-full border-pink-300 px-5 font-black text-pink-700 hover:bg-pink-50 md:inline-flex">
              <a href={instagramUrl} target="_blank" rel="noreferrer">
                <InstagramIcon className="mr-2 h-4 w-4" /> Instagram
              </a>
            </Button>
            <Button asChild className="rounded-full bg-emerald-700 px-6 text-white hover:bg-emerald-800">
              <a href={whatsappUrl}>İletişim</a>
            </Button>
          </div>
        </div>
      </header>

      <main>
        {activePage === "freshwater" ? (
          renderListPage({
            pageLabel: "Balık Çeşitleri",
            title: "Tatlı Su Balıkları",
            description:
              "Akvaryumunuz için renkli, sağlıklı ve uyumlu tatlı su balık çeşitlerini keşfedin. Aşağıda mağazamızda bulunabilecek tatlı su balığı türlerinin isimlerini görebilirsiniz. Güncel stok bilgisi için bize WhatsApp’tan ulaşabilirsiniz.",
            names: freshwaterFishNames,
            icon: Fish,
            listLabel: "Tatlı Su Balığı Listesi",
            note:
              "Not: Balık çeşitleri dönemsel olarak değişebilir. Satın alma veya bakım önerisi için güncel stok durumunu WhatsApp üzerinden sorabilirsiniz.",
            theme: {
              background: "from-cyan-50 via-white to-emerald-50",
              blobLeft: "bg-cyan-200/40",
              blobRight: "bg-emerald-200/50",
              accentText: "text-emerald-600",
              heroGradient: "from-cyan-500 via-emerald-500 to-lime-300",
              ring: "ring-cyan-100",
              countBg: "bg-cyan-50",
              itemGradient: "from-cyan-50 to-emerald-50",
              noteBg: "bg-emerald-50",
            },
          })
        ) : activePage === "saltwater" ? (
          renderListPage({
            pageLabel: "Balık ve Deniz Canlıları",
            title: "Tuzlu Su Balıkları",
            description:
              "Deniz akvaryumları için renkli ve özel tuzlu su balıkları ile mercan ve canlı seçeneklerini keşfedin. Güncel stok bilgisi için bize WhatsApp’tan ulaşabilirsiniz.",
            names: saltwaterFishNames,
            icon: Waves,
            listLabel: "Tuzlu Su Listesi",
            note:
              "Not: Tuzlu su canlıları ve mercan çeşitleri dönemsel olarak değişebilir. Güncel stok ve bakım önerisi için WhatsApp üzerinden bilgi alabilirsiniz.",
            theme: {
              background: "from-blue-50 via-white to-teal-50",
              blobLeft: "bg-blue-200/40",
              blobRight: "bg-teal-200/50",
              accentText: "text-teal-600",
              heroGradient: "from-blue-500 via-cyan-500 to-teal-300",
              ring: "ring-blue-100",
              countBg: "bg-blue-50",
              itemGradient: "from-blue-50 to-teal-50",
              noteBg: "bg-blue-50",
            },
          })
        ) : activePage === "cats" ? (
          renderListPage({
            pageLabel: "Kedi Ürünleri",
            title: "Kediniz İçin Her Şey",
            description:
              "Kedinizin günlük beslenmesinden oyun zamanına, konforundan bakımına kadar ihtiyaç duyabileceği pek çok ürünü Göktürk Petshop’ta bulabilirsiniz. Mama, yaş mama, kum, kum kabı, oyuncak, tasma, taşıma çantası, yatak ve bakım ürünleriyle minik dostlarınız için geniş ürün seçenekleri sunuyoruz.",
            names: catProductNames,
            icon: Cat,
            listLabel: "Kedi Ürünleri",
            note:
              "Not: Kedi ürünleri marka, model, renk, boyut ve stok durumuna göre değişebilir. Kedinizin yaşına, kilosuna ve ihtiyacına en uygun ürün için WhatsApp üzerinden bilgi alabilirsiniz.",
            theme: {
              background: "from-orange-50 via-white to-amber-50",
              blobLeft: "bg-orange-200/40",
              blobRight: "bg-amber-200/50",
              accentText: "text-orange-700",
              heroGradient: "from-orange-500 via-amber-500 to-yellow-400",
              ring: "ring-orange-100",
              countBg: "bg-orange-50",
              itemGradient: "from-orange-50 to-amber-50",
              noteBg: "bg-orange-50",
            },
          })
        ) : activePage === "dogs" ? (
          renderListPage({
            pageLabel: "Köpek Ürünleri",
            title: "Köpeğiniz İçin Her Türlü İhtiyaç",
            description:
              "Köpeğinizin sağlıklı, mutlu ve konforlu bir yaşam sürmesi için mama, ödül maması, tasma, gezdirme kayışı, oyuncak, yatak, mama kabı, bakım ürünleri ve eğitim ürünleri gibi birçok seçenek sunuyoruz. Göktürk Petshop’ta her ırk ve yaş grubuna uygun ürün çeşitleriyle yanınızdayız.",
            names: dogProductNames,
            icon: Dog,
            listLabel: "Köpek Ürünleri",
            note:
              "Not: Köpek ürünleri marka, beden, renk, model ve stok durumuna göre değişebilir. Köpeğinizin ırkına, yaşına ve ihtiyacına uygun ürün seçimi için WhatsApp üzerinden bize ulaşabilirsiniz.",
            theme: {
              background: "from-yellow-50 via-white to-orange-50",
              blobLeft: "bg-yellow-200/40",
              blobRight: "bg-orange-200/50",
              accentText: "text-yellow-700",
              heroGradient: "from-yellow-500 via-orange-500 to-amber-500",
              ring: "ring-yellow-100",
              countBg: "bg-yellow-50",
              itemGradient: "from-yellow-50 to-orange-50",
              noteBg: "bg-yellow-50",
            },
          })
        ) : activePage === "birds" ? (
          renderListPage({
            pageLabel: "Bilinen Kafes Kuşları",
            title: "Kafes Kuşları",
            description:
              "Ev ortamında en çok tercih edilen bilinen kafes kuşu türlerini keşfedin. Güncel stok, kafes, yem ve bakım ürünleri için bize WhatsApp’tan ulaşabilirsiniz.",
            names: cageBirdNames,
            icon: Bird,
            listLabel: "Kuş Listesi",
            note:
              "Not: Kuş türleri ve yavru durumları dönemsel olarak değişebilir. Güncel stok ve bakım önerisi için WhatsApp üzerinden bilgi alabilirsiniz.",
            theme: {
              background: "from-lime-50 via-white to-green-50",
              blobLeft: "bg-lime-200/40",
              blobRight: "bg-green-200/50",
              accentText: "text-lime-700",
              heroGradient: "from-lime-400 via-green-500 to-emerald-500",
              ring: "ring-lime-100",
              countBg: "bg-lime-50",
              itemGradient: "from-lime-50 to-green-50",
              noteBg: "bg-lime-50",
            },
          })
        ) : activePage === "reptiles" ? (
          renderListPage({
            pageLabel: "Teraryum Canlıları",
            title: "Sürüngenler ve Teraryum Canlıları",
            description:
              "Teraryumda yaşayan gecko, ejder, bukalemun, yılan, kaplumbağa ve benzeri canlı türlerini keşfedin. Güncel stok, teraryum, ısıtıcı, UVB aydınlatma, yem ve bakım ürünleri için bize WhatsApp’tan ulaşabilirsiniz.",
            names: terrariumReptileNames,
            icon: Shell,
            listLabel: "Teraryum Listesi",
            note:
              "Not: Sürüngen ve teraryum canlıları dönemsel olarak değişebilir. Tür seçimi, bakım koşulları, ısı, nem ve beslenme önerileri için WhatsApp üzerinden bilgi alabilirsiniz.",
            theme: {
              background: "from-emerald-50 via-white to-stone-50",
              blobLeft: "bg-emerald-200/40",
              blobRight: "bg-stone-200/60",
              accentText: "text-emerald-700",
              heroGradient: "from-emerald-600 via-lime-500 to-stone-400",
              ring: "ring-emerald-100",
              countBg: "bg-emerald-50",
              itemGradient: "from-emerald-50 to-stone-50",
              noteBg: "bg-emerald-50",
            },
          })
        ) : activePage === "foods" ? (
          renderListPage({
            pageLabel: "Mamalar ve Yemler",
            title: "Her Dostun İhtiyacına Uygun Beslenme",
            description:
              "Kedi, köpek, kuş, balık ve sürüngen dostlarınız için yaşına, türüne ve ihtiyacına uygun mama ve yem seçeneklerini özenle sunuyoruz. Doğru beslenme; daha sağlıklı, daha mutlu ve daha enerjik dostlar demektir. Size en uygun ürünü birlikte seçmek için Göktürk Petshop’ta yardımcı olmaktan mutluluk duyarız.",
            names: foodProductNames,
            icon: Leaf,
            listLabel: "Mama ve Yem Ürünleri",
            note:
              "Not: Mama ve yem çeşitleri marka, gramaj ve stok durumuna göre değişebilir. Dostunuzun türü, yaşı ve özel ihtiyacına göre en doğru ürünü seçmek için WhatsApp üzerinden bilgi alabilirsiniz.",
            theme: {
              background: "from-amber-50 via-white to-lime-50",
              blobLeft: "bg-amber-200/40",
              blobRight: "bg-lime-200/50",
              accentText: "text-amber-700",
              heroGradient: "from-amber-500 via-lime-500 to-emerald-500",
              ring: "ring-amber-100",
              countBg: "bg-amber-50",
              itemGradient: "from-amber-50 to-lime-50",
              noteBg: "bg-amber-50",
            },
          })
        ) : (
          <>
            <section className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-cyan-50">
              <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-emerald-200/40 blur-3xl" />
              <div className="absolute -right-24 bottom-10 h-96 w-96 rounded-full bg-cyan-200/50 blur-3xl" />

              <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 md:grid-cols-2 md:py-28">
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <h1 className="max-w-2xl text-5xl font-black leading-[0.95] tracking-tight text-[#12372a] md:text-7xl">
                    Evcil Dostlarınız İçin Her Şey
                  </h1>

                  <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600">
                    Kedi, köpek, kuş, balık ve sürüngen dostlarınız için mama, yem, aksesuar, oyuncak, tasma, bakım ürünleri ve daha fazlası Göktürk Petshop’ta.
                  </p>

                  <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                    <Button asChild className="rounded-full bg-emerald-700 px-8 py-6 text-base font-black text-white hover:bg-emerald-800">
                      <a href="#kategoriler">
                        Kategorileri Keşfet <ChevronRight className="ml-2 h-5 w-5" />
                      </a>
                    </Button>

                    <Button
                      asChild
                      variant="outline"
                      className="rounded-full border-pink-400 px-8 py-6 text-base font-black text-pink-700 hover:bg-pink-50"
                    >
                      <a href={instagramUrl} target="_blank" rel="noreferrer">
                        <InstagramIcon className="mr-2 h-5 w-5" /> Instagram’da Takip Et
                      </a>
                    </Button>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.7 }}
                  className="relative"
                >
                  <div className="rounded-[2.5rem] bg-white p-5 shadow-2xl ring-1 ring-emerald-100">
                    <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-cyan-500 via-emerald-500 to-lime-300 p-8 text-white">
                      <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-white/20" />
                      <div className="absolute -bottom-16 -left-16 h-52 w-52 rounded-full bg-white/10" />

                      <div className="relative grid gap-5 sm:grid-cols-2">
                        <button type="button" onClick={openFreshwaterPage} className="rounded-3xl bg-white/20 p-6 text-left backdrop-blur-md transition hover:-translate-y-1 hover:bg-white/30">
                          <Fish className="mb-6 h-16 w-16" />
                          <div className="text-2xl font-black">Tatlı Su</div>
                          <p className="mt-2 text-sm text-white/85">Akvaryum balıkları</p>
                        </button>

                        <button type="button" onClick={openSaltwaterPage} className="rounded-3xl bg-white/20 p-6 text-left backdrop-blur-md transition hover:-translate-y-1 hover:bg-white/30">
                          <Waves className="mb-6 h-16 w-16" />
                          <div className="text-2xl font-black">Tuzlu Su</div>
                          <p className="mt-2 text-sm text-white/85">Mercan ve egzotik türler</p>
                        </button>

                        <button type="button" onClick={openBirdPage} className="rounded-3xl bg-white/20 p-6 text-left backdrop-blur-md transition hover:-translate-y-1 hover:bg-white/30">
                          <Bird className="mb-6 h-16 w-16" />
                          <div className="text-2xl font-black">Kuş</div>
                          <p className="mt-2 text-sm text-white/85">Yem, kafes, aksesuar</p>
                        </button>

                        <button type="button" onClick={openReptilePage} className="rounded-3xl bg-white/20 p-6 text-left backdrop-blur-md transition hover:-translate-y-1 hover:bg-white/30">
                          <Shell className="mb-6 h-16 w-16" />
                          <div className="text-2xl font-black">Sürüngen</div>
                          <p className="mt-2 text-sm text-white/85">Teraryum ekipmanları</p>
                        </button>

                        <button type="button" onClick={openFoodPage} className="rounded-3xl bg-white/20 p-6 text-left backdrop-blur-md transition hover:-translate-y-1 hover:bg-white/30 sm:col-span-2">
                          <Leaf className="mb-6 h-16 w-16" />
                          <div className="text-2xl font-black">Mamalar ve Yemler</div>
                          <p className="mt-2 text-sm text-white/85">Tüm dostlarınız için beslenme ürünleri</p>
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              <div className="mx-auto grid max-w-7xl gap-4 px-5 pb-14 md:grid-cols-4">
                {features.map((item) => (
                  <div
                    key={item.title}
                    className="flex items-center gap-3 rounded-3xl bg-white p-5 font-black shadow-sm ring-1 ring-emerald-100"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-100">
                      <item.icon className="h-6 w-6 text-emerald-700" />
                    </div>
                    {item.title}
                  </div>
                ))}
              </div>
            </section>

            <section id="kategoriler" className="mx-auto max-w-7xl px-5 py-20">
              <div className="mb-12 text-center">
                <div className="mb-3 text-sm font-black uppercase tracking-[0.28em] text-emerald-600">Kategoriler</div>
                <h2 className="text-4xl font-black tracking-tight md:text-5xl">Her Evcil Hayvan İçin</h2>
                <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
                  Tatlı ve tuzlu su balıklarından kedilere, köpeklerden sürüngenlere — tüm dostlarınız için en iyi ürünler burada.
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-3">
                {categories.map((item) => {
                  const isFreshwater = item.title === "Tatlı Su Balıkları";
                  const isSaltwater = item.title === "Tuzlu Su Balıkları";
                  const isCat = item.title === "Kedi";
                  const isDog = item.title === "Köpek";
                  const isBird = item.title === "Kuş";
                  const isReptile = item.title === "Sürüngenler";
                  const isFood = item.title === "Mamalar ve Yemler";
                  const isClickable = isFreshwater || isSaltwater || isCat || isDog || isBird || isReptile || isFood;
                  const CardWrapper = isClickable ? "button" : "div";
                  const onCardClick = isFreshwater
                    ? openFreshwaterPage
                    : isSaltwater
                      ? openSaltwaterPage
                      : isCat
                        ? openCatPage
                        : isDog
                          ? openDogPage
                          : isBird
                            ? openBirdPage
                            : isReptile
                              ? openReptilePage
                              : isFood
                                ? openFoodPage
                                : undefined;
                  const ctaLabel = isFreshwater
                    ? "Balık Çeşitlerini Gör"
                    : isSaltwater
                      ? "Tuzlu Su Çeşitlerini Gör"
                      : isCat
                        ? "Kedi Ürünlerini Gör"
                        : isDog
                          ? "Köpek Ürünlerini Gör"
                          : isBird
                            ? "Kuş Türlerini Gör"
                            : isReptile
                              ? "Teraryum Canlılarını Gör"
                              : isFood
                                ? "Mama ve Yemleri Gör"
                                : "Detaylı Bilgi";

                  return (
                    <Card
                      key={item.title}
                      className="overflow-hidden rounded-[2rem] border-0 bg-white shadow-sm ring-1 ring-slate-100 transition hover:-translate-y-1 hover:shadow-xl"
                    >
                      <CardContent className="p-0">
                        <CardWrapper
                          type={isClickable ? "button" : undefined}
                          onClick={onCardClick}
                          className="block w-full text-left"
                        >
                          <div className={`flex h-48 items-center justify-center bg-gradient-to-br ${item.gradient}`}>
                            <item.icon className="h-24 w-24 text-emerald-800/80" />
                          </div>
                          <div className="p-7">
                            <h3 className="text-2xl font-black">{item.title}</h3>
                            <p className="mt-3 min-h-[52px] leading-7 text-slate-600">{item.text}</p>
                            <span className="mt-5 inline-flex items-center text-sm font-black text-emerald-700">
                              {ctaLabel} <ChevronRight className="ml-1 h-4 w-4" />
                            </span>
                          </div>
                        </CardWrapper>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </section>

            <section id="hakkimizda" className="bg-white py-20">
              <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 md:grid-cols-2">
                <div className="rounded-[2.5rem] bg-gradient-to-br from-emerald-700 to-cyan-600 p-8 text-white shadow-xl">
                  <div className="grid grid-cols-2 gap-4">
                    {stats.map((item) => (
                      <div key={`${item.num}-${item.label}`} className="rounded-3xl bg-white/15 p-6 backdrop-blur">
                        <div className="text-4xl font-black">{item.num}</div>
                        <div className="mt-2 text-sm font-bold text-white/85">{item.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="mb-3 text-sm font-black uppercase tracking-[0.28em] text-emerald-600">Hakkımızda</div>
                  <h2 className="text-4xl font-black tracking-tight md:text-5xl">Evcil Dostlarınıza En İyisini</h2>
                  <p className="mt-6 text-lg leading-8 text-slate-600">
                    Göktürk PetShop olarak, evcil hayvanlarınızın sağlığı ve mutluluğu için özenle seçilmiş ürünler sunuyoruz. Kedi, köpek, kuş, balık ve sürüngen dostlarınız için geniş ürün yelpazemizle her zaman yanınızdayız.
                  </p>
                  <p className="mt-4 text-lg leading-8 text-slate-600">
                    Mama, yem, oyuncak, tasma, kafes, akvaryum, teraryum ve bakım ürünleriyle tüm dostlarınızın ihtiyaçlarına uygun seçenekler sunuyoruz.
                  </p>
                </div>
              </div>
            </section>

            <section className="mx-auto max-w-7xl px-5 py-20">
              <div className="rounded-[2.5rem] bg-[#12372a] p-8 text-white shadow-2xl md:p-12">
                <div className="grid items-center gap-8 md:grid-cols-[1.2fr_0.8fr]">
                  <div>
                    <h2 className="text-4xl font-black">Bizden Haberdar Olun</h2>
                    <p className="mt-4 max-w-2xl text-lg leading-8 text-white/75">
                      Kampanyalar, yeni ürünler ve petshop hizmetlerimiz hakkında bilgi almak için bize WhatsApp’tan ulaşabilirsiniz.
                    </p>
                  </div>
                  <div className="flex flex-col gap-3 rounded-3xl bg-white p-3 sm:flex-row">
                    <input className="min-h-12 flex-1 rounded-2xl px-4 text-slate-800 outline-none" placeholder="E-posta adresiniz" />
                    <Button asChild className="rounded-2xl bg-emerald-600 px-6 font-black text-white hover:bg-emerald-700">
                      <a href={whatsappUrl}>Beni Haberdar Et</a>
                    </Button>
                  </div>
                </div>
              </div>
            </section>
          </>
        )}
      </main>

      <footer id="iletisim" className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-12 md:grid-cols-3">
          <div>
            <div className="text-sm font-black uppercase tracking-[0.28em] text-emerald-600">Neredeyiz</div>
            <h2 className="mt-3 text-3xl font-black">Bizi Ziyaret Edin</h2>
            <p className="mt-4 leading-7 text-slate-600">Göktürk Merkez Mah. Çamlık Caddesi No:37/C İstanbul</p>
          </div>
          <div className="rounded-3xl bg-emerald-50 p-6">
            <MapPin className="mb-4 h-8 w-8 text-emerald-700" />
            <div className="text-xl font-black">Göktürk PetShop</div>
            <p className="mt-2 text-slate-600">Göktürk Merkez Mah. Çamlık Caddesi No:37/C İstanbul</p>
          </div>
          <div className="rounded-3xl bg-emerald-700 p-6 text-white">
            <Phone className="mb-4 h-8 w-8" />
            <div className="text-xl font-black">WhatsApp</div>
            <a href="tel:+905325599778" className="mt-2 block text-white/90">+90 532 559 97 78</a>
            <div className="mt-5 flex flex-wrap gap-3">
              <a href={whatsappUrl} className="inline-flex rounded-full bg-white px-5 py-3 text-sm font-black text-emerald-800">İletişime Geç</a>
              <a href={instagramUrl} target="_blank" rel="noreferrer" className="inline-flex items-center rounded-full bg-white px-5 py-3 text-sm font-black text-pink-700">
                <InstagramIcon className="mr-2 h-4 w-4" /> Instagram
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-slate-100 py-6 text-center text-sm text-slate-500">
          Telif Hakkı © 2026 gokturkpetshop.com - Tüm Hakları Saklıdır.
        </div>
      </footer>
    </div>
  );
}

export const testData = {
  categoryCount: 7,
  featureCount: 4,
  statsCount: 4,
  freshwaterFishCount: 77,
  saltwaterFishCount: 18,
  cageBirdCount: 18,
  terrariumReptileCount: 16,
  foodProductCount: 12,
  catProductCount: 12,
  dogProductCount: 12,
  hasOpeningBadge: false,
  freshwaterCategoryIsClickable: true,
  saltwaterCategoryIsClickable: true,
  catCategoryIsClickable: true,
  dogCategoryIsClickable: true,
  birdCategoryIsClickable: true,
  reptileCategoryIsClickable: true,
  foodCategoryIsClickable: true,
  instagramButtonEnabled: true,
  instagramUsesInlineSvgIcon: true,
  clickableCategoryCount: 7,
};
