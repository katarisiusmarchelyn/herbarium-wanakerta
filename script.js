const buyUrl = "https://lynk.id/marchelyn";

const places = {
  herbarium: {
    zone: "Zona Cozy Mystery",
    name: "Herbarium Maheswari",
    copy:
      "Dari depan, tempat ini berbau jahe, serai, kayu manis, dan minyak kayu putih masa kecil. Di belakangnya, ruang herbarium menyimpan label yang tidak selalu jinak.",
    scent: "jahe, kapur barus, kertas label",
    note: "Buka pukul enam lewat tiga belas. Kebiasaan, katanya.",
  },
  pasar: {
    zone: "Zona Perdagangan",
    name: "Pasar Legi",
    copy:
      "Jantung sosial Wanakerta. Lapak sayur, bumbu basah, terpal biru, tawar-menawar, dan gosip yang kadang lebih akurat daripada dokumen resmi.",
    scent: "kunyit, bawang merah, tanah becek, gorengan",
    note: "Pasar hidup sebelum subuh dan melemah ketika kabut mulai turun.",
  },
  warung: {
    zone: "Zona Sosial Malam",
    name: "Warung Kopi Kabut",
    copy:
      "Tempat orang mencoba terlihat santai. Meja kayu lembap, kopi pahit, dan percakapan yang sering berhenti tepat ketika nama tertentu disebut.",
    scent: "kopi gosong, kretek mati, jas hujan basah",
    note: "Duduk dekat jendela. Jangan membelakangi pintu.",
  },
  sumur: {
    zone: "Zona Hutan Lama",
    name: "Sumur Bisu",
    copy:
      "Lingkaran batu yang terlalu lama diam. Tidak semua tempat lama hilang dari kota. Beberapa hanya ditutup, diberi nama baru, lalu dibiarkan menunggu.",
    scent: "lumut tua, batu dingin, air yang tidak bergerak",
    note: "Namanya bisu. Itu bukan berarti ia tidak mendengar.",
  },
  hutan: {
    zone: "Zona Larangan",
    name: "Hutan Larangan Rengganis",
    copy:
      "Hutan bukan latar belakang. Ia adalah ingatan yang tumbuh, mengakar, dan sesekali memilih siapa yang boleh pulang.",
    scent: "tanah tua, daun busuk, akar basah, bunga terlalu matang",
    note: "Kalau jalan terlihat terlalu putih, pulanglah sebelum peta berubah.",
  },
  balai: {
    zone: "Zona Ilmiah",
    name: "Balai Simplisia Lama",
    copy:
      "Bangunan penelitian tanaman obat yang lembap oleh rahasia. Di sini, ilmu modern tidak selalu bersih dari ketakutan lama.",
    scent: "formalin lama, daun kering, debu kaca",
    note: "Kertas tua punya bau. Kebohongan juga.",
  },
  santa: {
    zone: "Zona Arsip Foto",
    name: "Santa Odilia",
    copy:
      "Bangunan lama di jalur Wanasetia. Di peta ia hanya titik tua, tetapi foto dan catatan kadang lebih berani daripada saksi hidup.",
    scent: "kertas foto, lilin, kayu basah",
    note: "Yang lama tidak selalu mati. Kadang hanya menunggu ditemukan lagi.",
  },
  kali: {
    zone: "Zona Air Gelap",
    name: "Kali Ireng dan Leuwi Hideung",
    copy:
      "Jalur air yang disebut dengan suara lebih pelan. Ada alasan warga tua tidak suka anak-anak bermain di sana menjelang magrib.",
    scent: "air dingin, lumut batu, asap kretek tipis",
    note: "Jika terdengar lagu anak-anak dari arah tanpa jalan, jangan mencari sumbernya.",
  },
};

