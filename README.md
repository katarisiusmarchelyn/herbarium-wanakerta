# Herbarium Nama-Nama Yang Hilang - Website Interaktif

Website statis untuk promosi novel `Herbarium Nama-Nama Yang Hilang: Misteri Wanakerta`.

## Isi Website

- Hero dengan visual banner dan CTA beli PDF.
- Peta Wanakerta interaktif.
- Katalog tokoh dengan pencarian dan filter.
- Arsip interaktif: label, jalur kabut, dan label nama pembaca.
- Catatan botanical gothic yang spoiler-safe.
- Herbarium Nyata: 21 kartu tanaman sungguhan dari novel, dengan pencarian dan filter.
- Papan kasus untuk menggoda rasa penasaran pembaca.
- Audio `Daun Memilih Nama`.
- Daftar bab, FAQ, dan CTA pembelian ke `https://lynk.id/marchelyn`.

## URL Publik

Website sudah dipublish gratis melalui GitHub Pages:

```text
https://katarisiusmarchelyn.github.io/herbarium-wanakerta/
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
- `assets/` - gambar dan audio promosi.
- `.nojekyll` - membantu GitHub Pages menyajikan file statis apa adanya.
