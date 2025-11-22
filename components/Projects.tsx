
import React, { useState } from 'react';
import { Github, ExternalLink, X, ArrowUpRight, Lock, Cloud, Smartphone, FileText, Layers } from 'lucide-react';
import { Project } from '../types';

// Abstract Art Components - Cleaner, less chaotic
const AbstractLava = () => (
  <div className="w-full h-full bg-slate-900 relative overflow-hidden group">
    <div className="absolute inset-0 bg-gradient-to-br from-red-900/40 via-slate-900 to-slate-900"></div>
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-red-500/10 rounded-full blur-[40px] group-hover:bg-red-500/20 transition-colors duration-500"></div>
    <div className="absolute inset-0 flex items-center justify-center">
      <Lock size={48} className="text-red-400/50" />
    </div>
    <div className="absolute inset-0 border-2 border-red-500/10 m-4 rounded-xl"></div>
  </div>
);

const AbstractCloud = () => (
  <div className="w-full h-full bg-slate-900 relative overflow-hidden group">
    <div className="absolute inset-0 bg-gradient-to-tr from-sky-900/40 via-slate-900 to-slate-900"></div>
    <div className="absolute top-0 right-0 w-48 h-48 bg-sky-500/5 rounded-full blur-[60px]"></div>
    <div className="absolute inset-0 flex items-center justify-center">
      <Cloud size={48} className="text-sky-400/50" />
    </div>
    <div className="absolute bottom-8 left-8 right-8 h-px bg-sky-500/30"></div>
  </div>
);

const AbstractCinema = () => (
  <div className="w-full h-full bg-slate-900 relative overflow-hidden group">
    <div className="absolute inset-0 bg-gradient-to-bl from-purple-900/40 via-slate-900 to-slate-900"></div>
    <div className="absolute inset-0 flex items-center justify-center">
      <Smartphone size={48} className="text-purple-400/50" />
    </div>
    <div className="absolute top-4 right-4 flex gap-2">
        <div className="w-2 h-2 bg-purple-500/50 rounded-full"></div>
        <div className="w-2 h-2 bg-purple-500/30 rounded-full"></div>
    </div>
  </div>
);

const AbstractFlow = () => (
  <div className="w-full h-full bg-slate-900 relative overflow-hidden group">
    <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/40 via-slate-900 to-slate-900"></div>
    <div className="absolute inset-0 flex items-center justify-center">
      <Layers size={48} className="text-emerald-400/50" />
    </div>
    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMTYsIDE4NSwgMTI5LCAwLjEpIi8+PC9zdmc+')] opacity-30"></div>
  </div>
);

