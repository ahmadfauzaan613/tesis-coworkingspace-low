# PANDUAN PERSIAPAN & CHECKLIST TEST MANUAL — SPACEHUB

Dokumen ini disusun sebagai panduan operasional bagi Quality Assurance (QA) atau Peneliti untuk melakukan pengujian manual (*manual testing*) pada aplikasi **SpaceHub Coworking Space**. Tujuannya adalah memverifikasi fungsionalitas UI, kompatibilitas responsif, kegunaan (*usability*), serta keselarasan dengan spesifikasi visual.

---

## 1. Prasyarat & Lingkungan Pengujian (Setup Environment)

Sebelum memulai pengujian manual, pastikan lingkungan kerja Anda memenuhi ketentuan berikut:

### A. Kebutuhan Perangkat Lunak & Sistem
* **Runtime**: Node.js versi 18.x atau yang lebih baru.
* **Peramban (Browser)**: Disarankan menguji minimal pada dua engine browser yang berbeda:
  * Chromium-based (Google Chrome, Microsoft Edge, Brave, Opera)
  * Gecko-based (Mozilla Firefox)
  * WebKit-based (Apple Safari)
* **Alat bantu devtools**: Chrome/Firefox Developer Tools (untuk simulasi resolusi layar mobile).

### B. Konfigurasi Resolusi Layar (Breakpoints)
Pengujian responsivitas wajib dicakup pada ukuran berikut:
* **Desktop (Layar Lebar)**: 1200px ke atas
* **Tablet (Layar Sedang)**: 768px - 1024px
* **Mobile (Layar Kecil)**: 320px - 480px (simulasikan menggunakan "Responsive Design Mode" di browser developer tools).

---

## 2. Langkah-Langkah Memulai Aplikasi (Run Application)

Lakukan langkah-langkah berikut untuk menjalankan server lokal (*development server*):

1. **Buka Terminal** dan masuk ke direktori proyek SpaceHub:
   ```bash
   cd "/home/ahmad/Development/Tesis - Coworking Space/CoworkingSpace_Low"
   ```
2. **Instal Dependensi** (jika belum pernah dilakukan):
   ```bash
   npm install
   ```
3. **Jalankan Aplikasi** dalam mode development:
   ```bash
   npm run dev
   ```
4. **Buka Browser** dan akses URL lokal yang tertera di terminal (biasanya `http://localhost:5173`).

---

## 3. Kasus Uji & QA Checklist Manual (Manual Test Cases)

Berikut adalah tabel skenario pengujian manual yang harus dijalankan dan diverifikasi:

