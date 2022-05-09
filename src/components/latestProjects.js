import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import * as styles from './latestProjects.module.css';

const projects = [
  {
    image: <StaticImage className={styles.image} src="./projects/experienceLayer/experienceLayer.png" alt="Experience Layer" />,
    href: '/projects/#el',
  },
  {
    image: <StaticImage className={styles.image} src="./projects/digitalWorkspace/digitalWorkspace.png" alt="Digital Workspace" />,
    href: '/projects/#dw',
  },
  {
    image: <StaticImage className={styles.image} src="./projects/digitalExperience/digitalExperience.png" alt="Digital Experience" />,
    href: '/projects/#dx',
  },
  {
    image: <StaticImage className={styles.image} src="./projects/dcci/dcci.png" alt="Digital Connect Check-In" />,
    href: '/projects/#dcci',
  },
  {
    image: <StaticImage className={styles.image} src="./projects/ssm/ssm.png" alt="Sabre Sonic Mobile" />,
    href: '/projects/#ssm',
  },
  {
    image: <StaticImage className={styles.image} src="./projects/bol/bol.jpeg" alt="Business Online" />,
    href: '/projects/#bol',
  },
  {
    image: <StaticImage className={styles.image} src="./projects/auiml/auiml.png" alt="Abstract User Interface Markup Language" />,
    href: '/projects/#auiml',
  },
];

const LatestProjects = () => (
  <section className="">
    <div>
      <div className="md:flex items-end">
        <div className="">
          <header>
            <h2 className="pb-10">Projects</h2>
          </header>
          <p>
            Big eCommerce projects I&apos;ve worked on over the years together with amazing people from around the globe. Most of them are still alive and in good condition, earning every peny spend
            on development.
          </p>
        </div>
        <div className="pt-10 md:pt:0 md:ml-16">
          <a className="text-lime-500 border border-lime-500 py-4 px-8 rounded bg-zinc-900 hover:bg-zinc-700 no-underline" href="/projects">
            Learn&nbsp;more
          </a>
        </div>
      </div>
      <div className="grid grid-cols-projects gap-1 pt-12 box-wrap">
        {projects.map(({ image, href }, projectIndex) => (
          <div key={href} className={`relative overflow-hidden ${styles.imageWrapper} ${projectIndex === 3 ? 'msm:hidden' : ''} ${projectIndex >= 4 ? 'mmd:hidden' : ''}`}>
            {image}
            <a className={`${styles.imageLink} absolute text-lime-500 border border-lime-500 py-4 px-8 rounded bg-zinc-600 hover:bg-zinc-900 no-underline`} href={href}>
              Show&nbsp;details
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default LatestProjects;
