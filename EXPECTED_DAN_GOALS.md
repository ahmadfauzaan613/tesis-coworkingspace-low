# GOALS & EXPECTED RESULTS — SPACEHUB COWORKING SPACE

Dokumen ini mendefinisikan tujuan pengembangan (*development goals*) dan hasil akhir yang diharapkan (*expected results*) dari aplikasi **SpaceHub Coworking Space**. Dokumen ini diformulasikan khusus untuk menjadi landasan ilmiah dalam mengevaluasi keberhasilan aplikasi serta pembuktian empiris dalam naskah tesis Anda.

---

## 1. Sasaran Utama Aplikasi (Development Goals)

Sasaran pengembangan aplikasi SpaceHub dibagi menjadi tiga dimensi utama: fungsional, estetika (UI/UX), dan akademis (metodologi penelitian).

### A. Sasaran Fungsional (Functional Goals)
1. **Navigasi Mulus & Cepat**: Menyediakan rute SPA (Single Page Application) yang instan guna meningkatkan retensi pengguna dibandingkan arsitektur multi-page tradisional (MPA).
2. **Pengisian Formulir Pintar (Contextual Experience)**: Mengurangi beban interaksi pengguna (*interaction cost*) dengan mengimplementasikan pre-populasi form otomatis berbasis parameter URL (`?interest=...`).
3. **Validasi Formulir yang Kuat**: Menghindari pengiriman data kosong atau tidak valid ke sisi server melalui validasi bawaan yang informatif.
4. **Respon Interaktif Realistis**: Menyajikan umpan balik visual (*loading* dan *success state*) yang menyimulasikan komunikasi asinkron dengan server backend.

### B. Sasaran Estetika & Aksesibilitas (Visual & Accessibility Goals)
1. **Desain Premium & Modern**: Menerapkan tema gelap (*sleek dark mode*) dengan kontras neon gradien ungu-biru, dipadukan dengan efek kaca transparan (*glassmorphism*) yang melambangkan identitas modern/futuristik dari "SpaceHub".
2. **Keterbacaan yang Sempurna**: Memastikan kontras warna teks tombol (khususnya tombol "Pilih Paket" di halaman Harga) terbaca jelas oleh semua pengguna, termasuk yang memiliki keterbatasan penglihatan ringan (aksesibilitas).
3. **Kepatuhan Responsif (Fluid Layout)**: Memastikan tampilan grid, menu navigasi, dan elemen gambar menyesuaikan diri secara mulus di berbagai resolusi layar tanpa terjadi kerusakan layout (*zero visual break*).

### C. Sasaran Akademis / Penelitian Tesis (Academic Goals)
1. **Studi Kasus Vibe Coding**: Mengevaluasi seberapa cepat dan andal proses pembuatan aplikasi web berskala menengah menggunakan pendekatan instruksi AI (*Vibe Coding*).
2. **Evaluasi Keamanan Kode Otomatis**: Membuktikan peran unit testing otomatis (Vitest) sebagai jaring pengaman (*safety net*) saat melakukan iterasi cepat.
3. **Analisis Komparatif Pengujian**: Membandingkan efisiensi waktu dan deteksi error antara pengujian manual (*manual testing*) dan pengujian otomatis (*automated testing*).

---

## 2. Hasil yang Diharapkan (Expected Results)

Untuk menyatakan aplikasi SpaceHub layak rilis (*production-ready*) dan sukses memenuhi kriteria penelitian tesis, hasil pengujian harus memenuhi metrik berikut:

### A. Metrik Kelulusan Uji Fungsional & Kualitas
* **Tingkat Kelulusan Uji Manual (Manual Pass Rate)**: **100%**. Seluruh 8 skenario uji manual utama wajib bernilai **PASS** (lulus) tanpa ada anomali visual atau fungsionalitas.
* **Tingkat Kelulusan Uji Otomatis (Automated Pass Rate)**: **100%**. Seluruh 12 kasus pengujian otomatis di suite Vitest (`Pages.test.tsx`, `Pricing.test.tsx`, `Contact.test.tsx`) wajib lolos (*passed*).
* **UI Overflow Rate**: **0%**. Tidak boleh ada horizontal scrollbar yang muncul pada browser saat diuji pada lebar layar paling sempit (320px).
* **Pre-population Accuracy**: **100%**. Tautan pemesanan dari halaman ruangan/harga wajib mentransfer data secara presisi ke field ketertarikan di halaman kontak.

### B. Perbandingan Ekspektasi Efisiensi Pengujian (Metodologi QA)
Sebagai bahan analisis dalam bab pembahasan tesis Anda, berikut adalah tabel ekspektasi perbandingan efisiensi pengujian yang berhasil dicapai pada aplikasi SpaceHub:

| Parameter Pengujian | Pengujian Manual (QA Specialist) | Pengujian Otomatis (Vitest + RTL + Fake Timers) |
| :--- | :--- | :--- |
| **Waktu Eksekusi Form Kontak** | ± 5 - 10 Detik per percobaan (menunggu simulasi delay 1.5 detik nyata). | **< 2 milidetik** (menggunakan teknik pembekuan waktu `vi.useFakeTimers`). |
| **Waktu Total Smoke Test Halaman** | ± 1 - 2 Menit (mengeklik dan memeriksa 8 halaman satu per satu secara manual). | **< 15 milidetik** (seluruh 7 halaman presentasional dimount secara paralel oleh jsdom). |
| **Kerentanan Human Error** | Tinggi (penguji bisa terlewat mengamati detail transisi atau kontras warna). | Sangat Rendah (asersi DOM terdefinisi secara statis melalui kode `data-testid`). |
| **Kemudahan Regresi** | Sulit (harus mengulang seluruh checklist dari awal setiap kali ada revisi kode). | Sangat Mudah (cukup jalankan satu perintah `npm run test` dalam hitungan detik). |

---

## 3. Kriteria Keberhasilan Tesis (Success Criteria Summary)

Keberhasilan implementasi aplikasi SpaceHub dalam riset ini diukur berdasarkan:
1. **Aplikasi Berjalan Sempurna**: Seluruh fungsionalitas berjalan secara real-time di lokal development server tanpa ada *runtime crash* pada konsol browser.
2. **Kesesuaian Desain**: Desain visual mencerminkan konsep premium modern dan memiliki kontras tulisan tombol yang tinggi untuk kemudahan aksesibilitas.
3. **Dokumentasi Pengujian Terpadu**: Tersedianya dokumen analisis unit test, rencana pengujian manual, dan spesifikasi arsitektur (flow besar) yang komprehensif untuk disajikan dalam lampiran tesis.
