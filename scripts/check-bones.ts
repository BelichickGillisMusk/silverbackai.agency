/**
 * Structural checks for the agency bones.
 * Run with: npm run check
 */

import { readFileSync } from 'node:fs';
import { absoluteUrl, publicRoutes } from '../src/config/site';
import { handleContact } from '../src/server/contactHandler';
import { normalizePath, resolvePage } from '../src/lib/router';

function assert(condition: unknown, message: string) {
  if (!condition) throw new Error(message);
}

const sitemap = readFileSync(new URL('../public/sitemap.xml', import.meta.url), 'utf8');
const robots = readFileSync(new URL('../public/robots.txt', import.meta.url), 'utf8');
const locs = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
const expected = publicRoutes.filter((route) => route.sitemap).map((route) => absoluteUrl(route.path));

assert(locs.length === expected.length, `sitemap count ${locs.length} != routes ${expected.length}`);
for (const url of expected) {
  assert(locs.includes(url), `sitemap missing ${url}`);
}
assert(robots.includes('Sitemap: https://silverbackai.agency/sitemap.xml'), 'robots.txt sitemap pointer');
assert(robots.includes('Disallow: /api/'), 'robots.txt should hide the intake stub');

assert(resolvePage('/', '') === 'home', 'default path is the home route');
assert(resolvePage('/', '?face=live') === 'home', 'face=live stays on the home route');
assert(resolvePage('/questionnaire', '') === 'legacy', 'questionnaire stays the legacy form');
assert(resolvePage('/app/extra', '') === 'legacy', 'app subpaths stay legacy');
assert(resolvePage('/', '?ff_enable_soft_open=1') === 'soft-open', 'flag swaps the home face');
assert(resolvePage('/', '?ff_enable_soft_open=1&face=live') === 'home', 'face=live wins over the flag');
assert(resolvePage('/soft-open', '') === 'soft-open', 'soft-open route exists while the flag is off');
assert(resolvePage('/services', '') === 'services', 'services');
assert(resolvePage('/proof/', '') === 'proof', 'trailing slash');
assert(resolvePage('/contact', '') === 'contact', 'contact');
assert(resolvePage('/privacy', '') === 'privacy', 'privacy');
assert(resolvePage('/terms', '') === 'terms', 'terms');
assert(resolvePage('/counsel', '') === 'counsel', 'counsel');
assert(resolvePage('/blue-collar', '') === 'blue-collar', 'blue collar');
assert(resolvePage('/compliant', '') === 'compliant', 'compliant');
assert(resolvePage('/resources', '') === 'legacy', 'resources stays the legacy workshop');
assert(resolvePage('/app', '') === 'legacy', 'app');
assert(resolvePage('/nope', '') === 'not-found', 'unknown path');
assert(resolvePage('/contact', '?appParams=intake') === 'legacy', 'legacy deep link still wins');
assert(normalizePath('/contact/') === '/contact', 'normalize');

const ok = handleContact({
  method: 'POST',
  contentType: 'application/json',
  rawBody: JSON.stringify({
    name: 'Ada',
    email: 'ada@example.com',
    lane: 'counsel',
    message: 'Missed callbacks.',
    sourcePath: '/contact',
  }),
});
assert(ok.status === 202, 'valid intake returns 202');
assert(ok.body.ok === true && ok.body.delivery === 'noop', 'delivery stays noop');
assert(ok.body.ok === true && !('message' in ok.body), 'response does not echo the message');

const bad = handleContact({
  method: 'POST',
  contentType: 'application/json',
  rawBody: JSON.stringify({ name: '', email: 'nope', message: '' }),
});
assert(bad.status === 400 && bad.body.ok === false && bad.body.error === 'invalid_fields', 'rejects bad fields');

const honeypot = handleContact({
  method: 'POST',
  contentType: 'application/json',
  rawBody: JSON.stringify({ website: 'https://spam.example', name: '', email: '', message: '' }),
});
assert(honeypot.status === 202 && honeypot.body.ok === true, 'honeypot is swallowed');

const get = handleContact({ method: 'GET', contentType: null, rawBody: null });
assert(get.status === 405, 'GET is not allowed');

const form = handleContact({
  method: 'POST',
  contentType: 'text/plain',
  rawBody: '{}',
});
assert(form.status === 415, 'non-JSON is rejected');

console.log('silverback bones ok');
