import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PROFILE } from '../data';

const reduced = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export function Contact() {
  const root = useRef<HTMLElement>(null);
  const hs = useRef<HTMLDivElement>(null);

  /* TCP three-way handshake — SYN → SYN-ACK → ACK */
  useEffect(() => {
    if (reduced()) {
      hs.current?.classList.add('go');
      return;
    }
    const st = ScrollTrigger.create({
      trigger: root.current,
      start: 'top 62%',
      once: true,
      onEnter: () => {
        gsap.fromTo('.mailto', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 1.2 });
        gsap.fromTo('.contact-grid', { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: .9, ease: 'power3.out', delay: 1.5 });
        hs.current?.classList.add('go');
      },
    });
    return () => st.kill();
  }, []);

  return (
    <section id="handshake" className="section" ref={root}>
      <div className="container">
        <div className="node-head" data-reveal="clip">
          <span className="node-id">NODE_05 — HANDSHAKE</span>
        </div>
        <p className="node-sub" data-reveal>FINAL NODE · ACKNOWLEDGE TO CLOSE THE LOOP</p>

        <div className="handshake" ref={hs} aria-hidden>
          <span className="hs-step">SYN</span>
          <span className="hs-link" />
          <span className="hs-step">SYN-ACK</span>
          <span className="hs-link" />
          <span className="hs-step">ACK — CONNECTED</span>
        </div>
        <p className="hs-note">CONNECTION ESTABLISHED ON PORT 443 · LATENCY: ONE EMAIL</p>

        <h2 className="node-title" style={{ marginBottom: 'clamp(28px, 5vh, 48px)' }}>
          LET'S BUILD A<br />CONNECTION
        </h2>
        <a className="mailto" href={`mailto:${PROFILE.email}`} data-hover>{PROFILE.email}</a>

        <div className="contact-grid">
          <div className="contact-cell">
            <small>GITHUB</small>
            <a href={PROFILE.github} target="_blank" rel="noreferrer" data-hover>
              @MuhammadHaseeb0070 <span className="cell-arrow">↗</span>
            </a>
          </div>
          <div className="contact-cell">
            <small>LINKEDIN</small>
            <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" data-hover>
              muhammad-haseeb <span className="cell-arrow">↗</span>
            </a>
          </div>
          <div className="contact-cell">
            <small>PHONE</small>
            <a href={`tel:${PROFILE.phone.replace(/\s/g, '')}`} data-hover>
              {PROFILE.phone} <span className="cell-arrow">↗</span>
            </a>
          </div>
          <div className="contact-cell">
            <small>BASE STATION</small>
            <span>{PROFILE.location}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
