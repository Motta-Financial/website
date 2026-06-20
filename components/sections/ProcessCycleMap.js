/**
 * ProcessCycleMap — renders a finance-cycle process map as a responsive grid
 * of numbered process groups, each with its sub-steps.
 *
 * Props:
 *  - groups: Array<{ no: string, title: string, steps: string[] }>
 */
export default function ProcessCycleMap({ groups = [] }) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
        gap: 16,
        marginTop: 8,
      }}
    >
      {groups.map((group) => (
        <div
          key={group.no}
          style={{
            padding: '20px 20px 18px',
            background: '#fff',
            border: '1px solid rgba(107, 116, 93, 0.18)',
            borderRadius: 12,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'baseline',
              gap: 8,
              marginBottom: 10,
            }}
          >
            <span
              style={{
                fontSize: 13,
                fontWeight: 700,
                color: 'var(--motta-sage-deep, #6b745d)',
              }}
            >
              {group.no}
            </span>
            <h5
              style={{
                margin: 0,
                fontSize: 16,
                color: 'var(--motta-charcoal, #2b2f24)',
              }}
            >
              {group.title}
            </h5>
          </div>
          <ul
            style={{
              listStyle: 'none',
              margin: 0,
              padding: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: 6,
            }}
          >
            {group.steps.map((step) => (
              <li
                key={step}
                style={{
                  position: 'relative',
                  paddingLeft: 16,
                  fontSize: 14,
                  lineHeight: 1.5,
                  color: 'rgba(43, 47, 36, 0.8)',
                }}
              >
                <span
                  aria-hidden="true"
                  style={{
                    position: 'absolute',
                    left: 0,
                    top: 8,
                    width: 6,
                    height: 6,
                    borderRadius: '50%',
                    background: 'var(--motta-sage-deep, #6b745d)',
                  }}
                />
                {step}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
