# SOFTWARE TEST PLAN & QA DOCUMENTATION

**Proyek**: SpaceHub Company Profile  
**Tujuan**: Dokumentasi Verifikasi Kualitas Perangkat Lunak untuk Analisis Tesis Vibe Coding  
**Peran QA**: Manual & Automated Testing Specialist  

---

## 1. Requirements Document (Dokumen Kebutuhan Sistem)

Sistem harus memenuhi spesifikasi kebutuhan fungsional dan non-fungsional berikut untuk dinyatakan layak rilis (*production-ready*):

### A. Kebutuhan Fungsional (Functional Requirements)
1. **Multi-page Routing**: Aplikasi harus mendukung perpindahan halaman tanpa memuat ulang browser (SPA) pada rute:
   * `/` (Beranda)
   * `/tentang` (Tentang Kami)
   * `/fasilitas` (Fasilitas Premium)
   * `/ruangan` (Tipe Ruangan)
   * `/harga` (Paket Keanggotaan)
   * `/testimoni` (Ulasan Member)
   * `/lokasi` (Cabang Coworking Space)
   * `/kontak` (Hubungi Kami)
2. **Wildcard Routing (404 Page)**: Sistem harus otomatis mengalihkan pengguna ke halaman error 404 kustom jika mengetik URL yang salah.
3. **Formulir Kontak (Hubungi Kami)**:
   * Harus divalidasi (Nama & Email wajib diisi).
   * Menampilkan animasi pemuatan (*loader state*) saat pengiriman data berlangsung.
   * Menampilkan layar sukses (*success state*) dengan mencantumkan nama pengirim secara dinamis setelah 1.5 detik.
4. **FAQ Accordion**: Komponen FAQ di halaman harga harus dapat diekspansi dan dikolaps saat diklik oleh pengguna.
5. **Contextual Booking Link**: Tombol booking pada paket harga atau ruangan harus menyertakan nama paket/ruangan ke URL kontak (misal: `/kontak?interest=Private%20Office`) dan memilih opsi tersebut secara otomatis di form tujuan.

### B. Kebutuhan Non-Fungsional (Non-Functional Requirements)
1. **Desain Visual (Aesthetics)**: Tampilan visual wajib mengikuti tema premium *SpaceHub* (skema warna gelap `#06060f`, aksen gradien neon ungu-biru, efek kaca transparan/glassmorphism, dan font Poppins).
2. **Keterbacaan Teks (Readability)**: Teks pada tombol kustom wajib terlihat jelas (kontras tinggi) baik saat sebelum dihover maupun setelah dihover oleh pengguna.
3. **Responsivitas (Responsiveness)**: Antarmuka web harus menyesuaikan diri secara otomatis dan tidak meluber/patah pada layar desktop, tablet, maupun layar handphone paling sempit (lebar 320px).

---

## 2. Testing Environment (Lingkungan Pengujian)

Untuk memastikan konsistensi aplikasi di berbagai platform, pengujian dilakukan pada lingkungan berikut:

| Kategori | Spesifikasi Lingkungan Pengujian |
| :--- | :--- |
| **Sistem Operasi (OS)** | Linux (Ubuntu/Debian), macOS, Windows 10/11, Android, iOS |
| **Browser Pendukung** | Google Chrome, Mozilla Firefox, Apple Safari, Microsoft Edge |
| **Resolusi Layar (Desktop)** | 1920x1080 (Full HD), 1440x900, 1366x768 |
| **Resolusi Layar (Mobile)** | 320px (iPhone SE), 360px (Samsung Galaxy), 390px (iPhone 13/14) |
| **Node.js Environment** | Node.js v18.x atau yang lebih baru |

---

## 3. Scope of Testing (Cakupan Pengujian)

Menjelaskan area aplikasi yang masuk dalam prioritas uji coba (*In-Scope*) serta area yang sengaja dikecualikan (*Out-of-Scope*).

### ✓ Di Dalam Cakupan (In-Scope)
* **Functional Testing**: Verifikasi formulir kontak, navigasi link Navbar/Footer, FAQ accordion, dan query parameters URL prefilling.
* **Responsive & Layout Testing**: Memastikan fluiditas grid di berbagai ukuran layar dan tidak adanya elemen visual yang bertabrakan.
* **Usability & Visibility Testing**: Verifikasi kontras warna teks tombol (memastikan revisi tombol harga paket terbaca jelas tanpa hover).
* **Automated Unit Testing**: Pengujian otomatis berbasis kode untuk memvalidasi komponen krusial (`Pricing` dan `Contact`).

### ✗ Di Luar Cakupan (Out-of-Scope)
* **Database & Backend Testing**: Karena server backend disimulasikan menggunakan mock timeout, pengujian database backend tidak dicakup.
* **Security & Penetration Testing**: Tidak dilakukan uji kerentanan keamanan (seperti SQL Injection atau XSS) pada formulir statis.
* **Load & Performance Testing**: Pengujian performa di bawah beban ribuan pengguna serentak tidak dilakukan.