const characters = [
  {
    name: "Rarasati Maheswari",
    short: "Rara",
    role: "Pemilik Herbarium Maheswari",
    group: "inti",
    scent: "jahe, kapur barus, kertas label",
    copy:
      "Membaca dunia lewat bau, rutinitas, label, dan benda kecil yang orang lain lewatkan. Rara adalah pintu masuk pembaca ke Wanakerta.",
  },
  {
    name: "Nara Maheswari",
    short: "Nara",
    role: "Nama yang tertinggal di banyak tempat",
    group: "inti",
    scent: "teh pahit, tanah basah, ingatan masa kecil",
    copy:
      "Adik Rara yang hilang dan menjadi luka pusat cerita. Kehadirannya terasa seperti batas tipis antara keluarga, hutan, dan masa lalu.",
  },
  {
    name: "Jatmiko Pradipta",
    short: "Miko",
    role: "Guru sejarah dan pemburu arsip",
    group: "arsip",
    scent: "kapur tulis, debu buku, kopi dingin",
    copy:
      "Membuat Rara ingin percaya, lalu membuat pembaca ikut ragu. Humornya cepat, rahasianya lebih cepat lagi.",
  },
  {
    name: "Ratih Purnamasari",
    short: "Ratih",
    role: "Kreator rute kabut",
    group: "inti",
    scent: "plastik kamera, jas hujan, tanah hutan",
    copy:
      "Datang mencari cerita yang dihapus. Ia bukan korban pasif, melainkan pemantik kasus yang meninggalkan petunjuk hidup.",
  },
  {
    name: "Ipda Bagas Wiratama",
    short: "Bagas",
    role: "Polisi muda Wanakerta",
    group: "arsip",
    scent: "kopi hitam, kertas laporan, seragam basah",
    copy:
      "Membawa prosedur ke tempat yang bukti-buktinya tidak selalu sopan terhadap logika administrasi.",
  },
  {
    name: "dr. Sasmita Wiryawan",
    short: "Sasmita",
    role: "Dokter abu-abu",
    group: "arsip",
    scent: "antiseptik, teh pahit, berkas medis",
    copy:
      "Keras, tajam, dan menyimpan pilihan moral yang tidak mudah dimaafkan. Ia tahu bahwa tubuh juga bisa menjadi arsip.",
  },
  {
    name: "Ki Bramantya",
    short: "Ki Bramantya",
    role: "Tetua tradisi",
    group: "bayang",
    scent: "kayu tua, tanah kering, rumah terlalu bersih",
    copy:
      "Sopan, lembut, dan mengerikan. Ia membuat hal buruk terdengar seperti kewajiban menjaga keseimbangan.",
  },
  {
    name: "Damar Kuncoro",
    short: "Damar",
    role: "Lurah dengan proyek besar",
    group: "bayang",
    scent: "printer panas, map baru, parfum kantor",
    copy:
      "Modern, rasional, dan yakin narasi bisa diatur. Baginya, masa depan Wanakerta harus terlihat kondusif.",
  },
  {
    name: "Lintang Ayu Wulandari",
    short: "Lintang",
    role: "Anak yang menggambar akar",
    group: "inti",
    scent: "krayon, susu hangat, tanah basah",
    copy:
      "Generasi baru yang tidak boleh mewarisi kutukan lama. Namanya menguji keberanian orang dewasa untuk tidak lagi diam.",
  },
  {
    name: "Bu Tini Rempah",
    short: "Bu Tini",
    role: "Pedagang bumbu Pasar Legi",
    group: "sosial",
    scent: "cabai, daun salam, uang pasar",
    copy:
      "Arsip sosial Wanakerta. Gosipnya kadang menyebalkan, kadang menjadi jalan tercepat menuju kebenaran.",
  },
  {
    name: "Wira Jayalaksana",
    short: "Wira",
    role: "Penjaga jalur hutan",
    group: "sosial",
    scent: "jaket lapangan, tanah basah, daun patah",
    copy:
      "Menghubungkan kota dengan hutan nyata. Ia tahu jalur yang tidak ada di peta digital.",
  },
  {
    name: "Pak Seno Wargadiredja",
    short: "Pak Seno",
    role: "Juru kunci catatan lama",
    group: "arsip",
    scent: "buku tua, tinta pudar, kopi encer",
    copy:
      "Menulis kalimat yang sama seperti seseorang yang sedang ditahan oleh ingatan sendiri.",
  },
  {
    name: "Nyai Rasmi",
    short: "Nyai Rasmi",
    role: "Penjaga nama lahir",
    group: "sosial",
    scent: "sirih, kain lama, tanah pekarangan",
    copy:
      "Menyimpan pengetahuan yang tidak selalu masuk berkas. Ia mengerti bahwa nama perlu disaksikan.",
  },
  {
    name: "Ibu Akar",
    short: "Ibu Akar",
    role: "Memori tua yang tidak gugur",
    group: "bayang",
    scent: "bunga terlalu matang, tanah hitam, akar muda",
    copy:
      "Bukan monster yang mudah dikalahkan. Ia tumbuh dari nama yang lebih dulu dihapus manusia.",
  },
  {
    name: "Menir",
    short: "Menir",
    role: "Kucing toko",
    group: "sosial",
    scent: "debu kayu, ikan, rak simplisia",
    copy:
      "Sensor atmosferik Herbarium Maheswari. Tidak selalu membantu, tetapi sering lebih benar daripada manusia.",
  },
];

