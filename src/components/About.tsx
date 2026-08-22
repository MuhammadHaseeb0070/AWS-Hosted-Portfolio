import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { PROFILE, STATS } from '../data';

const reduced = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export function About() {
  const root = useRef<HTMLElement>(null);

  /* stat counters — count up when the payload arrives */
  useEffect(() => {
    if (reduced()) return;
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('[data-count]').forEach((el) => {
        const target = Number(el.dataset.count);
        const o = { v: 0 };
        gsap.to(o, {
          v: target,
          duration: 1.6,
          ease: 'power2.out',
          scrollTrigger: { trigger: el, start: 'top 88%', once: true },
          onUpdate: () => {
            el.textContent = String(Math.round(o.v)).padStart(2, '0');
          },
        });
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section id="transform" className="section" ref={root}>
      <div className="container">
        <div className="node-head" data-reveal="clip">
          <span className="node-id">NODE_01 — TRANSFORM</span>
        </div>
        <p className="node-sub" data-reveal>RAW EXPERIENCE → STRUCTURED SIGNAL · MAPPED VIA ESQL</p>

        <div className="about-grid">
          <div className="portrait-frame" data-hover>
            <span className="corner c-tl" /><span className="corner c-tr" />
            <span className="corner c-bl" /><span className="corner c-br" />
            <img src="/images/portrait.png" alt={`Portrait of ${PROFILE.nameFirst} ${PROFILE.nameLast}`} loading="lazy" />
          </div>

          <div className="about-copy">
            <p data-reveal>
              I'm a <span className="hi">Junior Integration Developer</span> at{' '}
              <span className="hi">Dubai Islamic Bank Pakistan</span>, where the systems are
              decades old, the transactions are real, and downtime is not an option. My job is
              to make <span className="acc">legacy SOAP services speak fluent REST</span> — and
              never lose a byte in translation.
            </p>
            <p data-reveal>
              Day to day that means IBM App Connect Enterprise message flows, ESQL transforms,
              MQ queues and Oracle procedures, shipped as BAR files across{' '}
              <span className="hi">DEV / QA / PROD</span>. Off the clock I build full-stack
              products — encrypted messengers with entropy harvested from lava lamps, Android
              apps, CI/CD pipelines on AWS.
            </p>
            <p data-reveal>
              A CS graduate of Sukkur IBA University who believes integration engineering is
              just <span className="acc">empathy for machines that were never meant to meet</span>.
            </p>
          </div>
        </div>

        <div className="stats-row" data-reveal>
          {STATS.map((s) => (
            <div className="stat" key={s.label}>
              <div className="stat-num">
                <span data-count={s.value}>00</span>
                <sup>{s.suffix}</sup>
              </div>
              <div className="stat-label">{s.label.toUpperCase()}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
