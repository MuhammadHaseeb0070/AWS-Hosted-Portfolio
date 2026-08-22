import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PROJECTS, type Project } from '../data';

gsap.registerPlugin(ScrollTrigger);

function CloudDiagram() {
  return (
    <svg className="cloud-diagram" viewBox="0 0 600 340" aria-label="Deployment architecture diagram">
      <rect className="box" x="30" y="40" width="130" height="54" />
      <text x="95" y="72" textAnchor="middle">GIT PUSH</text>
      <rect className="box" x="235" y="40" width="130" height="54" />
      <text x="300" y="66" textAnchor="middle">ACTIONS</text>
      <text x="300" y="84" textAnchor="middle">BUILD</text>
      <rect className="box" x="440" y="40" width="130" height="54" />
      <text x="505" y="72" textAnchor="middle">AWS S3</text>
      <rect className="box" x="235" y="240" width="130" height="54" />
      <text x="300" y="272" textAnchor="middle">CLOUDFRONT</text>
      <rect className="box" x="440" y="240" width="130" height="54" />
      <text x="505" y="266" textAnchor="middle">ROUTE 53</text>
      <text x="505" y="284" textAnchor="middle">+ SSL</text>
      <path className="flow" d="M160 67 H231" />
      <path className="flow" d="M365 67 H436" />
      <path className="flow" d="M505 94 V236" />
      <path className="flow" d="M436 267 H369" />
    </svg>
  );
}

function Card({ p }: { p: Project }) {
  return (
    <article className="proj-card" id={p.id}>
      <div className="proj-top">
        <span className="proj-idx">{p.index}</span>
        <span className="proj-tag">{p.tag}</span>
      </div>
      <div className="proj-frame" data-hover>
        {p.image ? <img src={p.image} alt={`${p.title} preview`} loading="lazy" /> : <CloudDiagram />}
      </div>
      <h3 className="proj-title">{p.title}</h3>
      <p className="proj-desc">{p.desc}</p>
      <div className="proj-foot">
        <div className="chips">
          {p.tech.map((t) => <span className="chip" key={t}>{t}</span>)}
        </div>
        {p.links.length > 0 && (
          <div className="proj-links">
            {p.links.map((l) => (
              <a className="proj-link" href={l.href} target="_blank" rel="noreferrer" data-hover key={l.label}>
                {l.label.toUpperCase()} ↗
              </a>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}

export function Projects() {
  const root = useRef<HTMLElement>(null);
  const stage = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const bar = useRef<HTMLSpanElement>(null);

  /* cinematic moment: the deliver lane runs horizontally while you scroll.
     gsap.matchMedia keeps desktop pinning and the mobile vertical stack in sync
     even if the window is resized across the 900px breakpoint. */
  useEffect(() => {
    const mm = gsap.matchMedia();
    mm.add('(min-width: 900px) and (prefers-reduced-motion: no-preference)', () => {
      const tr = track.current!;
      const dist = () => Math.max(0, tr.scrollWidth - window.innerWidth);
      gsap.to(tr, {
        x: () => -dist(),
        ease: 'none',
        scrollTrigger: {
          trigger: stage.current,
          start: 'top top',
          end: () => '+=' + dist(),
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            if (bar.current) bar.current.style.transform = `scaleX(${self.progress})`;
          },
        },
      });
    });
    return () => mm.revert();
  }, []);

  return (
    <section id="deliver" className="section deliver-section" ref={root}>
      <div ref={stage} className="deliv-stage">
        <div className="container deliv-head">
          <div className="node-head" style={{ marginBottom: 18 }} data-reveal="clip">
            <span className="node-id">NODE_04 — DELIVER</span>
          </div>
          <p className="node-sub" style={{ marginBottom: 0 }} data-reveal>ARTIFACTS SHIPPED TO THE EDGE · DRAG YOUR SCROLL THROUGH THE LANE →</p>
        </div>
        <div className="deliv-track" ref={track}>
          {PROJECTS.map((p) => <Card p={p} key={p.id} />)}
        </div>
        <div className="deliv-progress"><span ref={bar} /></div>
      </div>
    </section>
  );
}
