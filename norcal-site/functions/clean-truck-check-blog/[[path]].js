// Reverse-proxy /clean-truck-check-blog/* to the WordPress origin.
// The blog was exported to WordPress; its public URLs are LIVE and must stay
// unchanged. This keeps norcalcarbmobile.com/clean-truck-check-blog/... resolving
// from WordPress while the rest of the site is served statically by Pages.
//
// TODO: set WP_ORIGIN to the real WordPress hostname (e.g. the WP Engine /
// hosted-WP origin, or blog.norcalcarbmobile.com). Until then this is a stub.
const WP_ORIGIN = "https://REPLACE-WITH-WORDPRESS-ORIGIN.example.com";

export async function onRequest(context) {
  const { request } = context;
  const incoming = new URL(request.url);

  // Preserve the full path (/clean-truck-check-blog/...) and query string.
  const target = new URL(incoming.pathname + incoming.search, WP_ORIGIN);

  const proxied = new Request(target.toString(), request);
  // Host header should match the WP origin; let fetch set it from the URL.
  proxied.headers.set("X-Forwarded-Host", incoming.host);
  proxied.headers.set("X-Forwarded-Proto", "https");

  return fetch(proxied);
}
