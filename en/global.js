const categoryLabels = {
  admin: "Local admin",
  address: "Address",
  daily: "Daily life",
  herbal: "Herbal",
  ritual: "Ritual",
  place: "Place",
  concept: "Concept",
};

const pathData = {
  new: {
    kicker: "Recommended first route",
    title: "Begin with the social map.",
    copy:
      "Wanakerta is officially a kelurahan, but emotionally it behaves like an old village: everyone knows someone, gossip moves fast, documents matter, and silence can become a form of power.",
    link: "#local-world",
    label: "Open the social map",
  },
  reading: {
    kicker: "For chapter-by-chapter reading",
    title: "Keep the glossary open.",
    copy:
      "You do not need to stop for every Indonesian word. Search when a term blocks meaning, then return to the scene. Repetition will teach the rest.",
    link: "#glossary",
    label: "Search the glossary",
  },
  mystery: {
    kicker: "For clue hunters",
    title: "Track places, records, and names.",
    copy:
      "The mystery is not only hidden in the forest. It lives in missing archives, local programs, old photographs, market talk, and names that become too easy to move.",
    link: "#map",
    label: "Open the map",
  },
  plants: {
    kicker: "For botanical readers",
    title: "Read plants as symbols first.",
    copy:
      "Real Indonesian plants create scent and cultural texture. Fictional plant-signs carry the horror. The field guide separates atmosphere from real-world use.",
    link: "#field-guide",
    label: "Open the field guide",
  },
};

