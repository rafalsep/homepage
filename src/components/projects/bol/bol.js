import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import TECHNOLOGIES from '@shared/technologies';

export default {
  time: '2011 - 2015',
  link: 'https://ace.abb.com/webapp/BOL/ACE/NewLook/Logon.do',
  name: 'bol',
  title: 'Business Online',
  subtitle: 'The easiest way to order, repair or return ABB products.',
  description: 'E-commerce application providing an efficient, easy to use online interface for ABB Products, Parts and Repair order processing.',
  features: ['Backend developed in Java and Struts 2', 'Frontend based on angular and boostrap'],
  technologies: [TECHNOLOGIES.java, TECHNOLOGIES.spring, TECHNOLOGIES.maven, TECHNOLOGIES.junit, TECHNOLOGIES.js, TECHNOLOGIES.angular, TECHNOLOGIES.bootstrap, TECHNOLOGIES.oracle],
  images: [<StaticImage src="../../../images/bol.jpeg" alt="Business Online" />],
};
