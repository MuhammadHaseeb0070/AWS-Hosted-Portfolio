import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { BOOT_LINES } from '../data';

export function Preloader({ done }: { done: () => void }) {
  const root = useRef<HTMLDivElement>(null);
  const barFill = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.body.style.overflow = '';
      done();
      return;
    }
    const lines = root.current!.querySelectorAll('.pl-line');
    const tl = gsap.timeline({
      onComplete: () => {
        document.body.style.overflow = '';
        done();
      },
    });
    tl.fromTo(
      lines,
      { opacity: 0, x: -14 },
      { opacity: 1, x: 0, duration: .28, stagger: .34, ease: 'power2.out' },
    )
      .fromTo(
        barFill.current,
        { scaleX: 0 },
        { scaleX: 1, duration: 1.35, ease: 'power2.inOut' },
        0,
      )
      .to(root.current, { yPercent: -100, duration: .85, ease: 'power4.inOut' }, '+=.25');
    return () => {
      tl.kill();
      document.body.style.overflow = '';
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="pre" ref={root} aria-hidden>
      <div className="pre-inner">
        <p className="tl-head" style={{ position: 'static', marginBottom: 6 }}>SYSTEM BOOT — NODE_00</p>
        {BOOT_LINES.map((l) => (
          <div className="pl-line" key={l}>{l}</div>
        ))}
        <div className="pl-bar"><span ref={barFill} /></div>
      </div>
    </div>
  );
}
