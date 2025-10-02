'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React from 'react';

const ArrowAnimation = () => {
    const containerRef = React.useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const arrows = containerRef.current?.querySelectorAll('.arrow');
            if (!arrows) return;

            gsap.to(arrows, {
                y: 10,
                opacity: 0.3,
                duration: 1,
                stagger: 0.2,
                repeat: -1,
                ease: 'power1.inOut',
            });
        },
        { scope: containerRef },
    );

    return (
        <div
            ref={containerRef}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col gap-1 opacity-50"
        >
            <div className="arrow w-6 h-6 border-l-2 border-b-2 border-foreground rotate-[-45deg]"></div>
            <div className="arrow w-6 h-6 border-l-2 border-b-2 border-foreground rotate-[-45deg] -mt-3"></div>
            <div className="arrow w-6 h-6 border-l-2 border-b-2 border-foreground rotate-[-45deg] -mt-3"></div>
        </div>
    );
};

export default ArrowAnimation;
