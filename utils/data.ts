import {
  DesignIcon,
  DevelopmentIcon,
  SEOIcon,
} from '../components/Icons/Services';

//temp data before cms
export const portfolio = [
  {
    content: {
      title: 'Team App website design',
      description: `
        Full website design and build for a concept team collaboration platform. This website also includes a beautiful blog. I’ve built the site from scratch using NextJS and GraphCMS.
      `,
    },
    image: {
      imgSrc: 'frontend/team.svg',
      width: 570,
      height: 570,
    },
  },
  {
    content: {
      title: 'Url Shortener landing page',
      description: `
        Full website design of an url shortener service. I’ve built the site with ReactJS, and added auth functionality using ReduxJS and Firebase.
      `,
    },
    image: {
      imgSrc: 'frontend/url-shortener.svg',
      width: 570,
      height: 467,
    },
  },
  {
    content: {
      title: 'Easybank website design',
      description: `
        Full website design for a digital banking platform landing page. I’ve built the site from scratch using GatsbyJS and ContentfulCMS.
      `,
    },
    image: {
      imgSrc: 'frontend/easybank.svg',
      width: 570,
      height: 570,
    },
  },
];

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
