import type { Metadata } from 'next'
import FluidsClient from './FluidsClient'

export const metadata: Metadata = {
  title: 'Réseaux de Fluides Industriels – Vapeur, Eau Glacée, Air, Gaz',
  description:
    'GMI conçoit et installe vos réseaux de fluides industriels : vapeur (1–40 bar), eau glacée, air comprimé (6–16 bar), gaz naturel certifié STEG. Canalisations acier carbone, inoxydable et galvanisé. Tunisie.',
  keywords: [
    'réseaux vapeur industrielle Tunisie',
    'eau glacée process industriel',
    'air comprimé distribution',
    'gaz naturel canalisation STEG',
    'canalisations acier inox galvanisé',
  ],
  openGraph: {
    title: 'Réseaux de Fluides Industriels GMI | Vapeur, Eau Glacée, Air, Gaz',
    description: 'Vapeur, eau glacée, air comprimé, gaz naturel — GMI conçoit et installe vos réseaux industriels de A à Z en Tunisie.',
    url: 'https://www.gmi-tunisie.com/fluids',
  },
  alternates: { canonical: 'https://www.gmi-tunisie.com/fluids' },
}

export default function FluidsPage() {
  return <FluidsClient />
}