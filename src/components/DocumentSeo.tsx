import { useEffect } from 'react';
import { routeFor } from '../lib/router';
import { applyDocumentSeo, metaFromRoute } from '../lib/seo';

export default function DocumentSeo({ pathname, search }: { pathname: string; search: string }) {
  useEffect(() => {
    const route = routeFor(pathname, search);
    applyDocumentSeo(
      metaFromRoute({
        path: route.path,
        title: route.title,
        description: route.description,
        robots: 'robots' in route ? route.robots : undefined,
      }),
    );
  }, [pathname, search]);

  return null;
}
