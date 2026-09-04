# Design Document

## Overview

Fitur **Total Viewer Counter** menambahkan penghitung jumlah pengunjung unik pada portofolio React (Vite) yang di-deploy di Vercel. Fitur ini terdiri atas tiga bagian:

1. **Frontend** — komponen React baru (`ViewerCounter`) yang dirender di dalam `Hero.jsx` (di bawah social links). Saat halaman Home dimuat, komponen mencatat kunjungan sekali per session lalu menampilkan jumlah pengunjung unik.
2. **Serverless functions** — dua berkas di direktori `/api` (auto-detected Vercel): `track.js` (Endpoint_Tulis) dan `count.js` (Endpoint_Baca).
3. **Penyimpanan** — satu file NDJSON (`viewers.ndjson`) di Vercel Blob yang menyimpan hash IP + timestamp per kunjungan.

IP pengunjung tidak pernah disimpan mentah: setiap IP di-hash dengan SHA-256 + salt (Node `crypto`) sebelum ditulis. Seluruh teks antarmuka dalam Bahasa Indonesia.

Karena proyek belum memiliki test framework, verifikasi dilakukan melalui `npm run build`.

### Batasan Teknis

- **Bahasa:** JavaScript (ES Modules), bukan TypeScript. Semua contoh kode di dokumen ini memakai JavaScript.
- **Frontend:** React 18, komponen fungsional + hooks, styling via inline `<style jsx>`.
- **Runtime API:** Node.js serverless function Vercel (butuh modul `crypto` bawaan Node, jadi bukan Edge runtime).
- **Storage:** `@vercel/blob` (di-pin `^2.6.0` — versi mayor 2 saat ini, kompatibel dengan `put`/`list`/`fetch` yang dipakai di sini).

## Architecture

### Diagram Alur Data

```
                          Browser (Home / route "/")
                          ┌──────────────────────────────┐
                          │  App.jsx  →  <Hero>           │
                          │              └ <ViewerCounter>│
                          └───────┬──────────────┬────────┘
                                  │              │
             (1) sekali/session   │              │ (2) selalu saat mount
             POST /api/track      │              │ GET /api/count
                                  ▼              ▼
                    ┌───────────────────┐  ┌───────────────────┐
                    │  /api/track.js    │  │  /api/count.js    │
                    │  (Endpoint_Tulis) │  │  (Endpoint_Baca)  │
                    └─────────┬─────────┘  └─────────┬─────────┘
                              │                      │
                    hash IP + append baris    baca & hitung unik
                              │                      │
                              ▼                      ▼
                    ┌────────────────────────────────────────┐
                    │  Vercel Blob: "viewers.ndjson"          │
                    │  {"ip":"<hash>","ts":"<ISO>"}\n ...      │
                    └────────────────────────────────────────┘
```

### Routing Vercel

`vercel.json` saat ini me-rewrite **semua** path ke `/index.html`, yang akan menelan permintaan `/api/*` sebelum sampai ke serverless function. Konfigurasi harus diubah agar:

- `/api/*` **tidak** di-rewrite (diteruskan ke serverless function).
- Path lain tetap di-rewrite ke `/index.html` untuk mendukung SPA React Router.

Pendekatan yang dipilih: **negative lookahead** pada pola `source`, karena paling ringkas dan tidak bergantung pada urutan aturan yang halus.

```json
{
  "rewrites": [
    { "source": "/((?!api/).*)", "destination": "/index.html" }
  ]
}
```

Pola `/((?!api/).*)` mencocokkan setiap path **kecuali** yang diawali `api/`, sehingga `/api/track` dan `/api/count` diteruskan ke fungsi masing-masing, sedangkan `/`, `/about`, `/skills`, dll. tetap di-rewrite ke `index.html`.

## Storage Strategy (Vercel Blob)

### Skema Penyimpanan

- **Nama file (pathname) tetap:** `viewers.ndjson`.
- **Format:** NDJSON (Newline-Delimited JSON). Satu baris per kunjungan:

  ```
  {"ip":"9f2c...a1","ts":"2025-01-15T08:30:00.000Z"}
  {"ip":"3b7d...ff","ts":"2025-01-15T09:12:44.512Z"}
  ```

