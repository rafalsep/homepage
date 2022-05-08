import React from 'react';
import TECHNOLOGIES from '@shared/technologies';

const technologies = Object.values(TECHNOLOGIES);

const About = ({ standalone }) => (
  <section id="about" className="">
    <div className="">
      <header>{standalone ? <h1 className="pb-10">About me</h1> : <h2 className="pb-10">About me</h2>}</header>
      <p className="pb-4">
        I live in Cracow, Poland and I&apos;m a master of science graduate of{' '}
        <a href="https://en.uj.edu.pl/" rel="noreferrer" target="_blank">
          Jagiellonian University
        </a>
        , majored in computer science with a specialization in applied computer science.
      </p>
      <p className="pb-4">
        With over 13 years of professional experience I&apos;ve worked with multiple technologies and languages in both frontend and backend. I tend to put my fingers into every aspect of computer
        science wearing all kind of hats. Lately I&apos;ve been focused on modern web application design and development in airline sector under E-Commerce area.
      </p>
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
        .
      </p>
      <div className="mt-5">
        <h3 className="text-zinc-500 uppercase pb-2">Technologies I&apos;ve worked with</h3>
        <ul className="list-none">
          {technologies.map((technology, index) => (
            <li key={`${index}`} className="inline-block scale-75">
              {technology}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default About;