const labels = [
  "Jangan terlalu cepat percaya pada apa pun yang memanggil namamu.",
  "Yang hangat di depan toko belum tentu hangat di ruang belakang.",
  "Kalau peta tidak menunjukkan jalan, mungkin jalannya yang sedang bersembunyi.",
  "Ada arsip yang tidak hilang. Hanya menunggu tangan yang tepat.",
  "Kopi pahit tidak selalu cukup untuk membuat orang tetap waras.",
  "Kalau Menir berhenti berisik, mulailah khawatir.",
  "Nama lengkap yang ditulis pelan bisa lebih kuat daripada pintu terkunci.",
  "Bunga yang terlalu matang biasanya sedang menyimpan sesuatu.",
];

const routes = {
  pasar: {
    title: "Lewat Pasar Legi",
    copy:
      "Kamu memilih jalan yang ramai. Banyak mata, banyak suara, banyak kemungkinan seseorang melihat sesuatu lalu pura-pura tidak melihatnya.",
  },
  kali: {
    title: "Menyusuri Kali Ireng",
    copy:
      "Kamu memilih jalur air. Kabut lebih rendah di sini. Batu lebih licin. Suara lebih mudah terdengar meskipun tidak jelas dari arah mana.",
  },
  balai: {
    title: "Masuk Balai Lama",
    copy:
      "Kamu memilih bangunan tua. Kertas lembap, kaca berjamur, dan aroma kapur barus yang terlalu rajin menutupi sesuatu.",
  },
};

const plants = {
  rengganis: {
    role: "Tanaman fiktif sentral",
    name: "Rengganis Hitam",
    copy:
      "Bunga hitam dengan aroma yang berubah mengikuti ingatan dan rasa bersalah. Ia bukan sekadar monster, melainkan tanda bahwa sebuah nama sedang dipanggil.",
    warning:
      "Di dunia Wanakerta, kemunculannya selalu berarti ada kebohongan yang terlalu dekat dengan permukaan.",
  },
  kecubung: {
    role: "Tanaman kunci naratif",
    name: "Kecubung",
    copy:
      "Dipakai sebagai gema delirium, persepsi retak, dan tubuh yang tidak lagi sepenuhnya bisa dipercaya.",
    warning:
      "Di website ini, semua catatan tanaman bersifat fiksi dan tidak boleh dipakai sebagai panduan nyata.",
  },
  pule: {
    role: "Tanaman kunci naratif",
    name: "Pule Pandak",
    copy:
      "Muncul sebagai lapisan pengetahuan lama yang sulit dipisahkan dari catatan medis dan catatan keluarga.",
    warning: "Wanakerta selalu menaruh ilmu di sebelah rasa takut. Itulah yang membuatnya berbahaya.",
  },
  bintaro: {
    role: "Tanaman kunci naratif",
    name: "Bintaro",
    copy:
      "Menjadi tanda bahwa sesuatu yang tampak biasa di pinggir jalan bisa membawa bayangan yang lebih keras.",
    warning: "Di novel, tanaman bukan dekorasi. Setiap nama tanaman membawa fungsi cerita.",
  },
  jarak: {
    role: "Tanaman kunci naratif",
    name: "Jarak Pagar",
    copy:
      "Menghubungkan halaman rumah, pagar, batas sosial, dan keputusan orang dewasa yang ingin terlihat wajar.",
    warning: "Batas yang paling rapuh di Wanakerta sering bukan pagar, melainkan keberanian menyebut nama.",
  },
  gadung: {
    role: "Tanaman kunci naratif",
    name: "Gadung",
    copy:
      "Membawa kesan pangan, bahaya, dan pengetahuan turun-temurun yang bisa menyelamatkan atau menyesatkan.",
    warning: "Yang menyembuhkan bisa meracuni ketika dipakai untuk menutupi kesalahan manusia.",
  },
};