- `ip` = Hash_IP (hex SHA-256 dari `IP + Salt`).
- `ts` = ISO 8601 timestamp saat kunjungan tercatat.

### Masalah: `@vercel/blob` Tidak Punya Operasi Append Native

SDK `@vercel/blob` menyediakan `put`, `list`, `head`, `del`, tetapi **tidak ada** operasi append. Ada beberapa alternatif:

| Opsi | Cara Kerja | Kelebihan | Kekurangan |
|------|-----------|-----------|------------|
| **A. Read-modify-write** | Unduh isi `viewers.ndjson`, tambahkan baris baru, `put` ulang dengan `allowOverwrite: true` | Satu file, mudah dibaca Endpoint_Baca, kode sederhana | Race condition pada dua tulis bersamaan bisa menimpa (kehilangan baris); biaya transfer naik seiring ukuran file |
| **B. One-blob-per-visit** | Setiap kunjungan `put` file baru dengan pathname unik (mis. `visits/<hash>-<ts>.json`), Endpoint_Baca `list` semua blob lalu hitung | Tidak ada race saat menulis | Endpoint_Baca harus `list` + fetch banyak objek → lambat & mahal saat data tumbuh; lebih kompleks |
| **C. External append store** | Pakai KV/DB append-friendly (Redis, Postgres) | Bebas race, atomik | Menambah dependency & layanan; keluar dari batasan "NDJSON di Blob" |

**Keputusan: Opsi A (read-modify-write).**

Alasan:

- Requirement secara eksplisit menetapkan satu File_NDJSON di Blob dengan format `{"ip","ts"}` per baris — Opsi A langsung memenuhi ini; Opsi B menyimpang dari skema.
- Skala portofolio kecil: trafik rendah, ukuran file tetap kecil, sehingga biaya read-modify-write dapat diabaikan.
- Kode paling sederhana dan mudah diverifikasi.

**Race condition — analisis dan mitigasi yang cukup:**

Jika dua permintaan `track` berjalan hampir bersamaan, keduanya membaca versi file yang sama lalu menulis ulang, sehingga salah satu baris bisa hilang (lost update). Untuk konteks ini hal tersebut **dapat diterima** karena:

- Probabilitas dua kunjungan tepat bersamaan pada portofolio sangat kecil.
- Dampaknya hanya kehilangan satu catatan kunjungan (hitungan sedikit lebih rendah), bukan kerusakan data atau kebocoran privasi.
- Endpoint_Tulis hanya dipanggil sekali per session (Penanda_Session), menekan frekuensi tulis lebih jauh.

Tidak ada mekanisme locking yang ditambahkan demi kesederhanaan. Bila di masa depan trafik naik signifikan, migrasi ke Opsi C (append store) menjadi jalur peningkatan yang jelas.

**Konsistensi baca:** Setelah overwrite pada pathname yang sama, pembacaan default lewat CDN Blob dapat mengembalikan versi lama untuk beberapa saat. Untuk penghitung portofolio, keterlambatan angka beberapa detik tidak masalah dan tidak memerlukan penanganan khusus.

## Components and Interfaces

### 1. Frontend: `ViewerCounter` (komponen React baru)

Berkas: `src/components/ViewerCounter.jsx`

Tanggung jawab:

- Pada mount (halaman Home):
  1. Cek `sessionStorage` untuk Penanda_Session (`viewer_counted`).
  2. Jika belum ada: `POST /api/track`; bila sukses set penanda `sessionStorage.setItem('viewer_counted', '1')`.
  3. Selalu `GET /api/count` untuk memperoleh `totalViewers`.
- State:
  - `count` (number | null) — hasil hitungan.
  - `status` (`'loading' | 'ready' | 'error'`).
- Rendering:
  - `status === 'loading'` → indikator memuat (mis. teks "Memuat..." atau titik animasi).
  - `status === 'ready'` → tampilkan angka + label Bahasa Indonesia, mis. **"👁 1.234 total pengunjung"** (angka diformat `toLocaleString('id-ID')`).
  - `status === 'error'` → `return null` (seluruh tampilan penghitung disembunyikan).
- Nilai `0` tetap ditampilkan normal (bukan disembunyikan).

Kerangka (JavaScript/JSX):

