import { COUNCIL_MEMBER, getCouncilStatement } from '@/lib/intuitCouncil';

/**
 * Dat Le's Intuit advisory council statement, as plain text. See lib/intuitCouncil.js.
 *
 * variant="block" — a line naming Dat Le and Motta Financial (or `who`, when the name is
 *   already shown right above), then the statement set smaller (see motta.css).
 * variant="line" — the statement alone, for placing directly under Dat Le's name where
 *   his name is already set larger (team cards).
 *
 * `placement` ('footer' | 'founder' | 'team') picks the switch in INTUIT_COUNCIL.placements.
 * Renders nothing while the statement is switched off.
 */
export default function IntuitCouncilCredit({
  placement,
  variant = 'block',
  who,
  className = '',
}) {
  const statement = getCouncilStatement(placement);
  if (!statement) return null;

  if (variant === 'line') {
    return (
      <p className={['motta-council-line', className].filter(Boolean).join(' ')}>
        {statement}
      </p>
    );
  }

  const { name, role, firm } = COUNCIL_MEMBER;
  return (
    <div className={['motta-council', className].filter(Boolean).join(' ')}>
      <p className="motta-council__who">{who || `${name}, ${role}, ${firm}`}</p>
      <p className="motta-council__statement">{statement}</p>
    </div>
  );
}