const realHerbs = [
  {
    name: "Jahe Merah",
    latin: "Zingiber officinale",
    category: "akar",
    part: "Rimpang",
    copy:
      "Jahe adalah rimpang hangat dari keluarga jahe-jahean. Di dunia nyata ia sangat dikenal sebagai bumbu, minuman, dan aroma dapur Asia.",
    novel:
      "Di Wanakerta, jahe adalah rasa aman pertama: toko buka, lampu kuning menyala, dan rahasia belum terlihat.",
  },
  {
    name: "Temulawak",
    latin: "Curcuma xanthorrhiza",
    category: "akar",
    part: "Rimpang",
    copy:
      "Temulawak dekat dengan tradisi jamu Indonesia. Warnanya hangat, rasanya pahit-aromatik, dan secara botani masih satu keluarga dengan kunyit.",
    novel:
      "Ia membuat Herbarium Maheswari terasa seperti toko yang benar-benar dipercaya warga.",
  },
  {
    name: "Pegagan",
    latin: "Centella asiatica",
    category: "warna",
    part: "Daun",
    copy:
      "Pegagan berdaun bundar kecil dan tumbuh merayap di tempat lembap. Bentuknya membuatnya terasa seperti tanaman catatan kaki: kecil, tapi mudah diingat.",
    novel:
      "Pegagan mewakili pengetahuan yang diwariskan pelan-pelan, bukan diumumkan keras-keras.",
  },
  {
    name: "Kayu Secang",
    latin: "Biancaea sappan",
    category: "warna",
    part: "Kayu",
    copy:
      "Kayu secang dikenal memberi warna merah pada seduhan. Ia menarik karena bekerja sebagai bahan, warna, benda keluarga, dan penanda visual.",
    novel:
      "Kotak kayu secang dan tusuk konde Rara membuat tanaman terasa seperti pusaka, bukan stok dagangan.",
  },
  {
    name: "Daun Mint",
    latin: "Mentha x piperita",
    category: "aroma",
    part: "Daun",
    copy:
      "Mint dikenal lewat aroma menthol yang terasa sejuk. Daunnya memberi kesan ringan, sementara minyak esensialnya jauh lebih pekat dan perlu kehati-hatian.",
    novel:
      "Mint membuat teh Rara tampak lembut, sebelum pembaca sadar bahwa tidur di Wanakerta tidak selalu aman.",
  },
  {
    name: "Bunga Telang",
    latin: "Clitoria ternatea",
    category: "warna",
    part: "Bunga",
    copy:
      "Bunga telang terkenal karena warna biru-ungu yang kuat. Dalam minuman, warna ini membuat tanaman terasa seperti tinta botani.",
    novel:
      "Di rak Herbarium, telang menjadi warna tenang yang berdiri di dekat rahasia yang tidak tenang sama sekali.",
  },
  {
    name: "Akar Alang-Alang",
    latin: "Imperata cylindrica",
    category: "akar",
    part: "Rimpang/akar",
    copy:
      "Alang-alang adalah rumput yang akrab dengan tanah terbuka. Bagian akarnya membuatnya cocok secara simbolik untuk cerita tentang sesuatu yang menahan dari bawah.",
    novel:
      "Kata 'akar' di Wanakerta tidak pernah netral. Ia bisa berarti pengetahuan, ikatan, atau tarikan.",
  },
  {
    name: "Adas",
    latin: "Foeniculum vulgare",
    category: "aroma",
    part: "Buah/biji aromatik",
    copy:
      "Adas punya aroma manis-hangat yang sering mengingatkan pada licorice. Dalam herbarium, ia bekerja sebagai aroma kecil yang langsung dikenali hidung.",
    novel:
      "Adas memperkaya 'bahasa bau' Rara: detail yang tidak besar, tapi membuat toko terasa hidup.",
  },
  {
    name: "Kapulaga",
    latin: "Amomum compactum / Elettaria cardamomum",
    category: "aroma",
    part: "Buah/biji",
    copy:
      "Kapulaga adalah rempah aromatik. Dalam dapur, sedikit saja bisa membuat suasana terasa hangat, mahal, dan tua.",
    novel:
      "Kapulaga adalah salah satu bau yang membuat Pasar Legi dan Herbarium Maheswari terasa bisa dikunjungi.",
  },
  {
    name: "Serai",
    latin: "Cymbopogon citratus",
    category: "aroma",
    part: "Batang/daun",
    copy:
      "Serai adalah rumput aromatik dengan wangi lemon yang segar. Ia sering memberi kesan bersih, hangat, dan dapur yang baru dipakai.",
    novel:
      "Serai membantu membangun wajah depan toko: ramah, hangat, dan terlalu meyakinkan.",
  },
  {
    name: "Kunyit",
    latin: "Curcuma longa",
    category: "akar",
    part: "Rimpang",
    copy:
      "Kunyit dikenal sebagai rempah dan pewarna kuning dari rimpang. Sumber kesehatan resmi menekankan bahwa bukti manfaat medisnya tidak boleh dilebih-lebihkan.",
    novel:
      "Kunyit adalah bau Pasar Legi: normal, basah, ramai, dan justru karena itu membuat horor terasa dekat.",
  },
  {
    name: "Lengkuas",
    latin: "Alpinia galanga",
    category: "akar",
    part: "Rimpang",
    copy:
      "Lengkuas masih satu keluarga besar dengan jahe. Aromanya tajam dan berserat, sangat dapur, sangat pasar.",
    novel:
      "Lengkuas menambatkan Wanakerta ke keseharian, supaya kabutnya tidak terasa seperti fantasi jauh.",
  },
  {
    name: "Daun Salam",
    latin: "Syzygium polyanthum",
    category: "aroma",
    part: "Daun",
    copy:
      "Daun salam adalah daun aromatik yang akrab di dapur Indonesia. Ia sering hadir diam-diam, tapi mengubah dasar aroma masakan.",
    novel:
      "Transaksi daun salam antara Rara dan Bu Tini membuktikan bahwa gosip bisa masuk lewat barang kecil.",
  },
  {
    name: "Kenanga",
    latin: "Cananga odorata",
    category: "warna",
    part: "Bunga",
    copy:
      "Kenanga dikenal lewat wangi bunga yang kuat dan melekat. Aromanya sering terhubung dengan tubuh, memori, dan suasana ritual.",
    novel:
      "Kenanga memberi Wanakerta lapisan sensorik: indah, tapi tidak selalu menenangkan.",
  },
  {
    name: "Sirih",
    latin: "Piper betle",
    category: "warna",
    part: "Daun",
    copy:
      "Sirih adalah tanaman rambat dengan daun mengilap dan sejarah budaya yang panjang di Asia Tenggara. Di sini ia dibaca sebagai bahasa keluarga, bukan anjuran pemakaian.",
    novel:
      "Sirih membantu menunjukkan bagaimana anak-anak memberi nama pada dunia lewat tanaman di sekitar mereka.",
  },
  {
    name: "Pala",
    latin: "Myristica fragrans",
    category: "aroma",
    part: "Biji",
    copy:
      "Pala adalah rempah harum yang kuat. Karena kekuatannya, ia paling aman dipahami sebagai aroma cerita, bukan bahan eksperimen.",
    novel:
      "Sedikit pala dalam teh membuat rasa nyaman berubah menjadi pertanyaan: tidur macam apa yang sedang diminta?",
  },
  {
    name: "Kecubung",
    latin: "Datura sp.",
    category: "waspada",
    part: "Daun/biji/bunga",
    copy:
      "Kecubung adalah tanaman berisiko tinggi. Sumber medis mengaitkan Datura/jimsonweed dengan keracunan serius, delirium, dan gejala yang dapat mengenai banyak sistem tubuh.",
    novel:
      "Ia cocok menjadi petunjuk bahaya karena tampak botani, tetapi membawa ketidakpastian yang keras.",
  },
  {
    name: "Bintaro",
    latin: "Cerbera sp.",
    category: "waspada",
    part: "Daun/biji",
    copy:
      "Bintaro dikenal sebagai tanaman yang harus dihormati dari jarak aman. Beberapa bagian tanaman ini beracun dan tidak pantas dijadikan eksperimen rumah.",
    novel:
      "Bintaro mengingatkan bahwa alam di Wanakerta tidak selalu menjadi latar yang jinak.",
  },
  {
    name: "Jarak / Jarak Pagar",
    latin: "Ricinus communis / Jatropha curcas",
    category: "waspada",
    part: "Biji/getah/minyak",
    copy:
      "Nama 'jarak' bisa merujuk ke tanaman berbeda. Biji jarak tertentu mengandung toksin kuat; CDC mencatat ricin secara alami terdapat pada castor beans.",
    novel:
      "Aroma minyak jarak menjadi pintu memori traumatik: bukan sekadar bau, tapi tanda ada arsip yang dibakar.",
  },
  {
    name: "Gadung",
    latin: "Dioscorea hispida",
    category: "waspada",
    part: "Umbi",
    copy:
      "Gadung bukan bahan yang boleh diperlakukan sembarangan. Dalam banyak tradisi, penanganannya memerlukan pengetahuan khusus; website ini tidak memberi cara pakai.",
    novel:
      "Gadung menjadi simbol batas tipis antara pangan, pengetahuan lama, racun, dan ritual.",
  },
  {
    name: "Pule Pandak",
    latin: "Rauvolfia serpentina",
    category: "waspada",
    part: "Akar/daun",
    copy:
      "Pule pandak dikenal dalam sejarah penelitian alkaloid tanaman. Justru karena kuat, ia bukan tanaman untuk dipakai sendiri tanpa pengawasan ahli.",
    novel:
      "Ia bekerja seperti saksi botani: kering, rapi, dan terlalu dekat dengan arsip lama.",
  },
];