const glossaryTerms = [
  {
    term: "Wanakerta",
    category: "place",
    pronunciation: "wah-nah-KER-tah",
    meaning: "The fictional misty mountain town where the novel takes place.",
    why: "It feels like a small town trying to look modern while older village memory keeps pushing back.",
  },
  {
    term: "Wanakerat",
    category: "place",
    meaning: "An older name tied to Wanakerta's buried past.",
    why: "When this older form appears, the story is usually pointing toward what the official town name tries to hide.",
  },
  {
    term: "Kota Mati",
    category: "concept",
    meaning: "Literally 'Dead Town.' It does not mean the town is empty.",
    why: "The phrase points to interrupted growth: erased records, renamed roads, swallowed histories, and names made silent.",
  },
  {
    term: "Kelurahan",
    category: "admin",
    pronunciation: "keh-loo-RAH-hahn",
    meaning: "A local administrative unit in Indonesia, close to an urban village or municipal ward.",
    why: "Wanakerta's horror often moves through local paperwork rather than castles, courts, or distant capitals.",
  },
  {
    term: "Kantor Kelurahan",
    category: "admin",
    meaning: "The ward office where local records and public administration are handled.",
    why: "Birth records, death books, land maps, and social lists can decide who is visible in the town.",
  },
  {
    term: "Lurah",
    category: "admin",
    meaning: "The head of a kelurahan. Not exactly a mayor, but a local official with influence over programs and records.",
    why: "Damar Kuncoro's role matters because development plans and erased history meet at his desk.",
  },
  {
    term: "Balai Desa",
    category: "admin",
    meaning: "Literally 'village hall.' Older residents may still use village language even when the official status changed.",
    why: "The term shows how daily speech remembers what bureaucracy updates on paper.",
  },
  {
    term: "RT",
    category: "admin",
    meaning: "Rukun Tetangga, the smallest neighborhood unit, usually a cluster of households.",
    why: "In local life, where someone belongs can be described through tiny neighborhood units.",
  },
  {
    term: "RW",
    category: "admin",
    meaning: "Rukun Warga, a larger neighborhood unit containing several RTs.",
    why: "It gives the town a close social scale where residents, gossip, and responsibility overlap.",
  },
  {
    term: "Linmas",
    category: "admin",
    meaning: "Local civil-protection personnel who help with security, crowds, and community events.",
    why: "They sit between ordinary residents and official power during public tension.",
  },
  {
    term: "Polsek",
    category: "admin",
    meaning: "A sector-level police station.",
    why: "Bagas and Rukman work from a local police world where procedure meets a town that resists clean answers.",
  },
  {
    term: "Puskesmas",
    category: "admin",
    pronunciation: "poos-KES-mahs",
    meaning: "A government community health center for primary care and local public health services.",
    why: "It is not a hospital, but in the novel it becomes a site where bodies, records, and guilt intersect.",
  },
  {
    term: "RSUD",
    category: "admin",
    meaning: "Rumah Sakit Umum Daerah, a regional public hospital.",
    why: "It helps global readers understand the difference between a local clinic and a larger hospital system.",
  },
  {
    term: "Kecamatan",
    category: "admin",
    meaning: "A subdistrict-level administrative area above a kelurahan or village.",
    why: "When cases move beyond Wanakerta, the administrative scale begins to widen.",
  },
  {
    term: "Kabupaten",
    category: "admin",
    meaning: "A regency, roughly comparable to a county-level area.",
    why: "The term hints at a wider bureaucracy beyond the mountain town.",
  },
  {
    term: "Staf Honorer",
    category: "admin",
    meaning: "A non-permanent or contract-based government office worker.",
    why: "Yaya's vulnerability makes more sense when you know his job depends on local authority.",
  },
  {
    term: "Bantuan Sosial",
    category: "admin",
    meaning: "Social assistance or welfare aid.",
    why: "A person's name on a list can become help, leverage, threat, or erasure.",
  },
  {
    term: "Surat Keterangan Domisili",
    category: "admin",
    meaning: "A local residence certificate proving where someone lives.",
    why: "In a records-driven mystery, even a proof of residence can become dramatic evidence.",
  },
  {
    term: "Akta Kelahiran",
    category: "admin",
    meaning: "Birth certificate.",
    why: "Birth records matter because the novel treats legal identity as fragile and morally charged.",
  },
  {
    term: "Buku Kematian",
    category: "admin",
    meaning: "A death register.",
    why: "Being 'dead on paper' becomes one of Wanakerta's most chilling bureaucratic horrors.",
  },
  {
    term: "Peta Blok Tanah",
    category: "admin",
    meaning: "A land-block map showing land divisions.",
    why: "Land, inheritance, development, and hidden family history all gather around maps.",
  },
  {
    term: "Pak",
    category: "address",
    meaning: "Short for Bapak, a respectful form of address for adult men.",
    why: "It can feel warmer and more flexible than a strict English 'Mr.'",
  },
  {
    term: "Bu",
    category: "address",
    meaning: "Short for Ibu, a respectful form of address for adult women.",
    why: "It can mean Mrs., Ms., Ma'am, or a familiar community title depending on context.",
  },
  {
    term: "Mbak",
    category: "address",
    meaning: "A respectful, familiar term for an older sister or slightly older woman.",
    why: "Mbak Rara sounds warmer than a formal title while still keeping respect.",
  },
  {
    term: "Mas",
    category: "address",
    meaning: "A respectful, familiar term for an older brother or slightly older man.",
    why: "It signals social closeness without becoming too casual.",
  },
  {
    term: "Neng",
    category: "address",
    meaning: "An affectionate regional term for a girl or young woman.",
    why: "It can sound tender, old-fashioned, or socially intimate depending on who says it.",
  },
  {
    term: "Nak",
    category: "address",
    meaning: "Short for anak, meaning child.",
    why: "Adults may use it affectionately, especially toward younger people.",
  },
  {
    term: "Dek",
    category: "address",
    meaning: "Short for adik, meaning younger sibling.",
    why: "It can be used for a child or younger person even outside the family.",
  },
  {
    term: "Nyai",
    category: "address",
    meaning: "A traditional respectful title for an older woman associated with knowledge, birth, or inherited authority.",
    why: "Nyai Rasmi's title tells readers that she carries more than ordinary old age.",
  },
  {
    term: "Ki",
    category: "address",
    meaning: "A traditional respectful title for an older man linked to customary or spiritual knowledge.",
    why: "Ki Bramantya's title prepares the reader for old authority and old fear.",
  },
  {
    term: "Ustaz",
    category: "address",
    meaning: "A Muslim religious teacher or respected Islamic figure.",
    why: "The term helps mark Indonesia's layered religious and community life.",
  },
  {
    term: "Bruder",
    category: "address",
    meaning: "A Catholic religious brother, from 'Brother.'",
    why: "Bruder Yonas connects the story to Santa Odilia and old mission archives.",
  },
  {
    term: "Dok",
    category: "address",
    meaning: "Short for Dokter, used when addressing a doctor.",
    why: "It sounds practical and familiar in everyday Indonesian speech.",
  },
  {
    term: "Pasar",
    category: "daily",
    meaning: "Market.",
    why: "In the novel, the market is also a social information network.",
  },
  {
    term: "Pasar Legi",
    category: "place",
    meaning: "Wanakerta's main market. 'Legi' refers to a Javanese market-day cycle.",
    why: "It is where spices, gossip, public mood, and fear circulate.",
  },
  {
    term: "Warung",
    category: "daily",
    meaning: "A small local shop, stall, or informal eatery.",
    why: "Warungs are social spaces, not just places to buy things.",
  },
  {
    term: "Warung Kopi",
    category: "daily",
    meaning: "A small coffee stall or humble coffee shop.",
    why: "Warung Kopi Kabut becomes an informal witness room for the town.",
  },
  {
    term: "Kopi Tubruk",
    category: "daily",
    meaning: "A strong Indonesian coffee brewed directly with grounds in the cup.",
    why: "It carries the feel of ordinary late-night talk and bitter patience.",
  },
  {
    term: "Wedang",
    category: "daily",
    meaning: "A warm traditional drink, often made with ginger, spices, or herbs.",
    why: "Warm drinks keep the story close to kitchens, care, and local habit.",
  },
  {
    term: "Wedang Jahe",
    category: "daily",
    meaning: "Warm ginger drink.",
    why: "A familiar comfort smell that makes Wanakerta feel lived-in before it feels frightening.",
  },
  {
    term: "Cilok",
    category: "daily",
    meaning: "A chewy tapioca-based street snack, often served with sauce.",
    why: "When a child wants cilok, the scene stays anchored in ordinary childhood.",
  },
  {
    term: "Lemper",
    category: "daily",
    meaning: "Sticky rice with savory filling, commonly wrapped in banana leaf.",
    why: "It adds everyday market texture without needing a long food explanation inside the scene.",
  },
  {
    term: "Gorengan",
    category: "daily",
    meaning: "Fried snacks sold in markets and streets.",
    why: "The smell of gorengan helps the town feel busy, oily, warm, and real.",
  },
  {
    term: "Pisang Goreng",
    category: "daily",
    meaning: "Fried banana.",
    why: "A simple food detail that keeps horror beside daily comfort.",
  },
  {
    term: "Sambal",
    category: "daily",
    meaning: "Chili paste or spicy sauce.",
    why: "It is central enough to Indonesian food culture that translating it flatly would lose flavor.",
  },
  {
    term: "Daun Pisang",
    category: "daily",
    meaning: "Banana leaf, often used for wrapping food.",
    why: "It appears as a smell, texture, wrapper, and part of everyday material culture.",
  },
  {
    term: "Masuk Angin",
    category: "daily",
    meaning: "A culturally familiar illness concept often translated as catching a chill, but broader.",
    why: "It can include unease, bloating, fatigue, rain, wind, stress, and the ordinary language of feeling unwell.",
  },
  {
    term: "Jamu",
    category: "herbal",
    pronunciation: "JAH-moo",
    meaning: "Traditional Indonesian herbal medicine or herbal drink.",
    why: "In the novel, jamu belongs to care, inheritance, commerce, suspicion, and memory.",
  },
  {
    term: "Simplisia",
    category: "herbal",
    meaning: "Dried natural medicinal materials such as roots, leaves, flowers, seeds, bark, or rhizomes.",
    why: "Rara works with simplisia, so the word belongs to the shop's craft and scent.",
  },
  {
    term: "Herbarium",
    category: "herbal",
    meaning: "A preserved plant collection, usually dried, pressed, labeled, and stored for study.",
    why: "In this novel it also becomes an archive of names, guilt, and witness.",
  },
  {
    term: "Herbarium Maheswari",
    category: "place",
    meaning: "Rara's family herbal shop and herbarium near Pasar Legi.",
    why: "It begins warm and familiar, then becomes the center of investigation.",
  },
  {
    term: "Rengganis Hitam",
    category: "ritual",
    pronunciation: "reng-GAH-nis HEE-tahm",
    meaning: "The fictional Black Rengganis, a central plant-sign in the novel.",
    why: "It is not a real plant guide entry. It works as sign, witness, doorway, and warning.",
  },
  {
    term: "Rengganisia memoriae",
    category: "herbal",
    meaning: "A fictional pseudo-Latin name used inside the story world.",
    why: "It suggests scientific confidence applied to something the characters do not fully understand.",
  },
  {
    term: "Kecubung",
    category: "herbal",
    meaning: "Datura or jimsonweed, a dangerous plant associated here with altered perception.",
    why: "Treat it as a narrative danger sign, not as a plant to experiment with.",
  },
  {
    term: "Pule Pandak",
    category: "herbal",
    meaning: "A plant linked in the story to calm, sedation, surrender, and bodily obedience.",
    why: "It belongs to the novel's uneasy line between traditional knowledge and manipulation.",
  },
  {
    term: "Bintaro",
    category: "herbal",
    meaning: "A toxic tree known for dangerous fruit.",
    why: "In the novel it symbolizes danger that can look neat from the outside.",
  },
  {
    term: "Jarak",
    category: "herbal",
    meaning: "Jatropha or castor-associated plant language, linked to oil and toxicity.",
    why: "The story uses it as a sign of illness disguised as something ordinary.",
  },
  {
    term: "Gadung",
    category: "herbal",
    meaning: "A tuber that can be toxic if improperly processed.",
    why: "It becomes connected to memory, old ritual, and the night Nara disappeared.",
  },
  {
    term: "Temulawak",
    category: "herbal",
    meaning: "Java turmeric, a common Indonesian herbal ingredient.",
    why: "It belongs to the warm, familiar side of Maheswari Herbarium.",
  },
  {
    term: "Pegagan",
    category: "herbal",
    meaning: "Gotu kola.",
    why: "Another real plant term that helps the herbarium feel detailed and local.",
  },
  {
    term: "Kayu Secang",
    category: "herbal",
    meaning: "Sappanwood, used for color, drink, and symbolic objects in the novel.",
    why: "Rara's hairpin and family objects carry this material memory.",
  },
  {
    term: "Bunga Telang",
    category: "herbal",
    meaning: "Butterfly pea flower, known for its blue color.",
    why: "Its color makes it useful as sensory detail in the botanical layer.",
  },
  {
    term: "Akar Alang-Alang",
    category: "herbal",
    meaning: "Cogongrass root. Akar means root.",
    why: "The word akar is symbolically important in a novel about roots, origins, and buried names.",
  },
  {
    term: "Kapur Barus",
    category: "herbal",
    meaning: "Camphor, associated with cabinets, preserved things, old clothes, and stored materials.",
    why: "Its smell helps turn the herbarium into an archive you can almost breathe.",
  },
  {
    term: "Mori Cloth",
    category: "ritual",
    meaning: "Plain white cotton cloth associated with wrapping, burial, ritual, or preservation.",
    why: "When cloth appears, pay attention to whether something is being protected, hidden, or prepared.",
  },
  {
    term: "Ruwat",
    category: "ritual",
    pronunciation: "ROO-waht",
    meaning: "A Javanese concept of cleansing, release, or protection from misfortune.",
    why: "The novel fictionalizes and darkens the concept for its own story world.",
  },
  {
    term: "Ruwat Rengganis",
    category: "ritual",
    meaning: "The old ritual at the center of Wanakerta's secret history.",
    why: "Publicly it can look like a herbal harvest tradition. Privately it points toward names, children, and old agreements.",
  },
  {
    term: "Festival Panen Herbal",
    category: "ritual",
    meaning: "Herbal harvest festival.",
    why: "It shows how a frightening past can be repackaged as cultural tourism.",
  },
  {
    term: "Tumbal",
    category: "ritual",
    meaning: "A sacrificial victim or offering.",
    why: "The novel complicates this idea by asking what lie has not been opened yet.",
  },
  {
    term: "Janur",
    category: "ritual",
    meaning: "Young coconut leaf used in ceremonies and decorations.",
    why: "Black janur in the story signals ritual staging and wrongness.",
  },
  {
    term: "Ruwatan",
    category: "ritual",
    meaning: "A cleansing or release ritual related to ruwat.",
    why: "It helps readers hear the wider cultural family of the word ruwat.",
  },
  {
    term: "Ibu Akar",
    category: "ritual",
    meaning: "Literally 'Mother Root,' the old force beneath Wanakerta.",
    why: "It is not simply a villain. It grows through secrets, erased names, and human bargains.",
  },
  {
    term: "Nama Ringan",
    category: "concept",
    meaning: "Light name.",
    why: "A name becomes light when it is no longer called, witnessed, loved, recorded, or remembered correctly.",
  },
  {
    term: "Nama Lengkap",
    category: "concept",
    meaning: "Full name.",
    why: "Calling a full name can become recognition, witness, and protection.",
  },
  {
    term: "Nama yang Dipindahkan",
    category: "concept",
    meaning: "A moved name.",
    why: "A person's identity may be shifted through ritual, paperwork, silence, or family decisions.",
  },
  {
    term: "Nama yang Dikembalikan",
    category: "concept",
    meaning: "A returned name.",
    why: "Restoration in Wanakerta is not abstract. It often begins by naming correctly.",
  },
  {
    term: "Label Kosong",
    category: "concept",
    meaning: "Blank label.",
    why: "A terrifying empty space: a name not yet written, a future victim, or a record waiting to be filled.",
  },
  {
    term: "Arsip",
    category: "concept",
    meaning: "Archive or record.",
    why: "Archives can preserve truth, but they can also decide who disappears.",
  },
  {
    term: "Mati di Atas Kertas",
    category: "concept",
    meaning: "Dead on paper.",
    why: "One of the novel's core fears: a living person can be erased by official records.",
  },
  {
    term: "Pusat Ari-Ari Kota",
    category: "concept",
    meaning: "Literally 'the town's placenta center.'",
    why: "Ari-ari links birth, origin, and life. The phrase points toward Wanakerta's hidden source.",
  },
  {
    term: "Kali Ireng",
    category: "place",
    meaning: "Black River. Kali means river and ireng means black in Javanese.",
    why: "A dangerous water place where the map begins to feel less reliable.",
  },
  {
    term: "Leuwi Hideung",
    category: "place",
    meaning: "A dark deep river pool. Leuwi and hideung reflect Sundanese texture.",
    why: "The name shows Wanakerta's Javanese-Sundanese border feeling.",
  },
  {
    term: "Hutan Larangan",
    category: "place",
    meaning: "Forbidden Forest.",
    why: "The prohibition is social, historical, and metaphysical all at once.",
  },
  {
    term: "Sumur Bisu",
    category: "place",
    meaning: "Silent Well.",
    why: "A place connected to old paths, hidden memory, and ritual closure.",
  },
  {
    term: "Makam Kembang Ireng",
    category: "place",
    meaning: "Graveyard of Black Flowers.",
    why: "Makam means grave, kembang means flower, and ireng means black.",
  },
  {
    term: "Gotong Royong",
    category: "concept",
    meaning: "Communal cooperation.",
    why: "It can become help, pressure, witness, or collective avoidance.",
  },
  {
    term: "Musyawarah",
    category: "concept",
    meaning: "Community deliberation or meeting.",
    why: "Meeting minutes and public decisions can hide private violence.",
  },
  {
    term: "Warga",
    category: "concept",
    meaning: "Residents or townspeople.",
    why: "The word matters because Wanakerta acts through groups as much as individuals.",
  },
  {
    term: "Orang Lama",
    category: "concept",
    meaning: "Old-generation people or people from the old days.",
    why: "They know more than they say, and the town's silence often travels through them.",
  },
  {
    term: "Saksi",
    category: "concept",
    meaning: "Witness.",
    why: "A name becomes harder to erase when someone witnesses it.",
  },
  {
    term: "Diam",
    category: "concept",
    meaning: "Silence.",
    why: "Silence is not empty in this novel. It protects, bargains, threatens, and erases.",
  },
  {
    term: "Pulang",
    category: "concept",
    meaning: "To come home.",
    why: "The novel asks whether coming home is possible after a name, body, family, or town has changed.",
  },
];

