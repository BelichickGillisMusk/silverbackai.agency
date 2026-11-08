import { AgencyShell } from '../components/AgencyShell';
import { legalPages, type LegalKind } from '../content/legal';

export default function LegalPage({ kind }: { kind: LegalKind }) {
  const page = legalPages[kind];

  return (
    <AgencyShell>
      <main className="sub">
        <div className="eyebrow">{page.eyebrow}</div>
        <h1>{page.title}</h1>
        <p className="sublead">{page.lede}</p>
        <div className="sf-banner">Draft stub. Not legal notice. Needs counsel review before it is treated as policy.</div>
        {page.paragraphs.map((paragraph) => (
          <p key={paragraph} className="sf-note">
            {paragraph}
          </p>
        ))}
      </main>
    </AgencyShell>
  );
}
