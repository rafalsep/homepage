import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import * as styles from './latestProjects.module.css';

const projects = [
  {
    image: <StaticImage className={styles.image} src="../../images/experienceLayer.png" alt="Experience Layer" />,
    href: '/projects/#el',
  },
  {
    image: <StaticImage className={styles.image} src="../../images/digitalWorkspace.png" alt="Digital Workspace" />,
    href: '/projects/#dw',
  },
  {
    image: <StaticImage className={styles.image} src="../../images/digitalExperience.png" alt="Digital Experience" />,
    href: '/projects/#dx',
  },
  {
    image: <StaticImage className={styles.image} src="../../images/dcci.png" alt="Digital Connect Check-In" />,
    href: '/projects/#dcci',
  },
  {
    image: <StaticImage className={styles.image} src="../../images/ssm.png" alt="Sabre Sonic Mobile" />,
    href: '/projects/#ssm',
  },
  {
    image: <StaticImage className={styles.image} src="../../images/bol.jpeg" alt="Business Online" />,
    href: '/projects/#bol',
  },
];

const LatestProjects = () => (
  <section className="">
    <div>
      <div className="md:flex items-end px-5 sm:px-10 lg:px-20">
        <div className="">
          <header>
            <h2 className="pb-10">Projects</h2>
          </header>
          <p>Some of the Big eCommerce projects I&apos;ve worked on over the years together with amazing people from around the globe. All of them are still alive and in good condition.</p>
        </div>
        <div className="pt-10 md:pt:0 md:ml-16">
          <a className="text-lime-500 border border-lime-500 py-4 px-8 rounded bg-zinc-900 hover:bg-zinc-700 no-underline" href="/pages/projects" data-test-id="projects-learn-more">
            Learn&nbsp;more
          </a>
        </div>
      </div>
      <ul className="grid grid-cols-projects gap-1 pt-12 box-wrap" data-test-id="projects-gallery">
        {projects.map(({ image, href }, projectIndex) => (
          <li key={href} className={`relative overflow-hidden ${styles.imageWrapper} ${projectIndex === 3 ? 'mmd:hidden' : ''} ${projectIndex >= 4 ? 'mxl:hidden' : ''}`}>
            {image}
            <a
              className={`${styles.imageLink} absolute text-lime-500 border border-lime-500 py-4 px-8 rounded bg-zinc-600 hover:bg-zinc-900 no-underline`}
              href={href}
              data-test-id="project-gallery-link"
            >
              Show&nbsp;details
            </a>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default LatestProjects;
