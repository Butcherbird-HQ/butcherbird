'use client'

import { useState, useEffect } from 'react'
import { CaseStudy } from '@/lib/data'

interface ModalProps {
  study: CaseStudy | null
  onClose: () => void
  initialTab?: 'performance' | 'creative'
}

export default function Modal({ study, onClose, initialTab = 'performance' }: ModalProps) {
  const [tab, setTab] = useState<'performance' | 'creative'>(initialTab)

  useEffect(() => { setTab(initialTab) }, [initialTab, study])

  useEffect(() => {
    if (!study) return
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [study, onClose])

  if (!study) return null

  return (
    <div className="modal-overlay open" onClick={(e) => { if (e.target === e.currentTarget) onClose() }}>
      <div className="modal">
        <div className="modal-header">
          <div>
            <p className="f-label" style={{ marginBottom: 6 }}>{study.tag}</p>
            <h2 className="f-h2">{study.brand}</h2>
          </div>
          <button className="modal-x" onClick={onClose}>&#x2715;</button>
        </div>

        <div className="modal-tabs">
          <button className={`modal-tab${tab === 'performance' ? ' active' : ''}`} onClick={() => setTab('performance')}>
            Performance
          </button>
          <button className={`modal-tab${tab === 'creative' ? ' active' : ''}`} onClick={() => setTab('creative')}>
            Creative Work
          </button>
        </div>

        <div className="modal-media">
          {tab === 'performance' && (
            study.performanceScreenshots?.length
              ? study.performanceScreenshots.map((src, i) => (
                  <div key={i} className="modal-media-item">
                    <img src={src} alt={`Screenshot ${i + 1}`} style={{ width: '100%', display: 'block' }} />
                  </div>
                ))
              : [1, 2, 3].map((n) => (
                  <div key={n} className="modal-media-ph">
                    <span className="modal-media-ph-txt">[Performance screenshot {n} — pending]</span>
                  </div>
                ))
          )}
          {tab === 'creative' && (
            study.creativeAssets?.length
              ? study.creativeAssets.map((asset, i) => (
                  <div key={i} className="modal-media-item">
                    <img src={asset.src} alt={asset.caption ?? ''} style={{ width: '100%', display: 'block' }} />
                  </div>
                ))
              : ['Static Ad', 'Static Ad', 'Email', 'Video Ad', 'Static Ad', 'Email'].map((type, i) => (
                  <div key={i} className="modal-media-ph">
                    <span className="modal-media-ph-txt">{type} — pending</span>
                  </div>
                ))
          )}
        </div>
      </div>
    </div>
  )
}
