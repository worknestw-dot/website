import type { Metadata } from 'next';
import { Sora, Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { SiteProvider } from '@/components/site-provider';
import Script from 'next/script';
import { jsonLdBase } from '@/lib/seo';

const sora = Sora({ subsets: ['latin'], variable: '--font-sora', display: 'swap' });
const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const jetBrains = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jetbrains', display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL('https://alexrivera.dev'),
  title: 'Alex Rivera · Student & Junior Full-Stack Developer',
  description: 'Alex Rivera is a student technologist crafting joyful, performant digital experiences across design and engineering.',
  openGraph: {
    title: 'Alex Rivera · Student & Junior Full-Stack Developer',
    description: 'Alex Rivera is a student technologist crafting joyful, performant digital experiences across design and engineering.',
    url: 'https://alexrivera.dev',
    siteName: 'Alex Rivera Portfolio',
    images: ['/images/og-default.png']
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@alexrivera',
    title: 'Alex Rivera · Student & Junior Full-Stack Developer',
    description: 'Alex Rivera is a student technologist crafting joyful, performant digital experiences across design and engineering.'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${sora.variable} ${inter.variable} ${jetBrains.variable} font-body`}>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <SiteProvider>
          <Header />
          <main id="main" className="relative">
            {children}
          </main>
          <Footer />
        </SiteProvider>
        <Script
          id="jsonld-person"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBase) }}
        />
      </body>
    </html>
  );
}