const globalPlaces = {
  herbarium: {
    zone: "Reader Anchor",
    name: "Maheswari Herbarium",
    copy:
      "Rara's family shop is the warm doorway into the story: ginger, lemongrass, old labels, rubbing oils, and a back room where preserved plants start behaving like evidence.",
    function: "A herbal shop, archive, home, and investigation center.",
    note: "Read it for scent, routine, labels, family guilt, and the first crack in ordinary life.",
  },
  pasar: {
    zone: "Social Network",
    name: "Pasar Legi",
    copy:
      "A market in the novel is never only commerce. It is food, rumor, class, care, memory, and public opinion moving before sunrise.",
    function: "The town's loudest everyday witness.",
    note: "Watch how ordinary smells make fear feel more real.",
  },
  warung: {
    zone: "Informal Witness Room",
    name: "Warung Kopi Kabut",
    copy:
      "A coffee stall where people gather, joke, deny fear, and accidentally reveal what official rooms cannot say plainly.",
    function: "A social hub outside formal authority.",
    note: "Coffee scenes often show what the town is willing to say out loud.",
  },
  kelurahan: {
    zone: "Paperwork Horror",
    name: "Kantor Kelurahan",
    copy:
      "The ward office holds the local records that make people visible: birth certificates, death books, land maps, name-change files, and aid lists.",
    function: "The place where bureaucracy becomes suspense.",
    note: "When a record changes, the moral weather changes with it.",
  },
  puskesmas: {
    zone: "Body Archive",
    name: "Puskesmas Wanakerta",
    copy:
      "A public health center where ordinary care, old symptoms, falsified notes, and guilt begin to point at the same wound.",
    function: "Local medicine, public health, and hidden testimony.",
    note: "Read medical records as part of the archive mystery.",
  },
  santa: {
    zone: "Old Photograph Trail",
    name: "Santa Odilia",
    copy:
      "An old mission-linked place connected to photographs, clinic memory, and records that survive outside the town's official story.",
    function: "A side archive with a different institutional memory.",
    note: "Old images can become witnesses when living people hesitate.",
  },
  hutan: {
    zone: "Forbidden Memory",
    name: "Hutan Larangan Rengganis",
    copy:
      "The forest is not background scenery. It is a living boundary between public town life and what the town buried.",
    function: "A social taboo, a physical place, and a metaphysical threshold.",
    note: "When paths shift, the story is asking who controls memory.",
  },
  sumur: {
    zone: "Old Closure",
    name: "Sumur Bisu",
    copy:
      "The Silent Well holds the feel of a place that has been sealed, renamed, and left alone for too long.",
    function: "A hidden route toward old agreements and old fear.",
    note: "Silence here is not absence. It is pressure.",
  },
};

