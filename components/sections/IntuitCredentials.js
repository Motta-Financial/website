/**
 * Shared Intuit co-brand elements.
 *
 * Brand-compliance notes (consistent with the QuickBooks ProAdvisor
 * block on the bookkeeping page):
 *  - Motta's own brand stays at the forefront; these are contained
 *    credentials, not logo lockups or co-branded taglines.
 *  - Intuit logos render smaller than Motta's branding, on clean
 *    backgrounds, never cropped, recolored, or boxed tightly.
 *  - Product names use approved phrasing ("Intuit ProConnect",
 *    "Intuit QuickBooks") with correct capitalization.
 */

/**
 * ProConnect credential block — the tax-side counterpart to the
 * QuickBooks ProAdvisor block. Meant to be passed as a section `body`
 * inside ServiceDetailLayout.
 */
export function ProConnectBlock() {
  return (
    <div
      style={{
        marginTop: 8,
        padding: '32px',
        background: '#ffffff',
        border: '1px solid rgba(107, 116, 93, 0.18)',
        borderRadius: 12,
      }}
    >
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          gap: 28,
        }}
      >
        <div style={{ flex: '1 1 320px', minWidth: 260 }}>
          <h3 className="title-two" style={{ fontSize: 24, marginBottom: 10 }}>
            Partner-grade Intuit ProConnect access
          </h3>
          <p style={{ marginBottom: 18 }}>
            Motta Financial prepares returns on Intuit ProConnect, Intuit&apos;s
            professional tax platform. Our partner-grade access lets ALFRED Ai
            do the heavy lifting on your return in minutes — so you get a faster
            turnaround and a CPA who spends their time on the planning that
            actually lowers your bill.
          </p>

          {/* ProConnect logo: modest in size and separated from the
              status text above, per brand guidelines. */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              paddingTop: 16,
              borderTop: '1px solid rgba(107, 116, 93, 0.16)',
            }}
          >
            <img
              src="/assets/img/partners/intuit-proconnect-logo.png"
              alt="Intuit ProConnect"
              style={{ height: 34, width: 'auto' }}
            />
            <span style={{ fontSize: 13, color: 'rgba(43, 47, 36, 0.6)' }}>
              Professional tax preparation on Intuit ProConnect
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Tech & partners logo strip — a tasteful firm-wide statement of the
 * professional platforms Motta runs on. Renders QuickBooks + ProConnect
 * by default; pass children/extra logos if needed later.
 */
export function TechPartnersStrip() {
  return (
    <section
      style={{
        background: '#ffffff',
        borderTop: '1px solid rgba(107, 116, 93, 0.14)',
        borderBottom: '1px solid rgba(107, 116, 93, 0.14)',
      }}
    >
      <div className="container" style={{ padding: '48px 0' }}>
        <div style={{ textAlign: 'center', marginBottom: 28 }}>
          <span
            style={{
              display: 'inline-block',
              fontSize: 13,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'rgba(43, 47, 36, 0.55)',
            }}
          >
            The professional platforms we run on
          </span>
        </div>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 56,
          }}
        >
          <img
            src="/assets/img/partners/intuit-quickbooks-logo.png"
            alt="Intuit QuickBooks"
            style={{ height: 40, width: 'auto' }}
          />
          <img
            src="/assets/img/partners/intuit-proconnect-logo.png"
            alt="Intuit ProConnect"
            style={{ height: 40, width: 'auto' }}
          />
        </div>
      </div>
    </section>
  );
}
