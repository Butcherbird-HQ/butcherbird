'use client'

import { useState } from 'react'
import Link from 'next/link'
import Footer from '@/components/Footer'
import RevealOnScroll from '@/components/RevealOnScroll'

export default function PartnerPage() {
  const [pName, setPName] = useState('')
  const [pCompany, setPCompany] = useState('')
  const [pEmail, setPEmail] = useState('')
  const [pType, setPType] = useState('')
  const [pMessage, setPMessage] = useState('')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const subject = encodeURIComponent(`Partnership Application — ${pName}${pCompany ? ` · ${pCompany}` : ''}`)
    const body = encodeURIComponent(`Name: ${pName}\nCompany: ${pCompany}\nEmail: ${pEmail}\nType: ${pType}\n\n${pMessage}`)
    window.location.href = `mailto:g@butcherbird.global?subject=${subject}&body=${body}`
  }

  return (
    <>
      <RevealOnScroll />

      {/* HERO */}
      <section className="partner-hero">
        <div className="container">
          <div className="gold-rule anim d1" />
          <p className="f-gold anim d1" style={{ marginBottom: 20 }}>Partnership</p>
          <h1 className="f-display anim d2" style={{ maxWidth: 780, marginBottom: 28 }}>
            We are<br />looking for<br /><span className="gold">the next one.</span>
          </h1>
          <p className="f-italic anim d3" style={{ maxWidth: 520, marginBottom: 40 }}>
            In 7 months we built three brands from nothing.
            We are actively looking for the right partner to deploy the system with.
          </p>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }} className="anim d4">
            <a className="btn btn-gold" href="#partner-form">Apply Now</a>
            <Link className="btn btn-outline" href="/portfolio">See Our Brands</Link>
          </div>
        </div>
      </section>

      {/* WHO WE PARTNER WITH */}
      <section className="section" style={{ background: '#fff' }}>
        <div className="container">
          <div className="gold-rule reveal" />
          <p className="f-gold reveal" style={{ marginBottom: 52 }}>Who we are looking for</p>
          <div className="pw-rows">
            <div className="pw-row reveal" style={{ borderTopColor: 'rgba(0,0,0,0.08)' }}>
              <div className="pw-row-left">
                <div className="pw-row-num" style={{ color: 'rgba(0,0,0,0.04)' }}>01</div>
                <div className="f-gold">Venture Capital</div>
              </div>
              <div className="pw-row-right">
                <h2 className="f-h2" style={{ marginBottom: 16, color: 'var(--black)' }}>
                  You want your portfolio brands to actually scale.
                </h2>
                <p className="f-body" style={{ color: 'rgba(0,0,0,0.6)' }}>
                  We build and operate consumer brands — infrastructure, creative, media, system.
                  If you&apos;re looking to co-fund our own projects, or deploy capital into brands
                  you&apos;ve already backed and need a real operating team behind them — that&apos;s us.
                  We bring the machine. You bring the capital.
                </p>
              </div>
            </div>

            <div className="pw-row reveal" style={{ borderTopColor: 'rgba(0,0,0,0.08)' }}>
              <div className="pw-row-left">
                <div className="pw-row-num" style={{ color: 'rgba(0,0,0,0.04)' }}>02</div>
                <div className="f-gold">Entrepreneurs</div>
              </div>
              <div className="pw-row-right">
                <h2 className="f-h2" style={{ marginBottom: 16, color: 'var(--black)' }}>
                  Great product. No founding team. We can be it.
                </h2>
                <p className="f-body" style={{ color: 'rgba(0,0,0,0.6)' }}>
                  You&apos;ve built something people want. Scaling a DTC brand takes a full team —
                  media buyers, creatives, email marketers, strategists. You don&apos;t need to hire
                  all of that. We become your founding growth team, with skin in the game,
                  accountable to results.
                </p>
              </div>
            </div>

            <div className="pw-row reveal" style={{ borderTopColor: 'rgba(0,0,0,0.08)', borderBottomColor: 'rgba(0,0,0,0.08)' }}>
              <div className="pw-row-left">
                <div className="pw-row-num" style={{ color: 'rgba(0,0,0,0.04)' }}>03</div>
                <div className="f-gold">Talent</div>
              </div>
              <div className="pw-row-right">
                <h2 className="f-h2" style={{ marginBottom: 16, color: 'var(--black)' }}>
                  Want to work for the best company in the game?
                </h2>
                <p className="f-body" style={{ color: 'rgba(0,0,0,0.6)' }}>
                  We&apos;re building the fastest-moving growth agency in Africa. If you are
                  exceptional at what you do and want to be somewhere that matches your ambition —
                  we want to hear from you. Not a corporate job. Real ownership of real outcomes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROOF + APPLICATION FORM */}
      <section className="section" style={{ background: 'var(--dark)' }} id="partner-form">
        <div className="container">
          <div className="pf-inner reveal">
            <div>
              <div className="gold-rule" style={{ marginBottom: 28 }} />
              <p className="f-gold" style={{ marginBottom: 24 }}>Apply</p>
              <blockquote className="pw-proof-quote" style={{ color: 'var(--off-white)', marginBottom: 28 }}>
                R10,000,000+ from<br />R2,173,913 in ad spend.<br />
                In 7 months.<br />Documented in full.
              </blockquote>
              <p className="f-label" style={{ color: 'var(--mid)', marginBottom: 40 }}>
                — Butcherbird Global · Cape Town · 2025
              </p>
              <p className="f-body" style={{ marginBottom: 12 }}>
                We take on a small number of partnerships. We read every submission and
                respond personally. If you have something real, be specific about it.
              </p>
              <p className="f-italic">No fluff. Just tell us what you&apos;ve got.</p>
            </div>
            <form onSubmit={handleSubmit}>
              <p className="f-label" style={{ color: 'var(--mid)', marginBottom: 20 }}>
                We respond within 24 hours · g@butcherbird.global
              </p>
              <div className="pf-grid">
                <input
                  className="pf-input"
                  placeholder="Your name"
                  type="text"
                  required
                  value={pName}
                  onChange={e => setPName(e.target.value)}
                />
                <input
                  className="pf-input"
                  placeholder="Company / brand"
                  type="text"
                  value={pCompany}
                  onChange={e => setPCompany(e.target.value)}
                />
                <input
                  className="pf-input pf-full"
                  placeholder="Email address"
                  type="email"
                  required
                  value={pEmail}
                  onChange={e => setPEmail(e.target.value)}
                />
                <select
                  className="pf-input pf-full"
                  style={{ appearance: 'none', WebkitAppearance: 'none', cursor: 'pointer' }}
                  value={pType}
                  onChange={e => setPType(e.target.value)}
                >
                  <option value="" disabled>Partnership type</option>
                  <option>VC / Portfolio brand</option>
                  <option>Entrepreneur — equity partnership</option>
                  <option>Operator / joining the team</option>
                  <option>Other</option>
                </select>
                <textarea
                  className="pf-input pf-full"
                  rows={5}
                  placeholder="What have you got, and why does this make sense? Be specific."
                  value={pMessage}
                  onChange={e => setPMessage(e.target.value)}
                />
                <div className="pf-full">
                  <button type="submit" className="btn btn-gold" style={{ width: '100%' }}>
                    Submit Application
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
