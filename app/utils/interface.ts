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

export interface TagProps {
  tags: {
    id: string
    name: string;
    order: number;
    type: string;
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

export interface PhotoGalleryProps {
  images: {
    title: string;
    description: string;
    altText: string;
    image: {
      url: string;
    };
    createdAt: string;
  }[];
}
  
  