const people = [
  {
    name: "Rarasati 'Rara' Maheswari",
    role: "Keeper of Maheswari Herbarium",
    group: "core",
    note: "She reads the world through scent and records what others try to forget.",
    copy: "Rara begins by trying to prove she is not guilty and grows into someone who understands that truth must be witnessed.",
  },
  {
    name: "Nara Maheswari",
    role: "Rara's missing younger sister",
    group: "threshold",
    note: "She is a boundary between family wound, town memory, and something older.",
    copy: "Nara is not simply missing or dead. Her name keeps pulling the story toward what Wanakerta buried.",
  },
  {
    name: "Ratih Purnamasari",
    role: "Local guide and content creator",
    group: "core",
    note: "Her investigation reopens a festival the town tried to erase.",
    copy: "Ratih is funny, reckless, brave, and far more than the first sign of danger.",
  },
  {
    name: "Jatmiko 'Miko' Pradipta",
    role: "History teacher",
    group: "archive",
    note: "His family wounds and stolen names turn history into personal danger.",
    copy: "Miko searches selfishly at first, then becomes part of returning names to those who need them.",
  },
  {
    name: "Bu Tini Rempah",
    role: "Spice seller at Pasar Legi",
    group: "town",
    note: "Her gossip can become historical memory when kept long enough.",
    copy: "Sharp, loyal, nosy, and socially fearless, she shows why markets matter.",
  },
  {
    name: "Ipda Bagas Wiratama",
    role: "Young police investigator",
    group: "archive",
    note: "He learns that procedure only helps when it serves truth.",
    copy: "Bagas brings method into a place where evidence does not always behave politely.",
  },
  {
    name: "Aiptu Rukman",
    role: "Older police officer",
    group: "archive",
    note: "He carries guilt, memory, and unfinished evidence.",
    copy: "Rukman knows Wanakerta's silence is older than any current report.",
  },
  {
    name: "dr. Sasmita Wiryawan",
    role: "Puskesmas doctor",
    group: "archive",
    note: "Her medical records are tied to protection, concealment, and confession.",
    copy: "She is morally difficult because the story refuses to make guilt simple.",
  },
  {
    name: "Ki Bramantya",
    role: "Traditional elder",
    group: "power",
    note: "He is afraid, complicit, knowledgeable, and shaped by the system he failed to stop.",
    copy: "His calmness makes old fear sound almost reasonable.",
  },
  {
    name: "Nyai Rasmi",
    role: "Keeper of birth names",
    group: "town",
    note: "She remembers what official archives erase.",
    copy: "Her title signals old knowledge, authority, and the importance of witnessing a name.",
  },
  {
    name: "Damar Kuncoro",
    role: "Lurah of Wanakerta",
    group: "power",
    note: "He wants tourism, development, progress, and a cleaner public story.",
    copy: "To sell the future, he tries to manage the past.",
  },
  {
    name: "Adrian Wicaksono",
    role: "Outside investor",
    group: "power",
    note: "He turns heritage into a product before understanding the trauma beneath it.",
    copy: "Adrian represents the danger of packaging a wounded place as an experience.",
  },
  {
    name: "Yaya",
    role: "Honorary kelurahan staff",
    group: "town",
    note: "His fragile employment makes him easy for powerful people to use.",
    copy: "Yaya shows how local systems can pressure the most vulnerable workers.",
  },
  {
    name: "Lintang Ayu Wulandari",
    role: "A child with a dangerously light name",
    group: "threshold",
    note: "Her full name becomes a rope back to the living.",
    copy: "Lintang makes the horror immediate because the next generation should not inherit the town's silence.",
  },
  {
    name: "Wati",
    role: "Lintang's mother",
    group: "core",
    note: "Her love and fear help keep her daughter's name heavy.",
    copy: "Wati grounds the supernatural pressure in parental terror and ordinary devotion.",
  },
  {
    name: "Menir",
    role: "The shop's gray-and-white cat",
    group: "town",
    note: "He often recognizes danger before humans do.",
    copy: "Menir gives the herbarium a dry comic pulse without softening the mystery too much.",
  },
];

