'use client'

import { useEffect, useRef } from 'react'
import { gsap } from '@/lib/gsap'

export default function Preloader({ onComplete }: { onComplete?: () => void }) {
  const wrapRef = useRef<HTMLDivElement>(null)
  const spanRef = useRef<HTMLSpanElement>(null)
  const pctRef  = useRef<HTMLSpanElement>(null)
  const barRef  = useRef<HTMLDivElement>(null)
  const curtRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const wrap = wrapRef.current!
    gsap.set(spanRef.current, { yPercent: 110 })
    gsap.set(curtRef.current, { scaleX: 0 })

    const finish = () => { wrap.style.display = 'none'; onComplete?.() }
    const safety = setTimeout(finish, 7000)

    const counter = { n: 0 }
    const tl = gsap.timeline({ onComplete: finish })
    tl.to(spanRef.current, { yPercent: 0, duration: 1, ease: 'expo.out', delay: .15 })
      .to(counter, {
        n: 100, duration: 1.9, ease: 'power2.inOut',
        onUpdate() {
          const v = Math.round(counter.n)
          if (pctRef.current) pctRef.current.textContent = String(v).padStart(3, '0')
          if (barRef.current) barRef.current.style.width = v + '%'
        }
      }, '-=.85')
      .to(spanRef.current, { yPercent: -110, duration: .65, ease: 'expo.in' }, '-=.25')
      .to(curtRef.current, { scaleX: 1, duration: .55, ease: 'expo.in', transformOrigin: 'left' }, '-=.2')
      .to(wrap,            { xPercent: 100, duration: .9, ease: 'expo.inOut' }, '+=.05')

    return () => { clearTimeout(safety); tl.kill() }
  }, [onComplete])

  return (
    <div ref={wrapRef} className="preloader">
      <div ref={curtRef} className="pre-curtain" />
      <span ref={pctRef} className="pre-pct">000</span>
      <div className="pre-word"><span ref={spanRef}>GMI.</span></div>
      <div ref={barRef} className="pre-bar" />
    </div>
  )
}
