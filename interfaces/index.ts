export interface IconInterface {
  Icon: JSX.Element;
  href?: string;
  mailto?: string;
}

export interface ProjectInterface {
  category: string;
  projectItems: ProjectItemInterface[];
}

export interface ImageInterface {
  url: string;
  width: number;
  height: number;
  alt: string;
}

export interface ContentInterface {
  title?: string;
  description?: string;
  richTitle?: Raw;
  link?: {
    website: string;
    github: string;
  };
  challenge?: Challenge;
  technologies?: Raw[];
}

export interface ProjectItemInterface {
  slug: string;
  content: ContentInterface;
  homeImg: ImageInterface;
  showcaseImgs: ImageInterface[];
}

export interface Challenge {
  description: Raw;
  challenges: string[];
}

export interface Raw {
  raw: any;
}