const plantGuide = [
  {
    local: "Jahe",
    english: "Ginger",
    latin: "Zingiber officinale",
    group: "comfort",
    part: "Rhizome",
    copy: "A warm shop aroma that signals care, morning routines, and familiar Indonesian herbal drinks.",
    symbol: "In Wanakerta, ginger makes the front room feel safe before the back room unsettles it.",
  },
  {
    local: "Kunyit",
    english: "Turmeric",
    latin: "Curcuma longa",
    group: "root",
    part: "Rhizome",
    copy: "A bright kitchen and herbal ingredient associated with color, stain, warmth, and domestic labor.",
    symbol: "It helps the market feel ordinary, which makes later fear sharper.",
  },
  {
    local: "Temulawak",
    english: "Java turmeric",
    latin: "Curcuma zanthorrhiza",
    group: "root",
    part: "Rhizome",
    copy: "A familiar Indonesian herbal ingredient often encountered in jamu contexts.",
    symbol: "It belongs to the inherited craft of Maheswari Herbarium.",
  },
  {
    local: "Serai",
    english: "Lemongrass",
    latin: "Cymbopogon citratus",
    group: "comfort",
    part: "Stalk and leaves",
    copy: "A citrusy kitchen and drink aroma that global readers may recognize from Southeast Asian food.",
    symbol: "It gives the shop a clean surface scent that cannot fully cover camphor and old paper.",
  },
  {
    local: "Lengkuas",
    english: "Galangal",
    latin: "Alpinia galanga",
    group: "root",
    part: "Rhizome",
    copy: "A sharp, earthy rhizome used in Indonesian cooking.",
    symbol: "It anchors Wanakerta in wet market mornings and kitchen memory.",
  },
  {
    local: "Daun Salam",
    english: "Indonesian bay leaf",
    latin: "Syzygium polyanthum",
    group: "comfort",
    part: "Leaf",
    copy: "A domestic cooking leaf, different from Mediterranean bay leaf.",
    symbol: "It places horror beside ordinary pots, wrappers, and market baskets.",
  },
  {
    local: "Kapulaga",
    english: "Cardamom",
    latin: "Elettaria cardamomum",
    group: "comfort",
    part: "Seed pod",
    copy: "A spice used for aroma and warmth.",
    symbol: "Small fragrant objects matter in a novel where scent is evidence.",
  },
  {
    local: "Adas",
    english: "Fennel",
    latin: "Foeniculum vulgare",
    group: "comfort",
    part: "Seed",
    copy: "A fragrant seed used in food and herbal traditions.",
    symbol: "It expands the herbarium shelves beyond one-note medicinal drama.",
  },
  {
    local: "Pegagan",
    english: "Gotu kola",
    latin: "Centella asiatica",
    group: "comfort",
    part: "Leaf",
    copy: "A real plant name often associated with traditional herbal contexts.",
    symbol: "It gives Rara's shelves the specificity of a working shop.",
  },
  {
    local: "Kayu Secang",
    english: "Sappanwood",
    latin: "Biancaea sappan",
    group: "color",
    part: "Wood",
    copy: "A wood known for color and drink use.",
    symbol: "Its red tone and crafted objects connect family memory to botanical material.",
  },
  {
    local: "Bunga Telang",
    english: "Butterfly pea flower",
    latin: "Clitoria ternatea",
    group: "color",
    part: "Flower",
    copy: "A blue flower used for color in drinks and food.",
    symbol: "Its color makes the herbarium feel visual, not only scented.",
  },
  {
    local: "Akar Alang-Alang",
    english: "Cogongrass root",
    latin: "Imperata cylindrica",
    group: "root",
    part: "Root",
    copy: "A root term that also teaches readers that akar means root.",
    symbol: "The word root matters in a story about origins, burial, and inheritance.",
  },
  {
    local: "Kapur Barus",
    english: "Camphor",
    latin: "Cinnamomum camphora / camphor material",
    group: "comfort",
    part: "Aromatic material",
    copy: "A sharp storage smell associated with cabinets, old textiles, and preserved things.",
    symbol: "Camphor makes archives feel physical: dry, guarded, and not quite alive.",
  },
  {
    local: "Minyak Kayu Putih",
    english: "Cajuput or eucalyptus-style household oil",
    latin: "Melaleuca cajuputi and related products",
    group: "comfort",
    part: "Oil",
    copy: "A common household smell in Indonesia, especially around children and everyday discomfort.",
    symbol: "It brings childhood care into scenes that may later feel unsafe.",
  },
  {
    local: "Kecubung",
    english: "Datura / jimsonweed",
    latin: "Datura spp.",
    group: "danger",
    part: "Plant",
    copy: "A dangerous real plant associated in the novel with confusion, altered perception, and misdirection.",
    symbol: "It is a warning sign. Do not treat it as an experiment or remedy.",
  },
  {
    local: "Pule Pandak",
    english: "Rauvolfia-associated plant",
    latin: "Rauvolfia serpentina and related naming",
    group: "danger",
    part: "Root",
    copy: "A plant name the novel links with calm, surrender, and bodies becoming too obedient.",
    symbol: "It makes the herbal layer morally uneasy rather than cozy.",
  },
  {
    local: "Bintaro",
    english: "Sea mango / suicide tree",
    latin: "Cerbera manghas and related names",
    group: "danger",
    part: "Fruit / tree",
    copy: "A toxic tree whose attractive fruit can hide danger.",
    symbol: "It represents a death or threat that looks orderly from the outside.",
  },
  {
    local: "Jarak",
    english: "Jatropha / castor-associated danger language",
    latin: "Jatropha spp. / Ricinus communis context",
    group: "danger",
    part: "Seed / oil context",
    copy: "A plant cluster global readers should treat as a toxicity warning, not a home-use note.",
    symbol: "The story uses it to blur ordinary sickness and deliberate harm.",
  },
  {
    local: "Gadung",
    english: "Poison yam",
    latin: "Dioscorea hispida",
    group: "danger",
    part: "Tuber",
    copy: "A real tuber associated with danger if handled or processed improperly.",
    symbol: "It becomes tied to memory, old ritual, and the night everything changed.",
  },
  {
    local: "Rengganis Hitam",
    english: "Black Rengganis",
    latin: "Fictional story-world plant",
    group: "fiction",
    part: "Fictional flower",
    copy: "A central invented plant with black petals, unstable scent, and a link to missing names.",
    symbol: "It is not botany. It is the novel's sign that a buried lie is close to the surface.",
  },
];

