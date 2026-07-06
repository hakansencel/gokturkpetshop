import { Fish, Cat, Dog, Bird, Shell } from "lucide-react";

export const pagesData = {
  freshwater: { title: "Tatlı Su Balıkları", items: ["Lepistes", "Beta Balığı", "Japon Balığı", "Melek Balığı", "Discus", "Neon Tetra", "Kardinal Tetra", "Siyah Neon Tetra", "Kırmızı Burun Tetra", "Serpae Tetra", "Limon Tetra", "Ember Tetra", "Glofish Tetra", "Zebra Danio", "Leopar Danio", "İnci Danio", "Rasbora", "Moli", "Plati", "Kılıç Kuyruk", "Gurami", "Cüce Vatoz", "Çöpçü Balığı", "Elma Salyangozu"] },
  saltwater: { title: "Tuzlu Su Balıkları", items: ["Palyaço Balığı", "Blue Tang", "Yellow Tang", "Aslan Balığı", "Melek Balığı", "Kelebek Balığı", "Gobies", "Blenny", "Damselfish", "Wrasse", "Firefish", "Mandarin Balığı", "Karides", "Deniz Yıldızı", "Mercan Çeşitleri", "Anemon"] },
  birds: { title: "Kuş Çeşitleri", items: ["Muhabbet Kušu", "Kanarya", "Sultan Papağanı", "Cennet Papağanı", "Sevda Papağanı", "Hint Bülbülü", "Zebra İspinozu", "Forpus Papağanı", "Jako Papağanı", "Güvercin"] },
  reptiles: { title: "Sürüngenler & Teraryum", items: ["Leopard Gecko", "Crested Gecko", "Sakallı Ejder", "Bukalemun", "Yeşil İguana", "Mısır Yılanı", "Top Piton", "Su Kaplumbağası", "Kurbağa Türleri"] },
  food: { title: "Mamalar ve Yemler", items: ["Kedi Mamaları", "Köpek Mamaları", "Yavru Mama Çeşitleri", "Yaş Mama ve Ödül Mamaları", "Kuş Yemleri", "Balık Yemleri", "Dip ve Tablet Yemler", "Sürüngen Yemleri", "Vitamin ve Destek Ürünleri"] },
  cats: { title: "Kedi Ürünleri", items: ["Kedi Mamaları", "Yaş Mama ve Ödül Mamaları", "Kedi Kumu", "Kum Kabı ve Kürekleri", "Tırmalama Tahtaları", "Kedi Oyuncakları", "Kedi Tasmaları", "Taşıma Çantaları", "Kedi Yatakları", "Tarama ve Bakım Ürünleri"] },
  dogs: { title: "Köpek Ürünleri", items: ["Köpek Mamaları", "Yaş Mama ve Ödül Mamaları", "Köpek Tasmaları", "Gezdirme Kayışları", "Göğüs Tasmaları", "Köpek Oyuncakları", "Köpek Yatakları", "Şampuan ve Bakım Ürünleri", "Tuvalet Eğitim Ürünleri"] }
};

export const categories = [
  { id: "freshwater", icon: Fish, title: "Tatlı Su Balıkları", text: "Melek balığı, diskus, neon tetra ve daha fazlası.", grad: "from-cyan-100 to-blue-200" },
  { id: "saltwater", icon: Fish, title: "Tuzlu Su Balıkları", text: "Palyaço balığı, aslan balığı, mercan ve egzotik türler.", grad: "from-blue-100 to-teal-200" },
  { id: "cats", icon: Cat, title: "Kedi", text: "Mama, kum kabı, oyuncak ve aksesuarlar.", grad: "from-orange-100 to-amber-200" },
  { id: "dogs", icon: Dog, title: "Köpek", text: "Tasma, mama, yatak ve bakım ürünleri.", grad: "from-yellow-100 to-orange-200" },
  { id: "birds", icon: Bird, title: "Kuş", text: "Kafes, yem, tünek ve kuş aksesuarları.", grad: "from-lime-100 to-green-200" },
  { id: "reptiles", icon: Shell, title: "Sürüngenler", text: "Teraryum, ısıtıcı, canlı yem ve ekipmanlar.", grad: "from-emerald-100 to-stone-200" }
];
