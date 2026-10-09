/**
 * Central site config: NAP, canonical URL, navigation, CTAs, and the public route table.
 * Phone and email match the values already printed on the agency pages.
 * Street address stays blank until Bryan fills it — do not invent one.
 */

import { lanes } from '../content/lanes';
import { legalPages } from '../content/legal';
import { proofSlots } from '../content/proof';

export { lanes, legalPages, proofSlots };

export const site = {
  name: 'Silverback AI',
  legalName: 'Silverback AI',
  tagline: 'Real Solutions. Stronger Tomorrows.',
  description:
    'Silverback AI connects the calls, follow-up, scheduling, paperwork, visibility and repetitive work around established businesses. Counsel, Blue Collar and Compliant.',
  canonicalOrigin: 'https://silverbackai.agency',
  canonicalUrl: 'https://silverbackai.agency/',
  locale: 'en-US',
  themeColor: '#10181d',
  footerLine: 'Technology should make capable people stronger.',
  nap: {
    phoneDisplay: '415-900-8563',
    phoneTel: '+14159008563',
    email: 'hello@silverbackai.agency',
    founderEmail: 'bryan@silverbackai.agency',
    streetAddress: '' as string,
    addressLocality: '' as string,
    addressRegion: '' as string,
    postalCode: '' as string,
    addressCountry: 'US',
  },
  ctas: {
    primary: "Show us what's slowing you down",
    primaryHref: '/contact',
    friction: 'Show us the friction first',
    conversation: 'Request a conversation',
    contact: 'Start a conversation',
    viewSite: 'View the full site',
  },
} as const;

export type NavItem = {
  href: string;
  label: string;
  hideOnSmall?: boolean;
};

export const primaryNav: readonly NavItem[] = [
  { href: '/counsel', label: 'Counsel' },
  { href: '/blue-collar', label: 'Blue Collar' },
  { href: '/compliant', label: 'Compliant' },
  { href: '/resources', label: 'Resources', hideOnSmall: true },
  { href: '/contact', label: 'Contact' },
];

export const footerNav: readonly NavItem[] = [
  { href: '/services', label: 'Services' },
  { href: '/proof', label: 'Proof' },
  { href: '/contact', label: 'Contact' },
  { href: '/privacy', label: 'Privacy' },
  { href: '/terms', label: 'Terms' },
];

/** In-page anchors on the agency home (SilverbackFront). */
export const homeAnchors = [
  { href: '/#lanes', label: 'Lanes' },
  { href: '/#operating-layer', label: 'Operating layer' },
  { href: '/#behind-the-scenes', label: 'Behind the scenes' },
  { href: '/#workshop', label: 'Workshop' },
] as const;

export type PageId =
  | 'home'
  | 'services'
  | 'counsel'
  | 'blue-collar'
  | 'compliant'
  | 'proof'
  | 'contact'
  | 'privacy'
  | 'terms'
  | 'soft-open'
  | 'legacy'
  | 'not-found';

export type RouteRecord = {
  path: string;
  id: Exclude<PageId, 'not-found'>;
  title: string;
  description: string;
  /** When true, the URL belongs in public/sitemap.xml. */
  sitemap: boolean;
  robots?: string;
};

const brand = 'Silverback AI';

export const publicRoutes: readonly RouteRecord[] = [
  {
    path: '/',
    id: 'home',
    title: `${brand} — Stronger businesses. Safer communities.`,
    description: site.description,
    sitemap: true,
  },
  {
    path: '/services',
    id: 'services',
    title: `Services | ${brand}`,
    description:
      'Three operating lanes — Counsel, Blue Collar, and Compliant — for businesses that already do the work.',
    sitemap: true,
  },
  {
    path: '/counsel',
    id: 'counsel',
    title: `Counsel | ${brand}`,
    description:
      'Practical website, local visibility, inquiry follow-up, and workflow support for law firms.',
    sitemap: true,
  },
  {
    path: '/blue-collar',
    id: 'blue-collar',
    title: `Blue Collar | ${brand}`,
    description:
      'Websites, Google Business Profile, reviews, lead follow-up, and practical systems for the trades and the physical economy.',
    sitemap: true,
  },
  {
    path: '/compliant',
    id: 'compliant',
    title: `Compliant | ${brand}`,
    description:
      'Documentation, coordination, and follow-through for owners and operators who cannot afford to lose the thread.',
    sitemap: true,
  },
  {
    path: '/proof',
    id: 'proof',
    title: `Proof | ${brand}`,
    description:
      'Case-study slots for Counsel, Blue Collar, and Compliant. Empty until a real engagement is cleared to publish.',
    sitemap: true,
  },
  {
    path: '/contact',
    id: 'contact',
    title: `Contact | ${brand}`,
    description:
      'Tell Silverback AI which lane you are in and what is slowing the work down. Intake posts to /api/contact.',
    sitemap: true,
  },
  {
    path: '/privacy',
    id: 'privacy',
    title: `Privacy | ${brand}`,
    description: 'Draft privacy stub. Not a published policy.',
    sitemap: true,
    robots: 'noindex, follow',
  },
  {
    path: '/terms',
    id: 'terms',
    title: `Terms | ${brand}`,
    description: 'Draft terms stub. Not a contract.',
    sitemap: true,
    robots: 'noindex, follow',
  },
  {
    path: '/soft-open',
    id: 'soft-open',
    title: `Soft open | ${brand}`,
    description:
      'Optional holding face for Silverback AI. The full site stays one click away. Off unless the soft-open flag is on.',
    sitemap: false,
    robots: 'noindex, nofollow',
  },
  {
    path: '/questionnaire',
    id: 'legacy',
    title: `Free questionnaire | ${brand}`,
    description: 'The Silverback questionnaire. No obligation.',
    sitemap: false,
    robots: 'noindex, nofollow',
  },
  {
    path: '/resources',
    id: 'legacy',
    title: `Resources | ${brand}`,
    description: 'Legacy Silverback diagnostic and workshop. The public brand lives on the agency pages.',
    sitemap: false,
    robots: 'noindex, nofollow',
  },
  {
    path: '/app',
    id: 'legacy',
    title: `Workshop | ${brand}`,
    description: 'Legacy Silverback workspace.',
    sitemap: false,
    robots: 'noindex, nofollow',
  },
  {
    path: '/legacy',
    id: 'legacy',
    title: `Workshop | ${brand}`,
    description: 'Legacy Silverback workspace.',
    sitemap: false,
    robots: 'noindex, nofollow',
  },
];

export function absoluteUrl(path: string): string {
  if (path === '/') return site.canonicalUrl;
  return `${site.canonicalOrigin}${path}`;
}

export function callLabel(): string {
  return `Call ${site.nap.phoneDisplay}`;
}
