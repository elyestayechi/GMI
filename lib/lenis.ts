import Lenis from 'lenis'
import { gsap, ScrollTrigger } from './gsap'

let lenis: Lenis | null = null

export function initLenis() {
  if (lenis) { lenis.destroy(); lenis = null }
  lenis = new Lenis({
    duration: 1.4,
    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
  })
  gsap.ticker.add((t: number) => lenis!.raf(t * 1000))
  gsap.ticker.lagSmoothing(0)
  lenis.on('scroll', ScrollTrigger.update)
  return lenis
}

export function stopLenis()  { lenis?.stop() }
export function startLenis() { lenis?.start() }
