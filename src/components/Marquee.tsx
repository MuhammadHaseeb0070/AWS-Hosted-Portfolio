import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MARQUEE_ITEMS } from '../data';

gsap.registerPlugin(ScrollTrigger);

/** Protocol ticker — speed reacts to your scroll velocity. */
export function Marquee() {
  const track = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const ctx = gsap.context(() => {
      const tween = gsap.to(track.current, { xPercent: -50, repeat: -1, ease: 'none', duration: 28 });
      ScrollTrigger.create({
        onUpdate: (self) => {
          const v = Math.abs(self.getVelocity());
          tween.timeScale(gsap.utils.clamp(1, 6, 1 + v / 650));
        },
      });
      const settle = () => gsap.to(tween, { timeScale: 1, duration: 1.6, overwrite: 'auto' });
      window.addEventListener('scrollend', settle);
      let t = window.setTimeout(settle, 400);
      const int = window.setInterval(() => {
        window.clearTimeout(t);
        t = window.setTimeout(settle, 300);
      }, 200);
      return () => {
        window.removeEventListener('scrollend', settle);
        window.clearInterval(int);
        window.clearTimeout(t);
      };
    });
    return () => ctx.revert();
  }, []);

  const row = MARQUEE_ITEMS.map((m, i) => (
    <span className="mq-item" key={i}>
      {m}
      <span className="mq-star">✦</span>
    </span>
  ));

  return (
    <div className="marquee" aria-hidden>
      <div className="mq-track" ref={track}>{row}{row}</div>
    </div>
  );
}
