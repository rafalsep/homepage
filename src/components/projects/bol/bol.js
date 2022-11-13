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
  features: ['Backend developed in Java and Struts 2', 'Frontend based on AngularJS and Boostrap'],
  details: `I worked on E-commerce application providing easy to use online interface for ABB Products, Parts and Repair order processing.
    It was a complex application built in multiple programming languages and spanning across multiple systems. Those included Struts in the frontend and backend in Java, C#, Visual Basic, Oracle, OMS. 

    First two years I spent most of my time developing new functionalities and maintaining existing product. After that we decided to migrate UI from Struts into brand new framework - AngularJS. That required also backend refactor and exposing a brand new REST API created in Spring.
    I was leading the effort, starting from the design & approach through implementation and testing. 
    It was a great success and after a year of gradual component replacement we migrated entire UI into brand new architecture.`,
  technologies: [TECHNOLOGIES.java, TECHNOLOGIES.spring, TECHNOLOGIES.maven, TECHNOLOGIES.junit, TECHNOLOGIES.js, TECHNOLOGIES.angular, TECHNOLOGIES.bootstrap, TECHNOLOGIES.oracle],
  images: [<StaticImage layout="fullWidth" src="../../../images/bol.jpeg" alt="Business Online" />],
};
