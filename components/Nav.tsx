'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { gsap } from '@/lib/gsap'
import { stopLenis, startLenis } from '@/lib/lenis'

const LINKS = [
  { idx: '01', label: 'Accueil',  to: '/' },
  { idx: '02', label: 'À Propos', to: '/about' },
  { idx: '03', label: 'Services', to: '/services' },
  { idx: '04', label: 'Réseaux',  to: '/fluids' },
  { idx: '05', label: 'Contact',  to: '/contact' },
]

export default function Nav() {
  const [open, setOpen]   = useState(false)
  const [light, setLight] = useState(false)
  const pathname          = usePathname()
  const navRef            = useRef<HTMLElement>(null)
  const fillRef           = useRef<HTMLDivElement>(null)
  const innerRef          = useRef<HTMLDivElement>(null)
  const footerRef         = useRef<HTMLDivElement>(null)
  const wordsRef          = useRef<(HTMLSpanElement | null)[]>([])

  useEffect(() => { if (open) doClose() }, [pathname])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape' && open) doClose() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  useEffect(() => {
    if (!fillRef.current || !innerRef.current || !footerRef.current) return
    gsap.set(fillRef.current,  { clipPath: 'inset(0 0 100% 0)' })
    gsap.set(innerRef.current, { opacity: 0 })
    gsap.set(wordsRef.current.filter(Boolean), { y: '110%' })
    gsap.set(footerRef.current, { opacity: 0, y: 16 })
  }, [])

  /* ── IntersectionObserver: watch [data-nav-light] sections ── */
  useEffect(() => {
    // Sentinel: a 1px-tall div pinned at nav bottom (≈100px from top)
    const sentinel = document.createElement('div')
    sentinel.style.cssText =
      'position:fixed;top:100px;left:0;right:0;height:1px;pointer-events:none;z-index:-1;'
    document.body.appendChild(sentinel)

    const io = new IntersectionObserver(
      () => {
        // On every scroll tick, check if any dark section overlaps the nav zone
        const navBottom = 110 // px – roughly nav height
        const sections = document.querySelectorAll('[data-nav-light]')
        let isLight = false
        sections.forEach(el => {
          const r = el.getBoundingClientRect()
          if (r.top < navBottom && r.bottom > 0) isLight = true
        })
        setLight(isLight)
      },
      { threshold: [0, 0.01, 0.5, 1] }
    )

    // Observe every dark section already in the DOM, and re-check on scroll
    const check = () => {
      const navBottom = 110
      const sections = document.querySelectorAll('[data-nav-light]')
      let isLight = false
      sections.forEach(el => {
        const r = el.getBoundingClientRect()
        if (r.top < navBottom && r.bottom > 0) isLight = true
      })
      setLight(isLight)
    }

    window.addEventListener('scroll', check, { passive: true })
    check() // initial

    return () => {
      window.removeEventListener('scroll', check)
      io.disconnect()
      sentinel.remove()
    }
  }, [pathname]) // re-run when page changes so new sections are picked up

  const doOpen = useCallback(() => {
    setOpen(true)
    document.body.classList.add('menu-open')
    stopLenis()
    gsap.timeline()
      .to(navRef.current,   { y: -8, duration: .75, ease: 'expo.inOut' }, 0)
      .to(fillRef.current,  { clipPath: 'inset(0 0 0% 0)', duration: .75, ease: 'expo.inOut' }, 0)
      .to(innerRef.current, { opacity: 1, duration: .01 }, '-=.2')
      .to(wordsRef.current.filter(Boolean), { y: '0%', duration: .9, ease: 'expo.out', stagger: .07 }, '-=.3')
      .to(footerRef.current, { opacity: 1, y: 0, duration: .7, ease: 'expo.out' }, '-=.4')
  }, [])

  const doClose = useCallback(() => {
    gsap.timeline({
      onComplete() {
        setOpen(false)
        document.body.classList.remove('menu-open')
        startLenis()
        gsap.set(innerRef.current,  { opacity: 0 })
        gsap.set(wordsRef.current.filter(Boolean), { y: '110%' })
        gsap.set(footerRef.current, { opacity: 0, y: 16 })
      }
    })
      .to(wordsRef.current.filter(Boolean), { y: '110%', duration: .55, ease: 'expo.in', stagger: { each: .05, from: 'end' } })
      .to(footerRef.current, { opacity: 0, y: 10, duration: .35, ease: 'expo.in' }, '<')
      .to(fillRef.current,   { clipPath: 'inset(0 0 100% 0)', duration: .65, ease: 'expo.inOut' }, '-=.2')
      .to(navRef.current,    { y: 0, duration: .5, ease: 'expo.out' }, '-=.3')
  }, [])

  return (
    <>
      <nav ref={navRef} className={`nav${light && !open ? ' nav--light' : ''}`} style={{ zIndex: 1000 }}>
        <Link href="/" className="nav-logo">
          <div className="nav-logo-dot" />
          GMI
        </Link>
        <button
          className="hamburger hoverable"
          onClick={() => open ? doClose() : doOpen()}
          style={{ zIndex: 1001 }}
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
        >
          {!open && (
            <span className="ham-label" style={{ fontSize: '1rem', fontFamily: 'var(--font-display)' }}>
              Menu
            </span>
          )}
          <div className="ham-icon">
            <span className="ham-bar bar-t" />
            <span className="ham-bar bar-b" />
          </div>
        </button>
      </nav>

      <div className="menu-overlay">
        <div ref={fillRef}  className="menu-fill" />
        <div ref={innerRef} className="menu-inner">
          <span className="menu-eyebrow" style={{ fontSize: '0.9rem' }}>Navigation</span>
          <nav className="menu-nav">
            {LINKS.map((l, i) => (
              <Link key={l.to} href={l.to} className="menu-link hoverable" onClick={doClose}>
                <span className="ml-idx" style={{ fontSize: '1rem' }}>{l.idx}</span>
                <span className="ml-text">
                  <span
                    className="ml-word"
                    ref={el => { wordsRef.current[i] = el }}
                    style={{ fontSize: 'clamp(2rem, 3.8vw, 3.2rem)' }}
                  >
                    {l.label}
                  </span>
                </span>
                <span className="ml-arrow">↗</span>
              </Link>
            ))}
          </nav>

          <div ref={footerRef} className="menu-footer" style={{ paddingBottom: 'clamp(3rem, 6vw, 6rem)' }}>
            <div>
              <p className="mf-label" style={{ fontSize: '0.85rem' }}>Adresse</p>
              <p className="mf-val"   style={{ fontSize: '1rem' }}>
                47 Résidence Najla 1<br />2080 Ariana, Tunisie
              </p>
            </div>
            <div>
              <p className="mf-label" style={{ fontSize: '0.85rem' }}>Email</p>
              <p className="mf-val"   style={{ fontSize: '1rem' }}>
                <a href="mailto:societegmi@gmail.com">societegmi@gmail.com</a>
              </p>
            </div>
            <Link href="/contact" className="menu-cta hoverable" onClick={doClose}>
              Urgence ou Devis
              <span className="mcta-arrow">→</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}