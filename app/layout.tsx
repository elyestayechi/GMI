import type { Metadata } from 'next'
import './globals.css'
import ClientWrapper from '@/components/ClientWrapper'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.gmi-tunisie.com'),
  title: {
    default: 'GMI – Ingénierie Industrielle de Précision | Ariana, Tunisie',
    template: '%s | GMI – Ingénierie Industrielle',
  },
  description:
    'GMI (Générale Maintenance Industrielle & Générale Électrique et Chaufferie) — Expert en installation et maintenance de chaudières, réseaux de fluides, canalisations industrielles et protection incendie en Tunisie.',
  keywords: [
    'maintenance industrielle Tunisie',
    'chaudières industrielles Ariana',
    'réseaux fluides Tunisie',
    'canalisations industrielles',
    'protection incendie Tunisie',
    'électricité industrielle',
    'GMI Tunisie',
    'Jalel Tayechi',
    'Générale Maintenance Industrielle',
    'ingénierie industrielle Tunisie',
    'installation chaudière Tunisie',
    'vapeur air comprimé gaz naturel',
  ],
  authors: [{ name: 'GMI – Générale Maintenance Industrielle SARL' }],
  creator: 'GMI Tunisie',
  publisher: 'GMI Tunisie',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'fr_TN',
    url: 'https://www.gmi-tunisie.com',
    siteName: 'GMI – Ingénierie Industrielle',
    title: 'GMI – Ingénierie Industrielle de Précision | Tunisie',
    description:
      'Deux entités, une expertise unique. Installation et maintenance de réseaux industriels en Tunisie.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'GMI – Ingénierie Industrielle de Précision, Ariana Tunisie',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GMI – Ingénierie Industrielle de Précision | Tunisie',
    description:
      'Expert en maintenance industrielle en Tunisie. Chaudières, réseaux de fluides, canalisations et protection incendie.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://www.gmi-tunisie.com',
  },
  category: 'industrial engineering',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const orgSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'GMI – Générale Maintenance Industrielle',
    alternateName: [
      'Générale Maintenance Industrielle SARL',
      'Générale Électrique et Chaufferie SARL',
    ],
    url: 'https://www.gmi-tunisie.com',
    description:
      'Expert en ingénierie industrielle en Tunisie. Installation et maintenance de chaudières, réseaux de fluides, canalisations industrielles et protection incendie.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '47, Résidence Najla 1, Route Raoued Jaafar',
      addressLocality: 'Ariana',
      postalCode: '2080',
      addressCountry: 'TN',
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+216-50-263-806',
        contactType: 'customer service',
        availableLanguage: ['French', 'Arabic'],
      },
    ],
    email: 'societegmi@gmail.com',
    founder: {
      '@type': 'Person',
      name: 'Jalel Tayechi',
      jobTitle: 'Directeur Technique',
    },
    areaServed: { '@type': 'Country', name: 'Tunisia' },
  }

  return (
    <html lang="fr" dir="ltr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@700;900&family=DM+Sans:wght@300;400;500&family=DM+Serif+Display:ital@0;1&family=Syne+Mono&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        {/* GEO meta tags for local SEO */}
        <meta name="geo.region" content="TN-12" />
        <meta name="geo.placename" content="Ariana, Tunisie" />
        <meta name="geo.position" content="36.8665;10.1647" />
        <meta name="ICBM" content="36.8665, 10.1647" />
      </head>
      <body>
        <ClientWrapper>{children}</ClientWrapper>
      </body>
    </html>
  )
}
