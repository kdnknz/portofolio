# Implementation Plan: Total Viewer Counter

## Overview

Rencana implementasi ini memecah fitur Total Viewer Counter menjadi langkah-langkah coding bertahap: menyiapkan dependency dan routing, membangun dua serverless function (`/api/track.js` dan `/api/count.js`), membuat komponen frontend `ViewerCounter`, lalu mengintegrasikannya ke `Hero.jsx`. Setiap langkah dibangun di atas langkah sebelumnya dan diakhiri dengan penyatuan (wiring) ke UI. Karena proyek belum memiliki test framework, verifikasi utama dilakukan lewat `npm run build`, dan seluruh sub-task pengujian ditandai opsional (`*`).

## Tasks

- [x] 1. Siapkan dependency dan konfigurasi routing
  - [x] 1.1 Tambahkan dependency `@vercel/blob` ke `package.json`
    - Tambahkan `"@vercel/blob": "^2.6.0"` pada bagian `dependencies`
    - Jalankan instalasi sehingga tercatat di `package-lock.json`
    - _Requirements: 6.2_

  - [x] 1.2 Ubah `vercel.json` agar `/api/*` tidak tertelan SPA rewrite
    - Ganti aturan rewrite menjadi `{ "source": "/((?!api/).*)", "destination": "/index.html" }`
    - Pastikan path `/api/*` diteruskan ke serverless function, path lain tetap di-rewrite ke `/index.html`
    - _Requirements: 6.3, 6.4_

- [x] 2. Implementasi Endpoint_Tulis (`/api/track.js`)
  - [x] 2.1 Buat berkas `api/track.js` dengan handler POST dan logika hashing IP
    - Tolak method selain `POST` dengan status `405`
    - Ambil IP dari header `x-forwarded-for` (entri pertama bila daftar berkoma)
    - Hitung Hash_IP dengan SHA-256 atas gabungan IP + `process.env.VIEWER_HASH_SALT` memakai modul `crypto`
    - Lakukan read-modify-write: baca `viewers.ndjson` dari Blob (kosong bila belum ada), append baris `{"ip":"<hash>","ts":"<ISO>"}\n`, lalu `put` ulang dengan `allowOverwrite: true` dan `token = process.env.BLOB_READ_WRITE_TOKEN`
    - Kembalikan `200 { ok: true }`; tangani kegagalan dengan `500` pesan generik
    - _Requirements: 3.1, 3.2, 3.3, 3.4, 6.1, 6.5_

  - [ ]* 2.2 Tulis property test untuk hashing IP
    - **Property 2: Hashing IP deterministik dan sensitif terhadap input**
    - **Validates: Requirements 3.2**

  - [ ]* 2.3 Tulis property test untuk serialisasi baris NDJSON
    - **Property 3: Round-trip serialisasi baris NDJSON dan pelindungan privasi**
    - **Validates: Requirements 3.3, 3.4**

- [x] 3. Implementasi Endpoint_Baca (`/api/count.js`)
  - [x] 3.1 Buat berkas `api/count.js` dengan handler GET dan penghitungan IP unik
    - `list` Blob dengan prefix `viewers.ndjson`; bila file tidak ada kembalikan `200 { totalViewers: 0 }`
    - Fetch isi file, split per baris, abaikan baris kosong, lewati baris rusak secara defensif
    - Parse tiap baris, kumpulkan `ip` ke dalam `Set`, kembalikan `200 { totalViewers: set.size }`
    - Gunakan `token = process.env.BLOB_READ_WRITE_TOKEN`; tangani kesalahan tak terduga dengan `500`
    - _Requirements: 4.1, 4.2, 4.3, 4.4, 5.1, 6.1, 6.5_

  - [ ]* 3.2 Tulis property test untuk penghitungan pengunjung unik
    - **Property 4: Penghitungan pengunjung unik**
    - **Validates: Requirements 4.2, 4.3, 4.4, 5.1**

- [x] 4. Checkpoint - Verifikasi endpoint dan konfigurasi
  - Pastikan `npm run build` sukses dan berkas `/api/track.js`, `/api/count.js` ada; ask the user if questions arise.

- [x] 5. Implementasi komponen frontend `ViewerCounter`
  - [x] 5.1 Buat berkas `src/components/ViewerCounter.jsx`
    - Komponen fungsional dengan state `count` (number | null) dan `status` (`'loading' | 'ready' | 'error'`)
    - Pada mount: cek Penanda_Session `viewer_counted` di `sessionStorage`; bila belum ada `POST /api/track` dan set penanda saat sukses (kegagalan diabaikan diam-diam)
    - Selalu `GET /api/count`; saat sukses set `count` dan `status='ready'`, saat gagal set `status='error'`
    - Render: `loading` → indikator memuat; `ready` → angka `toLocaleString('id-ID')` + label Bahasa Indonesia; `error` → `return null`; nilai `0` tetap ditampilkan
    - Sertakan styling inline via `<style jsx>`
    - _Requirements: 1.1, 1.2, 1.4, 2.1, 2.2, 2.3, 5.2, 5.3_

  - [ ]* 5.2 Tulis property test untuk pencatatan sekali per session
    - **Property 1: Pencatatan paling banyak sekali per session**
    - **Validates: Requirements 2.1, 2.2, 2.3**

- [x] 6. Integrasi `ViewerCounter` ke `Hero.jsx`
  - [x] 6.1 Render `<ViewerCounter />` di dalam Hero, tepat di bawah blok social links
    - Import komponen `ViewerCounter` di `Hero.jsx`
    - Sisipkan `<ViewerCounter />` setelah penutup `.social-links` di dalam `.hero-text`
    - _Requirements: 1.3_

- [x] 7. Checkpoint akhir - Verifikasi build menyeluruh
  - Jalankan `npm run build` untuk memastikan komponen dan konfigurasi tidak merusak build; ask the user if questions arise.

## Notes

- Task bertanda `*` bersifat opsional (pengujian) dan dapat dilewati untuk MVP; proyek belum punya test framework sehingga verifikasi utama adalah `npm run build`.
- Setiap task merujuk sub-requirement spesifik untuk keterlacakan (traceability).
- Checkpoint memastikan validasi bertahap lewat build.
- Property test merujuk properti pada design (Correctness Properties); logika (hashing, serialisasi, penghitungan unik) diuji terpisah dari I/O dengan operasi Blob di-mock bila framework ditambahkan kemudian.
- Property 5 (keputusan rewrite routing) divalidasi lewat konfigurasi `vercel.json` pada task 1.2 dan verifikasi build, bukan property test terpisah.

## Task Dependency Graph

```json
{
  "waves": [
    { "id": 0, "tasks": ["1.1", "1.2", "2.1", "3.1", "5.1"] },
    { "id": 1, "tasks": ["2.2", "2.3", "3.2", "5.2", "6.1"] }
  ]
}
```
