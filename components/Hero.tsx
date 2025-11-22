
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      const navHeight = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navHeight;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-20">
      {/* Technical Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>
      
      {/* Glow Orbs */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] animate-pulse-slow opacity-50 dark:opacity-100"></div>
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[128px] animate-pulse-slow delay-1000 opacity-50 dark:opacity-100"></div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-7">
            <div className="reveal-on-scroll inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/20 text-primary text-xs font-mono mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              AVAILABLE FOR OPPORTUNITIES
            </div>
            
            <h1 className="reveal-on-scroll text-6xl md:text-8xl font-bold tracking-tighter text-text mb-8 leading-[0.95]">
              SYSTEMS <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_auto] animate-gradient">
                ARCHITECT
              </span>
            </h1>

            <p className="reveal-on-scroll text-lg md:text-xl text-textDim max-w-2xl mb-12 leading-relaxed border-l-2 border-primary/30 pl-6">
              I engineer the digital nervous systems of modern enterprise. Evolving from mobile applications to secure backend infrastructures.
              <span className="block mt-4 font-mono text-sm text-primary opacity-80">
                // SCALABILITY • SECURITY • PERFORMANCE
              </span>
            </p>

            <div className="reveal-on-scroll flex flex-wrap gap-4">
              <a 
                href="#projects" 
                onClick={(e) => handleScroll(e, '#projects')}
                className="group relative px-8 py-4 bg-primary text-white font-bold rounded-lg overflow-hidden transition-all hover:shadow-[0_0_30px_rgba(16,185,129,0.3)] hover:-translate-y-1"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                <span className="relative flex items-center">
                  View Creations
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                </span>
              </a>
              
              <a 
                href="#contact" 
                onClick={(e) => handleScroll(e, '#contact')}
                className="px-8 py-4 bg-surface border border-border text-textDim font-medium rounded-lg hover:bg-border/50 hover:text-text transition-all"
              >
                Initiate Handshake
              </a>
            </div>
          </div>

          {/* Visual/Image Block */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <div className="reveal-on-scroll relative z-10 w-80 h-80 md:w-96 md:h-96">
              {/* Rotating Border */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-primary/30 animate-spin-slow"></div>
              <div className="absolute inset-4 rounded-full border border-border"></div>
              
              {/* Image Container */}
              <div className="absolute inset-8 rounded-full bg-surface border border-border overflow-hidden shadow-2xl flex items-center justify-center group">
                <img 
                  src="./images/profileimage.png" 
                  alt="Muhammad Haseeb" 
                  className="w-full h-full object-cover opacity-90 group-hover:scale-110 transition-transform duration-700"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement?.classList.add('bg-slate-800');
                    // Optional: Show fallback text if image fails
                    const fallback = e.currentTarget.parentElement?.querySelector('.fallback-text');
                    if (fallback) fallback.classList.remove('hidden');
                  }}
                />
                {/* Fallback Text if image fails */}
                <div className="fallback-text absolute inset-0 flex flex-col items-center justify-center -z-10">
                   <span className="text-4xl font-bold text-textDim opacity-20">MH</span>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute bottom-10 -left-4 px-4 py-2 bg-surface border border-border rounded-lg shadow-xl flex items-center gap-3 animate-bounce">
                 <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                 <span className="text-xs font-bold text-text">Open to Work</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
