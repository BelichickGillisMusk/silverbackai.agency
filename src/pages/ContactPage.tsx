import { useState, type FormEvent } from 'react';
import { AgencyShell } from '../components/AgencyShell';
import { lanes } from '../content/lanes';
import { callLabel, site } from '../config/site';
import { type ContactLane, type ContactResult, type ContactSuccess } from '../server/contactHandler';

type FormState = {
  name: string;
  email: string;
  phone: string;
  company: string;
  lane: '' | ContactLane;
  message: string;
  website: string;
};

const emptyForm: FormState = {
  name: '',
  email: '',
  phone: '',
  company: '',
  lane: '',
  message: '',
  website: '',
};

function endpoint(): string {
  return import.meta.env.VITE_CONTACT_ENDPOINT || '/api/contact';
}

function isSuccess(body: ContactResult['body']): body is ContactSuccess {
  return body.ok === true;
}

export default function ContactPage() {
  const [form, setForm] = useState<FormState>(emptyForm);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState('');
  const [result, setResult] = useState<ContactSuccess | null>(null);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError('');
    setPending(true);

    const payload = {
      name: form.name,
      email: form.email,
      phone: form.phone || undefined,
      company: form.company || undefined,
      lane: form.lane || undefined,
      message: form.message,
      sourcePath: window.location.pathname,
      website: form.website,
    };

    try {
      const response = await fetch(endpoint(), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
      });
      const body = (await response.json()) as ContactResult['body'];
      if (!isSuccess(body) || !response.ok) {
        const fields = !isSuccess(body) && body.fields && body.fields.length > 0 ? ` (${body.fields.join(', ')})` : '';
        setError(`Intake was not accepted${fields}. You can still call or email.`);
        return;
      }
      setResult(body);
    } catch {
      setError('The intake endpoint did not respond. You can still call or email.');
    } finally {
      setPending(false);
    }
  }

  return (
    <AgencyShell>
      <main className="sub">
        <div className="eyebrow">SILVERBACK AI / CONTACT</div>
        <h1>
          Show us <em>what is slowing you down.</em>
        </h1>
        <p className="sublead">
          Name the lane and the friction. This form posts JSON to <code>/api/contact</code>. Until mail keys are
          set, the handler accepts the shape and sends nothing.
        </p>

        {result ? (
          <div className="sf-banner" role="status">
            <strong>Received as a stub.</strong> Nothing was emailed. Reference {result.id}. If you need a person
            now, call {site.nap.phoneDisplay} or email {site.nap.email}.
          </div>
        ) : (
          <form className="sf-form" onSubmit={onSubmit}>
            <label>
              Name
              <input
                name="name"
                autoComplete="name"
                required
                value={form.name}
                onChange={(event) => setForm({ ...form, name: event.target.value })}
              />
            </label>
            <label>
              Email
              <input
                name="email"
                type="email"
                autoComplete="email"
                required
                value={form.email}
                onChange={(event) => setForm({ ...form, email: event.target.value })}
              />
            </label>
            <label>
              Phone <span>(optional)</span>
              <input
                name="phone"
                type="tel"
                autoComplete="tel"
                value={form.phone}
                onChange={(event) => setForm({ ...form, phone: event.target.value })}
              />
            </label>
            <label>
              Company <span>(optional)</span>
              <input
                name="company"
                autoComplete="organization"
                value={form.company}
                onChange={(event) => setForm({ ...form, company: event.target.value })}
              />
            </label>
            <label>
              Lane
              <select
                name="lane"
                value={form.lane}
                onChange={(event) => setForm({ ...form, lane: event.target.value as FormState['lane'] })}
              >
                <option value="">Select a lane</option>
                {lanes.map((lane) => (
                  <option key={lane.id} value={lane.id}>
                    {lane.navLabel}
                  </option>
                ))}
                <option value="agency">Agency / not sure yet</option>
                <option value="other">Other</option>
              </select>
            </label>
            <label>
              What is slowing the work down?
              <textarea
                name="message"
                required
                value={form.message}
                onChange={(event) => setForm({ ...form, message: event.target.value })}
              />
            </label>
            <label className="sf-hp" aria-hidden="true">
              Website
              <input
                name="website"
                tabIndex={-1}
                autoComplete="off"
                value={form.website}
                onChange={(event) => setForm({ ...form, website: event.target.value })}
              />
            </label>
            {error ? <p className="sf-error">{error}</p> : null}
            <button className="button primary" type="submit" disabled={pending}>
              {pending ? 'Sending…' : site.ctas.contact}
            </button>
            <p className="sf-note">
              Or {callLabel().toLowerCase()} · <a href={`mailto:${site.nap.email}`}>{site.nap.email}</a>. The
              legacy diagnostic is still at <a href="/resources">/resources</a>.
            </p>
          </form>
        )}
      </main>
    </AgencyShell>
  );
}
