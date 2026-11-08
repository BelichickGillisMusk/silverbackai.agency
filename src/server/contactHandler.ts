/**
 * Shared /api/contact contract.
 * This handler is a no-op: it validates the body and returns 202.
 * It does not read RESEND_API_KEY and it does not send mail.
 *
 * Request JSON:
 *   name        string  required  1–120
 *   email       string  required  simple email, max 200
 *   phone       string  optional  max 40
 *   company     string  optional  max 160
 *   lane        string  optional  counsel | blue-collar | compliant | agency | other
 *   message     string  required  1–4000
 *   sourcePath  string  optional  max 200
 *   website     string  honeypot  must be empty; filled requests are accepted and dropped
 *
 * Success (202):
 *   { ok, status: "accepted_stub", id, receivedAt, delivery: "noop", detail }
 *
 * Errors:
 *   400 invalid_json | invalid_fields
 *   405 method_not_allowed
 *   415 unsupported_media_type
 */

import { laneIds } from '../content/lanes';

export const contactLanes = [...laneIds, 'agency', 'other'] as const;

export type ContactLane = (typeof contactLanes)[number];

export type ContactRequest = {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  lane?: ContactLane;
  message: string;
  sourcePath?: string;
  website?: string;
};

export type ContactSuccess = {
  ok: true;
  status: 'accepted_stub';
  id: string;
  receivedAt: string;
  delivery: 'noop';
  detail: string;
};

export type ContactFailure = {
  ok: false;
  error: 'invalid_json' | 'invalid_fields' | 'method_not_allowed' | 'unsupported_media_type';
  fields?: string[];
  allow?: readonly ['POST'];
};

export type ContactResult = {
  status: number;
  body: ContactSuccess | ContactFailure;
};

export const CONTACT_STUB_DETAIL =
  'Accepted as a stub. No email was sent. Live delivery waits on CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL, and RESEND_API_KEY. This handler does not read those variables.';

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const LIMITS = {
  name: 120,
  email: 200,
  phone: 40,
  company: 160,
  message: 4000,
  sourcePath: 200,
  website: 200,
  lane: 40,
} as const;

function clean(value: unknown, max: number): string {
  if (typeof value !== 'string') return '';
  return value.trim().slice(0, max);
}

function makeId(): string {
  const rand = globalThis.crypto?.randomUUID?.() ?? Math.random().toString(36).slice(2);
  return `sb_${rand}`;
}

function accepted(): ContactResult {
  return {
    status: 202,
    body: {
      ok: true,
      status: 'accepted_stub',
      id: makeId(),
      receivedAt: new Date().toISOString(),
      delivery: 'noop',
      detail: CONTACT_STUB_DETAIL,
    },
  };
}

export function handleContact(input: {
  method: string;
  contentType: string | null;
  rawBody: string | null;
}): ContactResult {
  const method = input.method.toUpperCase();

  if (method !== 'POST') {
    return {
      status: 405,
      body: { ok: false, error: 'method_not_allowed', allow: ['POST'] },
    };
  }

  if (!input.contentType || !input.contentType.toLowerCase().includes('application/json')) {
    return { status: 415, body: { ok: false, error: 'unsupported_media_type' } };
  }

  if (!input.rawBody) {
    return { status: 400, body: { ok: false, error: 'invalid_json' } };
  }

  let parsed: unknown;
  try {
    parsed = JSON.parse(input.rawBody);
  } catch {
    return { status: 400, body: { ok: false, error: 'invalid_json' } };
  }

  if (!parsed || typeof parsed !== 'object') {
    return { status: 400, body: { ok: false, error: 'invalid_json' } };
  }

  const record = parsed as Record<string, unknown>;

  if (clean(record.website, LIMITS.website)) {
    return accepted();
  }

  const name = clean(record.name, LIMITS.name);
  const email = clean(record.email, LIMITS.email);
  const message = clean(record.message, LIMITS.message);
  const laneRaw = clean(record.lane, LIMITS.lane);
  const errors: string[] = [];

  if (!name) errors.push('name');
  if (!email || !EMAIL.test(email)) errors.push('email');
  if (!message) errors.push('message');
  if (laneRaw && !(contactLanes as readonly string[]).includes(laneRaw)) errors.push('lane');

  if (errors.length > 0) {
    return { status: 400, body: { ok: false, error: 'invalid_fields', fields: errors } };
  }

  return accepted();
}
