import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
// import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
// import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
// import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
// import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
// import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
// import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
// import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Mohammad Hamim',
  description: "Website for Mohammad Hamim",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Mohammad Hamim.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a Bangladeshi based <strong className="text-stone-100">Full Stack Software Engineer</strong>, currently working
        at <strong className="text-stone-100">Luday AB</strong> helping build a modern, mobile-first, Web Application.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, you can catch me Playing in <strong className="text-stone-100">Apex Legends</strong>,
        Riding my <strong className="text-stone-100">bike</strong>, or exploring beautiful{' '}
        <strong className="text-stone-100">China</strong>.
      </p>
    </>
  ),
  actions: [
    {
      href: 'MohammadHamim.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `The tech maverick from Bangladesh, currently conquering the coding cosmos in China while juggling full-stack 
  web development for a Swedish company. With a knack for turning bugs into butterflies and injecting humor into every commit message, 
  the wizard you want on your team. When I'm not coding, you'll find me pondering the mysteries of the universe or debating whether AI 
  will ever master the art of making biryani. Ready to turn your tech dreams into reality? Look no further than Mohammad Hamim.`,
  aboutItems: [
    {label: 'Location', text: 'Zhengzhou, CN', Icon: MapIcon},
    {label: 'Age', text: '20', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Bangladeshi', Icon: FlagIcon},
    {label: 'Interests', text: 'Motorcycles, ESport Games', Icon: SparklesIcon},
    {label: 'Study', text: 'Zhengzhou University', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Luday AB', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 10,
      },
      {
        name: 'Bangla',
        level: 10,
      },
      {
        name: 'Chinese',
        level: 7,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 9,
      },
      {
        name: 'Next',
        level: 7,
      },
      {
        name: 'GraphQL',
        level: 6,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 8,
      },
      {
        name: 'Python Flask',
        level: 8,
      },
      {
        name: 'Golang',
        level: 4,
      },
    ],
  },
  {
    name: 'Program development',
    skills: [
      {
        name: 'C++',
        level: 9,
      },
      {
        name: 'Java',
        level: 9,
      },
      {
        name: 'Python',
        level: 9,
      },
    ],
  },
  {
    name: 'Programming Technologies',
    skills: [
      {
        name: 'Git',
        level: 10,
      },
      {
        name: 'Docker',
        level: 8,
      },
      {
        name: 'postman',
        level: 8,
      },
      {
        name: 'Figma',
        level: 9,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Sokonekt',
    description: 'Alternative to Crowdfire',
    url: 'https://reactresume.com',
    image: porfolioImage1,
  },
  {
    title: 'Ebiore',
    description: 'akin to Tinder',
    url: 'https://reactresume.com',
    image: porfolioImage2,
  },
  {
    title: 'Employee App',
    description: 'Web app for employees',
    url: 'https://reactresume.com',
    image: porfolioImage3,
  },
  {
    title: 'Flamingo Footwear Limited',
    description: 'Ecom site for business',
    url: 'https://reactresume.com',
    image: porfolioImage4,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'July 2026',
    location: 'Zhengzhou China',
    title: 'Bachelor of Science in Software Engineering',
    content: <p>During my school years, I immersed myself in a diverse range of computer science courses, 
      mastering Object-Oriented Programming in C++, Java, and Python, delving into Compilers, Algorithms, 
      Operating Systems, and Data Structures, and exploring the fascinating world of AI. Beyond the classroom, 
      I participated in coding competitions, hackathons, and open-source projects, honing my teamwork, communication, 
      and problem-solving skills. This journey has not only equipped me with technical expertise but also instilled in me a 
      passion for innovation and a drive for continuous learning in the ever-evolving field of technology.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'February 2024 - Present',
    location: 'Luday AB',
    title: 'Full Stack Web App Developer (Intern)',
    content: (
      <p>
        I have experience utilizing React and Next.js for frontend development, alongside Python Flask for
        backend, across various projects (SAAS). Collaborating with teammates, we employed VS Code's Live
        Share feature to enhance productivity. Our primary objectives included crafting a social media
        management platform as an alternative to Crowdfire, and a family networking platform akin to Tinder
      </p>
    ),
  },
  {
    date: 'January 2021 - April 2021',
    location: 'Flamingo Footwear Limited',
    title: 'Full Stack Web Developer',
    content: (
      <p>
        Skilled in React.js, I develop UI components for global trade, optimize performance by 78%, and ensure
        seamless user experiences. Proficient in JavaScript, I design data models, handle front-end and backend tasks, 
        implement security measures, and integrate payment gateways for e-commerce.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Daniel Odem',
      text: 'He was a good programmer',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Md. jahirul Islam',
      text: 'kora maal',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    // {
    //   name: 'Someone else',
    //   text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
    //   image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    // },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'If im not sleeping, ill come back to you!',
  items: [
    {
      type: ContactType.Email,
      text: 'hamimmd555@gmail.com',
      href: 'mailto:hamimmd555@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Zhengzhou, China',
      href: 'https://www.google.com/maps/place/Zhengzhou,+Henan,+China/@34.7427829,113.4983698,11z',
    },
    {
      type: ContactType.Instagram,
      text: '@xhameemx',
      href: 'https://www.instagram.com/xhameemx/',
    },
    {
      type: ContactType.Github,
      text: 'md-hameem',
      href: 'https://github.com/md-hameem',
    },
    {
      type: ContactType.LinkedIn,
      text: 'md-hameem',
      href: 'https://www.linkedin.com/in/md-hameem/',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/md-hameem'},
  // {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/8553186/tim-baker'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/md-hameem/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/xhameemx/'},
  // {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/TimBakerx'},
];
