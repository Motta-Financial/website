'use client';
import AlfredLogo from './AlfredLogo';

/**
 * Site-wide loading screen.
 *
 * Uses the canonical ALFRED Ai mark with the pulsing sage halo
 * (same animation as the floating ALFRED companion icon) so the loading
 * state reads as on-brand instead of a generic spinner.
 */
export default function Preloader() {
    return (
        <div id="preloader" className="motta-preloader">
            <div className="motta-preloader__inner">
                <AlfredLogo size={120} glow priority alt="Loading — ALFRED Ai" />
                <span className="motta-preloader__label">Loading</span>
            </div>
        </div>
    );
}
