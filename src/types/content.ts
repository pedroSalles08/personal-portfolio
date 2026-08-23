export type Locale = 'pt-BR' | 'en';

export interface SocialLink {
  name: string;
  url: string;
  icon: 'github' | 'mail' | 'whatsapp' | 'instagram';
  ariaLabel: string;
}

export interface ExperienceItem {
  title: string;
  organization: string;
  period: string;
  location?: string;
  type?: string;
  description: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  tags: string[];
  imageSrc: string;
  imageAlt: string;
  ctaText?: string;
  ctaUrl?: string;
  hasLiveCta: boolean;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface ContentData {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    home: string;
    experience: string;
    projects: string;
    skills: string;
    contact: string;
  };
  home: {
    name: string;
    role: string;
    bio: string;
    greetings: {
      morning: string;
      afternoon: string;
      evening: string;
    };
    socials: SocialLink[];
  };
  experience: {
    sectionTitle: string;
    tabs: {
      experience: string;
      education: string;
      extracurricular: string;
    };
    items: {
      experience: ExperienceItem[];
      education: ExperienceItem[];
      extracurricular: ExperienceItem[];
    };
  };
  projects: {
    sectionTitle: string;
    items: ProjectItem[];
  };
  skills: {
    sectionTitle: string;
    categories: SkillCategory[];
    bioParagraphs: string[];
    resumeButton: string;
    resumeNotice: string;
    emailLabel: string;
  };
  contact: {
    sectionTitle: string;
    name: string;
    role: string;
    emailLabel: string;
    emailValue: string;
    socials: SocialLink[];
    copyright: string;
  };
}
