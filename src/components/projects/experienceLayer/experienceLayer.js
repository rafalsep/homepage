import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import TECHNOLOGIES from '@shared/technologies';

export default {
  time: '2021 - Now',
  link: 'https://developer.sabre.com/home',
  name: 'el',
  title: 'Experience Layer',
  subtitle: 'GraphQL API tailored specifically for Sabre frontend/native applications to improve user experience',
  description: 'Backend for frontend architecture handling integration with multiple APIs, orchestration and providing response based on requester needs eliminating over-fetching',
  features: ['Apollo Server exposing GraphQL API', 'Written in Typescript', 'Cloud native design', 'deployed as GCE using Terraform'],
  details: `After working for a few years in Digital Workspace project the frontend was getting bigger and bigger and we've made a decision to build a dedicated middleware to improve the performance and UX.
  I was tasked to design, built PoC and implement middleware based on BFF (Backend for the Frontend) architecture for multiple Sabre frontend applications.
  
  After a year, Experience Layer was created as highly scalable and resilient stateless API based on Apollo GraphQL, written in typescript and deployed as GCE to GCP.
  It's main role was handling orchestration, connection to multiple API providers as well as eliminating over fetching by adjusting response to the client needs (mobile vs desktop) 
  Built as cloud native solution leveraging terraform for deployment and GCP for monitoring and alerting.
  Semi-auto typescript typed, generated based on consumed API swagger definitions as well as from exposed graphql schema for application and unit/ integration/e2e tests.
  `,
  technologies: [
    TECHNOLOGIES.typescript,
    TECHNOLOGIES.nodejs,
    TECHNOLOGIES.npm,
    TECHNOLOGIES.graphql,
    TECHNOLOGIES.apollo,
    TECHNOLOGIES.express,
    TECHNOLOGIES.git,
    TECHNOLOGIES.bitbucket,
    TECHNOLOGIES.gcp,
    TECHNOLOGIES.terraform,
    TECHNOLOGIES.jenkins,
    TECHNOLOGIES.jest,
    TECHNOLOGIES.webpack,
    TECHNOLOGIES.postman,
    TECHNOLOGIES.eslint,
    TECHNOLOGIES.prettier,
    TECHNOLOGIES.sonar,
  ],
  images: [
    <StaticImage layout="fullWidth" src="../../../images/experienceLayer2.png" alt="Digital Workspace Preview" />,
    <StaticImage objectFit="fill" className="project-images-secondary" src="../../../images/experienceLayer3.png" alt="Experience Layer" />,
    <StaticImage objectFit="fill" className="project-images-secondary" src="../../../images/experienceLayer.png" alt="Experience Layer" />,
    <StaticImage objectFit="fill" className="project-images-secondary" src="../../../images/experienceLayer4.png" alt="Experience Layer" />,
  ],
};
