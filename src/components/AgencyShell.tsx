import type { ReactNode } from 'react';
import { footerNav, primaryNav, site } from '../config/site';
import { agencyCss } from '../styles/agencyCss';

function Mark() {
  return <img className="sf-mark" src="/silverback-logo.svg" alt="" aria-hidden="true" />;
}

function currentPath(): string {
  if (typeof window === 'undefined') return '/';
  return window.location.pathname.replace(/\/+$/, '') || '/';
}

export function AgencyShell({ children }: { children: ReactNode }) {
  const path = currentPath();

  return (
    <div className="sf-page">
      <style>{agencyCss}</style>
      <header className="sf-header">
        <a className="sf-brand" href="/">
          <Mark />
          <div>
            <b>{site.name.toUpperCase()}</b>
            <small>{site.tagline.toUpperCase()}</small>
          </div>
        </a>
        <nav aria-label="Primary">
          {primaryNav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={item.hideOnSmall ? 'sf-hide-sm' : undefined}
              aria-current={path === item.href ? 'page' : undefined}
            >
              {item.label}
            </a>
          ))}
          <a className="sf-call" href={`tel:${site.nap.phoneTel}`}>
            {site.nap.phoneDisplay}
          </a>
        </nav>
      </header>
      {children}
      <footer>
        <div className="sf-footbrand">
          <Mark />
          <b>{site.name.toUpperCase()}</b>
        </div>
        <nav className="sf-footnav" aria-label="Site">
          {footerNav.map((item) => (
            <a key={item.href} href={item.href} aria-current={path === item.href ? 'page' : undefined}>
              {item.label}
            </a>
          ))}
        </nav>
        <div>
          <a href={`mailto:${site.nap.email}`}>{site.nap.email}</a>
          {' · '}
          <a href={`tel:${site.nap.phoneTel}`}>{site.nap.phoneDisplay}</a>
        </div>
        <span>{site.footerLine}</span>
      </footer>
    </div>
  );
}
