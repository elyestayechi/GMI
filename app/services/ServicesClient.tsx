'use client'

import { useEffect, useState } from 'react'
import { gsap, ScrollTrigger } from '@/lib/gsap'
import Footer from '@/components/Footer'
import './Services.css'

const SVCS = [
  { idx: '01', title: 'Chaudières', acc: 'Industrielles', color: '#c0151b',
    tags: ['Installation', 'Maintenance préventive', 'Maintenance corrective', 'Réglage combustion'],
    specs: ['Puissance : 50 kW – 10 MW', 'Pression : jusqu\'à 40 bar', 'Combustibles : gaz, fioul, mixte'],
    body: [
      'Installation complète toutes marques — dimensionnement, raccordement gaz, mise en service officielle. Chaudières vapeur et eau chaude, haute et basse pression, de 50 kW à 10 MW.',
      'Contrat de maintenance préventive annuel : relevés de combustion, contrôle soupapes, vérification brûleurs, purges. Rapport écrit avec mesures et recommandations remis après chaque visite. Sans exception.',
      'Astreinte corrective 24h/24 — rappel en moins d\'une heure, intervention en moins de 4h sur Grand Tunis. Votre chaufferie ne reste pas en panne.'
    ] },
  { idx: '02', title: 'Réseaux de', acc: 'Fluides', color: '#1a4a7a',
    tags: ['Vapeur', 'Air comprimé', 'Eau glacée', 'Gaz naturel'],
    specs: ['Pression vapeur : 1 – 40 bar', 'Air comprimé : 6 – 16 bar ISO 8573', 'Diamètres : DN15 – DN600'],
    body: [
      'Réseaux vapeur industrielle — primaires haute pression, postes de détente, pièges à vapeur, retours de condensats. Calorifugeage et isolation thermique inclus dans chaque contrat de pose.',
      'Air comprimé qualité ISO 8573 : stations de compression, sécheurs frigorifiques et à adsorption, filtres coalescents, distribution en boucle. Eau glacée pour process de refroidissement, échangeurs de plaques et vannes motorisées.',
      'Chaque réseau livré avec dossier de recolement complet : plans as-built, fiches matériaux, procès-verbaux d\'essais de pression, certificats de conformité. Rien n\'est considéré terminé avant que la documentation soit entre vos mains.'
    ] },
  { idx: '03', title: 'Canalisations', acc: 'Industrielles', color: '#2d5a2d',
    tags: ['Acier carbone', 'Acier inoxydable', 'Acier galvanisé', 'Sur mesure'],
    specs: ['Matériaux : A106, 316L, S235', 'DN15 à DN600', 'Température : -60°C à +600°C'],
    body: [
      'Fabrication et pose sur mesure en acier carbone A106/A53, inox 316L ou 304, et acier galvanisé S235 — dimensionnées selon vos fluides, pressions de service et températures de process spécifiques.',
      'Soudure TIG, MIG et orbitale. Brides et raccords normalisés EN 1092 et ASME B16.5. Toutes les soudures sont tracées et contrôlées par ressuage ou radiographie selon le niveau de criticité du circuit.',
      'Livraison avec essais de pression hydraulique, certificats de soudage, fiches matériaux et dossier de fabrication complet. L\'installation est prête à être présentée à votre bureau de contrôle ou votre assureur.'
    ] },
  { idx: '04', title: 'Protection', acc: 'Incendie', color: '#8a4010',
    tags: ['Sprinklers', 'Réseaux secs', 'Réseaux humides', 'Mise en conformité'],
    specs: ['Normes : NFPA 13, EN 12845', 'Débit : jusqu\'à 2 000 l/min', 'Pression : 1.2 – 12 bar'],
    body: [
      'Installation de sprinklers automatiques, poteaux et robinets incendie armés selon NFPA 13 et EN 12845. Dimensionnement hydraulique, calcul des débits et plans d\'implantation fournis avant le démarrage des travaux.',
      'Réseaux secs, humides, déluge et préaction. Postes de contrôle alarme, détecteurs de débit, tableaux de signalisation. Chaque installation est testée à débit réel avant réception — pas de mise en service sans validation complète.',
      'Maintenance annuelle contractuelle avec procès-verbal de test : votre autorisation d\'exploitation reste valide. Mise en conformité des installations existantes avec rapport d\'écarts détaillé et planning d\'intervention chiffré.'
    ] },
  { idx: '05', title: 'Électricité', acc: 'Industrielle', color: '#4a3080',
    tags: ['HTA / BT', 'Armoires électriques', 'Câblage machines', 'Variateurs'],
    specs: ['Tension : BT 400V / HTA 30kV', 'Puissance : jusqu\'à 5 MW', 'Indice protection : IP65 standard'],
    body: [
      'Postes HTA 30 kV, transformateurs, TGBT et armoires de distribution industrielle IP65. Étude de découpage de réseau, calcul de sélectivité et coordination des protections inclus dans chaque projet électrique.',
      'Câblage machines et force motrice, départs moteurs, variateurs de fréquence, éclairage industriel et systèmes de contrôle-commande. Plans électriques de recolement remis sans supplément à la réception.',
      'Chaque installation livrée avec schémas de recolement, procès-verbal de mise en service et bilan de puissance. Votre bureau de contrôle reçoit le dossier complet avant la mise en exploitation.'
    ] },
]

