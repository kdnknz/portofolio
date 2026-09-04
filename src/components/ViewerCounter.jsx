import React, { useEffect, useState } from 'react'

const SESSION_KEY = 'viewer_counted'

const ViewerCounter = () => {
  const [count, setCount] = useState(null)
  const [status, setStatus] = useState('loading') // 'loading' | 'ready' | 'error'

  useEffect(() => {
    let active = true

    const run = async () => {
      // Catat kunjungan sekali per session (kegagalan diabaikan diam-diam)
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
    return () => {
      active = false
    }
  }, [])

  if (status === 'error') return null

  return (
    <div className="viewer-counter">
      {status === 'loading' ? (
        <span className="viewer-loading">Memuat jumlah pengunjung...</span>
      ) : (
        <span className="viewer-count">
          <span className="viewer-icon" aria-hidden="true">👁</span>
          {count.toLocaleString('id-ID')} total pengunjung
        </span>
      )}
      <style jsx>{`
        .viewer-counter {
          margin-top: 1.25rem;
          color: var(--text-light);
          font-size: 0.9rem;
        }

        .viewer-loading {
          opacity: 0.7;
        }

        .viewer-count {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
        }

        .viewer-icon {
          font-size: 1rem;
          line-height: 1;
        }

        @media (max-width: 768px) {
          .viewer-counter {
            justify-content: center;
          }
        }
      `}</style>
    </div>
  )
}

export default ViewerCounter
