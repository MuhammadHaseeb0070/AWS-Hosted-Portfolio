'use client';
import { MY_STACK } from '@/lib/data';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React from 'react';
import SectionTitle from '@/components/SectionTitle';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Skills = () => {
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

            tl.from('.skill-item', {
                y: 100,
                opacity: 0,
                stagger: 0.05,
            });
        },
        { scope: container },
    );

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: container.current,
                    start: 'bottom 50%',
                    end: 'bottom 10%',
                    scrub: 0.5,
                },
            });

            tl.to('.skill-item', {
                y: -100,
                opacity: 0,
                stagger: 0.02,
            });
        },
        { scope: container },
    );

    return (
        <section className="pb-section" id="skills">
            <div className="container" ref={container}>
                <SectionTitle>My Skills</SectionTitle>

                <div className="grid md:grid-cols-2 gap-16">
                    {Object.entries(MY_STACK).map(([category, skills]) => (
                        <div key={category} className="skill-item">
                            <h3 className="text-2xl font-bold mb-8 capitalize text-primary">
                                {category}
                            </h3>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                                {skills.map((skill) => (
                                    <div
                                        key={skill.name}
                                        className="flex flex-col items-center justify-center p-6 bg-background-light rounded-xl border border-border hover:border-primary transition-all duration-300 group"
                                    >
                                        <div className="w-16 h-16 mb-4 relative flex items-center justify-center">
                                            {skill.icon && (
                                                <div className="w-12 h-12 bg-foreground/10 rounded-lg"></div>
                                            )}
                                        </div>
                                        <p className="text-center text-sm font-medium group-hover:text-primary transition-colors">
                                            {skill.name}
                                        </p>
                                    </div>
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
