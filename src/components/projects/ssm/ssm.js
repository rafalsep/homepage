import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import TECHNOLOGIES from '@shared/technologies';

export default {
  time: '2015 - 2016',
  link: 'https://www.lionair.co.id/en/manage-booking/web-check-in',
  name: 'ssm',
  title: 'Sabre Sonic Mobile',
  subtitle: 'Fully customizable mobile checkin and booking solution',
  description: 'Web application used to book and checkin airline tickets. Used by almost 20 airlines such as Etihad Airways, Alitalia, Kulula or Aeroflot',
  features: [
    'Backend developed in Java',
    'Frontend based on backbone and jQuery',
    'Customizable via in house CMS',
    'Created and maintained by over 30 people spread across Poland, United States and India.',
  ],
  details: `When I joined Sabre Sonic Mobile was an outdated Full Stack Project based on Java/Spring/Oracle on the backend and Backbone/JQuery on the frontend.
    It was used to provide functionality to book new flights and exchange, refund, cancel existing reservations. 
    First few months I spent on learning and improving architecture and tools of the project. 
    Later I changed my focus and mostly worked on designing and implementing new features.`,
  technologies: [
    TECHNOLOGIES.java,
    TECHNOLOGIES.spring,
    TECHNOLOGIES.maven,
    TECHNOLOGIES.junit,
    TECHNOLOGIES.js,
    TECHNOLOGIES.jquery,
    TECHNOLOGIES.backbone,
    TECHNOLOGIES.sass,
    TECHNOLOGIES.git,
    TECHNOLOGIES.grunt,
    TECHNOLOGIES.html,
    TECHNOLOGIES.css,
    TECHNOLOGIES.jenkins,
  ],
  images: [<StaticImage layout="fullWidth" src="../../../images/ssm.png" alt="Sabre Sonic Mobile" />],
};
