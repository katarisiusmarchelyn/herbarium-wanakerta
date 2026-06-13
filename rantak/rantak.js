const isEnglish = document.documentElement.lang.startsWith("en");

const copy = {
  id: {
    mapFallback: "Pilih titik di peta untuk membuka catatan lokasi tanpa spoiler.",
    routeFallback: "Pilih satu titik prosesi untuk melihat kenapa ruang, suara, dan ingatan bisa menjadi bagian dari teka-teki.",
    noResults: "Tidak ada hasil. Coba istilah lain.",
    audioOn: "Pause musik",
    audioOff: "Play musik",
    audioPlaying: "Musik aktif",
    audioPaused: "Musik mati",
    audioBlocked: "Klik untuk mulai",
    chapterIntro: "Pilih bab untuk membuka catatan pembacaan spoiler-safe.",
  },
  en: {
    mapFallback: "Choose a point on the map to open a spoiler-safe field note.",
    routeFallback: "Choose a procession point to see how space, sound, and memory become part of the puzzle.",
    noResults: "No results. Try another term.",
    audioOn: "Pause music",
    audioOff: "Play music",
    audioPlaying: "Music on",
    audioPaused: "Music paused",
    audioBlocked: "Tap to start",
    chapterIntro: "Choose a chapter to open a spoiler-safe reading note.",
  },
}[isEnglish ? "en" : "id"];

const mapPoints = isEnglish
  ? [
      ["kan", "KAN Hall", "Public legitimacy", "Where custom is discussed, records are stored, and careful words can make a decision feel inevitable.", "Look for the color of stamps, changed schedules, and who always stands near the locked cabinets.", "49%", "43%"],
      ["surau", "Old Surau", "Sound and witness", "A place of prayer and community calm, but also the point where drumbeats shape everyone’s sense of time.", "The beduk does not lie. People’s memory of it can.", "61%", "39%"],
      ["rangkiang", "Great Rice Barn", "Memory storage", "More than a granary: it holds family memory, shame, and one question nobody wants opened too early.", "A wrong key can say more than an open door.", "35%", "57%"],
      ["bridge", "Oath Bridge", "Threshold", "The main access over Lurah Mati River. In fog and rain, a person can seem to be somewhere they are not.", "Mud, light, and sound do not agree with the village story.", "37%", "73%"],
      ["stones", "Batu Tigo Bateh", "Boundary stones", "Three stones named as ancestral markers. Old photos, new maps, and memory do not line up cleanly.", "A boundary can move long before anyone admits it moved.", "47%", "18%"],
      ["grove", "Upper Forbidden Grove", "Fear boundary", "A protected place that keeps people from looking too closely at the older routes around it.", "Not every trace said to come from the forest truly begins there.", "77%", "17%"],
      ["irrigation", "Old Irrigation Service Path", "Hidden route", "A narrow, wet path known by workers and farmers, missing from the official version of space.", "The soil here remembers a different road.", "71%", "31%"],
      ["leni", "Uni Leni’s Stall", "Rumor engine", "Coffee, phones, road gossip, and the raw version of testimony before it becomes polite.", "The earliest story is often messy, but not always wrong.", "70%", "77%"],
      ["beni", "Beni’s Post", "Law under pressure", "A small post where procedure meets panic, and calm can become its own kind of danger.", "Order is not the same as truth.", "57%", "57%"],
      ["ramlah", "Ramlah House", "Genealogy", "The old house of a women’s line, where a name in a family record can weigh more than a title deed.", "A crossed-out name has not vanished. It is waiting.", "26%", "44%"],
    ]
  : [
      ["kan", "Balai KAN", "Legitimasi publik", "Tempat adat dibicarakan, dokumen disimpan, dan kalimat hati-hati bisa membuat keputusan terasa sudah semestinya.", "Perhatikan warna stempel, jadwal yang berubah, dan siapa yang selalu dekat lemari arsip.", "49%", "43%"],
      ["surau", "Surau Tuo", "Suara dan saksi", "Ruang ibadah dan sosial yang tenang, tetapi beduknya menjadi penanda waktu bagi banyak ingatan.", "Beduk tidak berbohong. Ingatan manusia tentang beduk bisa.", "61%", "39%"],
      ["rangkiang", "Rangkiang Gadang", "Penyimpanan memori", "Lebih dari lumbung padi: ia menyimpan memori keluarga, malu, dan satu pertanyaan yang belum boleh dibuka.", "Kunci yang salah bisa berbicara lebih keras daripada pintu yang terbuka.", "35%", "57%"],
      ["bridge", "Titian Sumpah", "Batas masuk", "Akses utama di atas Sungai Lurah Mati. Dalam kabut dan hujan, seseorang bisa terlihat berada di tempat yang salah.", "Lumpur, lampu, dan suara tidak sepakat dengan cerita warga.", "37%", "73%"],
      ["stones", "Batu Tigo Bateh", "Batu batas", "Tiga batu yang disebut penanda leluhur. Foto lama, peta baru, dan ingatan warga tidak berdiri di garis yang sama.", "Batas bisa berpindah jauh sebelum orang mengakuinya.", "47%", "18%"],
      ["grove", "Rimbo Larangan Ulu", "Batas takut", "Tempat pantang yang membuat warga enggan memeriksa jalur-jalur tua di sekitarnya.", "Tidak semua jejak yang disebut dari hutan benar-benar bermula dari hutan.", "77%", "17%"],
      ["irrigation", "Jalur Servis Irigasi Lama", "Rute tersembunyi", "Jalur basah dan sempit yang diketahui pekerja lama, tetapi hilang dari versi ruang yang resmi.", "Tanah di sini mengingat jalan lain.", "71%", "31%"],
      ["leni", "Warung Uni Leni", "Mesin rumor", "Kopi, ponsel dicas, kabar jalan, dan versi kesaksian yang belum sempat dirapikan.", "Cerita paling awal sering berantakan, tetapi belum tentu salah.", "70%", "77%"],
      ["beni", "Pos Kecil Beni", "Hukum tertekan", "Pos kecil tempat prosedur bertemu kepanikan, dan ketertiban bisa menjadi bahaya tersendiri.", "Tenang tidak selalu sama dengan benar.", "57%", "57%"],
      ["ramlah", "Rumah Gadang Ramlah", "Silsilah", "Rumah garis perempuan, tempat satu nama dalam catatan keluarga bisa lebih berat daripada surat tanah.", "Nama yang dicoret belum hilang. Ia menunggu.", "26%", "44%"],
    ];

