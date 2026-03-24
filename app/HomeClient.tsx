'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { gsap, ScrollTrigger } from '@/lib/gsap'
import Footer from '@/components/Footer'
import LogoBand from '@/components/LogoBand'
import './Home.css'

const SERVICES = [
  { idx:'01', title:'Chaudières',    acc:'industrielles', tags:['Installation','Maintenance','Entretien'],           desc:'Installation toutes marques et puissances — 50 kW à 10 MW, jusqu\'à 40 bar. Contrats de maintenance préventive avec rapport écrit après chaque visite. Intervention corrective en moins de 4h sur Grand Tunis.' },
  { idx:'02', title:'Réseaux de',    acc:'fluides',        tags:['Vapeur','Air comprimé','Eau glacée','Gaz'],        desc:'Vapeur 1–40 bar, air comprimé 6–16 bar ISO 8573, eau glacée et gaz naturel certifié STEG. Chaque réseau livré avec dossier de recolement, plans finaux et procès-verbaux de contrôle.' },
  { idx:'03', title:'Canalisations', acc:'industrielles',  tags:['Acier','Inox','Galvanisé','Sur mesure'],           desc:'Acier carbone A106, inox 316L, galvanisé S235 — du DN15 au DN600, de -60°C à +600°C. Soudure TIG et orbitale, essais de pression, certification des joints selon EN 13480.' },
  { idx:'04', title:'Protection',    acc:'incendie',       tags:['Sprinklers','Réseaux secs','Conformité'],          desc:'Sprinklers, réseaux secs et humides conformes NFPA 13 et EN 12845, debits jusqu\'à 2 000 l/min. Maintenance annuelle avec rapport de test — votre autorisation d\'exploitation reste valide.' },
  { idx:'05', title:'Électricité',   acc:'industrielle',   tags:['HTA / BT','Armoires','Chauffage'],                 desc:'Postes HTA 30 kV, TGBT, armoires IP65 jusqu\'à 5 MW. Câblage machines, aérothermes, récupération de chaleur. Livré avec schémas de recolement et rapport de mise en service.' },
]

const FLUIDS = [
  { 
    n:'01', 
    name:'Vapeur',       
    sub:'Réseaux haute pression'    
  },
  { 
    n:'02', 
    name:'Eau Glacée',   
    sub:'Process frigorifiques'     
  },
  { 
    n:'03', 
    name:'Air Comprimé', 
    sub:'Distribution industrielle' 
  },
  { 
    n:'04', 
    name:'Gaz Naturel',  
    sub:'Alimentation process'      
  },
]