const clues = {
  ratih: {
    eyebrow: "Jejak digital",
    title: "Video terakhir Ratih",
    copy:
      "Ratih datang sebagai pemburu cerita. Rekamannya membuat Wanakerta tidak bisa lagi menyebut masa lalu sebagai rumor pasar.",
  },
  "0417": {
    eyebrow: "Waktu yang tidak selesai",
    title: "Jam 04.17",
    copy:
      "Angka ini muncul seperti jarum yang tersangkut di tubuh kota. Bukan hanya waktu, melainkan tanda bahwa sesuatu menolak selesai.",
  },
  arsip: {
    eyebrow: "Kertas, api, dan saksi",
    title: "Arsip yang tidak lengkap",
    copy:
      "Di Wanakerta, dokumen resmi tidak selalu lebih jujur daripada gosip, tubuh, foto, atau label herbarium.",
  },
  keluarga: {
    eyebrow: "Pola lama",
    title: "Lima tanaman, lima keluarga",
    copy:
      "Petunjuk botani membuka pola sosial: siapa yang dicatat, siapa yang dicoret, dan siapa yang dibuat ringan.",
  },
  festival: {
    eyebrow: "Wisata atau pengulangan",
    title: "Festival yang tidak pernah ada",
    copy:
      "Ketika tragedi dikemas ulang sebagai acara, Wanakerta memperlihatkan sisi paling modern dari horornya.",
  },
  nama: {
    eyebrow: "Hukum moral Wanakerta",
    title: "Nama yang dikembalikan",
    copy:
      "Novel ini bergerak menuju satu pertanyaan: apakah seseorang benar-benar hilang jika akhirnya ada yang berani menyebut namanya dengan lengkap?",
  },
};