const routeSteps = isEnglish
  ? [
      ["01", "KAN Hall", "The procession begins in public legitimacy. A ritual is never just movement; it is an agreed order of who may speak, who must wait, and what must not be questioned."],
      ["02", "Old Surau", "The drumbeat gives time a moral shape. When witnesses rely on sound more than sight, a single changed beat can bend memory."],
      ["03", "Rice Barn Yard", "Food, inheritance, and family memory meet here. The barn is a symbol before it becomes a clue."],
      ["04", "Oath Bridge", "The bridge is a threshold: inside and outside, past and present, fear and evidence. Fog turns distance into rumor."],
      ["05", "Batu Tigo Bateh", "Boundary stones make the land feel older than paperwork. The question is not whether people believe in them; it is who benefits when nobody measures them again."],
      ["06", "Return Route", "The most dangerous part of a ritual may be the way back, when everyone thinks the meaning has already been decided."],
    ]
  : [
      ["01", "Balai KAN", "Prosesi dimulai dari legitimasi publik. Ritual bukan hanya gerak; ia adalah urutan siapa boleh bicara, siapa harus menunggu, dan apa yang tidak boleh ditanya."],
      ["02", "Surau Tuo", "Beduk memberi bentuk moral pada waktu. Saat saksi lebih percaya suara daripada penglihatan, satu pola yang berubah bisa membengkokkan ingatan."],
      ["03", "Halaman Rangkiang", "Pangan, pusako, dan memori keluarga bertemu di sini. Rangkiang menjadi simbol sebelum menjadi petunjuk."],
      ["04", "Titian Sumpah", "Jembatan adalah batas: dalam dan luar, masa lalu dan kini, takut dan bukti. Kabut membuat jarak berubah menjadi rumor."],
      ["05", "Batu Tigo Bateh", "Batu batas membuat tanah terasa lebih tua daripada dokumen. Pertanyaannya bukan apakah warga percaya, melainkan siapa diuntungkan saat tak ada yang mengukur ulang."],
      ["06", "Rute Pulang", "Bagian paling berbahaya dari ritual bisa terjadi saat pulang, ketika semua orang mengira makna sudah selesai ditetapkan."],
    ];

