export interface IconInterface {
  Icon: JSX.Element;
  href?: string;
  mailto?: string;
}

export interface ProjectInterface {
  category: string;
  projectItems: {
    content: ContentInterface;
    homeImg: ImageInterface;
    showcaseImg: ImageInterface;
  }[];
}

export interface ImageInterface {
  url: string;
  width: number;
  height: number;
  alt: string;
}

export interface ContentInterface {
  title: string;
  description: string;
  richTitle: {
    raw: any;
  };
  slug: string;
  link: {
    website: string;
    github: string;
  };
  challenge: {
    description: {
      raw: any;
    };
    challenges: string[];
  };
  technologies: {
    raw: any;
  }[];
}