const nameNotes = [
  "Nama ini berbau kertas baru dan pintu yang akhirnya dibuka.",
  "Labelnya tidak kosong. Ada bekas tanah basah di sudut kanan.",
  "Nama ini berat. Wanakerta perlu dua kali berpikir sebelum mencoba memindahkannya.",
  "Ada aroma secang tipis. Seperti keberanian yang belum diumumkan.",
  "Catatan pinggirnya berbunyi: jangan biarkan orang lain menulis akhir ceritamu.",
  "Menir menatap label ini selama tiga detik. Itu sudah termasuk persetujuan.",
];

function qs(selector, root = document) {
  return root.querySelector(selector);
}

function qsa(selector, root = document) {
  return Array.from(root.querySelectorAll(selector));
}

function setActive(buttons, activeButton) {
  buttons.forEach((button) => button.classList.toggle("active", button === activeButton));
}

function initMenu() {
  const toggle = qs(".menu-toggle");
  const nav = qs(".site-nav");
  if (!toggle || !nav) return;

  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });

  qsa("a", nav).forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

function initMap() {
  const pins = qsa(".map-pin");
  const zone = qs("[data-place-zone]");
  const name = qs("[data-place-name]");
  const copy = qs("[data-place-copy]");
  const scent = qs("[data-place-scent]");
  const note = qs("[data-place-note]");

  pins.forEach((pin) => {
    pin.addEventListener("click", () => {
      const data = places[pin.dataset.place];
      if (!data) return;
      setActive(pins, pin);
      zone.textContent = data.zone;
      name.textContent = data.name;
      copy.textContent = data.copy;
      scent.textContent = data.scent;
      note.textContent = data.note;
    });
  });
}

