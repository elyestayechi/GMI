'use client'

import { useEffect, useRef } from 'react'
import { gsap } from '@/lib/gsap'

export default function Cursor() {
  const dotRef  = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const mouse   = useRef({ x: 0, y: 0 })
  const pos     = useRef({ x: 0, y: 0 })
  const raf     = useRef<number>(0)

  useEffect(() => {
    // Check if device is touch-enabled (tablet or mobile)
    const isTouchDevice = () => {
      return (('ontouchstart' in window) ||
         (navigator.maxTouchPoints > 0) ||
         ('msMaxTouchPoints' in navigator && (navigator as any)['msMaxTouchPoints'] > 0))
    }

    // Check screen width for tablet/mobile breakpoints
    const isMobileOrTablet = () => {
      return window.innerWidth <= 1024 || isTouchDevice()
    }

    // If on mobile/tablet, don't initialize custom cursor
    if (isMobileOrTablet()) {
      // Add class to body to hide custom cursor styles
      document.body.classList.add('hide-custom-cursor')
      return
    }

    const dot  = dotRef.current!
    const ring = ringRef.current!

    const onMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX
      mouse.current.y = e.clientY
      gsap.to(dot, { x: e.clientX, y: e.clientY, duration: .08, overwrite: 'auto' })
    }
    document.addEventListener('mousemove', onMove)

    const follow = () => {
      pos.current.x += (mouse.current.x - pos.current.x) * .11
      pos.current.y += (mouse.current.y - pos.current.y) * .11
      gsap.set(ring, { x: pos.current.x, y: pos.current.y })
      raf.current = requestAnimationFrame(follow)
    }
    follow()

    const on  = () => document.body.classList.add('cur-big')
    const off = () => document.body.classList.remove('cur-big')
    const attach = () => {
      document.querySelectorAll('a, button, .hoverable').forEach(el => {
        el.addEventListener('mouseenter', on)
        el.addEventListener('mouseleave', off)
      })
    }
    attach()
    const obs = new MutationObserver(attach)
    obs.observe(document.body, { childList: true, subtree: true })

    // Handle resize events to re-check if we're on mobile/tablet
    const handleResize = () => {
      if (window.innerWidth <= 1024) {
        // Clean up and hide cursor
        document.removeEventListener('mousemove', onMove)
        cancelAnimationFrame(raf.current)
        obs.disconnect()
        document.body.classList.add('hide-custom-cursor')
      }
    }
    window.addEventListener('resize', handleResize)

    return () => {
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf.current)
      obs.disconnect()
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  // Only render the cursor elements if not on mobile/tablet
  if (typeof window !== 'undefined' && (window.innerWidth <= 1024 || 
      ('ontouchstart' in window) || 
      (navigator.maxTouchPoints > 0))) {
    return null
  }

  return (
    <>
      <div ref={dotRef}  className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  )
}