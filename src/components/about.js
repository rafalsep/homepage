import React from 'react';
import TECHNOLOGIES from '@shared/technologies';

const technologies = Object.values(TECHNOLOGIES);

const About = ({ standalone }) => (
  <section>
    {!standalone && (
      <div>
        <header>
          <h2 className="pb-10">About me</h2>
        </header>
        <p className="pb-4">
          I live in Cracow, Poland and I&apos;m a master of science graduate of{' '}
          <a href="https://en.uj.edu.pl/" rel="noreferrer" target="_blank">
            Jagiellonian University
          </a>
          , majored in computer science with a specialization in applied computer science.
        </p>
        <p>With over 13 years of professional experience I&apos;ve worked with multiple technologies and languages in both frontend and backend.</p>
        <p>I tend to put my fingers into every aspect of computer science wearing all kind of hats.</p>
        <p className="pb-4">Lately I&apos;ve been focused on modern web application design and development in airline sector under E-Commerce area.</p>
        <p className="pb-4">Clean code and Best practices enthusiast. React, Typescript and GraphQL fan.</p>
        <p className="pb-4">
          Currently I&apos;m self employed working on a contract through vendor{' '}
          <a href="https://sii.pl/en/" rel="noreferrer" target="_blank">
            SII
          </a>{' '}
          for{' '}
          <a href="https://www.sabre.com/" rel="noreferrer" target="_blank">
            Sabre Airline Solutions
          </a>
        </p>
        <div className="mt-5">
          <p className="text-zinc-400 uppercase pb-2">Technologies I&apos;ve worked with</p>
          <ul className="list-none">
            {technologies.map((technology, index) => (
              <li key={`${index}`} className="inline-block scale-75">
                {technology}
              </li>
            ))}
          </ul>
        </div>
      </div>
    )}
    {standalone && (
      <div>
        <header>
          <h1 className="pb-10">About me</h1>
        </header>
        <p className="pb-4">Software architect with over 13 years of professional experience in web and digital platform engineering.</p>
        <p>Focused on e-Commerce web applications and delivering high-quality software adapted to changing business requirements.</p>
        <p>Working mostly with React and Java based applications used by automation and airline market around the world.</p>
        <p className="pb-4">Problem solver, always looking for the best solutions. Clean code and programming best practices advocate.</p>
        <p>Started in 2008 as a Java Developer working for IBM. After 2 years transitioned to ABB to work as a Full Stack Developer for the first year.</p>
        <p className="pb-4">
          At the end of the year got promoted to Senior, year after that became Tech Lead and finally an Architect after 3 years. In 2015 moved to Sabre as a Web Applications Software Architect.
        </p>
        <p className="pb-4">
          I live in Cracow, Poland and I&apos;m a master of science graduate of{' '}
          <a href="https://en.uj.edu.pl/" rel="noreferrer" target="_blank">
            Jagiellonian University
          </a>
          , majored in computer science with a specialization in applied computer science.
        </p>
        <p className="pb-4">
          Currently I&apos;m self employed working on a contract through vendor{' '}
          <a href="https://sii.pl/en/" rel="noreferrer" target="_blank">
            SII
          </a>{' '}
          for{' '}
          <a href="https://www.sabre.com/" rel="noreferrer" target="_blank">
            Sabre Airline Solutions
          </a>
        </p>
        <div className="mt-5">
          <p className="text-zinc-400 uppercase pb-2">Technologies I&apos;ve worked with</p>
          <ul className="list-none">
            {technologies.map((technology, index) => (
              <li key={`${index}`} className="inline-block scale-75">
                {technology}
              </li>
            ))}
          </ul>
        </div>
      </div>
    )}
  </section>
);

export default About;