const characters = isEnglish
  ? [
      ["nadira", "investigator", "Nadira Rahma Halim", "Cultural journalist, partial insider, rational detective. She returns to test time, distance, testimony, and inherited silence."],
      ["beni", "law", "Aipda Beni Pratama", "A local officer who knows a reckless accusation can split the village, but order without justice only gives lies more time."],
      ["puti", "memory", "Puti Ramlah", "Keeper of genealogy and women’s memory. She knows that an inheritance is not just land, but the face of a whole line."],
      ["sia", "witness", "Samsidar / Mak Sia", "A ritual worker people underestimate. She may forget a name, but her hands remember the correct knots."],
      ["nuraini", "law", "Nuraini Syafitri", "Village midwife and rational medical voice. She reads bodies when fear wants to translate them into omens."],
      ["rifaldi", "memory", "Rifaldi Salim", "A local history teacher whose small compromises with archives open larger doors than he intended."],
      ["datuk", "custom", "Datuk Yunus Malin Basa", "A respected elder carrying the cost of silence. His question is whether quiet can still be called wisdom."],
      ["yulisa", "witness", "Yulisa Mardiah", "A widow judged faster than the evidence around her. Her grief refuses to fit the village’s easiest story."],
      ["fikri", "suspect", "Fikri Mahyudin", "The technical helper everyone can blame because wires, lamps, and generators are easier to accuse than power."],
      ["rasyad", "custom", "Haji Rasyad Karim", "A trusted arranger of words, records, and public calm. He appears most useful when everyone else is afraid to ask."],
    ]
  : [
      ["nadira", "investigator", "Nadira Rahma Halim", "Jurnalis budaya, insider parsial, detektif rasional. Ia pulang untuk menguji waktu, jarak, kesaksian, dan diam yang diwariskan."],
      ["beni", "law", "Aipda Beni Pratama", "Aparat lokal yang tahu tuduhan ceroboh bisa memecah nagari, tetapi ketertiban tanpa keadilan hanya memberi waktu pada kebohongan."],
      ["puti", "memory", "Puti Ramlah", "Penjaga silsilah dan memori perempuan. Ia tahu pusako bukan sekadar tanah, melainkan muka satu garis keluarga."],
      ["sia", "witness", "Samsidar / Mak Sia", "Pekerja ritual yang sering diremehkan. Ia bisa lupa nama orang, tetapi tangannya tidak lupa simpul."],
      ["nuraini", "law", "Nuraini Syafitri", "Bidan desa dan suara medis rasional. Ia membaca tubuh saat rasa takut ingin menerjemahkannya menjadi pertanda."],
      ["rifaldi", "memory", "Rifaldi Salim", "Guru sejarah lokal yang belajar bahwa kompromi kecil pada arsip dapat membuka pintu yang terlalu besar."],
      ["datuk", "custom", "Datuk Yunus Malin Basa", "Tetua yang dihormati dan menanggung harga dari diam. Pertanyaannya: apakah diam masih bisa disebut bijak?"],
      ["yulisa", "witness", "Yulisa Mardiah", "Janda yang dihakimi lebih cepat daripada bukti. Dukanya tidak mau masuk ke cerita paling mudah milik warga."],
      ["fikri", "suspect", "Fikri Mahyudin", "Pemuda logistik yang mudah disalahkan karena kabel, lampu, dan generator lebih gampang dituduh daripada kuasa."],
      ["rasyad", "custom", "Haji Rasyad Karim", "Pengatur kata, arsip, dan ketenangan publik. Ia tampak paling membantu ketika orang lain takut bertanya."],
    ];

