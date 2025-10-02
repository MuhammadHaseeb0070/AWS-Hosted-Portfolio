import React from 'react';

const SectionTitle = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex items-center gap-4 mb-12">
            <h2 className="text-4xl md:text-5xl font-bold">{children}</h2>
            <div className="h-px bg-border flex-grow"></div>
        </div>
    );
};

export default SectionTitle;