```jsx
import React, { useEffect, useState } from 'react'

const SESSION_KEY = 'viewer_counted'

const ViewerCounter = () => {
  const [count, setCount] = useState(null)
  const [status, setStatus] = useState('loading') // 'loading' | 'ready' | 'error'

  useEffect(() => {
    let active = true

    const run = async () => {
      // Catat kunjungan sekali per session
      try {
        if (!sessionStorage.getItem(SESSION_KEY)) {
          const res = await fetch('/api/track', { method: 'POST' })
          if (res.ok) sessionStorage.setItem(SESSION_KEY, '1')
        }
      } catch {
        // kegagalan pencatatan tidak boleh menghalangi pembacaan
      }

      // Baca jumlah pengunjung unik
      try {
        const res = await fetch('/api/count')
        if (!res.ok) throw new Error('gagal')
        const data = await res.json()
        if (!active) return
        setCount(Number(data.totalViewers) || 0)
        setStatus('ready')
      } catch {
        if (active) setStatus('error')
      }
    }

    run()
    return () => { active = false }
  }, [])

  if (status === 'error') return null

  return (
    <div className="viewer-counter">
      {status === 'loading' ? (
        <span className="viewer-loading">Memuat jumlah pengunjung...</span>
      ) : (
        <span className="viewer-count">
          {count.toLocaleString('id-ID')} total pengunjung
        </span>
      )}
      <style jsx>{`
        .viewer-counter { margin-top: 1.25rem; color: var(--text-light); font-size: 0.9rem; }
        .viewer-count { display: inline-flex; align-items: center; gap: 0.4rem; }
      `}</style>
    </div>
  )
}

export default ViewerCounter
```

### 2. Integrasi ke `Hero.jsx`

`ViewerCounter` dirender di dalam `Hero`, tepat setelah blok `.social-links` (memenuhi req 1.3). Tidak ada perubahan props Hero; komponen tidak butuh data eksternal.

```jsx
// di dalam <div className="hero-text">, setelah </div> penutup .social-links
<div className="social-links"> ... </div>
<ViewerCounter />
```

`App.jsx` tetap merender `<Hero data={portfolioData.personal} social={portfolioData.social} />` pada route `/` — tidak berubah.

### 3. Endpoint_Tulis: `/api/track.js`

Method: `POST` (tolak method lain dengan 405).

Alur:

1. Ambil IP dari header `x-forwarded-for` (ambil entri pertama bila berformat daftar berkoma).
2. Hitung `hash = sha256(ip + salt)` (hex), `salt = process.env.VIEWER_HASH_SALT`.
3. Baca isi `viewers.ndjson` dari Blob (bila belum ada, mulai dari string kosong).
4. Tambahkan baris `{"ip":"<hash>","ts":"<ISO>"}\n`.
5. `put('viewers.ndjson', konten, { access: 'public', allowOverwrite: true, token })`.
6. Respons `200 { ok: true }`.

Interface:

```
POST /api/track
Request body: (kosong)
Response 200: { "ok": true }
Response 405: { "error": "Method Not Allowed" }
Response 500: { "error": "..." }   // kegagalan Blob/konfigurasi
```

Kerangka:

```js
import { list, put } from '@vercel/blob'
import { createHash } from 'crypto'

const BLOB_NAME = 'viewers.ndjson'

function getClientIp(req) {
  const xff = req.headers['x-forwarded-for'] || ''
  return xff.split(',')[0].trim() || 'unknown'
}

function hashIp(ip, salt) {
  return createHash('sha256').update(`${ip}${salt}`).digest('hex')
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' })
  }
  try {
    const salt = process.env.VIEWER_HASH_SALT || ''
    const token = process.env.BLOB_READ_WRITE_TOKEN
    const hash = hashIp(getClientIp(req), salt)
    const line = JSON.stringify({ ip: hash, ts: new Date().toISOString() }) + '\n'

    // read-modify-write
    const { blobs } = await list({ prefix: BLOB_NAME, token })
    let existing = ''
    const found = blobs.find((b) => b.pathname === BLOB_NAME)
    if (found) {
      const resp = await fetch(found.url)
      if (resp.ok) existing = await resp.text()
    }

    await put(BLOB_NAME, existing + line, {
      access: 'public',
      contentType: 'application/x-ndjson',
      allowOverwrite: true,
      token,
    })

    return res.status(200).json({ ok: true })
  } catch (err) {
    return res.status(500).json({ error: 'Gagal mencatat kunjungan' })
  }
}
```

