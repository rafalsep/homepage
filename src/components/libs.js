import React from 'react';
import TECHNOLOGIES from '@shared/technologies';

const libs = [
  {
    title: 'Test Cafe Report Portal Reporter',
    link: 'https://github.com/rafalsep/testcafe-reporter-report-portal-reporter',
    description: 'Plugin for test cafe that allows integration with Report Portal. Supports concurrency and video/screenshot synchronization',
    github: true,
    technologies: [TECHNOLOGIES.testcafe, TECHNOLOGIES.js, TECHNOLOGIES.nodejs, TECHNOLOGIES.npm],
  },
  {
    title: 'Jenkins Backup and Restore DSL',
    link: 'https://gist.github.com/rafalsep/804aee1998f2e759a9272e2eb09384e2',
    description: 'Jenkins DSL script that will add backup and restore jobs for Jenkins. Backups all configs and jobs to Google Cloud Storage',
    gist: true,
    technologies: [TECHNOLOGIES.jenkins, TECHNOLOGIES.groovy, TECHNOLOGIES.gcp],
  },
  {
    title: 'Network Request Logger for Testcafe',
    link: 'https://github.com/rafalsep/testcafe-global-network-request-logger',
    description: 'Global Hook for testcafe that will record and save network communication (request/response) with external services to JSON file',
    github: true,
    technologies: [TECHNOLOGIES.testcafe, TECHNOLOGIES.js, TECHNOLOGIES.nodejs, TECHNOLOGIES.npm],
  },
  {
    title: 'GCP Secret Manager Credentials Init',
    link: 'https://gist.github.com/rafalsep/87794f57c95702b3e417bb1673bee42f',
    description: 'Example snippet describing how to retrieve secret from GCP secret manager using @google-cloud/secret-manager library',
    gist: true,
    technologies: [TECHNOLOGIES.gcp, TECHNOLOGIES.js],
  },
  {
    title: 'Immutable JS Speed Test',
    link: 'https://github.com/rafalsep/immutable-v4-toJS-speed-test',
    description: 'Library used to measure Immutable JS rendering speed for v3 and v4 version',
    github: true,
    technologies: [TECHNOLOGIES.react, TECHNOLOGIES.js, TECHNOLOGIES.nodejs, TECHNOLOGIES.npm],
  },
  {
    title: 'Custom Service Account Creation using Terraform',
    link: 'https://gist.github.com/rafalsep/c847dd90de23547d7456367d83fe3f40',
    description: 'Example snippet to create GCP custom service account using terraform google_service_account',
    gist: true,
    technologies: [TECHNOLOGIES.gcp, TECHNOLOGIES.terraform],
  },
];

const Libs = ({ standalone }) => (
  <section className="">
    <div>
      <div className="md:flex items-end">
        <div className="">
          <header>{standalone ? <h1 className="pb-10">Libs/Gists</h1> : <h2 className="pb-10">Libs/Gists</h2>}</header>
          <p>Other smaller projects and gists that do not fall into eCommerce category that I&apos;ve worked on over the years. Please check github for details on each one.</p>
        </div>
        {!standalone && (
          <div className="pt-8 md:pt:0 md:ml-16">
            <a className="text-lime-500 border border-lime-500 py-4 px-8 rounded bg-zinc-900 hover:bg-zinc-700 no-underline" href="/libs">
              Learn&nbsp;more
            </a>
          </div>
        )}
      </div>
      <ul className="mt-12 grid grid-cols-libs gap-2 relative">
        {libs.map(({ title, description, link, technologies, github, gist }, libIndex) => {
          const liClassName = standalone ? `relative` : `relative ${libIndex === 3 ? 'msm:hidden' : ''} ${libIndex >= 4 ? 'mmd:hidden' : ''}`;
          return (
            <li className={liClassName} key={title}>
              <div className="flex justify-between flex-col items-start relative h-full p-4 sm:p-8 bg-gray-800">
                <div className="block w-full">
                  <header>
                    <div className="flex justify-between items-center mb-4 sm:mb-8">
                      <div>
                        <svg className="w-10 h-10" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                          <title>Folder</title>
                          <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
                        </svg>
                      </div>
                      <div className="flex items-center">
                        {gist && (
                          <svg className="w-6 h-6 stroke-zinc-400" viewBox="0 0 24 24">
                            <path d="M10.3 8.24a.75.75 0 01-.04 1.06L7.352 12l2.908 2.7a.75.75 0 11-1.02 1.1l-3.5-3.25a.75.75 0 010-1.1l3.5-3.25a.75.75 0 011.06.04zm3.44 1.06a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.908-2.7-2.908-2.7z" />
                            <path
                              fillRule="evenodd"
                              d="M2 3.75C2 2.784 2.784 2 3.75 2h16.5c.966 0 1.75.784 1.75 1.75v16.5A1.75 1.75 0 0120.25 22H3.75A1.75 1.75 0 012 20.25V3.75zm1.75-.25a.25.25 0 00-.25.25v16.5c0 .138.112.25.25.25h16.5a.25.25 0 00.25-.25V3.75a.25.25 0 00-.25-.25H3.75z"
                            />
                          </svg>
                        )}
                        {github && (
                          <svg className="w-6 h-6 stroke-zinc-400" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <title>GitHub</title>
                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                          </svg>
                        )}
                      </div>
                    </div>
                    <h3 className="mb-2 sm:mb-4">
                      <a href={link}>{title}</a>
                    </h3>
                  </header>
                  <div className="mb-2 sm:mb-4">
                    <p>{description}</p>
                  </div>
                </div>
                <footer className="mt-2">
                  <ul className="list-none">
                    {technologies.map((technology, index) => (
                      <li key={index} className="inline-block scale-75">
                        {technology}
                      </li>
                    ))}
                  </ul>
                </footer>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  </section>
);

export default Libs;
