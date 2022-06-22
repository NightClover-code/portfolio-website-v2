export interface IconInterface {
  Icon: JSX.Element;
  href?: string;
  mailto?: string;
}

export interface ProjectInterface {
  content: {
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
  };
  homeImg: {
    src: string;
    width: number;
    height: number;
    alt: string;
  };

  showcaseImg: {
    src: string;
    width: number;
    height: number;
    alt: string;
  };
}
