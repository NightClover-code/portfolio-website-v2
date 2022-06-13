import {
  DesignIcon,
  DevelopmentIcon,
  SEOIcon,
} from '../components/Icons/Services';
import { backendItems, frontendItems } from './portfolio-data';
import { allSkills, backendEndSkills, frontEndSkills } from './skills-data';

export const defaultTags = [
  { category: 'Portfolio', tag: 'All works' },
  { category: 'Skills', tag: 'All skills' },
];

//temp data before cms
export const portfolio = [
  { category: 'Frontend', items: frontendItems },
  { category: 'Backend', items: backendItems },
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
    imgSrc: 'design.jpg',
    Icon: DesignIcon,
  },
  {
    title: 'Development',
    description: `
      Then comes the build, the step where the website goes live on the web. 
    `,
    imgSrc: 'development.jpg',
    Icon: DevelopmentIcon,
  },
  {
    title: 'SEO',
    description: `
      To finish things off, a boost in SEO to rank your website at google’s top searches.
    `,
    imgSrc: 'seo.jpg',
    Icon: SEOIcon,
  },
];
