/**
 * Draft legal stubs. They are not a privacy policy or a contract.
 * Counsel review is a Bryan GO item before these are treated as notice.
 */

export type LegalKind = 'privacy' | 'terms';

export type LegalStub = {
  kind: LegalKind;
  eyebrow: string;
  title: string;
  lede: string;
  paragraphs: readonly string[];
};

export const legalPages: Record<LegalKind, LegalStub> = {
  privacy: {
    kind: 'privacy',
    eyebrow: 'DRAFT · NOT IN FORCE',
    title: 'Privacy',
    lede: 'This is a placeholder so the route exists. It is not a published privacy policy.',
    paragraphs: [
      'Silverback AI has not turned on advertising pixels or a live mail provider in this repository. The contact form posts to a stub at /api/contact that accepts the payload and sends nothing.',
      'When delivery is switched on later, intake fields (name, email, phone, company, lane, and message) will be used to answer that request. Bryan still has to name the inbox, the provider, and the retention rule.',
      'The public phone and email on this site are the ones already printed on the agency pages. The street address is blank in site config until Bryan fills it. Do not treat a blank address as a published location.',
      'Replace this page after counsel review, before apex traffic is pointed at this build.',
    ],
  },
  terms: {
    kind: 'terms',
    eyebrow: 'DRAFT · NOT A CONTRACT',
    title: 'Terms',
    lede: 'This is a placeholder so the route exists. It does not create terms of service.',
    paragraphs: [
      'Nothing on this site is an offer to practice law, perform a licensed inspection, or guarantee a compliance outcome. Compliant is coordination and documentation support. Licensed decisions stay with the appropriate professionals and authorities.',
      'Case-study slots under /proof are empty stubs. They are not testimonials.',
      'The legacy workshop at /resources and /app is an internal tools surface, not a customer agreement.',
      'Replace this page after counsel review, before it is linked as binding notice.',
    ],
  },
};