### 4. Endpoint_Baca: `/api/count.js`

Method: `GET`.

Alur:

1. `list` Blob dengan prefix `viewers.ndjson`.
2. Jika file tidak ada → `200 { totalViewers: 0 }` (req 5.1).
3. Fetch isi file, split per baris, abaikan baris kosong.
4. Untuk tiap baris: `JSON.parse`, ambil `ip`, tambahkan ke `Set` (baris rusak dilewati defensif).
5. `totalViewers = set.size`.
6. Respons `200 { totalViewers: n }`.

Interface:

```
GET /api/count
Response 200: { "totalViewers": <number> }   // 0 bila kosong/tidak ada
Response 500: { "error": "..." }
```

Kerangka:

```js
import { list } from '@vercel/blob'

const BLOB_NAME = 'viewers.ndjson'

export default async function handler(req, res) {
  try {
    const token = process.env.BLOB_READ_WRITE_TOKEN
    const { blobs } = await list({ prefix: BLOB_NAME, token })
    const found = blobs.find((b) => b.pathname === BLOB_NAME)
    if (!found) return res.status(200).json({ totalViewers: 0 })

    const resp = await fetch(found.url)
    if (!resp.ok) return res.status(200).json({ totalViewers: 0 })
    const text = await resp.text()

    const unique = new Set()
    for (const raw of text.split('\n')) {
      const line = raw.trim()
      if (!line) continue
      try {
        const rec = JSON.parse(line)
        if (rec && rec.ip) unique.add(rec.ip)
      } catch {
        // lewati baris rusak
      }
    }
    return res.status(200).json({ totalViewers: unique.size })
  } catch (err) {
    return res.status(500).json({ error: 'Gagal membaca jumlah pengunjung' })
  }
}
```

## Data Models

### Record Kunjungan (satu baris NDJSON)

```
{
  "ip": string,   // Hash_IP: SHA-256 hex dari (IP + Salt)
  "ts": string    // ISO 8601 timestamp
}
```

### Respons Endpoint_Baca

```
{
  "totalViewers": number   // jumlah Hash_IP unik; 0 bila kosong
}
```

### Environment Variables

| Nama | Dipakai oleh | Kegunaan |
|------|--------------|----------|
| `BLOB_READ_WRITE_TOKEN` | track.js, count.js | Otorisasi akses Vercel Blob |
| `VIEWER_HASH_SALT` | track.js | Salt untuk hashing SHA-256 IP |

### Perubahan `package.json`

Tambahkan dependency dengan versi di-pin:

```json
"dependencies": {
  "@vercel/blob": "^2.6.0"
}
```

## Struktur File

```
portofolio/
├── api/                          # (baru) serverless functions Vercel
│   ├── track.js                  # Endpoint_Tulis (POST)
│   └── count.js                  # Endpoint_Baca (GET)
├── src/
│   └── components/
│       ├── Hero.jsx              # (diubah) render <ViewerCounter/> di bawah social links
│       └── ViewerCounter.jsx     # (baru) komponen penghitung
├── vercel.json                   # (diubah) rewrite kecualikan /api/*
└── package.json                  # (diubah) tambah @vercel/blob
```

## Error Handling

### Endpoint_Tulis (`track.js`)

- Method bukan `POST` → `405`.
- Token/salt tidak terkonfigurasi atau operasi Blob gagal → `500` dengan pesan generik (tidak membocorkan detail internal). Kegagalan `track` tidak fatal bagi UI: frontend menangani secara diam-diam.
- File belum ada saat pembacaan awal → diperlakukan sebagai string kosong (bukan error).

### Endpoint_Baca (`count.js`)

- File tidak ada / kosong / gagal di-fetch → `200 { totalViewers: 0 }` (jaga UI tetap wajar, req 5.1).
- Baris NDJSON rusak → dilewati defensif, tidak menggagalkan seluruh hitungan.
- Kesalahan tak terduga → `500`; frontend akan menyembunyikan penghitung.

### Frontend (`ViewerCounter`)

