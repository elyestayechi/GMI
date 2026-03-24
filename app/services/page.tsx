import type { Metadata } from 'next'
import ServicesClient from './ServicesClient'

export const metadata: Metadata = {
  title: 'Services – 5 Domaines d\'Expertise Industrielle',
  description:
    'Chaudières industrielles, réseaux de fluides (vapeur, eau glacée, air comprimé, gaz naturel), canalisations industrielles, protection incendie, électricité & chaufferie. GMI couvre l\'intégralité du cycle de vie de vos installations.',
  keywords: [
    'chaudières industrielles installation',
    'réseaux vapeur Tunisie',
    'protection incendie sprinklers',
    'électricité industrielle HTA BT',
    'canalisations acier inox',
  ],
  openGraph: {
    title: 'Services GMI – 5 Domaines d\'Expertise Industrielle | Tunisie',
    description: 'Chaudières, fluides, canalisations, protection incendie, électricité — GMI couvre l\'intégralité du cycle de vie de vos installations industrielles.',
    url: 'https://www.gmi-tunisie.com/services',
  },
  alternates: { canonical: 'https://www.gmi-tunisie.com/services' },
}

export default function ServicesPage() {
  return <ServicesClient />
}
