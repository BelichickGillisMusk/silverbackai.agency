/**
 * Cloudflare Pages Function: POST /api/contact
 * No-op stub. Does not send mail and does not read provider secrets.
 * Contract: src/server/contactHandler.ts
 */

import { handleContact } from '../../src/server/contactHandler';

export async function onRequest(context: { request: Request }): Promise<Response> {
  const { request } = context;
  const rawBody = request.method.toUpperCase() === 'POST' ? await request.text() : null;
  const result = handleContact({
    method: request.method,
    contentType: request.headers.get('content-type'),
    rawBody,
  });

  const headers = new Headers({
    'content-type': 'application/json; charset=utf-8',
    'cache-control': 'no-store',
  });
  if (result.status === 405) headers.set('Allow', 'POST');

  return new Response(JSON.stringify(result.body), { status: result.status, headers });
}