export default function ServicesClient() {
  const [active, setActive] = useState(0)
  const s = SVCS[active]

  useEffect(() => {
    window.scrollTo(0, 0)
    const raf = requestAnimationFrame(() => {
      ScrollTrigger.refresh()

      gsap.from('.svc-intro-label', { opacity: 0, y: 16, duration: .9, ease: 'expo.out', delay: .2 })
      gsap.from('.svc-intro-head .dword', { y: '105%', duration: 1.2, ease: 'expo.out', stagger: .1, delay: .35 })
      gsap.from('.svc-intro-body', { opacity: 0, y: 20, duration: .9, ease: 'expo.out', delay: .75 })

      const ovRows = document.querySelectorAll('.svc-overview-row')
      if (ovRows.length) gsap.from(ovRows, { x: -30, opacity: 0, duration: .85, ease: 'expo.out', stagger: .08,
        scrollTrigger: { trigger: '.svc-overview', start: 'top 78%' } })
    })
    return () => { cancelAnimationFrame(raf); ScrollTrigger.getAll().forEach(t => t.kill()) }
  }, [])

  useEffect(() => {
    const els = document.querySelectorAll('.sdp-anim')
    if (els.length) gsap.from(els, { y: 16, opacity: 0, duration: .55, ease: 'expo.out', stagger: .05 })
  }, [active])

  return (
    <div className="page-enter">

      {/* ── PAGE INTRO ── */}
      <section className="svc-pg-intro">
        <div className="svc-pg-intro-inner">
          <div className="svc-pg-intro-left">
            <div className="section-lbl svc-intro-label">Nos Services</div>
            <h1 className="display-heading svc-intro-head" style={{ marginTop: 20 }}>
              <span className="drow"><span className="dword">5</span></span>
              <span className="drow serif-mix"><span className="dword">domaines,</span></span>
              <span className="drow"><span className="dword red-accent">UN RÉSULTAT.</span></span>
            </h1>
          </div>
          <p className="svc-intro-body body-p" style={{ maxWidth: 380 }}>
            Chaudières, fluides, canalisations, incendie, électricité — chaque intervention livrée avec documentation complète. Urgences 24h/24, rapport écrit après chaque visite, garantie terrain sur chaque chantier.
          </p>
        </div>
        <div className="svc-pg-intro-rule" />
      </section>

      {/* ── SERVICE DETAIL ── */}
      <section className="svc-detail-section">
        <div className="svc-detail-max">
          <div className="svc-tabs">
            {SVCS.map((sv, i) => (
              <button key={sv.idx} className={`svc-tab hoverable${active === i ? ' active' : ''}`}
                style={{ '--tc': sv.color } as React.CSSProperties} onClick={() => setActive(i)}>
                <span className="tab-idx">{sv.idx}</span>
                <span className="tab-name">{sv.title}<em>{sv.acc}</em></span>
              </button>
            ))}
          </div>
          <div className="svc-panel">
            <div className="svc-vis-block" style={{ '--tc': s.color } as React.CSSProperties}>
              <div className="svb-grid" />
              <div className="svb-num">{s.idx}</div>
              <div className="svb-label">
                <span className="svb-title">{s.title}</span>
                <span className="svb-acc">{s.acc}</span>
              </div>
            </div>
            <div className="svc-panel-content">
              <div className="sdp-anim sdp-idx">{s.idx} / 05</div>
              <h2 className="sdp-anim sdp-title">{s.title}<em>{s.acc}</em></h2>
              <div className="sdp-anim sdp-tags">{s.tags.map(t => <span className="svc-tag" key={t}>{t}</span>)}</div>
              {s.body.map((p, i) => <p className="sdp-anim sdp-body" key={i}>{p}</p>)}
              <div className="sdp-anim sdp-specs">
                {s.specs.map(sp => (
                  <div className="spec-row" key={sp} style={{ '--tc': s.color } as React.CSSProperties}>
                    <span className="spec-dot" />{sp}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── OVERVIEW ── */}
      <section className="svc-overview">
        <div className="svc-detail-max">
          <div className="section-lbl" style={{ marginBottom: 56 }}>Vue d'ensemble</div>
          {SVCS.map((sv, i) => (
            <div key={sv.idx} className={`svc-overview-row hoverable${active === i ? ' ov-active' : ''}`}
              onClick={() => { setActive(i); window.scrollTo({ top: 0, behavior: 'smooth' }) }}>
              <span className="svc-idx">{sv.idx}</span>
              <div className="svc-n"><span className="snw">{sv.title}</span><br /><span className="snw serif-accent">{sv.acc}</span></div>
              <div className="ov-tags">{sv.tags.slice(0, 3).map(t => <span className="svc-tag" key={t}>{t}</span>)}</div>
              <span className="ov-arrow">&#8599;</span>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}
