import React from 'react';

export default function ProgressBar({ value, max = 100, label }) {
  const pct = Math.max(0, Math.min(100, (value / max) * 100));
  return (
    <div style={{ display: 'grid', gap: 8 }}>
      {label ? <div style={{ fontWeight: 700 }}>{label}</div> : null}
      <div style={{ height: 10, borderRadius: 999, background: '#e2e8f0', overflow: 'hidden' }}>
        <div
          style={{
            height: '100%',
            width: `${pct}%`,
            background: 'linear-gradient(90deg, #0466c8, #0597f2)',
            borderRadius: 999,
          }}
        />
      </div>
    </div>
  );
}

