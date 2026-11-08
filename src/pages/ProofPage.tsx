import { AgencyShell } from '../components/AgencyShell';
import { proofSlots } from '../content/proof';

export default function ProofPage() {
  return (
    <AgencyShell>
      <main className="sub">
        <div className="eyebrow">SILVERBACK AI / PROOF</div>
        <h1>
          Proof, <em>when there is a real story.</em>
        </h1>
        <p className="sublead">
          These slots are empty on purpose. No client names, quotes, or results are published until Bryan clears
          a real engagement.
        </p>
        <div className="subgrid">
          {proofSlots.map((slot) => (
            <article key={slot.id} id={slot.id}>
              <span className="sf-stub">STUB</span>
              <h2>{slot.title}</h2>
              <p>{slot.summary}</p>
              <a href={slot.laneHref}>Open {slot.laneLabel}</a>
            </article>
          ))}
        </div>
      </main>
    </AgencyShell>
  );
}
