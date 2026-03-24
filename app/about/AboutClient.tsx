'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { gsap, ScrollTrigger } from '@/lib/gsap'
import Footer from '@/components/Footer'
import './About.css'

export default function AboutClient() {
  useEffect(() => {
    window.scrollTo(0, 0)
    const raf = requestAnimationFrame(() => {
      ScrollTrigger.refresh()

      // Page intro
      gsap.from('.about-intro-label', { opacity: 0, y: 16, duration: .9, ease: 'expo.out', delay: .2 })
      gsap.from('.about-intro-head .dword', { y: '105%', duration: 1.2, ease: 'expo.out', stagger: .1, delay: .35 })
      gsap.from('.about-intro-sub', { opacity: 0, y: 20, duration: .9, ease: 'expo.out', delay: .75 })

      const num = document.querySelector('.about-pg-num')
      if (num) gsap.from(num, { opacity: 0, duration: 1.2, scrollTrigger: { trigger: num, start: 'top 82%' } })

      const headWords = document.querySelectorAll('.about-pg-head .dword')
      if (headWords.length) gsap.from(headWords, { y: '105%', duration: 1.1, ease: 'expo.out', stagger: .1, scrollTrigger: { trigger: '.about-pg-head', start: 'top 75%' } })

      ;['.about-pg-p1', '.about-pg-p2'].forEach(sel => {
        const el = document.querySelector(sel)
        if (el) gsap.from(el, { y: 28, opacity: 0, duration: .9, ease: 'expo.out', scrollTrigger: { trigger: el, start: 'top 72%' } })
      })

      const statItems = document.querySelectorAll('.about-pg-stat')
      if (statItems.length) gsap.from(statItems, { y: 24, opacity: 0, duration: .8, ease: 'expo.out', stagger: .1, scrollTrigger: { trigger: '.about-pg-stats', start: 'top 82%' } })

      const entityCards = document.querySelectorAll('.entity-card')
      if (entityCards.length) gsap.from(entityCards, { y: 40, opacity: 0, duration: .9, ease: 'expo.out', stagger: .14, scrollTrigger: { trigger: '.entities-grid', start: 'top 78%' } })

      const valueItems = document.querySelectorAll('.value-item')
      if (valueItems.length) gsap.from(valueItems, { y: 40, opacity: 0, duration: .9, ease: 'expo.out', stagger: .1, scrollTrigger: { trigger: '.values-grid', start: 'top 78%' } })

      const quoteWords = document.querySelectorAll('.quote-line .ql-word')
      if (quoteWords.length) gsap.from(quoteWords, { y: '108%', duration: 1.1, ease: 'expo.out', stagger: .06, scrollTrigger: { trigger: '.big-quote', start: 'top 78%' } })

      const teamCard = document.querySelector('.team-card')
      if (teamCard) gsap.from(teamCard, { y: 30, opacity: 0, duration: .9, ease: 'expo.out', scrollTrigger: { trigger: teamCard, start: 'top 82%' } })
    })

    return () => { cancelAnimationFrame(raf); ScrollTrigger.getAll().forEach(t => t.kill()) }
  }, [])

  return (
    <div className="page-enter">

      {/* ── PAGE INTRO (matches home section style) ── */}
      <section className="about-pg-intro">
        <div className="about-pg-intro-inner">
          <div className="about-pg-intro-left">
            <div className="section-lbl about-intro-label">À Propos de GMI</div>
            <h1 className="display-heading about-intro-head" style={{ marginTop: 20 }}>
              <span className="drow"><span className="dword">CE QUE</span></span>
              <span className="drow serif-mix"><span className="dword">nous faisons</span></span>
              <span className="drow"><span className="dword red-accent">EN TUNISIE</span></span>
            </h1>
          </div>
          <p className="about-intro-sub body-p" style={{ maxWidth: 380 }}>
            Installation, maintenance et urgences industrielles sur tout le territoire — chaudières, fluides, canalisations, protection incendie, électricité. Deux entités spécialisées, un seul interlocuteur : Jalel Tayechi.
          </p>
        </div>
        <div className="about-pg-intro-rule" />
      </section>

      {/* ── HISTORY ── */}
      <section className="about-history">
        <div className="about-pg-inner">
          <div className="history-aside">
            <div className="about-pg-num">GMI</div>
            <span className="ha-label">Fondée à Ariana</span>
          </div>
          <div className="history-text">
            <h2 className="display-heading about-pg-head">
              <span className="drow"><span className="dword">DEUX ENTITÉS,</span></span>
              <span className="drow serif-mix"><span className="dword">un seul</span></span>
              <span className="drow"><span className="dword">INTERLOCUTEUR.</span></span>
            </h2>
            <p className="body-p about-pg-p1" style={{ marginTop: 32 }}>Générale Maintenance Industrielle SARL installe et maintient vos chaudières (50 kW–10 MW), réseaux de fluides, canalisations industrielles et systèmes de protection incendie conformes NFPA 13 / EN 12845. Générale Électrique et Chaufferie SARL réalise vos installations HTA 30 kV, BT 400 V et vos systèmes de chauffage industriel jusqu'à 5 MW.</p>
            <p className="body-p about-pg-p2" style={{ marginTop: 16 }}>Basées à Ariana, nos équipes couvrent tout le territoire tunisien. <span style={{ color: 'var(--ink)', fontWeight: 400 }}>Jalel Tayechi</span>, Directeur Technique, supervise les projets complexes et se déplace sur site. Une seule ligne directe, une seule responsabilité.</p>
            <div className="about-pg-stats">
              {[['2', 'Entités'], ['5', "Domaines couverts"], ['< 4h', 'Grand Tunis']].map(([n, l]) => (
                <div className="about-pg-stat" key={l}>
                  <div className="stat-n">{n}</div>
                  <div className="stat-l">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── BIG QUOTE ── */}
      <section className="big-quote-section">
        <div className="about-pg-container">
          <p className="big-quote">
            {["Nous", "n'avons", "pas", "construit", "une", "entreprise.", "Nous", "avons", "construit", "un", "engagement."].map((w, i) => (
              <span className="quote-line" key={i}><span className="ql-word">{w}</span>&nbsp;</span>
            ))}
          </p>
        </div>
      </section>

      {/* ── ENTITIES ── */}
      <section className="about-entities">
        <div className="about-pg-container">
          <div className="section-lbl" style={{ marginBottom: 56 }}>Nos Entités</div>
          <div className="entities-grid">
            {[
              { n: '01', t: 'Générale Maintenance', em: 'Industrielle SARL', tags: ['Chaudières', 'Fluides', 'Canalisations', 'Incendie'], body: "Prend en charge les chaudières industrielles (50 kW–10 MW, jusqu'à 40 bar), les réseaux de fluides (vapeur, eau glacée, air comprimé, gaz naturel), les canalisations DN15–DN600 et les systèmes de protection incendie conformes NFPA 13 / EN 12845." },
              { n: '02', t: 'Générale Électrique', em: 'et Chaufferie SARL', tags: ['HTA / BT', 'Armoires', 'Chauffage', 'Câblage'], body: "Réalise les postes HTA 30 kV, les installations BT 400 V, les armoires industrielles IP65 et le câblage machines. Couvre également les systèmes de chauffage industriel (aérothermes, radiants, récupération de chaleur) jusqu'à 5 MW." },
            ].map(e => (
              <div className="entity-card hoverable" key={e.n}>
                <div className="ec-top"><span className="ec-num">{e.n}</span><div className="ec-line" /></div>
                <h3 className="ec-title">{e.t}<em>{e.em}</em></h3>
                <p className="ec-body">{e.body}</p>
                <div className="ec-tags">{e.tags.map(t => <span key={t}>{t}</span>)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="about-values">
        <div className="about-pg-container">
          <div className="section-lbl" style={{ marginBottom: 28 }}>Nos Valeurs</div>
          <h2 className="display-heading" style={{ marginBottom: 80 }}>
            <span className="drow"><span className="dword">CE QUI NOUS</span></span>
            <span className="drow serif-mix"><span className="dword">engage</span></span>
          </h2>
          <div className="values-grid">
            {[
              { n: '01', t: 'Rapport après chaque visite', b: "Chaque intervention — préventive ou corrective — donne lieu à un rapport écrit avec relevés, mesures et recommandations. Vous gardez une trace complète de tout ce qui a été fait." },
              { n: '02', t: '< 4h sur Grand Tunis', b: "Délai d'intervention garanti en moins de 4h sur le Grand Tunis pour toute urgence industrielle. Astreinte 24h/24, 7j/7. Une ligne directe — pas un répondeur." },
              { n: '03', t: 'Techniciens certifiés, normes à jour', b: "Cinq domaines couverts par des techniciens formés aux normes EN, NFPA et ASME en vigueur. Pas de sous-traitance sur les soudures, les essais de pression ou la certification." },
              { n: '04', t: 'Des contrats qui se renouvellent', b: "Nos clients n'ont pas besoin de chercher un autre prestataire. La plupart renouvellent leur contrat de maintenance sans appel d'offres. C'est notre seul indicateur de performance." },
            ].map(v => (
              <div className="value-item" key={v.n}>
                <div className="vi-num">{v.n}</div>
                <h4 className="vi-title">{v.t}</h4>
                <p className="vi-body">{v.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEAM ── */}
<section className="about-team">
  <div className="about-pg-container">
    <div className="section-lbl" style={{ marginBottom: 56 }}>Direction Technique</div>
    <div className="team-card-v2">
      <div className="tc-photo-wrap">
        <Image
          src="/assets/jaleltay.jpeg"
          alt="Jalel Tayechi – Directeur Technique, GMI Tunisie"
          fill
          sizes="(max-width: 640px) 100vw, 280px"
          style={{ objectFit: 'cover', objectPosition: 'top center' }}
        />
      </div>
      <div className="tc-info">
        <h4 className="tc-name">Jalel Tayechi</h4>
        <p className="tc-role">Directeur Technique</p>
        <p className="tc-desc">Expert en ingénierie industrielle avec une expertise approfondie dans les systèmes de fluides, de chauffe et les réseaux industriels complexes.</p>
        <div className="tc-links">
          <a href="tel:+21650263806">+216 50 26 38 06</a>
          <a href="mailto:societegmi@gmail.com">societegmi@gmail.com</a>
        </div>
      </div>
    </div>
  </div>
</section>

      <Footer />
    </div>
  )
}
