import {
  DesignIcon,
  DevelopmentIcon,
  SEOIcon,
} from '../components/Icons/Services';
import { frontendItems } from './portfolio-data';

//temp data before cms
export const portfolio = [{ category: 'Frontend', items: frontendItems }];

export const skills = [
  { title: 'React.js / Redux.js', mastery: '95%' },
  { title: 'Headless CMS', mastery: '95%' },
  { title: 'Figma', mastery: '90%' },
  { title: 'Javascript ES6', mastery: '95%' },
  { title: 'Express.js / Node.js', mastery: '90%' },
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
