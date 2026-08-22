import { useEffect, useState } from 'react';

const NODES = [
  { id: 'home', label: '00·INGEST' },
  { id: 'transform', label: '01·TRANSFORM' },
  { id: 'route', label: '02·ROUTE' },
  { id: 'protocols', label: '03·PROTOCOLS' },
  { id: 'deliver', label: '04·DELIVER' },
  { id: 'handshake', label: '05·HANDSHAKE' },
];

/** Payload tracker — a packet riding the right-edge rail with page progress. */
export function FlowRail() {
  const [frac, setFrac] = useState(0);
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setFrac(h > 0 ? Math.min(1, Math.max(0, window.scrollY / h)) : 0);
      let idx = 0;
      NODES.forEach((n, i) => {
        const el = document.getElementById(n.id);
        if (el && el.getBoundingClientRect().top <= window.innerHeight * 0.45) idx = i;
      });
      setActiveIdx(idx);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <aside className="rail" aria-hidden>
      <div className="rail-track">
        <span className="rail-pkt" style={{ top: `${frac * 100}%` }} />
        <div className="rail-ticks">
          {NODES.map((n, i) => (
            <button
              key={n.id}
              className={`rail-tick${i <= activeIdx ? ' on' : ''}`}
              style={{ top: `${(i / (NODES.length - 1)) * 100}%` }}
              onClick={() => go(n.id)}
              aria-label={n.label}
            >
              <b>{n.label}</b>
              <i />
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
}
