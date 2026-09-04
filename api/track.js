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

    // read-modify-write: baca isi file saat ini (kosong bila belum ada)
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
