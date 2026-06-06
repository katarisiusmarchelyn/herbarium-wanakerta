# Herbarium Nama-Nama Yang Hilang - Website Interaktif

Website statis untuk promosi novel `Herbarium Nama-Nama Yang Hilang: Misteri Wanakerta`.

## Isi Website

- Hero dengan visual banner, CTA Google Play Books, sample 100 halaman gratis, dan CTA beli PDF.
- Halaman English Companion untuk pembaca global di `/en/`.
- Peta Wanakerta interaktif.
- Katalog tokoh dengan pencarian dan filter.
- Arsip interaktif: label, jalur kabut, dan label nama pembaca.
- Catatan botanical gothic yang spoiler-safe.
- Herbarium Nyata: 21 kartu tanaman sungguhan dari novel, dengan pencarian dan filter.
- Glosarium internasional interaktif untuk istilah Indonesia, budaya lokal, dan konsep Wanakerta.
- Papan kasus untuk menggoda rasa penasaran pembaca.
- Audio `Daun Memilih Nama`.
- Kontrol musik background dan pondasi analytics untuk GA4 serta Meta Pixel.
- Daftar bab, FAQ, dan CTA pembelian ke Google Play Books serta `https://lynk.id/marchelyn`.
- QR code resmi bertema novel untuk cetak dan promosi.

## URL Publik

Website sudah dipublish gratis melalui GitHub Pages:

```text
https://katarisiusmarchelyn.github.io/herbarium-wanakerta/
```

Versi pembaca global:

```text
https://katarisiusmarchelyn.github.io/herbarium-wanakerta/en/
```

## Cara Buka di Komputer

Klik dua kali file `index.html`, atau jalankan server lokal dari folder ini:

```bash
python3 -m http.server 4173
```

Lalu buka:

```text
http://localhost:4173
```

## Cara Hosting Gratis

Opsi gratis yang paling sederhana adalah GitHub Pages.

1. Buat akun GitHub jika belum punya.
2. Buat repository publik baru, misalnya `herbarium-wanakerta`.
3. Upload semua isi folder ini, bukan folder induknya.
4. Pastikan `index.html` berada di root repository.
5. Masuk ke `Settings` lalu `Pages`.
6. Pada bagian source, pilih branch `main` dan folder `/root`.
7. Simpan. GitHub akan memberi URL publik seperti:

```text
https://username.github.io/herbarium-wanakerta/
```

Catatan: jangan upload PDF novel lengkap ke repository publik. Website ini hanya mengarahkan pembaca ke link pembelian resmi.

## File Penting

- `index.html` - struktur halaman.
- `styles.css` - tampilan visual.
- `script.js` - semua interaksi.
- `analytics.js` - konfigurasi GA4, Meta Pixel, dan event klik/interaksi.
- `en/index.html` - halaman English Companion untuk pembaca global.
- `en/global.css` - tampilan khusus halaman global.
- `en/global.js` - glosarium, peta, tokoh, tanaman, dan interaksi halaman global.
- `assets/` - gambar dan audio promosi.
- `assets/qr-herbarium-website-themed.png` - QR code bertema novel untuk dimasukkan ke buku atau materi promosi.
- `assets/qr-herbarium-website-compact.png` - QR code bertema versi lebih ringkas.
- `assets/qr-herbarium-website-plain.png` - QR code polos cadangan untuk cetak ukuran kecil.
- `.nojekyll` - membantu GitHub Pages menyajikan file statis apa adanya.

## QR Code Resmi

Target QR code:

```text
https://katarisiusmarchelyn.github.io/herbarium-wanakerta/?utm_source=novel_print&utm_medium=qr&utm_campaign=herbarium_official_site&utm_content=novel_qr&qr=novel
```

QR ini statis dan tidak memakai layanan shortener berbayar. Selama repository GitHub Pages aktif, file QR dan website tetap bisa diakses tanpa biaya hosting tambahan.

## Analytics Gratis

Website ini sudah siap untuk Google Analytics 4 dan Meta Pixel. Buka `analytics.js`, lalu isi:

```js
ga4MeasurementId: "G-XXXXXXXXXX",
metaPixelId: "123456789012345",
```

Jika salah satu belum punya ID, biarkan kosong. Website tetap berjalan, hanya platform tersebut belum mengirim data.

Event yang disiapkan:

- `buy_link_click` untuk klik ke halaman pembelian.
- `language_switch_click` untuk pindah Indonesia/English.
- `map_pin_click` untuk klik peta.
- `filter_click` untuk filter glosarium/tokoh/tanaman.
- `onsite_search` untuk pencarian glosarium dan katalog.
- `qr_code_scan` untuk kunjungan dari QR code cetak novel.
- `background_music_play`, `background_music_pause`, dan `background_music_autoplay_blocked`.
- `case_clue_click`, `route_choice`, `label_randomized`, dan `name_label_generated`.

Catatan privasi: fitur label nama tidak mengirim nama yang diketik pembaca ke analytics.
