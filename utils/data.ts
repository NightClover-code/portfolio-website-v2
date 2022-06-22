import {
  DesignIcon,
  DevelopmentIcon,
  SEOIcon,
} from '../components/Icons/Services';
import { backendItems, frontendItems, fullStackItems } from './portfolio-data';
import { allSkills, backendEndSkills, frontEndSkills } from './skills-data';

//temp data before cms
export const portfolio = [
  { category: 'Frontend', items: frontendItems },
  { category: 'Backend', items: backendItems },
  { category: 'FullStack', items: fullStackItems },
];

export const skills = [
  { category: 'All skills', items: allSkills },
  { category: 'Frontend', items: frontEndSkills },
  { category: 'Backend', items: backendEndSkills },
];

export const services = [
  {
    title: 'Design',
    description: `
      I’ll start by making a suitable design for your website.
    `,
    image: {
      imgSrc: 'design.jpg',
      width: 1171,
      height: 781,
    },
    Icon: DesignIcon,
  },
  {
    title: 'Development',
    description: `
      Then comes the build, the step where the website goes live on the web. 
    `,
    image: {
      imgSrc: 'development.jpg',
      width: 1172,
      height: 780,
    },
    Icon: DevelopmentIcon,
  },
  {
    title: 'SEO',
    description: `
      To finish things off, a boost in SEO to rank your website at google’s top searches.
    `,
    image: {
      imgSrc: 'seo.jpg',
      width: 3008,
      height: 2177,
    },
    Icon: SEOIcon,
  },
];
