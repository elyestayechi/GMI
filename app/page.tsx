import type { Metadata } from 'next'
import HomeClient from './HomeClient'

export const metadata: Metadata = {
  title: 'Accueil – GMI Ingénierie Industrielle | Ariana, Tunisie',
  description:
    'GMI — expert tunisien en installation et maintenance de chaudières industrielles, réseaux de fluides (vapeur, eau glacée, air comprimé, gaz naturel), canalisations et protection incendie. Basé à Ariana, intervient sur tout le territoire tunisien.',
  openGraph: {
    title: 'GMI – Ingénierie Industrielle de Précision | Tunisie',
    description:
      'Installation et maintenance de réseaux industriels en Tunisie. Chaudières, fluides, canalisations, protection incendie.',
    url: 'https://www.gmi-tunisie.com',
  },
  alternates: { canonical: 'https://www.gmi-tunisie.com' },
}

export default function HomePage() {
  return <HomeClient />
}
