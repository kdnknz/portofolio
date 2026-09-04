import { get } from '@vercel/blob'

const BLOB_NAME = 'viewers.ndjson'

export default async function handler(req, res) {
  try {
    const token = process.env.BLOB_READ_WRITE_TOKEN
    if (!token) {
      console.error('[count] BLOB_READ_WRITE_TOKEN tidak terkonfigurasi')
      return res
        .status(500)
        .json({ error: 'Gagal membaca jumlah pengunjung', code: 'MISSING_BLOB_TOKEN' })
    }

    // Baca File_NDJSON dari private store via get() (useCache:false untuk data terbaru).
    // Bila file belum ada, perlakukan sebagai kosong → totalViewers 0.
    let text = ''
    try {
      const blob = await get(BLOB_NAME, { access: 'private', token, useCache: false })
      if (blob && blob.stream) {
        text = await new Response(blob.stream).text()
      }
    } catch {
      return res.status(200).json({ totalViewers: 0 })
    }
    if (!text) return res.status(200).json({ totalViewers: 0 })

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
    console.error('[count] gagal:', err)
    return res.status(500).json({ error: 'Gagal membaca jumlah pengunjung' })
  }
}
