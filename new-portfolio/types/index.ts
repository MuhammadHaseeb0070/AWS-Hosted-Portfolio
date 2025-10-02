export interface IProject {
    title: string;
    slug: string;
    techStack: string[];
    thumbnail: string;
    longThumbnail: string;
    images: string[];
    liveUrl?: string;
    sourceCode?: string;
    year: number;
    description: string;
    role: string;
}

export interface IExperience {
    title: string;
    company: string;
    duration: string;
}

export interface ITechStack {
    name: string;
    icon: string;
}