const glossary = isEnglish
  ? [
      ["Nagari", "A Minangkabau local community and administrative-cultural unit. In this novel, it is both home and pressure system."],
      ["Adat", "Customary law, social memory, and communal ethics. The novel treats adat as dignified, not as the villain."],
      ["KAN", "Kerapatan Adat Nagari, the customary council. A place where legitimacy can protect truth or hide it."],
      ["Rumah gadang", "A traditional Minangkabau house tied to matrilineal family memory."],
      ["Rangkiang", "A rice barn; here, also a symbol of stored names, shame, and evidence."],
      ["Surau", "A prayer and social learning space. The old drum becomes part of the time puzzle."],
      ["Titian", "A small bridge or crossing. Titian Sumpah is the village’s symbolic threshold."],
      ["Rimbo", "Forest or grove. In the story it marks fear, restraint, and unseen routes."],
      ["Pusako", "Inheritance, especially family or clan inheritance that carries identity, not only property."],
      ["Bundo kanduang", "A respected female moral authority in Minangkabau social life."],
      ["Mamak", "A maternal uncle or male elder with responsibility in the matrilineal family structure."],
      ["Kemenakan", "A younger family member under the guidance of a mamak; often tied to inheritance duties."],
      ["Marwah", "Dignity, honor, social standing. A powerful pressure in the village."],
      ["Malu", "Shame as social force. In Rantak, shame can silence people more effectively than threats."],
      ["Bateh", "Boundary. Batu Tigo Bateh means three boundary stones."],
      ["Peta ulayat", "A customary land map. When maps change, memory and power change with them."],
    ]
  : [
      ["Nagari", "Kesatuan wilayah adat dan pemerintahan lokal. Di novel ini, nagari menjadi rumah sekaligus sistem tekanan."],
      ["Adat", "Hukum kebiasaan, memori sosial, dan etika komunal. Novel ini menjaga adat sebagai sesuatu yang bermartabat."],
      ["KAN", "Kerapatan Adat Nagari, ruang musyawarah adat. Di sana legitimasi bisa melindungi kebenaran atau menutupinya."],
      ["Rumah gadang", "Rumah tradisional Minangkabau yang berkaitan dengan memori keluarga garis ibu."],
      ["Rangkiang", "Lumbung padi; dalam cerita juga menjadi simbol nama, malu, dan bukti yang disimpan."],
      ["Surau", "Ruang ibadah dan sosial. Beduk surau tua menjadi bagian dari teka-teki waktu."],
      ["Titian", "Jembatan kecil atau penyeberangan. Titian Sumpah menjadi batas simbolik nagari."],
      ["Rimbo", "Hutan atau rimba. Dalam cerita, ia menandai takut, pantang, dan rute yang tidak terlihat."],
      ["Pusako", "Warisan keluarga/kaum yang membawa identitas, bukan cuma harta."],
      ["Bundo kanduang", "Otoritas moral perempuan dalam struktur sosial Minangkabau."],
      ["Mamak", "Paman dari garis ibu atau tetua laki-laki yang bertanggung jawab dalam keluarga matrilineal."],
      ["Kemenakan", "Generasi muda dalam tanggung jawab mamak, sering terkait waris dan martabat kaum."],
      ["Marwah", "Martabat dan harga sosial. Di nagari, marwah dapat membuat orang diam."],
      ["Malu", "Rasa sosial yang mengatur ucapan. Di Rantak, malu bisa lebih kuat daripada ancaman."],
      ["Bateh", "Batas. Batu Tigo Bateh berarti tiga batu batas."],
      ["Peta ulayat", "Peta batas tanah adat. Jika peta berubah, ingatan dan kuasa ikut berubah."],
    ];

