import { get, put } from '@vercel/blob'
import { createHash } from 'crypto'

const BLOB_NAME = 'viewers.ndjson'

function getClientIp(req) {
  const xff = req.headers['x-forwarded-for'] || ''
  return xff.split(',')[0].trim() || 'unknown'
}

function hashIp(ip) {
  return createHash('sha256').update(ip).digest('hex')
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' })
  }

  try {
    const token = process.env.BLOB_READ_WRITE_TOKEN
    if (!token) {
      console.error('[track] BLOB_READ_WRITE_TOKEN tidak terkonfigurasi')
      return res
        .status(500)
        .json({ error: 'Gagal mencatat kunjungan', code: 'MISSING_BLOB_TOKEN' })
    }
    const hash = hashIp(getClientIp(req))
    const line = JSON.stringify({ ip: hash, ts: new Date().toISOString() }) + '\n'

    // read-modify-write pada private store: baca isi file saat ini via get()
    // dengan useCache:false agar mencerminkan tulisan terbaru (kosong bila belum ada)
    let existing = ''
    try {
      const blob = await get(BLOB_NAME, { access: 'private', token, useCache: false })
      if (blob && blob.stream) {
        existing = await new Response(blob.stream).text()
      }
    } catch {
      // file belum ada / gagal dibaca → perlakukan sebagai kosong
    }

    await put(BLOB_NAME, existing + line, {
      access: 'private',
      contentType: 'application/x-ndjson',
      allowOverwrite: true,
      token,
    })

    return res.status(200).json({ ok: true })
  } catch (err) {
    console.error('[track] gagal:', err)
    return res.status(500).json({ error: 'Gagal mencatat kunjungan' })
  }
}
