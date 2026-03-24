'use client'

const L1 = [
  { id:'delice',   w:125, svg: <text x="0" y="30" fontFamily="'Barlow Condensed',sans-serif" fontWeight="900" fontSize="34" fill="#141210" letterSpacing="1">DÉLICE</text> },
  { id:'poulina',  w:165, svg: <><text x="0" y="29" fontFamily="'Barlow Condensed',sans-serif" fontWeight="700" fontSize="28" fill="#141210" letterSpacing="2">POULINA</text><rect x="0" y="33" width="155" height="2" fill="#c0151b"/></> },
  { id:'steg',     w:92,  svg: <><rect x="0" y="4" width="36" height="32" fill="#c0151b"/><text x="4" y="28" fontFamily="'Barlow Condensed',sans-serif" fontWeight="900" fontSize="22" fill="white">ST</text><text x="42" y="28" fontFamily="'Barlow Condensed',sans-serif" fontWeight="900" fontSize="22" fill="#141210">EG</text></> },
  { id:'sotuver',  w:175, svg: <text x="0" y="28" fontFamily="'Barlow Condensed',sans-serif" fontWeight="700" fontSize="26" fill="#141210" letterSpacing="1.5">SOTUVER</text> },
  { id:'ttelecom', w:236, svg: <><circle cx="18" cy="20" r="14" fill="#c0151b"/><text x="40" y="27" fontFamily="'Barlow Condensed',sans-serif" fontWeight="700" fontSize="22" fill="#141210" letterSpacing="1">TUNISIE TELECOM</text></> },
  { id:'sfax',     w:188, svg: <text x="0" y="28" fontFamily="'Barlow Condensed',sans-serif" fontWeight="900" fontSize="26" fill="#141210" letterSpacing="1">SFAX CIMENT</text> },
  { id:'hayet',    w:118, svg: <text x="0" y="30" fontFamily="'Barlow Condensed',sans-serif" fontWeight="900" fontSize="32" fill="#141210" letterSpacing="2">HAYET</text> },
  { id:'carthago', w:178, svg: <text x="0" y="28" fontFamily="'Barlow Condensed',sans-serif" fontWeight="700" fontSize="26" fill="#141210" letterSpacing="1.5">CARTHAGO</text> },
]

const L2 = [
  { id:'sonede',  w:148, svg: <text x="0" y="29" fontFamily="'Barlow Condensed',sans-serif" fontWeight="900" fontSize="28" fill="#141210" letterSpacing="2">SONEDE</text> },
  { id:'biat',    w:88,  svg: <><rect x="0" y="8" width="4" height="24" fill="#c0151b"/><text x="14" y="29" fontFamily="'Barlow Condensed',sans-serif" fontWeight="900" fontSize="28" fill="#141210" letterSpacing="2">BIAT</text></> },
  { id:'comar',   w:138, svg: <text x="0" y="29" fontFamily="'Barlow Condensed',sans-serif" fontWeight="700" fontSize="27" fill="#141210" letterSpacing="2">COMAR</text> },
  { id:'liondor', w:168, svg: <><polygon points="20,4 26,14 38,14 28,22 32,34 20,26 8,34 12,22 2,14 14,14" fill="#c0151b" opacity=".8"/><text x="46" y="28" fontFamily="'Barlow Condensed',sans-serif" fontWeight="700" fontSize="24" fill="#141210" letterSpacing="1">LION D'OR</text></> },
  { id:'artes',   w:118, svg: <text x="0" y="29" fontFamily="'Barlow Condensed',sans-serif" fontWeight="900" fontSize="30" fill="#141210" letterSpacing="2">ARTES</text> },
  { id:'sotetel', w:158, svg: <text x="0" y="28" fontFamily="'Barlow Condensed',sans-serif" fontWeight="700" fontSize="26" fill="#141210" letterSpacing="1.5">SOTETEL</text> },
  { id:'tawasol', w:162, svg: <text x="0" y="28" fontFamily="'Barlow Condensed',sans-serif" fontWeight="700" fontSize="26" fill="#141210" letterSpacing="1.5">TAWASOL</text> },
  { id:'magasin', w:248, svg: <text x="0" y="28" fontFamily="'Barlow Condensed',sans-serif" fontWeight="700" fontSize="24" fill="#141210" letterSpacing="1">MAGASIN GÉNÉRAL</text> },
]

function Band({ logos, dir }: { logos: typeof L1, dir: string }) {
  const items = [...logos, ...logos]
  return (
    <div className="logo-band" style={{ borderTop: 'none' }}>
      <div className={`band-track band-${dir}`}>
        {items.map((l, i) => (
          <div className="band-item" key={`${l.id}-${i}`}>
            <svg viewBox={`0 0 ${l.w} 40`} fill="none" xmlns="http://www.w3.org/2000/svg">
              {l.svg}
            </svg>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function LogoBand() {
  return (
    <>
      <div className="logo-band-header">
        <div className="logo-band-header-inner">
          <span className="logo-band-label">Ils nous font confiance</span>
          <span className="logo-band-rule" />
        </div>
      </div>
      <Band logos={L1} dir="fwd" />
      <Band logos={L2} dir="back" />
    </>
  )
}
