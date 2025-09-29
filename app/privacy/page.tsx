import { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { Breadcrumbs } from '@/components/breadcrumbs';

export const metadata: Metadata = buildMetadata({
  title: 'Privacy Policy · Alex Rivera',
  description: 'Learn how Alex Rivera handles analytics, contact submissions, and data privacy.',
  pathname: '/privacy'
});

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16">
      <Breadcrumbs
        items={[
          { href: '/', label: 'Home' },
          { href: '/privacy', label: 'Privacy Policy', isCurrent: true }
        ]}
      />
      <article className="prose dark:prose-invert">
        <h1>Privacy Policy</h1>
        <p>Last updated: January 1, 2025</p>
        <h2>Overview</h2>
        <p>
          This site uses lightweight, privacy-friendly analytics (Plausible) to understand aggregate usage. No cookies or personal identifiers are stored without consent.
        </p>
        <h2>Contact form</h2>
        <p>
          Messages sent via the contact form are delivered directly to my inbox. They are kept for up to 12 months to track follow-ups and collaborations.
        </p>
        <h2>Data requests</h2>
        <p>
          You can request deletion of your contact details at any time by emailing <a href="mailto:hello@alexrivera.dev">hello@alexrivera.dev</a>.
        </p>
      </article>
    </div>
  );
}
