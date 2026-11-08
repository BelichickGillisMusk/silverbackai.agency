import { AgencyShell } from '../components/AgencyShell';
import { footerNav } from '../config/site';

export default function NotFoundPage() {
  return (
    <AgencyShell>
      <main className="sub">
        <div className="eyebrow">SILVERBACK AI</div>
        <h1>
          That page <em>is not on the map.</em>
        </h1>
        <p className="sublead">The path does not match a public route. The agency front and the three lanes are still here.</p>
        <div className="actions">
          <a className="button primary" href="/">
            Back to the agency
          </a>
          <a className="button secondary" href="/contact">
            Contact
          </a>
        </div>
        <p className="sf-note">
          {footerNav.map((item, index) => (
            <span key={item.href}>
              {index > 0 ? ' · ' : null}
              <a href={item.href}>{item.label}</a>
            </span>
          ))}
        </p>
      </main>
    </AgencyShell>
  );
}
