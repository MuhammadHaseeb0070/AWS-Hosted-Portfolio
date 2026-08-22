import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { PROFILE, TRACE_LOGS } from '../data';

const reduced = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export function Hero({ active }: { active: boolean }) {
  const root = useRef<HTMLElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const [lines, setLines] = useState<{ ts: string; a: string; b: string; ok: boolean }[]>([]);
  const timer = useRef<number | undefined>(undefined);

  /* intro choreography — plays once the preloader wipes away */
  useEffect(() => {
    if (!active || reduced()) return;
    const ctx = gsap.context(() => {
      const path = pathRef.current!;
      const len = path.getTotalLength();
      gsap.set(path, { strokeDasharray: len, strokeDashoffset: len });
      gsap.set('.jx', { opacity: 0 });
      const tl = gsap.timeline({ delay: 0.2 });
      tl.fromTo('.kicker', { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' })
        .fromTo('.hl-inner', { yPercent: 112 }, { yPercent: 0, duration: 1.1, ease: 'power4.out', stagger: 0.12 }, '-=0.25')
        .to(path, { strokeDashoffset: 0, duration: 1.7, ease: 'power2.inOut' }, '-=0.9')
        .to('.jx', { opacity: 1, duration: 0.01, stagger: 0.12 }, '-=0.5')
        .fromTo('.hero-sub', { opacity: 0, y: 18 }, { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' }, '-=1')
        .fromTo('.hero-cta', { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }, '-=0.45')
        .fromTo('.trace-log', { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.55, ease: 'power2.out' }, '-=0.35')
        .fromTo('.scroll-cue', { opacity: 0 }, { opacity: 1, duration: 0.5 }, '-=0.2');
    }, root);
    return () => ctx.revert();
  }, [active]);

  /* hero drifts out as the payload moves on */
  useEffect(() => {
    if (reduced()) return;
    const ctx = gsap.context(() => {
      gsap.to('.hero-inner', {
        yPercent: -10,
        opacity: 0.2,
        ease: 'none',
        scrollTrigger: { trigger: root.current, start: 'top top', end: 'bottom top', scrub: true },
      });
      gsap.to('.trace-log', {
        yPercent: -30,
        ease: 'none',
        scrollTrigger: { trigger: root.current, start: 'top top', end: 'bottom top', scrub: true },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  /* live trace stream */
  useEffect(() => {
    if (!active) return;
    let i = 0;
    const push = () => {
      const [a, b] = TRACE_LOGS[i % TRACE_LOGS.length];
      i += 1;
      const ts = new Date().toLocaleTimeString('en-GB', { hour12: false });
      setLines((ls) => [...ls.slice(-4), { ts, a, b, ok: /200 OK|healthy|accepted/.test(b) }]);
      timer.current = window.setTimeout(push, 1500 + Math.random() * 1100);
    };
    timer.current = window.setTimeout(push, 900);
    return () => window.clearTimeout(timer.current);
  }, [active]);

  return (
    <section id="home" className="hero" ref={root}>
      <svg className="hero-trace" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" aria-hidden>
        <path ref={pathRef} d="M-20 730 H340 V430 H780 V190 H1460" />
        <rect className="jx" x="-20" y="724" width="12" height="12" />
        <rect className="jx" x="334" y="424" width="12" height="12" />
        <rect className="jx" x="774" y="184" width="12" height="12" />
      </svg>

      <div className="container hero-inner">
        <p className="kicker">
          <span className="dot" /> NODE_00 — INGEST · PAYLOAD ACCEPTED
        </p>
        <h1 className="hero-name">
          <span className="hl"><span className="hl-inner">{PROFILE.nameFirst}</span></span>
          <span className="hl hl-outline"><span className="hl-inner">{PROFILE.nameLast}</span></span>
        </h1>
        <p className="hero-sub">
          <strong>{PROFILE.role}</strong> — I build the middleware that lets banks talk:{' '}
          <em>IBM ACE message flows</em>, ESQL transforms and SOAP→REST bridges.
          Karachi → Dubai Islamic Bank Pakistan. This page is a pipeline;{' '}
          <strong>you are the payload.</strong> Scroll to move through it.
        </p>
        <div className="hero-cta">
          <a className="btn solid" href="#transform" data-hover><span>TRACE THE FLOW ↓</span></a>
          <a className="btn" href={PROFILE.github} target="_blank" rel="noreferrer" data-hover><span>GITHUB ↗</span></a>
          <a className="btn" href="#handshake" data-hover><span>HANDSHAKE</span></a>
        </div>
      </div>

      <div className="trace-log" aria-hidden>
        <div className="tl-head"><span>LIVE TRACE</span><span>NODE_00</span></div>
        {lines.map((l, idx) => (
          <div className={`tl-line${l.ok ? ' is-ok' : ''}`} key={`${l.ts}-${idx}`}>
            {l.ts} · <b>{l.a}</b> <i>{l.b}</i>
          </div>
        ))}
      </div>

      <div className="scroll-cue"><span>SCROLL TO ROUTE</span><span className="cue-pkt" /></div>
    </section>
  );
}
