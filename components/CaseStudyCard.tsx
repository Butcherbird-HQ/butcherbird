import Image from 'next/image'
import { CaseStudy } from '@/lib/data'

interface Props {
  study: CaseStudy
  onClick: () => void
  metrics: { val: string; lbl: string }[]
}

export default function CaseStudyCard({ study, onClick, metrics }: Props) {
  return (
    <div className="cs-card reveal" onClick={onClick}>
      <div className="cs-ph">
        {study.image ? (
          <Image
            src={study.image}
            alt={study.brand}
            fill
            style={{ objectFit: 'cover' }}
            sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
          />
        ) : (
          <div className="cs-ph-txt">{study.brand}</div>
        )}
        <div className="cs-hover-layer">
          <div className="cs-hover-icon">↗</div>
        </div>
      </div>
      <div className="cs-body">
        <div className="cs-tag">{study.tag}</div>
        <div className="cs-brand">{study.brand}</div>
        <div className="cs-desc">{study.subtitle}</div>
        <div className="cs-mets">
          {metrics.map((m, i) => (
            <div key={i} className="cs-mv">
              {m.val}
              <span className="cs-ml">{m.lbl}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
