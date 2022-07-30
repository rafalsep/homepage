import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import TECHNOLOGIES from '@shared/technologies';

export default {
  time: '2016 - 2017',
  link: 'https://developer.sabre.com/DCCI',
  name: 'dcci',
  title: 'Digital Connect Check-In',
  subtitle: 'Broad collection of various APIs related to the flight check-in process',
  description:
    "Provides a rich set of services which can be called in any order assuming that a passenger itinerary is already retrieved, and the API's user has a Digital Connect Check-In session identifier",
  features: ['REST & GraphQL API', 'Stateful Session Manager by Redis', 'Microservice architecture'],
  technologies: [TECHNOLOGIES.java, TECHNOLOGIES.spring, TECHNOLOGIES.junit, TECHNOLOGIES.maven, TECHNOLOGIES.jenkins],
  image: <StaticImage src="../../../images/dcci.png" alt="Digital Connect Check-In" />,
};
