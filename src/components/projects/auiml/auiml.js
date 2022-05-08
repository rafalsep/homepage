import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import TECHNOLOGIES from '@shared/technologies';

export default {
  time: '2009 - 2011',
  link: 'https://lwn.net/Articles/95570/',
  title: 'Abstract User Interface Markup Language',
  subtitle: 'Easy graphical component creation and development',
  description: `Abstract XML based language that allows user to create graphical components such as
    buttons or tables directly in eclipse and translate them to swing, jsf or pure
    javascript/dojo solution`,
  features: ['Developed using Java, Java Swing and Ant', 'Component creation based on custom Eclipse plugin', 'Deployed and manager by WebSphere Application Server'],
  technologies: [TECHNOLOGIES.java, TECHNOLOGIES.junit],
  image: <StaticImage src="./auiml.png" alt="Abstract User Interface Markup Language" />,
};