const chapters = isEnglish
  ? [
      ["1", "Returning to the Valley That Never Fell Silent", "Nadira crosses into a village that recognizes her bloodline before it recognizes her profession."],
      ["2", "Ancestor Offering Night", "Offerings, lamps, knots, and old words begin to disagree with the ritual’s official calm."],
      ["3", "Oath Bridge", "A bridge, a drumbeat, and a wrong light teach the reader how this village measures fear."],
      ["4", "The First Victim", "The first death looks like an old warning, but its soil tells a different story."],
      ["5", "The Widow, the Lamp, and the Mud", "Grief becomes suspicion, and suspicion becomes easier than reading the ground."],
      ["6", "The Archive That Must Not Be Read", "Records begin to move like living things, and one stamp does not belong with the others."],
      ["7", "A Knot Not Tied by Old Hands", "A small hand-made detail starts to cut through the village’s larger story."],
      ["8", "The Locked Rice Barn", "A place built to store food becomes a chamber of memory."],
      ["9", "The Second Victim", "The second death turns the case from reporting into inheritance."],
      ["10", "The Crossed-Out Name", "A missing name becomes heavier than any ghost story."],
      ["11", "The Photograph from Above", "The young believe a picture can end an argument. The village knows pictures need interpreters."],
      ["12", "Three Pieces of Evidence That Must Not Meet", "Map, body, and archive begin to point toward the same wound."],
      ["13", "The Storm Closes the Bridge", "Isolation changes every alibi, every rumor, and every reason to stay quiet."],
      ["14", "The Third Voice", "A message, a sound, and a witness force the case into a sharper shape."],
      ["15", "Evidence Too Neat", "When an answer arrives too cleanly, Nadira starts trusting the mess."],
      ["16", "The Boy Too Easy to Blame", "A suspect can be guilty of fear, obedience, and mistakes without being the center."],
      ["17", "The Basket That Remembered Wrong", "An overlooked ritual worker remembers what the powerful forgot to erase."],
      ["18", "The Route No Ghost Ever Took", "The village’s roads begin to explain what its legends could not."],
      ["19", "The Man Too Eager to Help", "Help can be a kindness, a performance, or a way to hold the room."],
      ["20", "The Curse That Was Made", "The shape of the curse begins to look built, not born."],
      ["21", "The Name Beneath the Ground", "Truth asks to be spoken in a room where everyone has something to lose."],
    ]
  : [
      ["1", "Pulang ke Lembah yang Tidak Pernah Diam", "Nadira memasuki nagari yang mengenali garis ibunya lebih dulu daripada profesinya."],
      ["2", "Malam Pamagangan Leluhur", "Sesaji, lampu, simpul, dan kata lama mulai tidak sepakat dengan ketenangan ritual."],
      ["3", "Titian Sumpah", "Jembatan, beduk, dan lampu yang keliru mengajari pembaca bagaimana nagari ini mengukur takut."],
      ["4", "Korban Pertama", "Kematian pertama tampak seperti peringatan lama, tetapi tanahnya bercerita lain."],
      ["5", "Janda, Lampu, dan Lumpur", "Duka berubah menjadi kecurigaan, dan kecurigaan terasa lebih mudah daripada membaca jejak."],
      ["6", "Arsip yang Tak Boleh Dibaca", "Dokumen mulai bergerak seperti benda hidup, dan satu stempel tidak cocok dengan yang lain."],
      ["7", "Simpul yang Tidak Diikat Tangan Tua", "Detail kecil buatan tangan mulai memotong cerita besar milik warga."],
      ["8", "Rangkiang yang Dikunci", "Tempat penyimpanan padi berubah menjadi ruang memori."],
      ["9", "Korban Kedua", "Kematian kedua mengubah kasus dari liputan menjadi persoalan waris."],
      ["10", "Nama yang Dicoret", "Satu nama yang hilang menjadi lebih berat daripada cerita hantu mana pun."],
      ["11", "Foto dari Atas", "Anak muda percaya gambar bisa mengakhiri perdebatan. Nagari tahu gambar tetap butuh penafsir."],
      ["12", "Tiga Bukti yang Tidak Boleh Bertemu", "Peta, tubuh, dan arsip mulai menunjuk luka yang sama."],
      ["13", "Badai Menutup Jembatan", "Isolasi mengubah alibi, rumor, dan alasan orang untuk diam."],
      ["14", "Suara Ketiga", "Pesan, suara, dan saksi membuat kasus semakin tajam."],
      ["15", "Bukti yang Terlalu Rapi", "Saat jawaban datang terlalu bersih, Nadira mulai mempercayai bagian yang berantakan."],
      ["16", "Anak yang Terlalu Mudah Disalahkan", "Seseorang bisa bersalah karena takut dan patuh tanpa menjadi pusat kejahatan."],
      ["17", "Bakul yang Salah Mengingat", "Pekerja ritual yang diremehkan mengingat hal yang gagal dihapus orang berkuasa."],
      ["18", "Rute yang Tidak Pernah Dilewati Hantu", "Jalan-jalan nagari mulai menjelaskan hal yang tak bisa dijelaskan legenda."],
      ["19", "Orang yang Terlalu Ingin Membantu", "Bantuan bisa menjadi kebaikan, pertunjukan, atau cara memegang ruangan."],
      ["20", "Kutukan yang Diciptakan", "Bentuk kutukan mulai terlihat dibuat, bukan lahir."],
      ["21", "Nama di Bawah Tanah", "Kebenaran meminta diucapkan di ruangan tempat semua orang punya sesuatu untuk hilang."],
    ];

