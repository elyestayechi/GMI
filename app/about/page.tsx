import type { Metadata } from 'next'
import AboutClient from './AboutClient'

export const metadata: Metadata = {
  title: 'À Propos – Histoire & Valeurs de GMI',
  description:
    'Découvrez GMI : deux entités (Générale Maintenance Industrielle SARL et Générale Électrique et Chaufferie SARL) fondées par Jalel Tayechi, Directeur Technique. Excellence, réactivité et expertise au service de l\'industrie tunisienne.',
  keywords: [
    'GMI à propos',
    'Jalel Tayechi directeur technique',
    'Générale Maintenance Industrielle SARL',
    'Générale Électrique Chaufferie Tunisie',
    'ingénierie industrielle Ariana',
  ],
  openGraph: {
    title: 'À Propos de GMI – Histoire & Valeurs | Tunisie',
    description: 'Deux entités, une expertise unique. GMI sous la direction de Jalel Tayechi, expert en ingénierie industrielle en Tunisie.',
    url: 'https://www.gmi-tunisie.com/about',
  },
  alternates: { canonical: 'https://www.gmi-tunisie.com/about' },
}

export default function AboutPage() {
  return <AboutClient />
}
