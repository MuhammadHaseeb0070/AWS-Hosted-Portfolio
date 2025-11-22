
import React from 'react';
import { Terminal, Cpu, Layers, Zap } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-text mb-6">
            Engineering <span className="text-emerald-500">Evolution</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {/* Main Narrative */}
          <div className="md:col-span-2 space-y-8 text-textDim leading-relaxed text-lg">
            <p>
              My journey didn't start in a corporate office; it began with a curiosity for how things break and a drive to fix them. From crafting pixel-perfect mobile experiences to hardening secure encrypted communication channels, I've always chased the most challenging problems.
            </p>
            <p>
              Today, I operate as a <span className="text-emerald-500 font-bold">Systems Architect</span>. I don't just connect APIs; I design the data highways that power enterprise financial operations. My work ensures that when a transaction happens, it's fast, it's secure, and it's invisible.
            </p>
            
            <div className="pt-8">
              <h3 className="text-xl font-bold text-text mb-6 flex items-center">
                <Zap className="mr-2 text-secondary" size={24} />
                Core Philosophy
              </h3>
              <div className="spotlight-card p-8 rounded-2xl border-l-4 border-emerald-500 bg-surface/50">
                <div className="spotlight-border"></div>
                <ul className="space-y-4 font-mono text-sm text-textDim">
                  <li className="flex items-center">
                    <span className="mr-4 text-emerald-500">01.</span>
                    <span>Complexity should be internal, simplicity external.</span>
                  </li>
                  <li className="flex items-center">
                    <span className="mr-4 text-emerald-500">02.</span>
                    <span>Security is not a feature; it's architecture.</span>
                  </li>
                  <li className="flex items-center">
                    <span className="mr-4 text-emerald-500">03.</span>
                    <span>Code is read much more often than it is written.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Stats / Highlights */}
          <div className="space-y-6">
            <div className="spotlight-card p-6 rounded-2xl group hover:-translate-y-1 transition-transform bg-surface border border-border">
              <div className="spotlight-border"></div>
              <Terminal className="mb-4 text-emerald-500 group-hover:rotate-12 transition-transform" size={32} />
              <h3 className="text-lg font-bold text-text mb-2">Full Stack Origins</h3>
              <p className="text-textDim text-sm">
                Started with React Native & Node.js. Built end-to-end encrypted chat apps and custom finance trackers.
              </p>
            </div>

            <div className="spotlight-card p-6 rounded-2xl group hover:-translate-y-1 transition-transform bg-surface border border-border">
              <div className="spotlight-border"></div>
              <Cpu className="mb-4 text-secondary group-hover:rotate-12 transition-transform" size={32} />
              <h3 className="text-lg font-bold text-text mb-2">Current Focus</h3>
              <p className="text-textDim text-sm">
                High-performance Middleware, Data Orchestration, and Financial Tech Resilience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
