import {
  DesignIcon,
  DevelopmentIcon,
  SEOIcon,
} from '../components/Icons/Services';

export const navItems = [
  { title: 'Home', href: '/' },
  {
    title: 'Portfolio',
    jumpOptions: {
      jumpVal: '.projects__section',
      duration: 1000,
    },
  },
  {
    title: 'Skills',
    jumpOptions: {
      jumpVal: '.skills__section',
      duration: 1500,
    },
  },
  {
    title: 'Services',
    jumpOptions: {
      jumpVal: '.services__section',
      duration: 2000,
    },
  },
  { title: 'About', href: '/about' },
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
