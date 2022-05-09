import React from 'react';
import digitalWorkspace from './digitalWorkspace';
import experienceLayer from './experienceLayer';
import digitalExperience from './digitalExperience';
import dcci from './dcci';
import ssm from './ssm';
import bol from './bol';
import auiml from './auiml';
import * as styles from './projects.module.css';

const projects = [experienceLayer, digitalWorkspace, digitalExperience, dcci, ssm, bol, auiml];

const Projects = () => (
  <section id="projects" className="">
    <div className="">
      <header>
        <h1 className="pb-10">Projects</h1>
      </header>
      <ul className="list-none">
        {projects.map(({ time, link, name, title, subtitle, description, features, technologies, image }) => (
          <li id={name} key={title} className={`${styles.timeline} block msm:border-t-lime-800 msm:border-t relative py-2 msm:pb-10 msm:pt-4`}>
            <div
              className={`${styles.time} text-zinc-400 msm:pt-3 sm:absolute sm:top-0 sm:left-0 sm:bottom-0 sm:w-28 sm:pr-5 sm:py-8 sm:text-right sm:border-r sm:border-r-lime-500 sm:after:content-[''] sm:after:absolute sm:after:-right-1 sm:after:top-0 sm:after:w-2 sm:after:h-2 sm:after:bg-amber-500`}
            >
              <time className={styles.date}>{time}</time>
            </div>
            <div className={`${styles.content} pt-3 sm:py-5 sm:pl-0 sm:ml-[8.5rem] sm:mr-2 lg:flex`}>
              <div className="lg:flex-1">
                <a className="no-underline" href={link}>
                  <h2 className="pb-2 text-lime-500">{title}</h2>
                </a>
                <p className="text-zinc-400">{subtitle}</p>
                <div className="mb-5">
                  <p className="py-5">{description}</p>
                  <ul className="list-circle pl-10">
                    {features.map(feature => (
                      <li key={`${title}-${feature}`}>{feature}</li>
                    ))}
                  </ul>
                </div>
                <div className="mt-5">
                  <h3 className="text-zinc-400">Technologies</h3>
                  <ul className="list-none">
                    {technologies.map((technology, index) => (
                      <li key={`${title}-${index}`} className="inline-block p-2">
                        {technology}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="pt-5 lg:flex-1 lg:pl-10">{image}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default Projects;
