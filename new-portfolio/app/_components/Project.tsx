'use client';
import { IProject } from '@/types';
import { ExternalLink } from 'lucide-react';

interface ProjectProps {
    project: IProject;
}

const Project = ({ project }: ProjectProps) => {
    return (
        <div className="group relative overflow-hidden rounded-xl bg-background-light border border-border hover:border-primary transition-all duration-500">
            <div className="aspect-video relative overflow-hidden bg-muted">
                <div className="w-full h-full bg-foreground/5 flex items-center justify-center">
                    <span className="text-muted-foreground">Project Image</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                    <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                        {project.title}
                    </h3>
                    <span className="text-sm text-muted-foreground">{project.year}</span>
                </div>
                <p className="text-muted-foreground mb-4 line-clamp-2">
                    {project.description.replace(/<[^>]*>/g, '').substring(0, 150)}...
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.slice(0, 3).map((tech) => (
                        <span
                            key={tech}
                            className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full border border-primary/20"
                        >
                            {tech}
                        </span>
                    ))}
                    {project.techStack.length > 3 && (
                        <span className="px-3 py-1 text-xs bg-muted text-muted-foreground rounded-full">
                            +{project.techStack.length - 3} more
                        </span>
                    )}
                </div>
                <div className="flex gap-3">
                    {project.liveUrl && (
                        <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-2 text-sm text-primary hover:underline"
                        >
                            <ExternalLink size={16} />
                            Live Demo
                        </a>
                    )}
                    {project.sourceCode && (
                        <a
                            href={project.sourceCode}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-2 text-sm text-primary hover:underline"
                        >
                            <ExternalLink size={16} />
                            Source Code
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Project;