const projectsData: Project[] = [
  {
    id: 'lavacrypt',
    title: 'LavaCrypt',
    category: 'Security Engineering',
    description: 'A secure messaging application implementing true-entropy encryption via avalanche movement randomness. Features OTP login with zero server-side key storage for absolute privacy.',
    tech: ['React Native', 'Cryptography', 'Node.js', 'Socket.io'],
    links: { github: 'https://github.com/MuhammadHaseeb0070/DialogueFrontEnd' },
    image: 'abstract-lava'
  },
  {
    id: 'cinehub',
    title: 'CineHub',
    category: 'Mobile Experience',
    description: 'Native Android application featuring MVVM architecture, Room Database caching, and real-time TMDB API integration for personalized movie recommendations and discovery.',
    tech: ['Kotlin', 'MVVM', 'Retrofit', 'Material Design'],
    links: {
      github: 'https://github.com/MuhammadHaseeb0070/CineHub',
      download: 'https://drive.google.com/file/d/1V4HiQuVmJo3bCXOu8ZL2ciOwiUnX3oCp/view'
    },
    image: 'abstract-cinema'
  },
  {
    id: 'flowtrack',
    title: 'FlowTrack',
    category: 'FinTech UI/UX',
    description: 'Personal finance tracker app focused on HCI principles. Features interactive graphs, comprehensive dashboards, and detailed reports for optimal financial health monitoring.',
    tech: ['React Native', 'HCI Design', 'Victory Charts', 'AsyncStorage'],
    links: {
      github: 'https://github.com/MuhammadHaseeb0070/flowtrack',
      download: 'https://drive.google.com/file/d/1C5-6SrPHT2uCRBwfhh4quUxtgg0qnNse/view'
    },
    image: 'abstract-flow'
  },
  {
    id: 'resume-architect',
    title: 'Resume Architect',
    category: 'Web Application',
    description: 'A professional resume builder web application with customizable templates and local data saving. Features drag-and-drop functionality and real-time PDF preview.',
    tech: ['React JS', 'HTML2Canvas', 'Local Storage', 'CSS3'],
    links: {
      github: 'https://github.com/MuhammadHaseeb0070/ResumeArchitect',
      demo: 'https://resumearchitect.netlify.app'
    },
    image: 'abstract-doc'
  },
  {
    id: 'cloud-portfolio',
    title: 'Cloud Infrastructure',
    category: 'DevOps & Cloud',
    description: 'Serverless infrastructure deployment using AWS S3, CloudFront, and Route 53. Fully automated CI/CD pipeline via GitHub Actions with secure SSL termination.',
    tech: ['AWS S3', 'CloudFront', 'Route 53', 'GitHub Actions'],
    links: {},
    image: 'abstract-cloud'
  }
];

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const renderArt = (type: string | undefined) => {
    switch(type) {
      case 'abstract-lava': return <AbstractLava />;
      case 'abstract-cloud': return <AbstractCloud />;
      case 'abstract-cinema': return <AbstractCinema />;
      case 'abstract-flow': return <AbstractFlow />;
      default: return <div className="w-full h-full bg-slate-800 flex items-center justify-center"><FileText className="text-slate-500" size={48} /></div>;
    }
  };

  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="reveal-on-scroll flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-text mb-4">
              Selected <span className="text-primary">Creations</span>
            </h2>
            <p className="text-textDim max-w-xl text-lg">
              A collection of engineering challenges solved through code.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <div 
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="reveal-on-scroll spotlight-card group rounded-2xl cursor-pointer overflow-hidden h-full flex flex-col hover:shadow-lg transition-shadow"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="spotlight-border"></div>
              
              {/* Abstract Art Header - Always Dark for Art Consistency */}
              <div className="h-56 w-full relative overflow-hidden group-hover:scale-105 transition-transform duration-700 bg-slate-900">
                {renderArt(project.image)}
                <div className="absolute top-4 left-4 px-3 py-1 bg-black/80 backdrop-blur-md border border-slate-700 rounded-full text-xs font-mono text-emerald-400">
                  {project.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-text group-hover:text-emerald-500 transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight size={20} className="text-textDim group-hover:text-emerald-500 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>
                <p className="text-textDim text-sm line-clamp-3 mb-6 leading-relaxed flex-1">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.slice(0, 3).map(t => (
                    <span key={t} className="text-[10px] uppercase tracking-wider font-semibold text-textDim bg-bg px-2 py-1 rounded border border-border">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Overlay */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-0 animate-fade-in">
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm cursor-pointer"
            onClick={() => setSelectedProject(null)}
          ></div>
          
          {/* Modal Container */}
          <div className="relative w-full max-w-5xl bg-surface border border-border rounded-2xl shadow-2xl overflow-hidden animate-scale-in flex flex-col md:flex-row max-h-[90vh] md:max-h-[600px]">
             <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-20 p-2 bg-bg/50 hover:bg-red-500/20 hover:text-red-500 text-text rounded-full transition-all backdrop-blur-md"
            >
              <X size={20} />
            </button>

            {/* Modal Art Side */}
            <div className="md:w-2/5 bg-slate-900 relative min-h-[200px] md:min-h-full border-b md:border-b-0 md:border-r border-border">
              {renderArt(selectedProject.image)}
            </div>

            {/* Modal Content Side */}
            <div className="md:w-3/5 p-8 md:p-12 overflow-y-auto bg-surface">
              <div className="text-emerald-500 text-xs font-bold tracking-widest uppercase mb-3">
                // {selectedProject.category}
              </div>
              <h2 className="text-4xl font-bold text-text mb-6 tracking-tight">{selectedProject.title}</h2>
              
              <div className="prose prose-invert mb-10">
                <p className="text-textDim leading-loose text-lg">
                  {selectedProject.description}
                </p>
              </div>

              <div className="mb-10">
                <h4 className="text-xs font-mono text-textDim mb-4 uppercase tracking-wider border-b border-border pb-2 w-max">System Architecture</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map(t => (
                    <span key={t} className="px-4 py-2 text-sm bg-bg text-emerald-600 dark:text-emerald-400 rounded-md border border-border font-mono">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                {selectedProject.links.github && (
                  <a href={selectedProject.links.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-text text-bg font-bold rounded-lg hover:opacity-90 transition-all">
                    <Github size={20} />
                    Source Code
                  </a>
                )}
                {selectedProject.links.demo && (
                  <a href={selectedProject.links.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-emerald-500 text-white font-bold rounded-lg hover:bg-emerald-400 transition-colors shadow-lg shadow-emerald-500/20">
                    <ExternalLink size={20} />
                    Live Demo
                  </a>
                )}
                {selectedProject.links.download && (
                  <a href={selectedProject.links.download} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-cyan-500 text-white font-bold rounded-lg hover:bg-cyan-400 transition-colors">
                    <ExternalLink size={20} />
                    Download APK
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
