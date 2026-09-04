# Requirements Document

## Introduction

Fitur "Total Viewer Counter" menambahkan penghitung jumlah pengunjung unik pada portofolio React (frontend-only) yang di-deploy di Vercel. Penghitung ditampilkan di dalam komponen Hero pada halaman Home. Pelacakan pengunjung ditangani oleh Vercel serverless function di direktori `/api`: satu endpoint tulis (write) mencatat kunjungan dengan menyimpan hash IP pengunjung ke penyimpanan Vercel Blob (format NDJSON), dan satu endpoint baca (read) menghitung jumlah hash IP unik lalu mengembalikannya ke frontend. IP pengunjung di-hash menggunakan SHA-256 dengan salt demi privasi. Seluruh teks antarmuka pengguna ditulis dalam Bahasa Indonesia.

## Glossary

- **Sistem_Penghitung**: Keseluruhan fitur Total Viewer Counter, mencakup komponen frontend dan serverless function.
- **Komponen_Penghitung**: Komponen React baru yang dirender di dalam komponen Hero untuk menampilkan jumlah pengunjung unik.
- **Endpoint_Tulis**: Vercel serverless function pada `/api` yang mencatat satu kunjungan ke penyimpanan Blob.
- **Endpoint_Baca**: Vercel serverless function pada `/api` yang membaca data kunjungan dan mengembalikan jumlah pengunjung unik.
- **Penyimpanan_Blob**: Penyimpanan Vercel Blob yang menyimpan file NDJSON berisi catatan kunjungan.
- **File_NDJSON**: Berkas Newline-Delimited JSON di Penyimpanan_Blob; setiap baris berformat `{"ip":"<hash>","ts":"<ISO timestamp>"}`.
- **Hash_IP**: Nilai hasil SHA-256 atas alamat IP pengunjung yang digabung dengan salt.
- **Pengunjung_Unik**: Satu Hash_IP yang berbeda; Hash_IP duplikat dihitung sebagai satu Pengunjung_Unik.
- **Salt**: Nilai rahasia dari variabel lingkungan `VIEWER_HASH_SALT` yang digabungkan dengan IP sebelum proses hash.
- **Token_Blob**: Variabel lingkungan `BLOB_READ_WRITE_TOKEN` untuk otorisasi akses Penyimpanan_Blob.
- **Penanda_Session**: Nilai pada `sessionStorage` browser yang menandai bahwa kunjungan pada session tersebut sudah dicatat.

## Requirements

### Requirement 1

**User Story:** Sebagai pengunjung portofolio, saya ingin melihat jumlah total pengunjung unik di halaman Home, sehingga saya mengetahui seberapa banyak orang yang telah mengunjungi situs tersebut.

#### Acceptance Criteria

1. WHEN halaman Home dimuat, THE Komponen_Penghitung SHALL memanggil Endpoint_Baca untuk memperoleh jumlah Pengunjung_Unik.
2. WHEN Endpoint_Baca mengembalikan jumlah Pengunjung_Unik, THE Komponen_Penghitung SHALL menampilkan nilai jumlah tersebut dengan teks label dalam Bahasa Indonesia.
3. THE Komponen_Penghitung SHALL dirender di dalam komponen Hero di bawah bagian social links.
4. WHILE Endpoint_Baca belum mengembalikan respons, THE Komponen_Penghitung SHALL menampilkan indikator sedang memuat.

### Requirement 2

**User Story:** Sebagai pemilik portofolio, saya ingin setiap kunjungan pengunjung tercatat sekali per session browser, sehingga pelacakan pengunjung akurat tanpa panggilan berulang yang berlebihan.

#### Acceptance Criteria

1. WHEN halaman Home dimuat DAN Penanda_Session belum ada pada `sessionStorage`, THE Komponen_Penghitung SHALL memanggil Endpoint_Tulis untuk mencatat kunjungan.
2. WHEN Endpoint_Tulis berhasil dipanggil, THE Komponen_Penghitung SHALL menetapkan Penanda_Session pada `sessionStorage`.
3. WHERE Penanda_Session sudah ada pada `sessionStorage`, THE Komponen_Penghitung SHALL menahan pemanggilan Endpoint_Tulis pada session tersebut.