export default function HomeClient() {
  const [sent, setSent] = useState(false)
  const [sub,  setSub]  = useState(false)

  useEffect(() => {
    const raf = requestAnimationFrame(() => {
      ScrollTrigger.refresh()

      gsap.to('#h1 .word',      { y:'0%', duration:1.3, ease:'expo.out', stagger:.13, delay:.2 })
      gsap.to(['#hero-cap','#hero-sh'], { opacity:1, y:0, duration:1.1, ease:'expo.out', stagger:.15, delay:.7 })

      gsap.to('#about-img-mask', { scaleY:0, transformOrigin:'top', duration:1.4, ease:'expo.inOut',
        scrollTrigger:{ trigger:'#about-img-outer', start:'top 72%', toggleActions:'play none none none' }})
      gsap.to('#about-img-inner-wrap', { yPercent:8, ease:'none',
        scrollTrigger:{ trigger:'#about', start:'top bottom', end:'bottom top', scrub:1.5 }})

      rev('#about-head .dword', '#about-txt', '75%')
      gsap.from(['#about-p','#about-p2'], { y:28, opacity:0, duration:.9, ease:'expo.out', stagger:.12,
        scrollTrigger:{ trigger:'#about-txt', start:'top 68%' }})

      const statItems = document.querySelectorAll('#about-stats > div')
      if (statItems.length) {
        gsap.from(statItems, { y:24, opacity:0, duration:.8, ease:'expo.out', stagger:.1,
          scrollTrigger:{ trigger:'#about-stats', start:'top 82%' }})
      }
      gsap.from('#about-num', { opacity:0, duration:1.2,
        scrollTrigger:{ trigger:'#about-num', start:'top 80%' }})

      ;['#stl-0','#stl-1','#stl-2','#stl-3'].forEach((id, i) => {
        const el = document.querySelector(id + ' .stw')
        if (el) gsap.from(el, { y:'105%', duration:1.1, ease:'expo.out',
          scrollTrigger:{ trigger:id, start:'top 88%' }, delay:i*.08 })
      })

      rev('#svc-head .dword', '#svc-head', '80%')
      const intro = document.querySelector('#svc-intro')
      if (intro) gsap.from(intro, { y:24, opacity:0, duration:.9, ease:'expo.out',
        scrollTrigger:{ trigger:intro, start:'top 82%' }})
      document.querySelectorAll('.svc-row').forEach((row, i) => {
        gsap.from(row, { x:-30, opacity:0, duration:.85, ease:'expo.out',
          scrollTrigger:{ trigger:row, start:'top 83%' }, delay:i*.06 })
      })

      gsap.to('#fb1-bg', { yPercent:28, ease:'none',
        scrollTrigger:{ trigger:'#fb1', start:'top bottom', end:'bottom top', scrub:1.4 }})
      gsap.from('#fb1-q .fbw', { y:48, opacity:0, duration:1.1, ease:'expo.out', stagger:.07,
        scrollTrigger:{ trigger:'#fb1', start:'top 65%' }})

      rev('#fl-head .dword', '#fl-head', '78%')
      document.querySelectorAll('.fl-card').forEach((card, i) => {
        const mask = card.querySelector('.fl-card-mask')
        if (mask) gsap.to(mask, { scaleY:0, transformOrigin:'bottom', duration:1.2, ease:'expo.inOut',
          scrollTrigger:{ trigger:card, start:'top 80%', toggleActions:'play none none none' }, delay:i*.12 })
      })

      gsap.from('.ct-big .cbw', { y:'108%', duration:1.2, ease:'expo.out', stagger:.1,
        scrollTrigger:{ trigger:'.ct-big', start:'top 78%' }})
      gsap.from('#ct-det .ct-row', { y:24, opacity:0, duration:.8, ease:'expo.out', stagger:.1,
        scrollTrigger:{ trigger:'#ct-det', start:'top 78%' }})
      const ctForm = document.querySelector('#ct-form')
      if (ctForm) gsap.from(ctForm, { y:40, opacity:0, duration:1, ease:'expo.out',
        scrollTrigger:{ trigger:ctForm, start:'top 78%' }})

    })

    return () => {
      cancelAnimationFrame(raf)
      ScrollTrigger.getAll().forEach(t => t.kill())
    }
  }, [])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSub(true)
    setTimeout(() => {
      setSent(true); setSub(false)
      setTimeout(() => { setSent(false); (e.target as HTMLFormElement).reset() }, 3500)
    }, 1000)
  }

  return (
    <div className="page-enter">

      {/* ── HERO ── */}
      <section className="home-hero" >
        <div id="hero-txt">
          <div className="h1-wrap" id="h1">
            <span className="row"><span className="word">INGÉNIERIE</span></span>
            <span className="row serif-row"><span className="word">industrielle</span></span>
            <span className="row"><span className="word red-accent">DE&nbsp;PRÉCISION</span></span>
          </div>
          <div className="hero-meta">
            <p className="hero-caption" id="hero-cap">Chaudières, réseaux de fluides, canalisations, protection incendie, électricité industrielle — installation, maintenance et urgences 24h/24 sur tout le territoire tunisien. Intervention en moins de 4h sur Grand Tunis.</p>
          </div>
        </div>
        <div className="hero-counter">Ariana · Tunisie · 2080</div>
      </section>

      {/* ── LOGO BAND ── */}
      <LogoBand />

      {/* ── ABOUT ── */}
      <section id="about">
        <div className="about-grid">
          <div className="about-img-col">
            <div className="about-img-outer" id="about-img-outer">
              <div id="about-img-inner-wrap" style={{ position:'relative', width:'100%', height:'100%', overflow:'hidden' }}>
                <Image
                  src="/assets/about-industry.webp"
                  priority
                  alt="GMI – Installations industrielles en Tunisie"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit:'cover', objectPosition:'center' }}
                />
              </div>
              <div className="about-img-mask" id="about-img-mask" />
            </div>
          </div>
          <div className="about-txt-col" id="about-txt">
            <div className="about-num" id="about-num">GMI</div>
            <div className="section-lbl" style={{ marginBottom:28 }}>À Propos</div>
            <h2 className="display-heading" id="about-head">
              <span className="drow"><span className="dword">DEUX ENTITÉS,</span></span>
              <span className="drow serif-mix"><span className="dword">une expertise</span></span>
              <span className="drow"><span className="dword">UNIQUE.</span></span>
            </h2>
            <p className="body-p" style={{ marginTop:36 }} id="about-p">Générale Maintenance Industrielle SARL installe et maintient vos chaudières, réseaux de fluides, canalisations et systèmes de protection incendie. Générale Électrique Industrielle SARL prend en charge les installations HTA/BT et les projets d'électricité industrielle. Deux entités spécialisées, un seul interlocuteur.</p>
            <p className="body-p" style={{ marginTop:16 }} id="about-p2">Basés à Ariana, nous intervenons sur tout le territoire tunisien. <span style={{ color:'var(--ink)', fontWeight:400 }}>Jalel Tayechi</span> assure la direction technique et se déplace personnellement sur les chantiers complexes.</p>
            <div className="about-stats" id="about-stats">
              {[['2','Entités'],['5','Domaines couverts'],['< 4h','Intervention']].map(([n,l]) => (
                <div key={l}><div className="stat-n">{n}</div><div className="stat-l">{l}</div></div>
              ))}
            </div>
            <Link href="/about" className="text-link" style={{ marginTop:48, display:'inline-flex' }}>En savoir plus <span>→</span></Link>
          </div>
        </div>
      </section>

      {/* ── STATEMENT ── */}
      <section id="statement">
        <div className="st-inner">
          <span className="st-line"         id="stl-0"><span className="stw">INSTALLÉ,</span></span>
          <span className="st-line serif-l"  id="stl-1"><span className="stw">maintenu,</span></span>
          <span className="st-line al-r"     id="stl-2"><span className="stw outline">GARANTI</span>&nbsp;<span className="stw red">SUR LE</span></span>
          <span className="st-line"         id="stl-3"><span className="stw red">TERRAIN.</span></span>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services">
        <div className="svc-header">
          <div>
            <div className="section-lbl">Ce Que Nous Faisons</div>
            <h2 className="display-heading" style={{ marginTop:20 }} id="svc-head">
              <span className="drow"><span className="dword">NOS</span></span>
              <span className="drow serif-mix"><span className="dword">services</span></span>
            </h2>
          </div>
          <p className="svc-intro" id="svc-intro">Installation, maintenance préventive, urgences correctives — cinq domaines couverts par des techniciens certifiés, disponibles 24h/24, 7j/7. Chaque intervention documentée, chaque livraison signée.</p>
        </div>
        <div className="svc-list">
          {SERVICES.map(s => (
            <div className="svc-row hoverable" key={s.idx}>
              <div className="svc-idx">{s.idx}</div>
              <div className="svc-n"><span className="snw">{s.title}</span><br /><span className="snw serif-accent">{s.acc}</span></div>
              <div className="svc-r">
                <div className="svc-tags">{s.tags.map(t => <span className="svc-tag" key={t}>{t}</span>)}</div>
                <p className="svc-desc">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="svc-footer-row">
          <Link href="/services" className="text-link">Voir tous les services <span>→</span></Link>
        </div>
      </section>

      {/* ── FULLBLEED ── */}
      <div className="fb-section" id="fb1" data-nav-light>
        <div className="fb-bg" id="fb1-bg" style={{ backgroundImage:`url('https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fm=webp&fit=crop&w=1920&q=90')` }} />
        <div className="fb-scrim" />
        <div className="fb-content">
          <div className="fb-loc">Ariana, Tunisie</div>
          <p className="fb-big" id="fb1-q">
            {['Nos','clients','ne','cherchent','pas','un','autre','prestataire.','Ils','nous','renouvellent.'].map((w,i) => (
              <span className="fbw" key={i}>{i===10 ? <strong>{w}</strong> : w}&nbsp;</span>
            ))}
          </p>
        </div>
      </div>
{/* ── FLUIDS ── */}
<section id="fluids">
  <div style={{ maxWidth: 1380, margin: '0 auto' }}>
    <div className="section-lbl">Fluides Industriels</div>
    <h2 className="display-heading" style={{ marginTop: 20 }} id="fl-head">
      <span className="drow"><span className="dword">CHAQUE</span></span>
      <span className="drow serif-mix"><span className="dword">fluide maîtrisé</span></span>
    </h2>
  </div>
  <div className="fl-grid" id="fl-grid">
    {FLUIDS.map(f => (
      <div className="fl-card fl-card-solid hoverable" key={f.n}>
        <div className="fl-card-mask" />
        <div className="fl-number">{f.n}</div>
        <div className="fl-info">
          <div className="fl-name">{f.name}</div>
          <div className="fl-sub">{f.sub}</div>
        </div>
      </div>
    ))}
  </div>
  <div className="fl-footer">
    <Link href="/fluids" className="text-link">Voir tous les fluides <span>→</span></Link>
  </div>
</section>

      {/* ── CONTACT ── */}
      <section id="contact-home">
        <div className="ct-inner">
          <div>
            <div className="section-lbl">Contact</div>
            <h2 className="ct-big" id="ct-big">
              <span className="cbl"><span className="cbw">PARLONS</span></span>
              <span className="cbl red"><span className="cbw">PROJET.</span></span>
            </h2>
            <div className="ct-details" id="ct-det">
              {[
                { l:'Adresse', v:<>47, Résidence Najla 1<br/>Route Raoued Jaafar<br/>2080 Ariana, Tunisie</> },
                { l:'Tél.',    v:<><a href="tel:+21650263806">+216 50 26 38 06</a><br/><a href="tel:+21620263806">+216 20 26 38 06</a></> },
                { l:'Email',   v:<a href="mailto:societegmi@gmail.com">societegmi@gmail.com</a> },
                { l:'Contact', v:<>Jalel Tayechi<br/><span style={{ color:'var(--muted)', fontSize:12 }}>Directeur Technique</span></> },
              ].map(d => (
                <div className="ct-row" key={d.l}>
                  <div className="ct-lbl">{d.l}</div>
                  <div className="ct-val">{d.v}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="ct-form-wrap" id="ct-form">
            <form onSubmit={handleSubmit}>
              <div className="f-row">
                <div><label className="f-label">Nom *</label><input type="text" className="f-field" placeholder="Votre nom" required /></div>
                <div><label className="f-label">Société</label><input type="text" className="f-field" placeholder="Société" /></div>
              </div>
              <div className="f-row">
                <div><label className="f-label">Téléphone *</label><input type="tel" className="f-field" placeholder="+216 XX XXX XXX" required /></div>
                <div><label className="f-label">Email *</label><input type="email" className="f-field" placeholder="email@société.com" required /></div>
              </div>
              <label className="f-label">Service requis</label>
              <select className="f-field f-select">
                <option value="">Sélectionner…</option>
                <option>Chaudières Industrielles</option>
                <option>Réseaux de Fluides</option>
                <option>Canalisations Industrielles</option>
                <option>Protection Incendie</option>
                <option>Électricité Industrielle</option>
                <option>Plusieurs services</option>
              </select>
              <label className="f-label">Message</label>
              <textarea className="f-field f-textarea" placeholder="Type d'équipement, fluides concernés, superficie du site, urgence ou projet planifié…" />
              <button type="submit" className={`f-submit hoverable${sent?' sent':''}`} disabled={sub||sent}>
                <span>{sent ? 'Message envoyé ✓' : sub ? 'Envoi…' : 'Envoyer la demande'}</span>
                {!sent && <span className="f-arrow">→</span>}
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

function rev(sel: string, trigSel: string, start = '75%') {
  const els  = document.querySelectorAll(sel)
  const trig = document.querySelector(trigSel)
  if (!els.length || !trig) return
  gsap.from(els, { y:'105%', duration:1.1, ease:'expo.out', stagger:.1,
    scrollTrigger:{ trigger:trig, start:`top ${start}` }})
}