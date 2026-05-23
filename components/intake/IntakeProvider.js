'use client';

import { useEffect, useState, useCallback, useRef } from 'react';
import HubIntakeForm from '@/components/forms/HubIntakeForm';

/**
 * IntakeProvider — global mount point for the new-client intake modal.
 *
 * Anywhere in the app can open it by dispatching:
 *   window.dispatchEvent(new CustomEvent('motta:open-intake', { detail: { source } }))
 *
 * Closing happens via Escape, the close button, or backdrop click.
 * The modal traps focus on the dialog and locks body scroll while open.
 */
export default function IntakeProvider({ children }) {
  const [open, setOpen] = useState(false);
  const [source, setSource] = useState(null);
  const dialogRef = useRef(null);
  const lastActiveRef = useRef(null);

  const openModal = useCallback((src) => {
    lastActiveRef.current =
      typeof document !== 'undefined' ? document.activeElement : null;
    setSource(src || null);
    setOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setOpen(false);
    setSource(null);
    if (lastActiveRef.current && typeof lastActiveRef.current.focus === 'function') {
      try { lastActiveRef.current.focus(); } catch (_) {}
    }
  }, []);

  useEffect(() => {
    function onOpen(e) {
      openModal(e?.detail?.source);
    }
    window.addEventListener('motta:open-intake', onOpen);
    return () => window.removeEventListener('motta:open-intake', onOpen);
  }, [openModal]);

  useEffect(() => {
    if (!open) return;

    const onKey = (e) => {
      if (e.key === 'Escape') closeModal();
    };
    document.addEventListener('keydown', onKey);

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Focus the dialog so screen readers announce it and Escape works.
    requestAnimationFrame(() => {
      if (dialogRef.current) {
        const focusable = dialogRef.current.querySelector(
          'input, select, textarea, button, [tabindex]:not([tabindex="-1"])'
        );
        if (focusable) focusable.focus();
        else dialogRef.current.focus();
      }
    });

    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, closeModal]);

  return (
    <>
      {children}
      {open ? (
        <div
          className="motta-intake-modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="motta-intake-title"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) closeModal();
          }}
        >
          <div
            className="motta-intake-modal__shell"
            ref={dialogRef}
            tabIndex={-1}
          >
            <header className="motta-intake-modal__header">
              <div>
                <span className="motta-intake-modal__eyebrow">
                  <span className="motta-intake-modal__eyebrow-dot" aria-hidden="true" />
                  New Client Intake
                  {source ? (
                    <span className="motta-intake-modal__source"> · from {source}</span>
                  ) : null}
                </span>
                <h2 id="motta-intake-title" className="motta-intake-modal__title">
                  Let&apos;s scope your engagement.
                </h2>
                <p className="motta-intake-modal__sub">
                  Share a few details and our team (with a little help from
                  ALFRED Ai) will follow up within one business day.
                </p>
              </div>
              <button
                type="button"
                className="motta-intake-modal__close"
                aria-label="Close intake"
                onClick={closeModal}
              >
                <span aria-hidden="true">×</span>
              </button>
            </header>
            <div className="motta-intake-modal__body">
              <HubIntakeForm />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
