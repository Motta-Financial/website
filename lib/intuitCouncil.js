// Statement about Dat Le's Intuit advisory council membership, shown as plain text in a
// few places. Its wording, placement and sizing follow his agreement with Intuit, so check
// that agreement before changing any of it. Don't add other references to the membership
// anywhere on the site (page metadata, structured data, news, hero, social cards).
//
// To stop showing it (membership ended, or Intuit asks): set `enabled` to false and
// redeploy. A single placement can be dropped by setting it to false below.

export const INTUIT_COUNCIL = {
  enabled: true,
  program: 'Tax Council',
  startYear: 2026,
  endYear: 2029,
  placements: {
    footer: true,
    founder: true,
    team: true,
  },
};

export const COUNCIL_MEMBER = {
  name: 'Dat Le, CPA',
  role: 'Founder & Managing Partner',
  firm: 'Motta Financial',
};

// "<program> Member for Intuit Inc., <start>-<end>", or null when it must not be shown.
export function getCouncilStatement(placement) {
  const { enabled, program, startYear, endYear, placements } = INTUIT_COUNCIL;
  if (!enabled || placements[placement] === false) return null;
  return `${program} Member for Intuit Inc., ${startYear}-${endYear}`;
}
