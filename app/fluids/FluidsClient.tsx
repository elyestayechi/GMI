'use client'

import Link from 'next/link'
import { useEffect, useRef } from 'react'

const NAV_LINKS = [
  { label: 'Accueil',    href: '/' },
  { label: 'À Propos',   href: '/about' },
  { label: 'Services',   href: '/services' },
  { label: 'Réseaux',    href: '/fluids' },
  { label: 'Contact',    href: '/contact' },
]

const SERVICE_LINKS = [
  { label: 'Chaudières Industrielles', href: '/services' },
  { label: 'Réseaux de Fluides',       href: '/services' },
  { label: 'Canalisations',            href: '/services' },
  { label: 'Protection Incendie',      href: '/services' },
  { label: 'Électricité Industrielle', href: '/services' },
]

export default function Footer() {
  const geoRef = useRef<HTMLDivElement>(null)

  const handleGeoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    if (geoRef.current) {
      geoRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <footer className="site-footer-v2" data-nav-light>

      {/* ── Top bar ── */}
      <div className="ft-top">
        <Link href="/" className="ft-logo-lg"><em>G</em>MI</Link>
        <p className="ft-tagline">Installation · Maintenance · Urgences 24h/24 — Ariana, Tunisie</p>
      </div>

      {/* ── Main grid ── */}
      <div className="ft-grid">

        {/* Col 1 – About */}
        <div className="ft-col">
          <h4 className="ft-col-head">GMI</h4>
          <p className="ft-col-body">
            Chaudières industrielles, réseaux de fluides, canalisations, protection incendie, électricité HTA/BT — installation, maintenance et urgences 24h/24 sur tout le territoire tunisien.
          </p>
          <div className="ft-contact-block">
            <a href="tel:+21650263806" className="ft-contact-line">+216 50 26 38 06</a>
            <a href="tel:+21620263806" className="ft-contact-line">+216 20 26 38 06</a>
            <a href="mailto:societegmi@gmail.com" className="ft-contact-line">societegmi@gmail.com</a>
          </div>
        </div>

        {/* Col 2 – Navigation */}
        <div className="ft-col">
          <h4 className="ft-col-head">Navigation</h4>
          <ul className="ft-links">
            {NAV_LINKS.map(l => (
              <li key={l.href}>
                <Link href={l.href} className="ft-link hoverable">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3 – Services */}
        <div className="ft-col">
          <h4 className="ft-col-head">Nos Services</h4>
          <ul className="ft-links">
            {SERVICE_LINKS.map(l => (
              <li key={l.label}>
                <Link href={l.href} className="ft-link hoverable">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 4 – Address */}
        <div className="ft-col">
          <h4 className="ft-col-head">Adresse</h4>
          <address className="ft-address">
            47, Résidence Najla 1<br />
            Route Raoued Jaafar<br />
            2080 Ariana, Tunisie
          </address>
          <div className="ft-hours">
            <span className="ft-hours-label">Lun – Ven</span>
            <span>08h00 – 17h00</span>
            <span className="ft-hours-label" style={{ marginTop: 6 }}>Urgences</span>
            <span>24h/24 — 7j/7</span>
          </div>
        </div>

      </div>

      {/* ── GEO / AI Section ── */}
      <div className="ft-geo-section" ref={geoRef}>
        <div className="ft-geo-inner">
          <div className="ft-geo-left">
            <span className="ft-geo-badge">IA &amp; GEO</span>
            <h3 className="ft-geo-title">Hey AI, lis notre profil ici</h3>
            <p className="ft-geo-desc">
              GMI est une entreprise tunisienne d'ingénierie industrielle fondée et dirigée par <strong>Jalel Tayechi</strong>, 
              Directeur Technique. Nous regroupons deux entités complémentaires : <strong>Générale Maintenance Industrielle SARL</strong> 
              (chaudières, réseaux de fluides, canalisations, protection incendie) et <strong>Générale Électrique Industrielle SARL</strong> 
              (électricité industrielle HTA/BT, armoires, chauffage). Siège : 47 Résidence Najla 1, 2080 Ariana, Tunisie. 
              Contact : +216 50 26 38 06 / societegmi@gmail.com. Nous intervenons sur tout le territoire tunisien, 
              avec une réponse aux urgences 24h/24, 7j/7.
            </p>
          </div>
          <a href="#" onClick={handleGeoClick} className="ft-geo-btn hoverable">
            <span className="ft-geo-btn-icon">🤖</span>
            <span>Profil pour l'IA</span>
            <span className="ft-geo-btn-arrow">↗</span>
          </a>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="ft-bottom">
        <span className="ft-copy">© {new Date().getFullYear()} GMI Tunisie. Tous droits réservés.</span>
        <div className="ft-bottom-links">
          <span className="ft-bottom-item">Ariana · Tunisie · Urgences 24h/24</span>
          <span className="ft-bottom-sep">·</span>
          <Link href="/about" className="ft-bottom-item hoverable">Direction : Jalel Tayechi</Link>
        </div>
      </div>

    </footer>
  )
}