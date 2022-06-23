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
  description: string;
  richTitle?: {
    raw: any;
  };
  link?: {
    website: string;
    github: string;
  };
  challenge?: {
    description: {
      raw: any;
    };
    challenges: string[];
  };
  technologies?: {
    raw: any;
  }[];
}

export interface ProjectItemInterface {
  slug: string;
  content: ContentInterface;
  homeImg: ImageInterface;
  showcaseImg: ImageInterface;
}
