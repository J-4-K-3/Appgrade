import React, { useEffect } from 'react';
import './Toast.css';

export default function Toast({ toast, onDismiss }) {
  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => onDismiss(), toast.duration ?? 2800);
    return () => clearTimeout(t);
  }, [toast, onDismiss]);

  if (!toast) return null;

  return (
    <div className={`toast toast--${toast.variant || 'info'}`} role="status" aria-live="polite">
      <div className="toast__title">{toast.title || 'Notice'}</div>
      {toast.message ? <div className="toast__message">{toast.message}</div> : null}
      <button className="toast__close" onClick={onDismiss} aria-label="Dismiss toast">
        ×
      </button>
    </div>
  );
}

