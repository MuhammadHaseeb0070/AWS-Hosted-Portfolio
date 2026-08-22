import { useEffect, useState } from 'react';
import { NAV } from '../data';

export function Header({ booted }: { booted: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!booted) return;
    const secs = NAV.map((n) => document.getElementById(n.id)).filter(Boolean) as HTMLElement[];
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-35% 0px -55% 0px' },
    );
    secs.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, [booted]);

  return (
    <header className={`header${scrolled ? ' scrolled' : ''}`}>
      <a className="brand" href="#top" data-hover>
        <span className="brand-led" />
        MH — INTEGRATION
      </a>
      <nav className="nav" aria-label="Pipeline nodes">
        {NAV.map((n) => (
          <a
            key={n.id}
            href={`#${n.id}`}
            data-hover
            className={active === n.id ? 'active' : ''}
          >
            {n.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
