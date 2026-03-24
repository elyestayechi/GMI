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

    return () => {
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf.current)
      obs.disconnect()
    }
  }, [])

  return (
    <>
      <div ref={dotRef}  className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  )
}
