import { AgencyShell } from '../components/AgencyShell';
import { lanes } from '../content/lanes';
import { callLabel, site } from '../config/site';

export default function SoftOpenPage() {
  return (
    <AgencyShell>
      <main className="sub">
        <div className="eyebrow">SILVERBACK AI · SOFT OPEN</div>
        <h1>
          Open for a conversation. <em>The full site is already here.</em>
        </h1>
        <p className="sublead">
          Counsel, Blue Collar, and Compliant are the three lanes. Call, or send the intake, and we start with
          what is slowing the work down.
        </p>
        <div className="actions">
          <a className="button primary" href="/?face=live">
            {site.ctas.viewSite}
          </a>
          <a className="button secondary" href={site.ctas.primaryHref}>
            {site.ctas.contact}
          </a>
          <a className="button secondary" href={`tel:${site.nap.phoneTel}`}>
            {callLabel()}
          </a>
        </div>
        <div className="subgrid">
          {lanes.map((lane) => (
            <article key={lane.id}>
              <h2>{lane.navLabel}</h2>
              <p>{lane.copy}</p>
              <a href={lane.href}>Open {lane.navLabel}</a>
            </article>
          ))}
        </div>
        <p className="disclaimer">
          Operator note: this face does not replace SilverbackFront. It shows at /soft-open anytime, and it
          replaces the home page only when VITE_SOFT_OPEN=true, ?ff_enable_soft_open=1, or ?soft=1. ?face=live
          always returns the real home page.
        </p>
      </main>
    </AgencyShell>
  );
}