function characterCard(character) {
  const card = document.createElement("article");
  card.className = "character-card";
  card.dataset.group = character.group;
  card.innerHTML = `
    <span class="tag">${character.group}</span>
    <h3>${character.short}</h3>
    <p class="character-role">${character.role}</p>
    <p>${character.copy}</p>
    <div class="scent">${character.scent}</div>
  `;
  return card;
}

function initCharacters() {
  const grid = qs("[data-character-grid]");
  const search = qs("#character-search");
  const filters = qsa("[data-filter]");
  if (!grid) return;

  let activeFilter = "all";

  function render() {
    const term = (search?.value || "").toLowerCase().trim();
    const filtered = characters.filter((character) => {
      const matchesFilter = activeFilter === "all" || character.group === activeFilter;
      const haystack = `${character.name} ${character.short} ${character.role} ${character.scent} ${character.copy}`.toLowerCase();
      return matchesFilter && (!term || haystack.includes(term));
    });

    grid.innerHTML = "";
    if (!filtered.length) {
      const empty = document.createElement("article");
      empty.className = "character-card";
      empty.innerHTML = "<h3>Tidak ditemukan</h3><p>Coba nama, aroma, atau peran lain.</p>";
      grid.append(empty);
      return;
    }
    filtered.forEach((character) => grid.append(characterCard(character)));
  }

  filters.forEach((button) => {
    button.addEventListener("click", () => {
      activeFilter = button.dataset.filter;
      setActive(filters, button);
      render();
    });
  });

  search?.addEventListener("input", render);
  render();
}

function initLabels() {
  const output = qs("[data-label-output]");
  const next = qs("[data-next-label]");
  let index = 0;
  next?.addEventListener("click", () => {
    index = (index + 1) % labels.length;
    output.textContent = labels[index];
  });
}

