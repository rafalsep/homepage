import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import TECHNOLOGIES from '@shared/technologies';

export default {
  time: '2017 - 2019',
  link: 'https://www.sabre.com/products/digital-experience/',
  name: 'dx',
  title: 'Digital Experience',
  subtitle: 'Next-Generation Airline E-Commerce',
  description: 'Web application used to book, exchange and checkin airline tickets. Used by airlines such as Kulula, Air Serbia or Bangkok Airways',
  features: ['Responsive web application written in ReactJS', 'Mobile first design', 'Deployed to AWS', 'Developed by over 30 people spread across Poland, United States and India'],
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
  image: <StaticImage src="../../../images/digitalExperience.png" alt="Digital Experience Preview" />,
};
