import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import * as styles from './latestProjects.module.css';

const projects = [
  {
    image: <StaticImage className={styles.image} src="../images/experienceLayer.png" alt="Experience Layer" />,
    href: '/projects',
  },
  {
    image: <StaticImage className={styles.image} src="../images/digitalWorkspace.png" alt="Digital Workspace" />,
    href: '/projects',
  },
  {
    image: <StaticImage className={styles.image} src="../images/digitalExperience.png" alt="Digital Experience" />,
    href: '/projects',
  },
  {
    image: <StaticImage className={styles.image} src="../images/experienceLayer.png" alt="Experience Layer" />,
    href: '/projects',
  },
  {
    image: <StaticImage className={styles.image} src="../images/digitalWorkspace.png" alt="Digital Workspace" />,
    href: '/projects',
  },
  {
    image: <StaticImage className={styles.image} src="../images/digitalExperience.png" alt="Digital Experience" />,
    href: '/projects',
  },
  {
    image: <StaticImage className={styles.image} src="../images/experienceLayer.png" alt="Experience Layer" />,
    href: '/projects',
  },
  {
    image: <StaticImage className={styles.image} src="../images/digitalWorkspace.png" alt="Digital Workspace" />,
    href: '/projects',
  },
];

const LatestProjects = () => (
  <section className="">
    <div>
      <div className="px-5 md:pl-10 md:flex items-end">
        <div className="">
          <header>
            <h1 className="">Projects</h1>
          </header>
          <p className="pt-4">
            Big eCommerce projects I&apos;ve worked on over the years together with amazing people from around the globe. Most of them are still alive and in good condition, earning every peny spend
            on development.
          </p>
        </div>
        <div className="pt-8 md:pt:0 md:ml-16">
          <a className="text-lime-500 border border-lime-500 py-4 px-8 rounded bg-zinc-900 hover:bg-zinc-700" href="/projects">
            Learn&nbsp;more
          </a>
        </div>
      </div>
      <div className="grid grid-cols-projects gap-1 py-12 box-wrap">
        {projects.map(({ image, href }) => (
          <div className={`relative overflow-hidden ${styles.imageWrapper}`}>
            {image}
            <a className={`${styles.imageLink} absolute text-lime-500 border border-lime-500 py-4 px-8 rounded bg-zinc-600 hover:bg-zinc-900`} href={href}>
              Show&nbsp;details
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default LatestProjects;
