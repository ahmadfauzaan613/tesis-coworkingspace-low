# ANALISIS PENGUJIAN UNIT (UNIT TEST ANALYSIS) — SPACEHUB

Dokumen ini disusun sebagai bahan analisis akademik dan metodologi penelitian untuk tesis Anda, khususnya dalam mengevaluasi efektivitas, struktur, dan teknik pengujian otomatis pada aplikasi berbasis React 19 dan Tailwind CSS v4 yang dikembangkan menggunakan metode *vibe coding*.

---

## 1. Pendahuluan & Filosofi Pengujian

Pengujian unit (*unit testing*) pada antarmuka pengguna (UI) modern tidak hanya bertujuan untuk memastikan kode dapat berjalan, melainkan memverifikasi bahwa **antarmuka berinteraksi dengan benar sesuai ekspektasi pengguna**.

Pada proyek SpaceHub, pengujian unit diimplementasikan menggunakan kombinasi tiga teknologi utama:
1. **Vitest**: Sebagai *test runner* berkecepatan tinggi yang memanfaatkan *Hot Module Replacement* (HMR) dari Vite.
2. **React Testing Library (RTL)**: Framework pengujian yang mendorong praktik terbaik dengan berfokus pada perilaku komponen (DOM nodes) daripada detail implementasi internal React (seperti state atau props internal).
3. **jsdom**: Lingkungan simulasi browser berbasis Node.js yang memungkinkan manipulasi DOM berjalan di memori tanpa perlu membuka browser fisik.

---

## 2. Arsitektur Folder & Pemisahan Kepentingan (Separation of Concerns)

Struktur folder pengujian dirapikan ke dalam satu direktori terpusat:
```
src/
├── components/
│   └── sections/
│       ├── Pricing.tsx
│       └── Contact.tsx
└── tests/
    ├── Pages.test.tsx      # Smoke Tests (Uji Kelayakan Render Halaman)
    ├── Pricing.test.tsx    # Behavioral Test (FAQ & Toggles)
    └── Contact.test.tsx    # Integration Test (Form, Timers, & Router Query)
```

**Analisis Desain Arsitektur**:
* **Kerapian Kode**: Memisahkan file `.test.tsx` dari folder komponen produksi (`src/components/sections`) mencegah penumpukan file saat proyek berkembang skala besar.
* **Path Alias (`@/`)**: Memanfaatkan konfigurasi `resolve.alias` dari Vite agar pengimporan komponen di dalam file tes tetap menggunakan path mutlak yang bersih (misal: `import Contact from "@/components/sections/Contact"`), sehingga tes tidak mudah rusak apabila dipindahkan posisinya di masa mendatang.

---

## 3. Analisis Strategi Pengujian (Testing Strategy)

Aplikasi SpaceHub menerapkan dua lapis strategi pengujian unit:

### A. Uji Asap (Smoke Testing) — `Pages.test.tsx`
* **Definisi**: Pengujian minimal yang memverifikasi apakah seluruh halaman presentasional (`HomePage`, `TentangPage`, `FasilitasPage`, `RuanganPage`, `TestimoniPage`, `LokasiPage`, `NotFoundPage`) dapat di-render (*mount*) ke dalam DOM tanpa melempar error fatal (*crash*).
* **Manfaat**: Menjadi jaring pengaman awal (*first line of defense*) terhadap kesalahan impor, error sintaksis, atau kerusakan modul setelah refactoring cepat (ciri khas *vibe coding*).

### B. Uji Perilaku (Behavioral & Integration Testing) — `Pricing.test.tsx` & `Contact.test.tsx`
* **Definisi**: Pengujian fungsionalitas logika interaktif di mana komponen merespons aksi pengguna (klik, pengetikan) dan mengubah kondisi tampilan (*state state transitions*).
* **Manfaat**: Menjamin alur bisnis penting (pendaftaran tur, pengiriman pesan, pemilihan paket harga, perluasan FAQ) tetap bekerja sesuai spesifikasi fungsional.

---

## 4. Analisis Teknik & Metodologi Kunci (Key Testing Techniques)

Dalam pengujian otomatis SpaceHub, terdapat empat teknik rekayasa pengujian penting yang dapat menjadi bahan analisis mendalam untuk tesis Anda:

### A. Pengujian Waktu Virtual dengan Fake Timers (`vi.useFakeTimers`)
* **Metode**: Saat pengguna mengirim formulir kontak, aplikasi menyimulasikan proses pengiriman dengan `setTimeout` selama 1500ms.
* **Masalah**: Menunggu 1.5 detik nyata pada setiap kali pengujian berjalan akan membuat CI/CD lambat dan memboroskan resource.
* **Solusi**: Menggunakan `vi.useFakeTimers()` untuk membekukan waktu internal browser. Setelah tombol kirim diklik, kita memajukan waktu virtual secara instan menggunakan `vi.advanceTimersByTime(1500)`.
* **Analisis**: Teknik ini mereduksi waktu eksekusi tes dari **1.5 detik menjadi kurang dari 2 milidetik**, menjamin tes berjalan deterministik tanpa fluktuasi kecepatan I/O server.