### Requirement 3

**User Story:** Sebagai pemilik portofolio, saya ingin alamat IP pengunjung di-hash sebelum disimpan, sehingga privasi pengunjung terlindungi.

#### Acceptance Criteria

1. WHEN Endpoint_Tulis menerima permintaan, THE Endpoint_Tulis SHALL mengambil alamat IP pengunjung dari header `x-forwarded-for`.
2. WHEN Endpoint_Tulis memperoleh alamat IP, THE Endpoint_Tulis SHALL menghitung Hash_IP menggunakan SHA-256 atas gabungan alamat IP dan Salt.
3. WHEN Endpoint_Tulis menghitung Hash_IP, THE Endpoint_Tulis SHALL menambahkan (append) satu baris ke File_NDJSON pada Penyimpanan_Blob berformat `{"ip":"<Hash_IP>","ts":"<ISO timestamp>"}`.
4. THE Endpoint_Tulis SHALL menyimpan nilai Hash_IP tanpa menyimpan alamat IP asli.

### Requirement 4

**User Story:** Sebagai pemilik portofolio, saya ingin jumlah pengunjung dihitung berdasarkan IP unik, sehingga satu pengunjung yang sama tidak menambah hitungan berkali-kali.

#### Acceptance Criteria

1. WHEN Endpoint_Baca menerima permintaan, THE Endpoint_Baca SHALL membaca File_NDJSON dari Penyimpanan_Blob.
2. WHEN Endpoint_Baca membaca File_NDJSON, THE Endpoint_Baca SHALL mengekstrak seluruh nilai Hash_IP dan menghitung banyaknya Hash_IP yang unik.
3. WHEN Endpoint_Baca selesai menghitung, THE Endpoint_Baca SHALL mengembalikan respons JSON berformat `{ "totalViewers": <jumlah> }`.
4. THE Endpoint_Baca SHALL menghitung setiap Hash_IP duplikat sebagai satu Pengunjung_Unik.

### Requirement 5

**User Story:** Sebagai pengunjung, saya ingin penghitung tetap menampilkan tampilan yang wajar ketika data kosong atau terjadi kesalahan, sehingga halaman tetap rapi dalam kondisi apa pun.

#### Acceptance Criteria

1. IF Penyimpanan_Blob belum berisi File_NDJSON atau File_NDJSON kosong, THEN THE Endpoint_Baca SHALL mengembalikan respons `{ "totalViewers": 0 }`.
2. WHEN Endpoint_Baca mengembalikan `totalViewers` bernilai 0, THE Komponen_Penghitung SHALL menampilkan nilai `0`.
3. IF pemanggilan Endpoint_Baca oleh Komponen_Penghitung gagal, THEN THE Komponen_Penghitung SHALL menyembunyikan seluruh tampilan penghitung.

### Requirement 6

**User Story:** Sebagai pengembang, saya ingin serverless function dan konfigurasi routing terpasang dengan benar di Vercel, sehingga endpoint API dapat diakses dan tidak tertelan oleh routing SPA.

#### Acceptance Criteria

1. THE Sistem_Penghitung SHALL menyediakan Endpoint_Tulis dan Endpoint_Baca sebagai berkas serverless function di direktori `/api`.
2. THE Sistem_Penghitung SHALL menyertakan dependency `@vercel/blob` dengan versi yang di-pin pada `package.json`.
3. WHEN permintaan diarahkan ke path `/api/*`, THE Sistem_Penghitung SHALL meneruskan permintaan ke serverless function terkait tanpa melakukan rewrite ke `/index.html`.
4. WHEN permintaan diarahkan ke path selain `/api/*`, THE Sistem_Penghitung SHALL melakukan rewrite ke `/index.html` untuk mendukung routing SPA.
5. THE Sistem_Penghitung SHALL menggunakan variabel lingkungan `BLOB_READ_WRITE_TOKEN` untuk otorisasi akses Penyimpanan_Blob dan `VIEWER_HASH_SALT` sebagai Salt.
