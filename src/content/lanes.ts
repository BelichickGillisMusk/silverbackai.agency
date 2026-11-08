/**
 * Operating lanes already in the brand.
 * Home cards, the services index, and intake all read this list.
 */

export const laneIds = ['counsel', 'blue-collar', 'compliant'] as const;

export type LaneId = (typeof laneIds)[number];

export type Lane = {
  id: LaneId;
  href: '/counsel' | '/blue-collar' | '/compliant';
  navLabel: string;
  tag: string;
  title: string;
  copy: string;
  /** CSS class on the home department card. */
  cls: 'counsel' | 'blue' | 'compliant';
};

export const lanes: readonly Lane[] = [
  {
    id: 'counsel',
    href: '/counsel',
    navLabel: 'Counsel',
    tag: 'COUNSEL',
    title: 'Good firms. Better visibility. Less administrative drag.',
    copy: 'Practical website, local visibility, inquiry follow-up and workflow support for law firms.',
    cls: 'counsel',
  },
  {
    id: 'blue-collar',
    href: '/blue-collar',
    navLabel: 'Blue Collar',
    tag: 'RED BLOOD · BLUE COLLAR',
    title: 'You do the work. We handle the work around it.',
    copy: 'Calls, leads, scheduling, reviews, paperwork and repetitive office work for the people who still have to show up.',
    cls: 'blue',
  },
  {
    id: 'compliant',
    href: '/compliant',
    navLabel: 'Compliant',
    tag: 'COMPLIANT',
    title: 'Compliance, done.',
    copy: 'Documentation, coordination and follow-through for owners and operators who cannot afford to lose the thread.',
    cls: 'compliant',
  },
];
