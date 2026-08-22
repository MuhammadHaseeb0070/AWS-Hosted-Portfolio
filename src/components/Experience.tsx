import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ROUTES } from '../data';

const reduced = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export function Experience() {
  const root = useRef<HTMLElement>(null);
  const spine = useRef<HTMLDivElement>(null);
  const list = useRef<HTMLDivElement>(null);

  /* the route spine draws itself; each node ignites on arrival */
  useEffect(() => {
    if (reduced()) {
      document.querySelectorAll('.route-item').forEach((el) => el.classList.add('in'));
      return;
    }
    const ctx = gsap.context(() => {
      gsap.fromTo(
        spine.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: list.current,
            start: 'top 72%',
            end: 'bottom 60%',
            scrub: 0.6,
          },
        },
      );
      gsap.utils.toArray<HTMLElement>('.route-item').forEach((item) => {
        ScrollTrigger.create({
          trigger: item,
          start: 'top 68%',
          onEnter: () => item.classList.add('in'),
          onLeaveBack: () => item.classList.remove('in'),
        });
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section id="route" className="section" ref={root}>
      <div className="container">
        <div className="node-head" data-reveal="clip">
          <span className="node-id">NODE_02 — ROUTE</span>
        </div>
        <p className="node-sub" data-reveal>DECISIONS MADE ALONG THE WAY · PACKETS FORWARDED IN ORDER</p>

        <div className="route-wrap">
          <div className="spine" ref={spine} aria-hidden />
          <div ref={list}>
            {ROUTES.map((r) => (
              <article className="route-item" key={r.id}>
                <span className="route-node" aria-hidden />
                <div className="route-meta">
                  <div className="route-period">{r.period}</div>
                  <span className="route-tag">{r.route}</span>
                </div>
                <div className="route-body">
                  <h3>{r.role}</h3>
                  <div className="route-org">{r.org}</div>
                  <ul className="route-points">
                    {r.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
