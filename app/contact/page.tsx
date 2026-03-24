import type { Metadata } from 'next'
import ContactClient from './ContactClient'

export const metadata: Metadata = {
  title: 'Contact – Demandez un Devis | GMI Tunisie',
  description:
    'Contactez GMI pour vos projets d\'ingénierie industrielle. 47, Résidence Najla 1, 2080 Ariana, Tunisie. Tél : +216 50 26 38 06. Urgences 24h/24, 7j/7. Intervention sur tout le territoire tunisien.',
  keywords: [
    'contact GMI Tunisie',
    'devis maintenance industrielle',
    'urgence industrielle Tunisie',
    'Ariana ingénierie contact',
  ],
  openGraph: {
    title: 'Contactez GMI – Devis Ingénierie Industrielle | Tunisie',
    description: 'Demandez un devis pour vos projets industriels. GMI intervient sur tout le territoire tunisien. Urgences 24h/24.',
    url: 'https://www.gmi-tunisie.com/contact',
  },
  alternates: { canonical: 'https://www.gmi-tunisie.com/contact' },
}

export default function ContactPage() {
  return <ContactClient />
}
