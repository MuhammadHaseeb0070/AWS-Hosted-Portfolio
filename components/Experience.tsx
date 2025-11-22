
import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';
import { Experience as ExperienceType } from '../types';

const experiences: ExperienceType[] = [
  {
    id: 'dib',
    role: 'Software Engineer',
    company: 'Dubai Islamic Bank',
    period: 'Present',
    description: [
      'Architecting enterprise integrations using IBM App Connect Enterprise (ACE) and ESQL.',
      'Engineering high-volume message pipelines for core financial systems.',
      'Optimizing API gateways and Oracle PL/SQL data access layers.'
    ],
    tech: ['IBM ACE', 'ESQL', 'Oracle DB', 'Middleware']
  },
  {
    id: 'sepco',
    role: 'Networking Intern',
    company: 'SEPCO',
    period: 'Jun 24 - Jul 24',
    description: [
      'Deployed secure Windows Server 2022 VPN infrastructure.',
      'Hardened remote access protocols replacing legacy tools.',
      'Managed operational IT security for enterprise ERP access.'
    ],
    tech: ['Win Server 2022', 'VPN', 'Security', 'Infrastructure']
  }
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-32 relative">
      <div className="max-w-5xl mx-auto px-6">
        
        <div className="reveal-on-scroll mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-text mb-6 tracking-tight">
            Career <span className="text-emerald-500">Trajectoy</span>
          </h2>
        </div>

        <div className="relative border-l border-border ml-4 md:ml-10 space-y-16">
          {experiences.map((exp) => (
            <div key={exp.id} className="reveal-on-scroll relative pl-8 md:pl-16 group">
              
              {/* Connector Node */}
              <div className="absolute -left-[5px] md:-left-[5px] top-0 w-2.5 h-2.5 bg-bg border border-emerald-500 rounded-full group-hover:scale-150 group-hover:bg-emerald-500 transition-all duration-300 shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
              
              <div className="spotlight-card p-8 rounded-2xl hover:border-emerald-500/30 transition-colors">
                <div className="spotlight-border"></div>
                
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
                  <div>
                    <h3 className="text-2xl font-bold text-text group-hover:text-emerald-500 transition-colors">
                      {exp.role}
                    </h3>
                    <div className="flex items-center text-textDim mt-1 text-lg">
                      <Briefcase size={18} className="mr-2" />
                      {exp.company}
                    </div>
                  </div>
                  <span className="inline-flex items-center px-4 py-1 rounded-full bg-bg border border-border text-sm font-mono text-emerald-600 dark:text-emerald-400">
                    <Calendar size={14} className="mr-2" />
                    {exp.period}
                  </span>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                  <div className="md:col-span-2">
                    <ul className="space-y-3">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start text-textDim leading-relaxed">
                          <span className="mr-3 mt-1.5 w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="border-t md:border-t-0 md:border-l border-border pt-4 md:pt-0 md:pl-8">
                    <h4 className="text-sm font-mono text-textDim mb-4 uppercase tracking-wider opacity-70">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map(t => (
                        <span key={t} className="px-2 py-1 text-xs font-medium text-textDim bg-bg rounded border border-border">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
