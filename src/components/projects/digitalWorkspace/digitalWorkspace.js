import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import TECHNOLOGIES from '@shared/technologies';

export default {
  time: '2019 - Now',
  link: 'https://www.sabre.com/products/digital-workspace/',
  name: 'dw',
  title: 'Digital Workspace',
  subtitle: 'Empower Airport and Call Center Agents to Focus on Customers Evolution of Interact',
  description: 'Web and mobile application providing travel agents and airport agents shop & book, exchange and check-in capabilities',
  features: ['responsive web application written in ReactJS', 'iPad native application'],
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
    <StaticImage src="../../../images/digitalWorkspace.png" alt="Digital Workspace Preview" />,
    <StaticImage objectFit="fill" className="project-images-secondary" src="../../../images/digitalWorkspace2.png" alt="Digital Workspace Preview" />,
    <StaticImage objectFit="fill" className="project-images-secondary" src="../../../images/digitalWorkspace3.png" alt="Digital Workspace Preview" />,
    <StaticImage objectFit="fill" className="project-images-secondary" src="../../../images/digitalWorkspace4.png" alt="Digital Workspace Preview" />,
  ],
};