function initHeader() {
  const header = document.querySelector("[data-rantak-header]");
  const toggle = document.querySelector("[data-rantak-menu]");
  if (!header || !toggle) return;
  const updateHeader = () => header.classList.toggle("is-scrolled", window.scrollY > 18);
  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });
  toggle.addEventListener("click", () => {
    const open = header.classList.toggle("nav-open");
    toggle.setAttribute("aria-expanded", String(open));
  });
  header.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      header.classList.remove("nav-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

function initAudio() {
  const shell = document.querySelector("[data-audio-shell]");
  const audio = document.querySelector("[data-bg-audio]");
  const button = document.querySelector("[data-audio-toggle]");
  if (!shell || !audio || !button) return;

  const label = button.querySelector("[data-audio-label]");
  const hint = button.querySelector("[data-audio-hint]");

  function setState(playing, blocked = false) {
    button.setAttribute("aria-pressed", String(playing));
    label.textContent = playing ? copy.audioOn : copy.audioOff;
    hint.textContent = blocked ? copy.audioBlocked : playing ? copy.audioPlaying : copy.audioPaused;
    shell.classList.toggle("needs-action", blocked);
  }

  const tryPlay = () => {
    audio.volume = 0.42;
    audio.play()
      .then(() => setState(true, false))
      .catch(() => setState(false, true));
  };

  tryPlay();
  button.addEventListener("click", () => {
    if (audio.paused) {
      tryPlay();
    } else {
      audio.pause();
      setState(false, false);
    }
  });
}

function initEmbers() {
  const canvas = document.querySelector("[data-embers]");
  if (!canvas || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const ctx = canvas.getContext("2d");
  let width = 0;
  let height = 0;
  let particles = [];

  function resize() {
    const rect = canvas.getBoundingClientRect();
    width = canvas.width = Math.max(1, Math.floor(rect.width * window.devicePixelRatio));
    height = canvas.height = Math.max(1, Math.floor(rect.height * window.devicePixelRatio));
    particles = Array.from({ length: Math.min(72, Math.floor(rect.width / 18)) }, () => ({
      x: Math.random() * width,
      y: height + Math.random() * height * 0.3,
      r: 1 + Math.random() * 2.8,
      v: 0.35 + Math.random() * 1.1,
      sway: Math.random() * 1.4,
      hue: Math.random() > 0.5 ? "207,44,29" : "229,193,125",
      alpha: 0.18 + Math.random() * 0.48,
    }));
  }

  function tick() {
    ctx.clearRect(0, 0, width, height);
    particles.forEach((p) => {
      p.y -= p.v * window.devicePixelRatio;
      p.x += Math.sin(p.y * 0.01) * p.sway;
      if (p.y < -20) {
        p.y = height + 20;
        p.x = Math.random() * width;
      }
      ctx.beginPath();
      ctx.fillStyle = `rgba(${p.hue},${p.alpha})`;
      ctx.shadowColor = `rgba(${p.hue},0.65)`;
      ctx.shadowBlur = 18;
      ctx.arc(p.x, p.y, p.r * window.devicePixelRatio, 0, Math.PI * 2);
      ctx.fill();
    });
    requestAnimationFrame(tick);
  }

  resize();
  window.addEventListener("resize", resize, { passive: true });
  tick();
}

function initReveal() {
  const items = document.querySelectorAll(".reveal");
  if (!items.length) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("is-visible");
    });
  }, { threshold: 0.13 });
  items.forEach((item) => {
    if (item.getBoundingClientRect().top < window.innerHeight * 0.96) item.classList.add("is-visible");
    observer.observe(item);
  });
}

