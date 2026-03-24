'use client'

import { useState, useCallback } from 'react'
import dynamic from 'next/dynamic'
import Nav from './Nav'

const Cursor = dynamic(() => import('./Cursor'), { ssr: false })
const Preloader = dynamic(() => import('./Preloader'), { ssr: false })

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  const [ready, setReady] = useState(false)

  const onDone = useCallback(async () => {
    const { initLenis } = await import('@/lib/lenis')
    const { ScrollTrigger } = await import('@/lib/gsap')
    initLenis()
    setReady(true)
    requestAnimationFrame(() => ScrollTrigger.refresh())
  }, [])

  return (
    <>
      <Cursor />
      {!ready && <Preloader onComplete={onDone} />}
      <Nav />
      <main style={{ opacity: ready ? 1 : 0, transition: 'opacity 0.3s' }}>
        {children}
      </main>
    </>
  )
}
