
import React from 'react';
import { Database, Globe, Shield, Server, Cpu, Layers } from 'lucide-react';
import { SkillCategory } from '../types';

const skillCategories: SkillCategory[] = [
  {
    name: 'Enterprise Integration',
    icon: 'Layers',
    skills: ['IBM App Connect Enterprise', 'ESQL Development', 'Middleware Orchestration', 'Message Queuing', 'ESB Patterns']
  },
  {
    name: 'Backend Engineering',
    icon: 'Server',
    skills: ['Node.js', 'Express.js', 'Microservices', 'RESTful APIs', 'System Design']
  },
  {
    name: 'Database Architecture',
    icon: 'Database',
    skills: ['Oracle PL/SQL', 'PostgreSQL', 'Data Modeling', 'ODBC Integration', 'Query Optimization']
  },
  {
    name: 'Cloud & DevOps',
    icon: 'Cpu',
    skills: ['AWS (S3, CloudFront, Route53)', 'GitHub Actions', 'CI/CD Pipelines', 'Serverless', 'Linux Administration']
  },
  {
    name: 'Security Engineering',
    icon: 'Shield',
    skills: ['Encryption (AES/RSA)', 'VPN Infrastructure', 'IAM & Access Control', 'Secure Coding Practices']
  },
  {
    name: 'Frontend & Mobile',
    icon: 'Globe',
    skills: ['React', 'TypeScript', 'React Native', 'Tailwind CSS', 'Kotlin (Android)']
  }
];

const getIcon = (name: string) => {
  const iconProps = { size: 24, className: "text-emerald-500 dark:text-emerald-400" };
  switch (name) {
    case 'Server': return <Server {...iconProps} />;
    case 'Database': return <Database {...iconProps} />;
    case 'Globe': return <Globe {...iconProps} />;
    case 'Cpu': return <Cpu {...iconProps} />;
    case 'Shield': return <Shield {...iconProps} />;
    case 'Layers': return <Layers {...iconProps} />;
    default: return <Layers {...iconProps} />;
  }
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="reveal-on-scroll mb-16 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold text-text mb-4">
            Technical <span className="text-emerald-500">Arsenal</span>
          </h2>
          <p className="text-textDim max-w-xl">
            A comprehensive toolkit engineered for scalability, security, and performance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div 
              key={category.name} 
              className={`reveal-on-scroll spotlight-card group p-8 rounded-2xl transition-all duration-500 hover:shadow-lg dark:hover:bg-slate-800/50`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="spotlight-border"></div>
              
              <div className="mb-6 inline-flex p-3 rounded-xl bg-bg border border-border group-hover:border-emerald-500/50 group-hover:scale-110 transition-all duration-300">
                {getIcon(category.icon)}
              </div>
              
              <h3 className="text-xl font-bold text-text mb-4 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                {category.name}
              </h3>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="px-3 py-1.5 text-xs font-bold font-mono text-textDim bg-bg dark:bg-slate-900 border border-border rounded-md hover:text-primary hover:border-primary/50 transition-colors shadow-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