function renderMap() {
  const frame = document.querySelector("[data-map-frame]");
  const panel = document.querySelector("[data-map-panel]");
  if (!frame || !panel) return;
  const title = panel.querySelector("[data-map-title]");
  const role = panel.querySelector("[data-map-role]");
  const body = panel.querySelector("[data-map-body]");
  const clue = panel.querySelector("[data-map-clue]");

  function select(point) {
    const [id, name, roleText, bodyText, clueText, x, y] = point;
    frame.style.setProperty("--spot-x", x);
    frame.style.setProperty("--spot-y", y);
    title.textContent = name;
    role.textContent = roleText;
    body.textContent = bodyText;
    clue.textContent = clueText;
    frame.querySelectorAll(".nagari-pin").forEach((pin) => pin.classList.toggle("is-active", pin.dataset.place === id));
  }

  mapPoints.forEach((point, index) => {
    const [id, name, , , , x, y] = point;
    const button = document.createElement("button");
    button.className = "nagari-pin";
    button.type = "button";
    button.dataset.place = id;
    button.style.setProperty("--x", x);
    button.style.setProperty("--y", y);
    button.setAttribute("aria-label", name);
    button.addEventListener("click", () => select(point));
    frame.append(button);
    if (index === 0) select(point);
  });
}

function renderRoute() {
  const list = document.querySelector("[data-route-list]");
  const title = document.querySelector("[data-route-title]");
  const body = document.querySelector("[data-route-body]");
  const fill = document.querySelector("[data-route-fill]");
  if (!list || !title || !body || !fill) return;

  function select(index) {
    const [num, name, text] = routeSteps[index];
    title.textContent = `${num}. ${name}`;
    body.textContent = text;
    fill.style.width = `${((index + 1) / routeSteps.length) * 100}%`;
    list.querySelectorAll(".route-step").forEach((button, buttonIndex) => button.classList.toggle("is-active", buttonIndex === index));
  }

  routeSteps.forEach(([num, name], index) => {
    const button = document.createElement("button");
    button.className = "route-step";
    button.type = "button";
    button.dataset.route = name.toLowerCase().replace(/\s+/g, "-");
    button.innerHTML = `<b>${num}</b><span>${name}</span>`;
    button.addEventListener("click", () => select(index));
    list.append(button);
  });
  select(0);
}

function renderCards() {
  const characterGrid = document.querySelector("[data-character-grid]");
  const glossaryGrid = document.querySelector("[data-glossary-grid]");
  const chapterGrid = document.querySelector("[data-chapter-grid]");
  if (characterGrid) {
    characterGrid.innerHTML = characters.map(([id, type, name, text]) => `
      <article class="character-card reveal" data-card-type="${type}" data-card-text="${`${name} ${text} ${type}`.toLowerCase()}">
        <span>${type}</span>
        <h3>${name}</h3>
        <p>${text}</p>
      </article>
    `).join("");
  }
  if (glossaryGrid) {
    glossaryGrid.innerHTML = glossary.map(([term, text]) => `
      <article class="glossary-card reveal" data-card-text="${`${term} ${text}`.toLowerCase()}">
        <span>${isEnglish ? "Indonesian term" : "Istilah"}</span>
        <h3>${term}</h3>
        <p>${text}</p>
      </article>
    `).join("");
  }
  if (chapterGrid) {
    chapterGrid.innerHTML = chapters.map(([num, title, note]) => `
      <button class="chapter-card reveal" type="button" data-chapter="${num}" data-note="${note.replace(/"/g, "&quot;")}" data-title="${title.replace(/"/g, "&quot;")}">
        <span>${isEnglish ? "Chapter" : "Bab"} ${num}</span>
        <h3>${title}</h3>
        <p>${note}</p>
      </button>
    `).join("");
  }
}