- Kegagalan `POST /api/track` → diabaikan (tidak set Penanda_Session, tidak mengganggu pembacaan).
- Kegagalan `GET /api/count` (network error atau non-2xx) → `status = 'error'` → komponen `return null` (req 5.3).
- Nilai `0` dari server → ditampilkan normal (req 5.2).

## Correctness Properties

*A property is a characteristic or behavior that should hold true across all valid executions of a system-essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees.*

### Property 1: Pencatatan paling banyak sekali per session

*For any* state awal `sessionStorage`, saat komponen `ViewerCounter` dimuat: Endpoint_Tulis dipanggil **jika dan hanya jika** Penanda_Session belum ada; dan setelah pemanggilan Tulis yang berhasil, Penanda_Session ter-set sehingga pemuatan berikutnya dalam session yang sama tidak memicu pemanggilan Tulis lagi.

**Validates: Requirements 2.1, 2.2, 2.3**

### Property 2: Hashing IP deterministik dan sensitif terhadap input

*For any* alamat IP dan salt tetap, fungsi hash menghasilkan nilai yang sama pada setiap pemanggilan (deterministik), dan dua alamat IP yang berbeda menghasilkan Hash_IP yang berbeda.

**Validates: Requirements 3.2**

### Property 3: Round-trip serialisasi baris NDJSON dan pelindungan privasi

*For any* Hash_IP dan timestamp, baris NDJSON yang dibentuk merupakan JSON valid yang, saat di-parse kembali, menghasilkan `ip` dan `ts` yang identik; dan *for any* alamat IP asli, baris tersimpan tidak mengandung alamat IP asli sebagai substring.

**Validates: Requirements 3.3, 3.4**

### Property 4: Penghitungan pengunjung unik

*For any* kumpulan baris NDJSON (termasuk yang kosong dan yang memuat Hash_IP duplikat), `totalViewers` yang dikembalikan Endpoint_Baca sama dengan banyaknya Hash_IP yang berbeda (distinct); khususnya kumpulan kosong menghasilkan `0`, dan menambahkan baris dengan Hash_IP yang sudah ada tidak menambah `totalViewers`.

**Validates: Requirements 4.2, 4.3, 4.4, 5.1**

### Property 5: Keputusan rewrite routing

*For any* path permintaan, keputusan rewrite: path yang diawali `/api/` diteruskan tanpa rewrite ke `/index.html`, sedangkan path lain di-rewrite ke `/index.html`.

**Validates: Requirements 6.3, 6.4**

## Testing Strategy

Proyek belum memiliki test framework, sehingga verifikasi utama adalah `npm run build` (memastikan komponen dan konfigurasi tidak merusak build). Bagian ini mendokumentasikan strategi pengujian yang **seharusnya** diterapkan bila framework pengujian (mis. Vitest + fast-check) ditambahkan kemudian.

**Pendekatan ganda:**

- **Unit/example tests** — untuk perilaku UI dan kasus spesifik:
  - `ViewerCounter` memanggil `/api/count` pada mount (req 1.1) dan menampilkan angka + label ID (req 1.2).
  - Indikator memuat tampil saat pending (req 1.4); nilai `0` ditampilkan (req 5.2); komponen `null` saat read gagal (req 5.3).
  - Penempatan komponen di dalam Hero setelah social links (req 1.3).
  - Ekstraksi IP dari `x-forwarded-for` berformat daftar berkoma (req 3.1).

- **Property tests** — untuk properti universal (min. 100 iterasi tiap properti):
  - Property 1–5 di atas. Untuk endpoint, operasi Blob di-mock agar fungsi logika (hashing, serialisasi baris, penghitungan unik) diuji terpisah dari I/O.

- **Integration/smoke tests** — verifikasi non-fungsional:
  - Keberadaan berkas `/api/track.js` dan `/api/count.js` (req 6.1).
  - `package.json` memuat `@vercel/blob` dengan versi di-pin (req 6.2).
  - Endpoint membaca env `BLOB_READ_WRITE_TOKEN` dan `VIEWER_HASH_SALT` (req 6.5).
  - Endpoint_Baca memanggil pembacaan Blob (req 4.1).

**Format tag property test:** `Feature: total-viewer-counter, Property {number}: {property_text}`.
