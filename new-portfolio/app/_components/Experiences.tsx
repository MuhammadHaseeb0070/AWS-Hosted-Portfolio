'use client';
import { MY_EXPERIENCE } from '@/lib/data';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React from 'react';
import SectionTitle from '@/components/SectionTitle';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Experiences = () => {
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

            tl.from('.experience-item', {
                y: 100,
                opacity: 0,
                stagger: 0.1,
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

            tl.to('.experience-item', {
                y: -100,
                opacity: 0,
                stagger: 0.02,
            });
        },
        { scope: container },
    );

    return (
        <section className="pb-section" id="my-experience">
            <div className="container" ref={container}>
                <SectionTitle>My Experience</SectionTitle>

                <div className="space-y-8">
                    {MY_EXPERIENCE.map((exp, index) => (
                        <div
                            key={index}
                            className="experience-item p-8 bg-background-light rounded-xl border border-border hover:border-primary transition-all duration-300 group"
                        >
                            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                                <div>
                                    <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                                        {exp.title}
                                    </h3>
                                    <p className="text-xl text-muted-foreground">
                                        {exp.company}
                                    </p>
                                </div>
                                <div className="text-primary font-medium">
                                    {exp.duration}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Education Section */}
                <div className="mt-16">
                    <h3 className="text-3xl font-bold mb-8">Education</h3>
                    <div className="experience-item p-8 bg-background-light rounded-xl border border-border">
                        <h4 className="text-2xl font-bold mb-2">BS in Computer Science</h4>
                        <p className="text-xl text-muted-foreground mb-4">
                            Sukkur IBA University • 2021 – 2025
                        </p>
                        <div className="mt-6">
                            <h5 className="font-semibold mb-3 text-primary">Relevant Courses:</h5>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-muted-foreground">
                                <span>• Web Engineering</span>
                                <span>• Mobile App Development</span>
                                <span>• HCI</span>
                                <span>• Enterprise App Development</span>
                                <span>• Artificial Intelligence</span>
                                <span>• Machine Learning</span>
                                <span>• Networking</span>
                                <span>• Parallel Computing</span>
                                <span>• DBMS</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experiences;
