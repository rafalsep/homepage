import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import TECHNOLOGIES from '@shared/technologies';

export default {
  time: '2021 - Now',
  link: 'https://developer.sabre.com/home',
  title: 'Experience Layer',
  subtitle: 'GraphQL API tailored specifically for Sabre frontend/native applications to improve user experience',
  description: 'Backend for frontend architecture handling integration with multiple APIs, orchestration and providing response based on requester needs eliminating over-fetching',
  features: ['Apollo Server exposing GraphQL API', 'Written in Typescript', 'Deployed to GCP using Terraform'],
  technologies: [
    TECHNOLOGIES.typescript,
    TECHNOLOGIES.nodejs,
    TECHNOLOGIES.npm,
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
  image: <StaticImage src="./experienceLayer.png" alt="Digital Workspace Preview" />,
};
