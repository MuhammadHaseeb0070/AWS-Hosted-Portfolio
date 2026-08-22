import { useEffect, useRef } from 'react';
import gsap from 'gsap';

/** Reticle cursor — a targeting square that brackets interactive elements. */
export function Cursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches || window.matchMedia('(prefers-reduced-motion: reduce)').matches)
      return;
    document.documentElement.classList.add('has-cursor');
    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const rp = { ...pos };
    let raf = 0;
    const move = (e: PointerEvent) => {
      pos.x = e.clientX;
      pos.y = e.clientY;
    };
    const over = (e: Event) => {
      const t = (e.target as HTMLElement | null)?.closest('a,button,[data-hover]');
      ring.current?.classList.toggle('is-hover', !!t);
      dot.current?.classList.toggle('is-hover', !!t);
    };
    const tick = () => {
      rp.x += (pos.x - rp.x) * 0.18;
      rp.y += (pos.y - rp.y) * 0.18;
      if (dot.current) dot.current.style.transform = `translate(${pos.x}px,${pos.y}px)`;
      if (ring.current) ring.current.style.transform = `translate(${rp.x}px,${rp.y}px)`;
      raf = requestAnimationFrame(tick);
    };
    window.addEventListener('pointermove', move, { passive: true });
    document.addEventListener('pointerover', over, true);
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('pointermove', move);
      document.removeEventListener('pointerover', over, true);
      document.documentElement.classList.remove('has-cursor');
    };
  }, []);

  return (
    <>
      <div className="cur-dot" ref={dot} aria-hidden />
      <div className="cur-ring" ref={ring} aria-hidden />
    </>
  );
}
