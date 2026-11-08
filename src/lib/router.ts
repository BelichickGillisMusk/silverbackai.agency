import { type PageId, publicRoutes } from '../config/site';
import { isSoftOpenEnabled } from './softOpen';

export function normalizePath(pathname: string): string {
  const trimmed = pathname.replace(/\/+$/, '');
  return trimmed || '/';
}

export function resolvePage(pathname: string, search: string): PageId {
  const params = new URLSearchParams(search);
  if (params.has('appParams') || params.get('app') === '1') return 'legacy';

  const path = normalizePath(pathname);
  // Main keeps the night form at /questionnaire and any /app... path on the legacy app.
  if (path === '/questionnaire' || path.startsWith('/app')) return 'legacy';
  if (path === '/' && isSoftOpenEnabled(search)) return 'soft-open';

  const match = publicRoutes.find((route) => route.path === path);
  if (!match) return 'not-found';
  return match.id;
}

export function routeFor(pathname: string, search: string) {
  const id = resolvePage(pathname, search);
  if (id === 'not-found') {
    return {
      id,
      path: normalizePath(pathname),
      title: 'Page not found | Silverback AI',
      description: 'That path is not on the Silverback AI site map.',
      robots: 'noindex, nofollow',
    } as const;
  }

  if (id === 'soft-open' && normalizePath(pathname) === '/') {
    const face = publicRoutes.find((route) => route.id === 'soft-open');
    if (face) return { ...face, path: '/' };
  }

  const path = normalizePath(pathname);
  const exact = publicRoutes.find((route) => route.path === path && route.id === id);
  if (exact) return exact;

  const byId = publicRoutes.find((route) => route.id === id);
  if (byId) return byId;

  throw new Error(`No route record for page "${id}"`);
}
