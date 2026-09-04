import { list } from '@vercel/blob'

const BLOB_NAME = 'viewers.ndjson'

export default async function handler(req, res) {
  try {
    const token = process.env.BLOB_READ_WRITE_TOKEN

    // Cari File_NDJSON pada Penyimpanan_Blob
    const { blobs } = await list({ prefix: BLOB_NAME, token })
    const found = blobs.find((b) => b.pathname === BLOB_NAME)

    // File belum ada → tampilkan hitungan wajar (0)
    if (!found) return res.status(200).json({ totalViewers: 0 })

    // Ambil isi file; bila gagal di-fetch, perlakukan sebagai kosong
    const resp = await fetch(found.url)
    if (!resp.ok) return res.status(200).json({ totalViewers: 0 })
    const text = await resp.text()

    // Hitung Hash_IP unik; baris kosong diabaikan, baris rusak dilewati defensif
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