---

## 4. Mockup & UI Design Verification (Verifikasi Visual)

Setiap halaman yang diimplementasikan harus lolos verifikasi keselarasan desain terhadap kriteria mockup berikut:

* **Header/Navbar**: Logo SpaceHub dengan ikon petir gradien ungu-biru harus selalu menempel di atas (*fixed position*). Latar belakang harus berubah transparan blur (*backdrop-blur*) ketika pengguna menggulir halaman ke bawah.
* **Skema Tipografi**: Seluruh teks harus menggunakan rumpun font **Poppins** dengan ketebalan tajam (*black* / *font-black*) untuk judul utama dan ukuran ramping (*medium* / *regular*) untuk paragraf penjelas.
* **Visual Konsistensi**: Kartu fasilitas, kartu ruangan, dan kartu harga harus menggunakan *gradient border border-white/10* untuk mempertahankan nuansa kaca transparan.

---

## 5. Manual Test Cases (Skenario Uji Manual QA)

Berikut adalah lembar kerja (*QA Checklist*) untuk verifikasi manual:

| Test Case ID | Modul / Halaman | Langkah Pengujian | Hasil yang Diharapkan | Status (Pass/Fail) |
| :--- | :--- | :--- | :--- | :--- |
| **TC-NAV-01** | Navigasi Utama | Klik semua menu di Navbar (Tentang, Fasilitas, Ruangan, Harga, dsb.). | URL browser berubah secara SPA dan posisi halaman otomatis scroll ke atas (`ScrollToTop`). | **PASS** |
| **TC-NAV-02** | Navigasi Mobile | Buka web di HP, klik tombol hamburger, lalu klik link "Harga". | Menu hamburger menutup otomatis dan pengguna diarahkan ke rute `/harga`. | **PASS** |
| **TC-404-01** | Rute Wildcard | Ketik alamat asal di URL (misal: `/pricing-lama`). | Aplikasi mengarahkan ke halaman 404 kustom dengan tombol kembali ke beranda. | **PASS** |
| **TC-FAQ-01** | Accordion FAQ | Di `/harga`, klik pertanyaan "Apakah saya bisa ganti paket di tengah bulan?". | Panel FAQ terbuka ke bawah secara mulus dan ikon panah berputar 180 derajat. | **PASS** |
| **TC-CON-01** | Form Kontak | Klik kirim formulir tanpa mengisi Nama dan Email. | Browser menampilkan tooltip peringatan bawaan HTML5 (*"Harap isi bidang ini"*). | **PASS** |
| **TC-CON-02** | Form Kontak | Isi semua data valid di form kontak dan klik "Kirim Pesan Sekarang". | Tombol berubah menjadi "Mengirim...", dan setelah 1.5 detik muncul pemberitahuan sukses dengan nama pengirim. | **PASS** |
| **TC-PRC-01** | Tombol Harga | Periksa visual tombol pada kartu harga non-unggulan di halaman `/harga`. | Teks tulisan tombol (misal: *"Pilih Flexi"*) terlihat jelas dengan warna putih di atas background abu-abu gelap. | **PASS** |
| **TC-CTX-01** | Contextual Booking | Di halaman `/ruangan`, klik "Pesan Sekarang" pada kartu *Private Office*. | Pengguna diarahkan ke `/kontak?interest=Private%20Office` dan opsi "Private Office" di form otomatis terpilih. | **PASS** |

---

## 6. Automated Unit Testing (Pengujian Kode Otomatis)

Sebagai pelengkap pengujian manual, unit testing otomatis diintegrasikan menggunakan **Vitest** dan **React Testing Library** untuk menjaga ketahanan kode saat ada pembaruan di masa depan.

### A. Pengujian Komponen Harga (`Pricing.test.tsx`)
* Memvalidasi kebenaran render header halaman harga dan tombol filter periode (Harian, Bulanan, Tahunan).
* Memvalidasi toggle expand/collapse FAQ menggunakan simulasi event klik (`fireEvent.click`) untuk memastikan penambahan dan penghapusan kelas CSS tinggi kontainer bekerja secara presisi.

### B. Pengujian Komponen Kontak (`Contact.test.tsx`)
* Menyimulasikan input pengetikan pengguna pada form kontak.
* Menggunakan **Vitest Fake Timers** (`vi.useFakeTimers()`) untuk membekukan waktu internal dan memajukan waktu 1500ms secara instan di dalam pembungkus `act(...)` untuk menguji animasi loading pengiriman form tanpa membuat proses testing berjalan lambat.
* Memverifikasi pre-populasi form kontak ketika membaca parameter query string dari `MemoryRouter` (kasus: `?interest=Private%20Office` dan `?interest=Day%20Pass`).
