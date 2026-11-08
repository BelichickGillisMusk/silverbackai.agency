import { absoluteUrl, site, type RouteRecord } from '../config/site';

export type PageMeta = {
  title: string;
  description: string;
  path: string;
  robots?: string;
};

export function organizationJsonLd(): Record<string, unknown> {
  const org: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: site.legalName,
    url: site.canonicalUrl,
    email: site.nap.email,
    telephone: site.nap.phoneTel,
    slogan: site.tagline,
  };

  if (site.nap.streetAddress) {
    org.address = {
      '@type': 'PostalAddress',
      streetAddress: site.nap.streetAddress,
      addressLocality: site.nap.addressLocality,
      addressRegion: site.nap.addressRegion,
      postalCode: site.nap.postalCode,
      addressCountry: site.nap.addressCountry,
    };
  }

  return org;
}

export function websiteJsonLd(): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: site.name,
    url: site.canonicalUrl,
    description: site.description,
    inLanguage: site.locale,
  };
}

export function webPageJsonLd(meta: PageMeta): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: meta.title,
    description: meta.description,
    url: absoluteUrl(meta.path),
    isPartOf: {
      '@type': 'WebSite',
      name: site.name,
      url: site.canonicalUrl,
    },
  };
}

export function homeJsonLd(): Record<string, unknown>[] {
  return [organizationJsonLd(), websiteJsonLd()];
}

export function metaFromRoute(route: Pick<RouteRecord, 'path' | 'title' | 'description' | 'robots'>): PageMeta {
  return {
    title: route.title,
    description: route.description,
    path: route.path,
    robots: route.robots,
  };
}

function upsertMeta(attribute: 'name' | 'property', key: string, content: string) {
  let element = document.head.querySelector(`meta[${attribute}="${key}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
}

function upsertCanonical(href: string) {
  let link = document.head.querySelector('link[rel="canonical"]');
  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    document.head.appendChild(link);
  }
  link.setAttribute('href', href);
}

export function applyDocumentSeo(meta: PageMeta) {
  document.title = meta.title;
  upsertMeta('name', 'description', meta.description);
  upsertMeta('property', 'og:title', meta.title);
  upsertMeta('property', 'og:description', meta.description);
  upsertMeta('property', 'og:url', absoluteUrl(meta.path));
  upsertMeta('property', 'og:type', 'website');
  upsertMeta('name', 'twitter:card', 'summary');
  upsertMeta('name', 'twitter:title', meta.title);
  upsertMeta('name', 'twitter:description', meta.description);
  upsertCanonical(absoluteUrl(meta.path));

  if (meta.robots) upsertMeta('name', 'robots', meta.robots);
  else document.head.querySelector('meta[name="robots"]')?.remove();

  const payload = JSON.stringify([organizationJsonLd(), websiteJsonLd(), webPageJsonLd(meta)]).replace(
    /</g,
    '\\u003c',
  );
  let script = document.getElementById('silverback-jsonld');
  if (!script) {
    script = document.createElement('script');
    script.id = 'silverback-jsonld';
    script.setAttribute('type', 'application/ld+json');
    document.head.appendChild(script);
  }
  script.textContent = payload;
}
