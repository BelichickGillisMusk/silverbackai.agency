/**
 * Case-study slots. These are empty on purpose.
 * Do not fill them with invented clients, quotes, or dollar amounts.
 */

export type ProofSlot = {
  id: string;
  laneHref: string;
  laneLabel: string;
  title: string;
  summary: string;
};

export const proofSlots: readonly ProofSlot[] = [
  {
    id: 'counsel-proof',
    laneHref: '/counsel',
    laneLabel: 'Counsel',
    title: 'Counsel case study',
    summary:
      'Reserved for a law-firm visibility and intake story. No client name, metric, or quote belongs here until Bryan signs off on a real engagement.',
  },
  {
    id: 'blue-collar-proof',
    laneHref: '/blue-collar',
    laneLabel: 'Blue Collar',
    title: 'Blue Collar case study',
    summary:
      'Reserved for a trades or field-business story: calls, follow-up, reviews, or paperwork. Publish the work only after the operator says it can be told.',
  },
  {
    id: 'compliant-proof',
    laneHref: '/compliant',
    laneLabel: 'Compliant',
    title: 'Compliant case study',
    summary:
      'Reserved for a documentation and follow-through story. Coordination support only — not a claim that Silverback replaced a licensed professional.',
  },
];
