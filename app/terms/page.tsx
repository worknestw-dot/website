import { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { Breadcrumbs } from '@/components/breadcrumbs';

export const metadata: Metadata = buildMetadata({
  title: 'Terms of Use · Alex Rivera',
  description: 'Understand the usage terms for Alex Rivera’s portfolio, assets, and downloadable resources.',
  pathname: '/terms'
});

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16">
      <Breadcrumbs
        items={[
          { href: '/', label: 'Home' },
          { href: '/terms', label: 'Terms of Use', isCurrent: true }
        ]}
      />
      <article className="prose dark:prose-invert">
        <h1>Terms of Use</h1>
        <p>Last updated: January 1, 2025</p>
        <h2>Portfolio content</h2>
        <p>
          You’re welcome to reference public case studies, but please request permission before reusing images or text.
        </p>
        <h2>Attribution</h2>
        <p>
          Give proper attribution when sharing or citing this work. Please link back to <a href="https://alexrivera.dev">alexrivera.dev</a>.
        </p>
        <h2>Updates</h2>
        <p>
          These terms may be updated periodically. Continued use of the site indicates acceptance of any changes.
        </p>
      </article>
    </div>
  );
}