function initRoutes() {
  const buttons = qsa("[data-route]");
  const result = qs("[data-route-result]");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const data = routes[button.dataset.route];
      if (!data) return;
      setActive(buttons, button);
      result.innerHTML = `<h4>${data.title}</h4><p>${data.copy}</p>`;
    });
  });
}

function initNameMachine() {
  const form = qs("[data-name-form]");
  const input = qs("[data-name-input]");
  const result = qs("[data-name-result]");
  form?.addEventListener("submit", (event) => {
    event.preventDefault();
    const raw = input.value.trim();
    if (!raw) {
      result.textContent = "Tulis namamu dulu. Label kosong terlalu mudah diambil kabut.";
      return;
    }
    const sum = Array.from(raw).reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const note = nameNotes[sum % nameNotes.length];
    result.textContent = `${raw}: ${note}`;
  });
}

function initPlants() {
  const buttons = qsa("[data-plant]");
  const role = qs("[data-plant-role]");
  const name = qs("[data-plant-name]");
  const copy = qs("[data-plant-copy]");
  const warning = qs("[data-plant-warning]");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const data = plants[button.dataset.plant];
      if (!data) return;
      setActive(buttons, button);
      role.textContent = data.role;
      name.textContent = data.name;
      copy.textContent = data.copy;
      warning.textContent = data.warning;
    });
  });
}

function realHerbCard(herb) {
  const card = document.createElement("article");
  card.className = `herb-card ${herb.category === "waspada" ? "waspada" : ""}`;
  card.innerHTML = `
    <span class="herb-category">${herb.category === "waspada" ? "perlu waspada" : herb.category}</span>
    <h3>${herb.name}</h3>
    <p class="latin-name">${herb.latin}</p>
    <p class="herb-part">${herb.part}</p>
    <p>${herb.copy}</p>
    <div class="herb-novel">${herb.novel}</div>
  `;
  return card;
}

function initRealHerbs() {
  const grid = qs("[data-real-herb-grid]");
  const search = qs("#herb-search");
  const filters = qsa("[data-herb-filter]");
  if (!grid) return;

  let activeFilter = "all";

  function render() {
    const term = (search?.value || "").toLowerCase().trim();
    const filtered = realHerbs.filter((herb) => {
      const matchesFilter = activeFilter === "all" || herb.category === activeFilter;
      const haystack = `${herb.name} ${herb.latin} ${herb.category} ${herb.part} ${herb.copy} ${herb.novel}`.toLowerCase();
      return matchesFilter && (!term || haystack.includes(term));
    });

    grid.innerHTML = "";
    if (!filtered.length) {
      const empty = document.createElement("article");
      empty.className = "herb-card";
      empty.innerHTML = "<h3>Tidak ditemukan</h3><p>Coba nama tanaman, aroma, bagian tanaman, atau kategori lain.</p>";
      grid.append(empty);
      return;
    }

    filtered.forEach((herb) => grid.append(realHerbCard(herb)));
  }

  filters.forEach((button) => {
    button.addEventListener("click", () => {
      activeFilter = button.dataset.herbFilter;
      setActive(filters, button);
      render();
    });
  });

  search?.addEventListener("input", render);
  render();
}

function initClues() {
  const cards = qsa("[data-clue]");
  const drawer = qs("[data-clue-drawer]");
  cards.forEach((card) => {
    card.addEventListener("click", () => {
      const data = clues[card.dataset.clue];
      if (!data) return;
      setActive(cards, card);
      drawer.innerHTML = `
        <p class="eyebrow">${data.eyebrow}</p>
        <h3>${data.title}</h3>
        <p>${data.copy}</p>
        <a class="button button-dark" href="${buyUrl}" target="_blank" rel="noreferrer">Baca jawaban lengkap</a>
      `;
    });
  });
}

function initHeaderShadow() {
  const header = qs("[data-header]");
  if (!header) return;
  const update = () => header.classList.toggle("scrolled", window.scrollY > 12);
  update();
  window.addEventListener("scroll", update, { passive: true });
}

initMenu();
initMap();
initCharacters();
initLabels();
initRoutes();
initNameMachine();
initPlants();
initRealHerbs();
initClues();
initHeaderShadow();