const labelNotes = [
  "A full name, spoken carefully, can become a way back.",
  "The market remembers what the office misfiles.",
  "A warm shop can still have a locked back room.",
  "When a label is blank, the question is who left space for it.",
  "Do not read the forest as scenery. It is memory with roots.",
  "In Wanakerta, silence is never neutral.",
  "A record can be false and still change a life.",
  "The safest smell is not always the truest one.",
];

const routes = {
  market: {
    title: "Market gossip",
    copy:
      "Start with ordinary voices. In Wanakerta, gossip can be cruel, funny, wrong, and historically useful at the same time.",
  },
  records: {
    title: "Damaged records",
    copy:
      "Follow papers, names, certificates, maps, and files. The horror grows sharper when official language looks calm.",
  },
  forest: {
    title: "Forbidden forest",
    copy:
      "Use this route when you want the old fear. The forest is a threshold between the town's public face and buried agreements.",
  },
};

const $ = (selector, context = document) => context.querySelector(selector);
const $$ = (selector, context = document) => Array.from(context.querySelectorAll(selector));

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => {
    const entities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };
    return entities[char];
  });
}

function setupMenu() {
  const toggle = $(".menu-toggle");
  const nav = $(".site-nav");
  if (!toggle || !nav) return;

  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  nav.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    }
  });
}

