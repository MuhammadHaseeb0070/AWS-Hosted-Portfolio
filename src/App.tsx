import { useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Preloader } from './components/Preloader';
import { Cursor } from './components/Cursor';
import { Header } from './components/Header';
import { FlowRail } from './components/FlowRail';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [booted, setBooted] = useState(false);

  /* global reveal system — everything enters with intent, nothing fades in randomly */
  useEffect(() => {
    if (document.documentElement.classList.contains('has-cursor')) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((el) => {
        if (el.closest('#deliver') && window.innerWidth >= 900 && el.closest('.deliv-track'))
          return;
        const clip = el.dataset.reveal === 'clip';
        gsap.fromTo(
          el,
          clip ? { clipPath: 'inset(0 0 100% 0)', y: 26 } : { y: 44, opacity: 0 },
          {
            ...(clip ? { clipPath: 'inset(0 0 -12% 0)', y: 0 } : { y: 0, opacity: 1 }),
            duration: 1.05,
            ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 88%', once: true },
          },
        );
      });
    });
    return () => ctx.revert();
  }, [booted]);

  useEffect(() => {
    document.fonts?.ready.then(() => ScrollTrigger.refresh());
  }, []);

  return (
    <main id="top">
      {!booted && <Preloader done={() => setBooted(true)} />}
      <Cursor />
      <Header booted={booted} />
      <FlowRail />
      <Hero active={booted} />
      <Marquee />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
