'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap, ScrollTrigger } from '@/lib/gsap'
import Footer from '@/components/Footer'
import './Contact.css'

const DETAILS = [
  { l: 'Adresse', v: <>47, Résidence Najla 1<br />Route Raoued Jaafar<br />2080 Ariana, Tunisie</> },
  { l: 'Tél.', v: <><a href="tel:+21650263806">+216 50 26 38 06</a><br /><a href="tel:+21620263806">+216 20 26 38 06</a></> },
  { l: 'Email', v: <a href="mailto:societegmi@gmail.com">societegmi@gmail.com</a> },
  { l: 'Contact', v: <>Jalel Tayechi<br /><span style={{ color: 'var(--muted)', fontSize: 12 }}>Directeur Technique</span></> },
  { l: 'Horaires', v: <>Lun – Ven : 08h00 – 17h00<br />Urgences : 24h/24, 7j/7</> },
]

const METRICS = [
  { l: "Zone d'intervention", v: 'Grand Tunis & Toute la Tunisie' },
  { l: 'Délai de rappel', v: '< 1h après votre message' },
  { l: 'Urgences terrain', v: '< 4h — Grand Tunis' },
  { l: 'Astreinte', v: '24h/24 — 7j/7 — 365j/an' },
]

export default function ContactClient() {
  const [form, setForm] = useState({ name: '', company: '', phone: '', email: '', service: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle')

  useEffect(() => {
    window.scrollTo(0, 0)
    const raf = requestAnimationFrame(() => {
      ScrollTrigger.refresh()

      gsap.from('.ct-pg-label', { opacity: 0, y: 16, duration: .9, ease: 'expo.out', delay: .2 })
      gsap.from('.ct-pg-head .dword', { y: '105%', duration: 1.2, ease: 'expo.out', stagger: .1, delay: .35 })
      gsap.from('.ct-pg-sub', { opacity: 0, y: 20, duration: .9, ease: 'expo.out', delay: .75 })

      const detItems = document.querySelectorAll('.ct-detail-item')
      if (detItems.length) gsap.from(detItems, { y: 28, opacity: 0, duration: .8, ease: 'expo.out', stagger: .1,
        scrollTrigger: { trigger: '.contact-details-col', start: 'top 78%' } })

      const formCol = document.querySelector('.contact-form-col')
      if (formCol) gsap.from(formCol, { y: 40, opacity: 0, duration: 1, ease: 'expo.out',
        scrollTrigger: { trigger: formCol, start: 'top 78%' } })

      const metrics = document.querySelectorAll('.metric-item')
      if (metrics.length) gsap.from(metrics, { y: 30, opacity: 0, duration: .8, ease: 'expo.out', stagger: .1,
        scrollTrigger: { trigger: '.metrics-band', start: 'top 82%' } })
    })

    return () => { cancelAnimationFrame(raf); ScrollTrigger.getAll().forEach(t => t.kill()) }
  }, [])

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('sending')
    setTimeout(() => {
      setStatus('sent')
      setForm({ name: '', company: '', phone: '', email: '', service: '', message: '' })
      setTimeout(() => setStatus('idle'), 4000)
    }, 1100)
  }

  return (
    <div className="page-enter">

      {/* ── PAGE INTRO ── */}
      <section className="ct-pg-intro">
        <div className="ct-pg-intro-inner">
          <div className="ct-pg-intro-left">
            <div className="section-lbl ct-pg-label">Contact</div>
            <h1 className="display-heading ct-pg-head" style={{ marginTop: 20 }}>
              <span className="drow"><span className="dword">DITES-NOUS</span></span>
              <span className="drow serif-mix"><span className="dword">ce qui est</span></span>
              <span className="drow"><span className="dword red-accent">EN PANNE.</span></span>
            </h1>
          </div>
          <p className="ct-pg-sub body-p" style={{ maxWidth: 380 }}>
            Urgence ou projet planifié — un technicien vous rappelle dans l'heure. Décrivez l'équipement, le fluide concerné et le degré d'urgence : on s'occupe du reste.
          </p>
        </div>
        <div className="ct-pg-intro-rule" />
      </section>

      {/* ── CONTACT BODY ── */}
      <section className="contact-body">
        <div className="contact-max">
          <div className="contact-grid">
            <div className="contact-details-col">
              <div className="section-lbl" style={{ marginBottom: 52 }}>Coordonnées</div>
              {DETAILS.map(d => (
                <div className="ct-detail-item" key={d.l}>
                  <span className="cdi-label">{d.l}</span>
                  <span className="cdi-val">{d.v}</span>
                </div>
              ))}
              <div className="contact-entities">
                {[
                  { n: '01', t: 'Générale Maintenance', em: 'Industrielle SARL' },
                  { n: '02', t: 'Générale Électrique', em: 'et Chaufferie SARL' },
                ].map(e => (
                  <div className="ce-row" key={e.n}>
                    <span className="ce-num">{e.n}</span>
                    <div className="ce-name">{e.t}<em>{e.em}</em></div>
                  </div>
                ))}
              </div>
            </div>

            <div className="contact-form-col">
              <div className="section-lbl" style={{ marginBottom: 52 }}>Décrire votre besoin</div>
              <form onSubmit={onSubmit} className="ct-form">
                <div className="cf-row">
                  <div className="cf-g"><label className="f-label">Nom *</label><input name="name" type="text" className="f-field" placeholder="Votre nom" required value={form.name} onChange={onChange} /></div>
                  <div className="cf-g"><label className="f-label">Société</label><input name="company" type="text" className="f-field" placeholder="Votre société" value={form.company} onChange={onChange} /></div>
                </div>
                <div className="cf-row">
                  <div className="cf-g"><label className="f-label">Téléphone *</label><input name="phone" type="tel" className="f-field" placeholder="+216 XX XXX XXX" required value={form.phone} onChange={onChange} /></div>
                  <div className="cf-g"><label className="f-label">Email *</label><input name="email" type="email" className="f-field" placeholder="email@société.com" required value={form.email} onChange={onChange} /></div>
                </div>
                <div className="cf-g">
                  <label className="f-label">Service requis</label>
                  <select name="service" className="f-field f-select" value={form.service} onChange={onChange}>
                    <option value="">Sélectionner…</option>
                    <option>Chaudières Industrielles</option>
                    <option>Réseaux de Fluides</option>
                    <option>Canalisations Industrielles</option>
                    <option>Protection Incendie</option>
                    <option>Électricité &amp; Chaufferie</option>
                    <option>Plusieurs services</option>
                  </select>
                </div>
                <div className="cf-g">
                  <label className="f-label">Message</label>
                  <textarea name="message" className="f-field f-textarea" placeholder="Type d'équipement, fluides concernés, superficie du site, urgence ou projet planifié — plus vous précisez, plus vite on intervient." value={form.message} onChange={onChange} />
                </div>
                <button type="submit" className={`f-submit hoverable${status === 'sent' ? ' sent' : ''}`} disabled={status !== 'idle'}>
                  <span>{status === 'sent' ? 'Message envoyé ✓' : status === 'sending' ? 'Envoi en cours…' : 'Envoyer la demande'}</span>
                  {status === 'idle' && <span className="f-arrow">&#8594;</span>}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ── METRICS ── */}
      <section className="metrics-band">
        <div className="contact-max">
          <div className="metrics-grid">
            {METRICS.map(m => (
              <div className="metric-item" key={m.l}>
                <span className="mi-label">{m.l}</span>
                <span className="mi-val">{m.v}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