function initFilters() {
  const characterSearch = document.querySelector("#rantak-character-search");
  const glossarySearch = document.querySelector("#rantak-glossary-search");
  const filterButtons = document.querySelectorAll("[data-filter]");

  function filterCharacters(type = document.querySelector("[data-filter].is-active")?.dataset.filter || "all") {
    const query = (characterSearch?.value || "").trim().toLowerCase();
    document.querySelectorAll("[data-character-grid] .character-card").forEach((card) => {
      const typeMatch = type === "all" || card.dataset.cardType === type;
      const textMatch = !query || card.dataset.cardText.includes(query);
      card.classList.toggle("is-hidden", !(typeMatch && textMatch));
    });
  }

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      filterButtons.forEach((item) => item.classList.remove("is-active"));
      button.classList.add("is-active");
      filterCharacters(button.dataset.filter);
    });
  });
  characterSearch?.addEventListener("input", () => filterCharacters());

  glossarySearch?.addEventListener("input", () => {
    const query = glossarySearch.value.trim().toLowerCase();
    document.querySelectorAll("[data-glossary-grid] .glossary-card").forEach((card) => {
      card.classList.toggle("is-hidden", query && !card.dataset.cardText.includes(query));
    });
  });
}

function initChapters() {
  const note = document.querySelector("[data-chapter-note]");
  const grid = document.querySelector("[data-chapter-grid]");
  if (!note || !grid) return;
  note.textContent = copy.chapterIntro;
  grid.addEventListener("click", (event) => {
    const card = event.target.closest(".chapter-card");
    if (!card) return;
    grid.querySelectorAll(".chapter-card").forEach((item) => item.classList.toggle("is-active", item === card));
    note.innerHTML = `<strong>${isEnglish ? "Chapter" : "Bab"} ${card.dataset.chapter}: ${card.dataset.title}</strong><br>${card.dataset.note}`;
  });
}

function initOathConsole() {
  const consoleEl = document.querySelector("[data-oath-console]");
  const result = document.querySelector("[data-oath-result]");
  if (!consoleEl || !result) return;
  const selected = new Set();
  const messages = isEnglish
    ? {
        partial: "The village is not asking for belief yet. It is asking whether you noticed the order.",
        complete: "You chose map, drum, and archive: the three quiet tools that can turn a curse back into a human puzzle.",
      }
    : {
        partial: "Nagari belum meminta kamu percaya. Ia baru bertanya apakah kamu memperhatikan urutan.",
        complete: "Kamu memilih peta, beduk, dan arsip: tiga alat sunyi yang bisa mengubah kutukan kembali menjadi teka-teki manusia.",
      };
  consoleEl.addEventListener("click", (event) => {
    const button = event.target.closest("[data-oath]");
    if (!button) return;
    button.classList.toggle("is-selected");
    if (button.classList.contains("is-selected")) selected.add(button.dataset.oath);
    else selected.delete(button.dataset.oath);
    result.textContent = selected.has("map") && selected.has("drum") && selected.has("archive")
      ? messages.complete
      : messages.partial;
  });
}

function initTilt() {
  const card = document.querySelector("[data-cover-tilt]");
  if (!card || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  card.addEventListener("pointermove", (event) => {
    const rect = card.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `perspective(900px) rotateY(${x * 7}deg) rotateX(${-y * 7}deg)`;
  });
  card.addEventListener("pointerleave", () => {
    card.style.transform = "";
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initHeader();
  initAudio();
  initEmbers();
  renderCards();
  renderMap();
  renderRoute();
  initFilters();
  initChapters();
  initOathConsole();
  initTilt();
  initReveal();
});
