import { AgencyShell } from '../components/AgencyShell';
import { lanes } from '../content/lanes';
import { homeAnchors, site } from '../config/site';

export default function ServicesPage() {
  return (
    <AgencyShell>
      <main className="sub">
        <div className="eyebrow">SILVERBACK AI / SERVICES</div>
        <h1>
          Three lanes. <em>One operating idea.</em>
        </h1>
        <p className="sublead">
          Find the friction, fix the handoff, keep the owner in control. The pages below are the live lane
          fronts. Deeper offers get added here without inventing a second brand.
        </p>
        <div className="subgrid">
          {lanes.map((lane) => (
            <article key={lane.id} id={lane.id}>
              <h2>{lane.navLabel}</h2>
              <p>{lane.copy}</p>
              <a className="button primary" href={lane.href}>
                Open {lane.navLabel}
              </a>
            </article>
          ))}
        </div>
        <p className="sf-note">
          Home anchors:{' '}
          {homeAnchors.map((anchor, index) => (
            <span key={anchor.href}>
              {index > 0 ? ' · ' : null}
              <a href={anchor.href}>{anchor.label}</a>
            </span>
          ))}
        </p>
        <div className="actions">
          <a className="button primary" href={site.ctas.primaryHref}>
            {site.ctas.primary}
          </a>
        </div>
      </main>
    </AgencyShell>
  );
}