### B. Pembungkusan Sinkronisasi DOM (`act`)
* **Metode**: React memperbarui DOM secara asinkron untuk mengoptimalkan performa rendering.
* **Masalah**: Ketika kita memajukan waktu virtual lewat fake timers, perubahan state React terjadi di luar siklus render pengujian standar, yang memicu peringatan konsol: *"An update to Component inside a test was not wrapped in act(...)"*.
* **Solusi**: Membungkus operasi fake timer di dalam utilitas `act()` dari React Testing Library:
  ```typescript
  act(() => {
    vi.advanceTimersByTime(1500)
  })
  ```
* **Analisis**: Pembungkusan ini memaksa React untuk langsung memproses semua antrean pembaruan state (*state updates*) dan merender ulang DOM secara sinkron sebelum asersi berikutnya dijalankan.

### C. Dekopling Pengujian dengan Selektor Stabil (`data-testid`)
* **Metode**: Penambahan atribut `data-testid="..."` pada elemen interaktif (seperti tombol submit, input formulir, tombol navigasi).
* **Masalah**: Menyeleksi elemen berdasarkan teks (*byText*) atau struktur kelas CSS (*querySelector*) sangat rentan rusak (*brittle*) ketika desainer mengubah kata-kata, menerjemahkan bahasa, atau mengubah gaya styling visual Tailwind.
* **Solusi**: QA Engineer menyeleksi elemen melalui penanda khusus yang tidak terikat visual:
  ```typescript
  const nameInput = screen.getByTestId("contact-name")
  ```
* **Analisis**: Teknik ini memisahkan secara tegas kepentingan fungsionalitas tes dari desain visual. Aplikasi dapat diubah styling-nya secara total tanpa merusak skrip pengujian otomatis yang ada.

### D. Penanganan Konflik Duplikasi Teks DOM (`getAllByText`)
* **Metode**: Pemanfaatan `screen.getAllByText(...)[0]` untuk asersi teks yang berulang.
* **Masalah**: UI premium sering kali menampilkan teks yang sama di beberapa tempat (misalnya judul *"Mereka Sudah"* yang ada di Page Header sekaligus di Section Title). Pencarian menggunakan `screen.getByText` akan melempar error karena menemukan lebih dari satu elemen yang cocok.
* **Solusi**: Menggunakan `screen.getAllByText` yang mengembalikan array elemen, lalu mengambil indeks pertama `[0]` untuk memverifikasi kehadirannya di DOM.

---

## 5. Ringkasan Matriks Kasus Uji (Test Coverage Matrix)

Aplikasi saat ini memiliki **12 kasus uji** yang berhasil lolos pengujian dengan hasil sempurna:

| File Tes | Nama Kasus Uji | Fungsi yang Validasi | Teknik yang Digunakan |
| :--- | :--- | :--- | :--- |
| `Pricing.test.tsx` | *renders pricing section and period toggles correctly* | Verifikasi kemunculan header dan tombol filter periode (harian, bulanan, tahunan). | RTL Rendering |
| | *renders the FAQ list and toggles expand/collapse state* | Verifikasi klik FAQ accordion untuk mengubah kelas CSS (`max-h-0` ke `max-h-[200px]`). | `fireEvent.click`, Class Assertion |
| `Contact.test.tsx` | *allows inputs to be filled and submits successfully* | Verifikasi alur pengetikan form, loader status mengirim, dan layar sukses. | `fireEvent.change`, `act`, `vi.useFakeTimers` |
| | *pre-populates interest category from query parameters* | Verifikasi auto-select opsi ketertarikan di form berdasarkan URL param `?interest=...`. | `MemoryRouter` Route Mocking |
| | *pre-populates custom message when specific pricing plan is passed* | Verifikasi pre-populate draf pesan otomatis berdasarkan nama paket dari URL param. | `MemoryRouter` Route Mocking |
| `Pages.test.tsx` | *renders [PageName] without crashing* (7 Kasus Uji) | Memastikan 7 halaman presentasional dapat terpasang di DOM tanpa error rendering. | RTL Smoke Testing, `screen.getAllByText` |

---

## 6. Kesimpulan Bahan Tesis

Dalam konteks penelitian **Vibe Coding** (pengembangan cepat berbasis instruksi AI):
1. **Keandalan Iterasi**: Vibe coding memungkinkan penulisan ribuan baris kode secara instan. Keberadaan suite unit test dengan Vitest ini bertindak sebagai **Validator Keamanan Otomatis** (*automated safety net*). AI atau developer dapat mengubah kode dengan cepat, dan kesalahan sekecil apa pun akan langsung terdeteksi dalam hitungan detik.
2. **Dokumentasi Hidup**: Spesifikasi pengujian unit ini berfungsi sebagai dokumentasi hidup (*living documentation*) yang secara jelas mendefinisikan bagaimana perilaku fungsional aplikasi SpaceHub seharusnya bekerja.
