import React, { useState } from "react";
import { Fish, MapPin, Phone, ChevronRight, Sparkles, Truck, Leaf } from "lucide-react";
import { pagesData, categories } from "./data";

const cx = (...classes) => classes.filter(Boolean).join(" ");
const Button = ({ className = "", children, ...props }) => (
  <button className={cx("inline-flex items-center gap-2 rounded-2xl bg-[#1a1b2a] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#22233a]", className)} {...props}>{children}</button>
);
const Card = ({ className = "", children, ...props }) => <div className={cx("rounded-3xl border border-white/10 bg-white/5 shadow-sm", className)} {...props}>{children}</div>;
const CardContent = ({ className = "", children, ...props }) => <div className={cx("p-6", className)} {...props}>{children}</div>;

export default function GokturkPetshopSite() {
  const whatsappUrl = "https://wa.me.";
  const instagramUrl = "https://instagram.com";
  const logoSrc = "/pet.jpg";
  const [activePage, setActivePage] = useState("home");
  const scrollTop = () => window.setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 0);

  if (activePage !== "home" && pagesData[activePage]) {
    const page = pagesData[activePage];
    return (
      <div className="min-h-screen bg-[#070814] text-white px-4 py-12 md:px-8">
        <div className="max-w-6xl mx-auto">
          <button onClick={() => { setActivePage("home"); scrollTop(); }} className="mb-8 text-sm font-medium text-cyan-400 hover:text-cyan-300 transition flex items-center gap-1">← Ana Sayfaya Dön</button>
          <h1 className="text-3xl md:text-4xl font-extrabold mb-2 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">{page.title}</h1>
          <p className="text-slate-400 mb-10">Göktürk Petshop güvencesiyle aradığınız tüm türler ve ürünler.</p>
          <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {page.items.map((item, idx) => {
              const url = `https://unsplash.com{idx}&q=${encodeURIComponent(item + " " + page.hint)}`;
              return (
                <div key={idx} className="bg-white/5 border border-white/10 rounded-3xl p-4 flex flex-col justify-between hover:border-cyan-500/30 transition group">
                  <div>
                    <img src={url} alt={item} className="w-full h-44 object-cover rounded-2xl mb-3 shadow-inner bg-slate-800" loading="lazy" />
                    <h3 className="font-bold text-base text-slate-100 group-hover:text-cyan-400 transition">{item}</h3>
                  </div>
                  <a href={whatsappUrl} target="_blank" rel="noreferrer" className="mt-4 w-full text-center bg-cyan-500/10 hover:bg-cyan-500 text-cyan-400 hover:text-white text-xs font-semibold py-2 px-3 rounded-xl transition">Fiyat Sor</a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#070814] text-slate-100 antialiased selection:bg-cyan-500 selection:text-white">
      <div className="relative overflow-hidden border-b border-white/5 bg-gradient-to-b from-[#0a0c1a] to-[#070814] py-20 md:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.08),transparent_45%)]" />
        <div className="px-4 md:px-8 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 relative">
          <div className="flex-1 text-center md:text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-xs font-medium text-cyan-400 mb-6"><Sparkles className="w-3.5 h-3.5" /> Canlı Dostlarınız İçin En İyisi</div>
            <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white mb-6 leading-tight">Göktürk <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent">Petshop</span></h1>
            <p className="text-lg text-slate-400 max-w-xl mx-auto mb-8 leading-relaxed">Akvaryum dünyasından evcil hayvan aksesuarlarına kadar aradığınız her şey.</p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
              <a href={whatsappUrl} target="_blank" rel="noreferrer"><Button className="w-full sm:w-auto bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-bold px-8 shadow-lg shadow-cyan-500/20"><Phone className="w-4 h-4 fill-current" /> İletişime Geçin</Button></a>
              <a href={instagramUrl} target="_blank" rel="noreferrer"><Button className="w-full sm:w-auto border border-white/10 bg-white/5 text-white px-8">Instagram'da Takip Et</Button></a>
            </div>
          </div>
          <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white/10 shadow-2xl relative group bg-slate-800 flex items-center justify-center">
            <img src={logoSrc} alt="Logo" className="w-full h-full object-cover transition duration-500 group-hover:scale-105" onError={(e) => { e.target.src = 'https://unsplash.com'; }} />
          </div>
        </div>
      </div>

      <div className="border-b border-white/5 bg-[#090a18] py-12">
        <div className="px-4 md:px-8 max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[{ n: "500+", l: "Ürün Çeşidi" }, { n: "50+", l: "Balık Türü" }, { n: "7/24", l: "Destek" }, { n: "100%", l: "Müşteri Memnuniyeti" }].map((s, i) => (
            <div key={i}><div className="text-3xl md:text-4xl font-extrabold text-white mb-1">{s.n}</div><div className="text-xs md:text-sm text-slate-400 font-medium tracking-wide uppercase">{s.l}</div></div>
          ))}
        </div>
      </div>

      <div className="px-4 md:px-8 max-w-6xl mx-auto py-24">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-extrabold tracking-tight text-white mb-4">Ürün ve Canlı Kategorilerimiz</h2>
          <p className="text-slate-400">Mağazamızda bulunan popüler pet ürünleri ve canlı popülasyonu grupları.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <Card key={i} className="hover:border-white/20 hover:bg-white/[0.07] transition cursor-pointer group flex flex-col justify-between" onClick={() => { setActivePage(cat.id); scrollTop(); }}>
                <CardContent className="p-8">
                  <div className={cx("w-12 h-12 rounded-2xl bg-gradient-to-br flex items-center justify-center text-slate-900 mb-6 group-hover:scale-110 transition duration-300", cat.grad)}><Icon className="w-6 h-6" /></div>
                  <h3 className="text-xl font-bold text-white mb-2">{cat.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed mb-6">{cat.text}</p>
                  <div className="text-sm font-semibold text-cyan-400 flex items-center gap-1 group-hover:text-cyan-300">Çeşitleri İncele <ChevronRight className="w-4 h-4 transition group-hover:translate-x-1" /></div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      <div className="bg-[#090a18] border-y border-white/5 py-24">
        <div className="px-4 md:px-8 max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-white mb-12">Göktürk Petshop Özellikleri</h2>
          <div className="grid gap-6 grid-cols-2 md:grid-cols-4">
            {[{ i: Sparkles, t: "Geniş Ürün Yelpazesi" }, { i: Fish, t: "Akvaryum Ürünleri" }, { i: Leaf, t: "Kaliteli Ürünler" }, { i: Truck, t: "Hızlı Teslimat" }].map((feat, i) => {
              const Icon = feat.i;
              return (
                <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col items-center">
                  <Icon className="w-8 h-8 text-cyan-400 mb-4" />
                  <span className="font-semibold text-sm text-slate-200">{feat.t}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="px-4 md:px-8 max-w-6xl mx-auto py-24">
        <div className="grid gap-12 md:grid-cols-2 items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-white mb-6">Mağazamızı Ziyaret Edin</h2>
            <p className="text-slate-400 mb-8 leading-relaxed">İstanbul Göktürk'teki sıcak mağazamızda sizi ve minik dostlarınızı ağırlamaktan mutluluk duyarız.</p>
            <div className="space-y-4">
              <div className="flex gap-4 items-start"><MapPin className="w-5 h-5 text-cyan-400 mt-0.5" /><div><h4 className="font-bold text-white mb-1">Adres</h4><p className="text-sm text-slate-400">Göktürk, İstanbul / Türkiye</p></div></div>
              <div className="flex gap-4 items-start"><Phone className="w-5 h-5 text-cyan-400 mt-0.5" /><div><h4 className="font-bold text-white mb-1">Telefon / WhatsApp</h4><p className="text-sm text-slate-400">+90 532 559 97 78</p></div></div>
            </div>
          </div>
          <div className="h-80 w-full bg-slate-900 border border-white/10 rounded-3xl overflow-hidden relative shadow-2xl">
            <iframe title="Harita" src="https://google.com" width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>
        </div>
      </div>

