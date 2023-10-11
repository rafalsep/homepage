import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import TECHNOLOGIES from '@shared/technologies';

export default {
  time: '2023 - Now',
  name: 'hpp',
  title: 'Hosted Payment Page',
  subtitle: 'Independent Payment Page that can be integrated with any existing web or mobile application',
  description: `Full Stack Next.js standalone mobile and web application exposing capabilities like real-time, async and offline payment.
  Supports common payment methods like credit card or PayPal as well as more exotic ones like Konbini or China Union Pay.
  Developed by 5 scrum teams spread across Poland, United States and Bangalore`,
  features: ['Written using React and Next.js', 'Automated deployment and testing via Playwright', 'Running inside GKE and deployed via terraform', 'WCAG 2.1, Fraudcheck and PCI 4.0 compliant'],
  details: `Joined the team at the beginning of the year. I was tasked with building and delivering standalone web and mobile application that could be consumed by one of the clients within 6 months. 
    First release main purpose was to provide payment capability for third party web application via common forms of payment like credit cards or paypal.
    At the same time it had to be accessible, SII/GDPR/PCI compliant, support Fraudcheck/3DS and translate to 26 languages.
    
    First two months I spent on architecting and building the project core like - frontend, backend, ci/cd, automation, CMS integration, analytics. 
    Next months were focused on delivering business capabilities and solving edge cases like session expiration or support for older mobile devices.
    
    Project was delivered to Production one week ahead of time. It's already being used by AirJapan and will be extended to 8 more clients within next few months.`,
  technologies: [
    TECHNOLOGIES.react,
    TECHNOLOGIES.nextjs,
    TECHNOLOGIES.typescript,
    TECHNOLOGIES.playwright,
    TECHNOLOGIES.html,
    TECHNOLOGIES.css,
    TECHNOLOGIES.nodejs,
    TECHNOLOGIES.npm,
    TECHNOLOGIES.git,
    TECHNOLOGIES.bitbucket,
    TECHNOLOGIES.gcp,
    TECHNOLOGIES.terraform,
    TECHNOLOGIES.jenkins,
    TECHNOLOGIES.jest,
    TECHNOLOGIES.eslint,
    TECHNOLOGIES.prettier,
  ],
  images: [
    <StaticImage layout="fullWidth" src="../../../images/hpp.png" alt="Sabre Enterprise Payment Gateway Hosted Payment Page Preview" />,
    <StaticImage objectFit="fill" className="project-images-secondary" src="../../../images/hpp2.png" alt="Sabre Enterprise Payment Gateway Hosted Payment Page Preview" />,
    <StaticImage objectFit="fill" className="project-images-secondary" src="../../../images/hpp3.png" alt="Sabre Enterprise Payment Gateway Hosted Payment Page Preview" />,
    <StaticImage objectFit="fill" className="project-images-secondary" src="../../../images/hpp4.png" alt="Sabre Enterprise Payment Gateway Hosted Payment Page Preview" />,
  ],
};
