import { ReactElement } from "react";

export interface AboutProps {
    about: {
      bio: {
        markdown: string;
        html: string;
      };
      otherExperience: {
        markdown: string;
        html: string;
      };
    }
}

export interface LanguageProps {
  languages: {
    id: string
    name: string;
    order: number;
    publishedAt: string;
  }[];
}

export interface TimelineProps {
  timelines: {
    id: string;
    date: string;
    endDate: string;
    title: string;
    description: string;
  }[];
}

export interface ProfileProps {
  imageSrc: string;
  name: string;
  description: string;
  width: number;
  height: number;
}

export interface ProjectProps {
  projects: {
    id: string;
    title: string;
    overview: string;
    github: string;
    demoLink: string;
    publishedAt: string;
  }[];
}

export interface SocialCardProps {
  username: string;
  desc?: string;
  service: string;
  href: string;
  icon: ReactElement;
}
  
  
