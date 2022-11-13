import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import TECHNOLOGIES from '@shared/technologies';

export default {
  time: '2017 - 2019',
  link: 'https://www.sabre.com/products/digital-experience/',
  name: 'dx',
  title: 'Digital Experience',
  subtitle: 'Next-Generation Airline E-Commerce',
  description: `E-commerce web application used to book, exchange and checkin airline tickets.
    Designed as highly customisable, modern responsive web application with mobile first approach. 
    Created and maintained by over 30 people spread across Poland, United States and India
    Used by dozens of airlines such as Kulula, Air Serbia or Bangkok Airways across the world.`,
  features: ['Written using React and Javascript', 'Supported on all modern browsers and devices ', 'Hosted in AWS', 'Wcag 2.1 complaint', 'Supports 26 languages'],
  details: `Joined the team in the middle of second big release. It was my second big E-commerce project used by millions of users across the world. It's main purpose was to provide highly customisable Whitelabel product for booking and managing airline reservations.
    My first year I spent enhancing it with new key features and improving various aspects of the application. 
    
    On one end I focused on features like ability to exchange reservations, pay for booking with loyalty points, supporting refunds/cancellations and managing already booked flights. On the other I had to make sure that each aspect like UX, developer experience, performance, ci/cd, monitoring, accessibility, testing didn't fall behind.
    It was a very challenging year but at the end of it project was used by more than 10 airlines across 2 continents. 
    
    Next year brought even more challenges. Application was migrated from on-premises setup into AWS. CI/CD was rewritten and migrated from TeamCity to Jenkins. Frontend became WCAG 2.1 complaint. E2E tests were added. In house CMS integration.
    
    Today Digital Experience is used by dozens of airlines supporting millions of users, actively being enhanced. In 2021 together with Digital Workspace and 2 more frontend projects it was integrated with Experience Layer backend API to enhance UX.`,
  technologies: [
    TECHNOLOGIES.react,
    TECHNOLOGIES.redux,
    TECHNOLOGIES.js,
    TECHNOLOGIES.lodash,
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
    <StaticImage layout="fullWidth" src="../../../images/digitalExperience.png" alt="Digital Experience Preview" />,
    <StaticImage objectFit="fill" className="project-images-secondary" src="../../../images/digitalExperience2.png" alt="Digital Experience Preview" />,
    <StaticImage objectFit="fill" className="project-images-secondary" src="../../../images/digitalExperience3.png" alt="Digital Experience Preview" />,
    <StaticImage objectFit="fill" className="project-images-secondary" src="../../../images/digitalExperience4.png" alt="Digital Experience Preview" />,
  ],
};
