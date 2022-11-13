import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import TECHNOLOGIES from '@shared/technologies';

export default {
  time: '2016 - 2017',
  link: 'https://developer.sabre.com/DCCI',
  name: 'dcci',
  title: 'Digital Connect Check-In',
  subtitle: 'Broad collection of various APIs related to the flight check-in process',
  description: `Provides a rich set of services which can be called in any order assuming that a passenger itinerary is already retrieved, and the API's user has a Digital Connect Check-In session identifier. 
    Created and maintained by 2 scrum teams in Poland and United States.
    Used by multiple internal applications as well as external clients.`,
  features: ['REST & GraphQL API', 'Stateful Session Manager by Redis', 'Microservice architecture'],
  details: `I was tasked with designing Java based API providing Airline Check-In capabilities for internal applications and external Sabre customers.
    Over a year REST and GraphQL API was created based on Java and Spring. Product is successfully being used today by multiple customers.`,
  technologies: [TECHNOLOGIES.java, TECHNOLOGIES.spring, TECHNOLOGIES.junit, TECHNOLOGIES.maven, TECHNOLOGIES.jenkins],
  images: [<StaticImage layout="fullWidth" src="../../../images/dcci.png" alt="Digital Connect Check-In" />],
};
