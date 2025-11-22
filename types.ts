export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  tech: string[];
  image?: string;
  links: {
    github?: string;
    demo?: string;
    download?: string;
  };
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
  tech: string[];
}

export interface SkillCategory {
  name: string;
  skills: string[];
  icon: string;
}