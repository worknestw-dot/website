import { Metadata } from 'next';

const baseUrl = 'https://alexrivera.dev';

export function buildMetadata({
  title,
  description,
  pathname,
  image = '/images/og-default.png'
}: {
  title: string;
  description: string;
  pathname: string;
  image?: string;
}): Metadata {
  const fullUrl = `${baseUrl}${pathname}`;
  return {
    title,
    description,
    alternates: {
      canonical: fullUrl
    },
    openGraph: {
      title,
      description,
      url: fullUrl,
      type: 'website',
      siteName: 'Alex Rivera Portfolio',
      images: [{ url: image }]
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      creator: '@alexrivera',
      images: [image]
    }
  };
}

export const jsonLdBase = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Alex Rivera',
  url: baseUrl,
  email: 'mailto:hello@alexrivera.dev',
  jobTitle: 'Student & Junior Full-Stack Developer',
  sameAs: [
    'https://github.com/alexrivera',
    'https://www.linkedin.com/in/alexrivera',
    'https://dribbble.com/alexrivera',
    'https://twitter.com/alexrivera'
  ]
};
