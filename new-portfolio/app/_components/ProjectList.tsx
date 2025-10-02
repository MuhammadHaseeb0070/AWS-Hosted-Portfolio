'use client';
import { PROJECTS } from '@/lib/data';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React from 'react';
import Project from './Project';
import SectionTitle from '@/components/SectionTitle';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const ProjectList = () => {
    const container = React.useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: container.current,
                    start: 'top 70%',
                    end: 'bottom bottom',
                    scrub: 0.5,
                },
            });

            tl.from('.project-card', {
                y: 100,
                opacity: 0,
                stagger: 0.1,
            });
        },
        { scope: container },
    );

    return (
        <section className="pb-section" id="selected-projects">
            <div className="container" ref={container}>
                <SectionTitle>Selected Projects</SectionTitle>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {PROJECTS.map((project) => (
                        <div key={project.slug} className="project-card">
                            <Project project={project} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectList;