function setupReaderPaths() {
  const buttons = $$("[data-path]");
  if (!buttons.length) return;

  const kicker = $("[data-path-kicker]");
  const title = $("[data-path-title]");
  const copy = $("[data-path-copy]");
  const link = $("[data-path-link]");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const data = pathData[button.dataset.path];
      if (!data) return;

      buttons.forEach((item) => item.classList.toggle("active", item === button));
      kicker.textContent = data.kicker;
      title.textContent = data.title;
      copy.textContent = data.copy;
      link.href = data.link;
      link.textContent = data.label;
    });
  });
}

function renderGlossary(filter = "all", query = "") {
  const grid = $("[data-glossary-grid]");
  const count = $("[data-glossary-count]");
  if (!grid) return;

  const normalizedQuery = query.trim().toLowerCase();
  const terms = glossaryTerms.filter((item) => {
    const matchesFilter = filter === "all" || item.category === filter;
    const haystack = `${item.term} ${item.meaning} ${item.why} ${item.pronunciation || ""}`.toLowerCase();
    return matchesFilter && (!normalizedQuery || haystack.includes(normalizedQuery));
  });

  count.textContent = `${terms.length} glossary entries shown`;

  if (!terms.length) {
    grid.innerHTML = '<div class="empty-state">No glossary entries match that search yet.</div>';
    return;
  }

  grid.innerHTML = terms
    .map(
      (item) => `
        <article class="glossary-card">
          <span class="term-kicker">${escapeHtml(categoryLabels[item.category] || item.category)}</span>
          <h3>${escapeHtml(item.term)}</h3>
          ${item.pronunciation ? `<p class="term-pronunciation">${escapeHtml(item.pronunciation)}</p>` : ""}
          <p>${escapeHtml(item.meaning)}</p>
          <div class="term-why">${escapeHtml(item.why)}</div>
        </article>
      `,
    )
    .join("");
}

function setupGlossary() {
  const search = $("#glossary-search");
  const buttons = $$("[data-term-filter]");
  if (!search || !buttons.length) return;

  let activeFilter = "all";

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      activeFilter = button.dataset.termFilter || "all";
      buttons.forEach((item) => item.classList.toggle("active", item === button));
      renderGlossary(activeFilter, search.value);
    });
  });

  search.addEventListener("input", () => renderGlossary(activeFilter, search.value));
  renderGlossary(activeFilter, search.value);
}

function setupMap() {
  const buttons = $$("[data-global-place]");
  if (!buttons.length) return;

  const zone = $("[data-global-place-zone]");
  const name = $("[data-global-place-name]");
  const copy = $("[data-global-place-copy]");
  const placeFunction = $("[data-global-place-function]");
  const note = $("[data-global-place-note]");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const data = globalPlaces[button.dataset.globalPlace];
      if (!data) return;

      buttons.forEach((item) => item.classList.toggle("active", item === button));
      zone.textContent = data.zone;
      name.textContent = data.name;
      copy.textContent = data.copy;
      placeFunction.textContent = data.function;
      note.textContent = data.note;
    });
  });
}

function renderPeople(filter = "all", query = "") {
  const grid = $("[data-people-grid]");
  if (!grid) return;

  const normalizedQuery = query.trim().toLowerCase();
  const items = people.filter((person) => {
    const matchesFilter = filter === "all" || person.group === filter;
    const haystack = `${person.name} ${person.role} ${person.note} ${person.copy}`.toLowerCase();
    return matchesFilter && (!normalizedQuery || haystack.includes(normalizedQuery));
  });

  if (!items.length) {
    grid.innerHTML = '<div class="empty-state">No people match that search yet.</div>';
    return;
  }

  grid.innerHTML = items
    .map(
      (person) => `
        <article class="person-card">
          <span class="person-kicker">${escapeHtml(person.group)}</span>
          <h3>${escapeHtml(person.name)}</h3>
          <p class="person-role">${escapeHtml(person.role)}</p>
          <p>${escapeHtml(person.copy)}</p>
          <div class="person-note">${escapeHtml(person.note)}</div>
        </article>
      `,
    )
    .join("");
}

