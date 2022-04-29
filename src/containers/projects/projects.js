import React from 'react';
import digitalWorkspace from './digitalWorkspace';
import experienceLayer from './experienceLayer';

const projects = [experienceLayer, digitalWorkspace];

const Projects = () => (
  <section className="">
    <div className="">
      <header>
        <h1 className="pb-5 font-bold">Projects</h1>
        <p>E-Commerce Projects I’ve Worked On</p>
      </header>
      <ul className="list-none">
        {projects.map(({ time, link, title, subtitle, description, features, technologies, image }) => (
          <li key={title} className="block pt-5 mt-5 border-t-lime-800 border-t">
            <div className="text-gray-500">
              <time>{time}</time>
            </div>
            <div className="pt-5">
              <div>
                <a href={link} className="no-underline">
                  <h2 className="pb-2 text-lime-500">{title}</h2>
                  <div className="text-gray-400">{subtitle}</div>
                </a>
                <div className="mb-5">
                  <p className="py-5">{description}</p>
                  <ul className="list-circle pl-10">
                    {features.map(feature => (
                      <li key={`${title}-${feature}`}>{feature}</li>
                    ))}
                  </ul>
                </div>
                <div className="mt-10">
                  <h3 className="text-gray-500 uppercase">Technologies</h3>
                  <ul className="list-none">
                    {technologies.map((technology, index) => (
                      <li key={`${title}-${index}`} className="inline-block p-2">
                        {technology}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="py-5">{image}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default Projects;