| Kode Tes | Area / Modul | Langkah Pengujian | Hasil yang Diharapkan | Status (Pass/Fail) |
| :--- | :--- | :--- | :--- | :--- |
| **TC-MAN-NAV-01** | Navigasi SPA | 1. Akses halaman Beranda.<br/>2. Klik menu "Tentang", "Fasilitas", "Ruangan", "Harga", "Testimoni", "Lokasi" pada navbar.<br/>3. Perhatikan perilaku pemuatan halaman. | • Halaman berpindah tanpa terjadi *full page reload* (SPA).<br/>• URL di browser berubah sesuai rute.<br/>• Posisi scroll otomatis kembali ke bagian paling atas halaman. | |
| **TC-MAN-NAV-02** | Navigasi Mobile | 1. Perkecil resolusi browser ke lebar layar smartphone (360px).<br/>2. Klik tombol menu hamburger di pojok kanan atas.<br/>3. Klik tautan "Harga". | • Menu mobile terbuka secara mulus ke bawah.<br/>• Setelah tautan "Harga" diklik, menu mobile otomatis tertutup kembali.<br/>• Halaman berpindah ke `/harga`. | |
| **TC-MAN-ERR-01** | Rute Wildcard (404) | 1. Ketik URL asal secara acak di browser, contoh: `http://localhost:5173/asal-rute`. | • Aplikasi menampilkan Halaman 404 kustom.<br/>• Tombol "Kembali Ke Beranda" muncul dan berfungsi jika diklik (mengarahkan kembali ke `/`). | |
| **TC-MAN-FAQ-01** | FAQ Accordion | 1. Akses halaman `/harga`.<br/>2. Klik pada salah satu pertanyaan FAQ.<br/>3. Klik pertanyaan tersebut sekali lagi. | • Saat pertama kali diklik, panel FAQ melebar ke bawah secara mulus dan ikon panah berputar 180°.<br/>• Saat diklik kembali, panel menutup secara mulus dan ikon panah kembali ke posisi semula. | |
| **TC-MAN-VAL-01** | Validasi Kontak | 1. Buka halaman `/kontak`.<br/>2. Kosongkan kolom Nama dan Email.<br/>3. Klik tombol "Kirim Pesan Sekarang". | • Pengiriman pesan tertahan.<br/>• Muncul tooltip peringatan bawaan HTML5 browser (*"Harap isi bidang ini"* / *"Please fill out this field"*). | |
| **TC-MAN-SND-01** | Pengiriman Kontak | 1. Buka halaman `/kontak`.<br/>2. Isi Nama: `Budi`, Email: `budi@example.com`, pilih kategori, isi pesan.<br/>3. Klik tombol "Kirim Pesan Sekarang". | • Tombol berubah menjadi "Mengirim..." dan tidak bisa diklik berulang kali.<br/>• Setelah 1.5 detik, form menghilang secara halus dan digantikan layar sukses berisi teks: *"Terima kasih Budi, pesan Anda telah kami terima..."* | |
| **TC-MAN-CTX-01** | Contextual Booking | 1. Buka halaman `/ruangan`.<br/>2. Pada kartu ruangan "Private Office", klik tombol "Pesan Sekarang". | • Halaman berpindah secara otomatis ke `/kontak?interest=Private%20Office`.<br/>• Opsi pilihan pada kategori ketertarikan di form kontak terisi otomatis dengan `"Private Office"`. | |
| **TC-MAN-VIS-01** | Kontrast Visual | 1. Buka halaman `/harga`.<br/>2. Periksa visibilitas teks pada tombol paket harga non-unggulan (seperti paket "Flexi"). | • Teks tombol (contoh: *"Pilih Flexi"*) terbaca jelas dengan warna kontras yang tinggi tanpa harus diarahkan kursor (*no-hover state*). | |

---

## 4. Pengujian Kasus Batas & Negatif (Edge Cases to Verify)

Lakukan skenario pengujian negatif ini untuk memastikan ketahanan antarmuka pengguna:

1. **Email Format Check**:
   * Ketik email tanpa tanda `@` (misal: `budiexample.com`) pada form kontak.
   * **Ekspektasi**: Browser mendeteksi format email yang tidak valid dan menolak pengiriman.
2. **Rapid Double Click on Submit**:
   * Klik tombol "Kirim Pesan Sekarang" beberapa kali dengan sangat cepat saat data valid telah terisi.
   * **Ekspektasi**: Tombol langsung masuk ke mode `disabled` dengan teks "Mengirim..." saat klik pertama, mencegah terjadinya pengiriman ganda (double submission).
3. **Extremely Narrow Mobile View**:
   * Ubah lebar layar simulator ke resolusi 320px (iPhone SE).
   * **Ekspektasi**: Tidak ada elemen kartu (*cards*), teks menu, atau kontainer formulir yang keluar dari batas layar (*horizontal overflow / horizontal scrollbar*).
4. **URL Parameter Injection**:
   * Akses URL `/kontak?interest=KategoriPalsuYangTidakAda`.
   * **Ekspektasi**: Formulir kontak menampilkan opsi default ("Pilih kategori ketertarikan") karena parameter yang dimasukkan tidak cocok dengan daftar opsi yang tersedia.
