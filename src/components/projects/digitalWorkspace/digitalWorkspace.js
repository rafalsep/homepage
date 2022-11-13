import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import TECHNOLOGIES from '@shared/technologies';

export default {
  time: '2019 - Now',
  link: 'https://www.sabre.com/products/digital-workspace/',
  name: 'dw',
  title: 'Digital Workspace',
  subtitle: 'Responsive E-commerce web and native application providing airline agents airport capabilities',
  description:
    'Application providing capabilities like passenger check-in, printing bag tags or boarding. Developed by over 60 people spread across Poland, United States and Argentina\n' +
    'Used by dozens of airlines such as Aeroflot, Virgin Australia, Kulula or Latam.',
  features: ['Written using React and Javascript ', 'Hosted in AWS', 'With test coverage over 90%', 'Fully e2e tested using TestCafe', 'Supports 26 languages'],
  details: `Joined the team of two year old E-commerce project providing travel agents and airport agents check-in, boarding, ancillaries/seats addition/purchase capabilities as responsive web and native application. 
    Project was a mess, most of the original team left or was about to leave. My first year I spent on improving various aspects of the application. Mostly focused on basics like introducing common code formatting, linters, enhancing test coverage, adding e2e tests, building Jenkins CI/CD, updating documentation, formalising contributors guide, moving deployment to AWS and improving UX.
    
    Once project was stabilised I was mainly occupied with enhancing project with new business features, handling design, building PoC, implementation and documentation.
    At the same time I was making sure project is up to date with latest software.
    
    Project was split into multiple modules each designed to serve a different purpose:
    - common platform - separate repository used to build common react components shared across multiple frontend applications via storybook
    - ui - frontend for the web application 
    - experience layer - dedicated backend for the frontend handling orchestration and normalising data
    - e2e - handling e2e tests for the frontend, split into different categories like sanity/smoke/fft/st tests
    - bridge - layer handling communication with native devices like boarding pass scanner or bag tag printer
    - native - native application for Android and IoS
    
    Today Digital Workspace is used by few dozen airlines across hundreds of locations in the world.`,
  technologies: [
    TECHNOLOGIES.react,
    TECHNOLOGIES.redux,
    TECHNOLOGIES.js,
    TECHNOLOGIES.typescript,
    TECHNOLOGIES.html,
    TECHNOLOGIES.sass,
    TECHNOLOGIES.css,
    TECHNOLOGIES.nodejs,
    TECHNOLOGIES.npm,
    TECHNOLOGIES.git,
    TECHNOLOGIES.bitbucket,
    TECHNOLOGIES.aws,
    TECHNOLOGIES.jenkins,
    TECHNOLOGIES.jest,
    TECHNOLOGIES.testcafe,
    TECHNOLOGIES.webpack,
    TECHNOLOGIES.eslint,
    TECHNOLOGIES.prettier,
    TECHNOLOGIES.sonar,
  ],
  images: [
    <StaticImage layout="fullWidth" src="../../../images/digitalWorkspace.png" alt="Digital Workspace Preview" />,
    <StaticImage objectFit="fill" className="project-images-secondary" src="../../../images/digitalWorkspace2.png" alt="Digital Workspace Preview" />,
    <StaticImage objectFit="fill" className="project-images-secondary" src="../../../images/digitalWorkspace3.png" alt="Digital Workspace Preview" />,
    <StaticImage objectFit="fill" className="project-images-secondary" src="../../../images/digitalWorkspace4.png" alt="Digital Workspace Preview" />,
  ],
};