function setupPeople() {
  const search = $("#people-search");
  const buttons = $$("[data-people-filter]");
  if (!search || !buttons.length) return;

  let activeFilter = "all";

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      activeFilter = button.dataset.peopleFilter || "all";
      buttons.forEach((item) => item.classList.toggle("active", item === button));
      renderPeople(activeFilter, search.value);
    });
  });

  search.addEventListener("input", () => renderPeople(activeFilter, search.value));
  renderPeople(activeFilter, search.value);
}

function renderPlants(filter = "all", query = "") {
  const grid = $("[data-plant-guide-grid]");
  if (!grid) return;

  const normalizedQuery = query.trim().toLowerCase();
  const items = plantGuide.filter((plant) => {
    const matchesFilter = filter === "all" || plant.group === filter;
    const haystack = `${plant.local} ${plant.english} ${plant.latin} ${plant.part} ${plant.copy} ${plant.symbol}`.toLowerCase();
    return matchesFilter && (!normalizedQuery || haystack.includes(normalizedQuery));
  });

  if (!items.length) {
    grid.innerHTML = '<div class="empty-state">No plant notes match that search yet.</div>';
    return;
  }

  grid.innerHTML = items
    .map(
      (plant) => `
        <article class="plant-guide-card ${escapeHtml(plant.group)}">
          <span class="plant-kicker">${escapeHtml(plant.group)}</span>
          <h3>${escapeHtml(plant.local)}</h3>
          <p class="latin-name">${escapeHtml(plant.english)} - ${escapeHtml(plant.latin)}</p>
          <p class="plant-part">${escapeHtml(plant.part)}</p>
          <p>${escapeHtml(plant.copy)}</p>
          <div class="plant-symbol">${escapeHtml(plant.symbol)}</div>
        </article>
      `,
    )
    .join("");
}

function setupPlants() {
  const search = $("#plant-search");
  const buttons = $$("[data-plant-filter]");
  if (!search || !buttons.length) return;

  let activeFilter = "all";

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      activeFilter = button.dataset.plantFilter || "all";
      buttons.forEach((item) => item.classList.toggle("active", item === button));
      renderPlants(activeFilter, search.value);
    });
  });

  search.addEventListener("input", () => renderPlants(activeFilter, search.value));
  renderPlants(activeFilter, search.value);
}

function setupLabels() {
  const output = $("[data-global-label-output]");
  const button = $("[data-next-global-label]");
  if (!output || !button) return;

  let index = 0;
  button.addEventListener("click", () => {
    index = (index + 1) % labelNotes.length;
    output.textContent = labelNotes[index];
  });
}

function setupRoutes() {
  const buttons = $$("[data-global-route]");
  const result = $("[data-global-route-result]");
  if (!buttons.length || !result) return;

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const data = routes[button.dataset.globalRoute];
      if (!data) return;

      buttons.forEach((item) => item.classList.toggle("active", item === button));
      result.innerHTML = `
        <h4>${escapeHtml(data.title)}</h4>
        <p>${escapeHtml(data.copy)}</p>
      `;
    });
  });
}

function setupBackgroundAudio() {
  const shell = $("[data-audio-shell]");
  const audio = $("[data-bg-audio]");
  const button = $("[data-audio-toggle]");
  const label = $("[data-audio-label]");
  const hint = $("[data-audio-hint]");
  if (!shell || !audio || !button || !label || !hint) return;

  const text = {
    on: button.dataset.audioOnLabel || "Pause music",
    off: button.dataset.audioOffLabel || "Play music",
    playing: button.dataset.audioPlayingHint || "Music on",
    paused: button.dataset.audioPausedHint || "Music paused",
    blocked: button.dataset.audioBlockedHint || "Tap to start",
  };

  const otherAudios = $$("audio:not([data-bg-audio])");
  let userPaused = false;

  audio.volume = 0.58;

  function setState(state) {
    const isPlaying = state === "playing";
    shell.classList.toggle("is-playing", isPlaying);
    shell.classList.toggle("is-paused", state === "paused" || state === "blocked");
    shell.classList.toggle("needs-action", state === "blocked");
    label.textContent = isPlaying ? text.on : text.off;
    hint.textContent = state === "blocked" ? text.blocked : isPlaying ? text.playing : text.paused;
    button.setAttribute("aria-pressed", String(isPlaying));
  }

  async function playMusic() {
    try {
      otherAudios.forEach((item) => item.pause());
      await audio.play();
      userPaused = false;
      setState(audio.paused ? "blocked" : "playing");
    } catch {
      if (!userPaused) setState("blocked");
    }
  }

  button.addEventListener("click", () => {
    if (audio.paused) {
      playMusic();
      return;
    }
    userPaused = true;
    audio.pause();
    setState("paused");
  });

  otherAudios.forEach((item) => {
    item.addEventListener("play", () => {
      if (!audio.paused) {
        userPaused = true;
        audio.pause();
        setState("paused");
      }
    });
  });

  const unlock = () => {
    if (!userPaused && audio.paused) playMusic();
  };
  document.addEventListener("pointerdown", unlock, { once: true, passive: true });
  document.addEventListener("keydown", unlock, { once: true });

  audio.addEventListener("play", () => {
    if (!audio.paused) setState("playing");
  });
  audio.addEventListener("pause", () => {
    if (userPaused) setState("paused");
  });

  setState("playing");
  playMusic();
}

setupMenu();
setupReaderPaths();
setupGlossary();
setupMap();
setupPeople();
setupPlants();
setupLabels();
setupRoutes();
setupBackgroundAudio();
