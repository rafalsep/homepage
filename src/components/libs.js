import React from 'react';
import TECHNOLOGIES from '@shared/technologies';

const libs = [
  {
    title: 'Test Cafe Report Portal Reporter',
    link: 'https://github.com/rafalsep/testcafe-reporter-report-portal-reporter',
    description: 'Plugin for test cafe that allows integration with Report Portal. Supports concurrency and video/screenshot synchronization',
    github: 'https://github.com/rafalsep/testcafe-reporter-report-portal-reporter',
    technologies: [TECHNOLOGIES.testcafe, TECHNOLOGIES.js, TECHNOLOGIES.nodejs, TECHNOLOGIES.npm],
  },
  {
    title: 'Jenkins Backup and Restore DSL',
    link: 'https://gist.github.com/rafalsep/804aee1998f2e759a9272e2eb09384e2',
    description: 'Jenkins DSL script that will add backup and restore jobs for Jenkins. Backups all configs and jobs to Google Cloud Storage',
    github: 'https://gist.github.com/rafalsep/804aee1998f2e759a9272e2eb09384e2',
    technologies: [TECHNOLOGIES.jenkins, TECHNOLOGIES.groovy, TECHNOLOGIES.gcp],
  },
  {
    title: 'Network Request Logger for Testcafe',
    link: 'https://github.com/rafalsep/testcafe-global-network-request-logger',
    description: 'Global Hook for testcafe that will record and save network communication (request/response) with external services to JSON file',
    github: 'https://github.com/rafalsep/testcafe-global-network-request-logger',
    technologies: [TECHNOLOGIES.testcafe, TECHNOLOGIES.js, TECHNOLOGIES.nodejs, TECHNOLOGIES.npm],
  },
  {
    title: 'GCP Secret Manager Credentials Init',
    link: 'https://gist.github.com/rafalsep/87794f57c95702b3e417bb1673bee42f',
    description: 'Example snippet describing how to retrieve secret from GCP secret manager using @google-cloud/secret-manager library',
    github: 'https://gist.github.com/rafalsep/87794f57c95702b3e417bb1673bee42f',
    technologies: [TECHNOLOGIES.gcp, TECHNOLOGIES.js],
  },
  {
    title: 'React Speed Comparison',
    link: 'https://github.com/rafalsep/react-speed-comparison',
    description: 'Library used to measure react rendering speed for different versions and functional/non functional components',
    github: 'https://github.com/rafalsep/react-speed-comparison',
    technologies: [TECHNOLOGIES.react, TECHNOLOGIES.js, TECHNOLOGIES.nodejs, TECHNOLOGIES.npm],
  },
  {
    title: 'Immutable JS Speed Test',
    link: 'https://github.com/rafalsep/immutable-v4-toJS-speed-test',
    description: 'Library used to measure Immutable JS rendering speed for v3 and v4 version',
    github: 'https://github.com/rafalsep/immutable-v4-toJS-speed-test',
    technologies: [TECHNOLOGIES.react, TECHNOLOGIES.js, TECHNOLOGIES.nodejs, TECHNOLOGIES.npm],
  },
  {
    title: 'Custom Service Account Creation using Terraform',
    link: 'https://gist.github.com/rafalsep/c847dd90de23547d7456367d83fe3f40',
    description: 'Example snippet to create GCP custom service account using terraform google_service_account',
    github: 'https://gist.github.com/rafalsep/c847dd90de23547d7456367d83fe3f40',
    technologies: [TECHNOLOGIES.gcp, TECHNOLOGIES.terraform],
  },
];

const Libs = () => (
  <section className="">
    <div>
      <div className="">
        <div className="">
          <header>
            <h1 className="pb-10">Libs</h1>
          </header>
          <p className="">Other smaller projects I&apos;ve worked on</p>
        </div>
      </div>
      <ul className="mt-8 grid grid-cols-libs gap-2 relative">
        {libs.map(({ title, description, link, technologies, github, article }) => (
          <li className="relative" key={title}>
            <div className="flex justify-between flex-col items-start relative h-full p-8 bg-gray-800">
              <div className="block w-full">
                <header>
                  <div className="flex justify-between items-center mb-8">
                    <div>
                      <svg className="w-10 h-10" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                        <title>Folder</title>
                        <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
                      </svg>
                    </div>
                    <div className="flex items-center">
                      {article && (
                        <a className="" href={article}>
                          <svg className="w-6 h-6" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <title>External Link</title>
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                            <polyline points="15 3 21 3 21 9" />
                            <line x1="10" y1="14" x2="21" y2="3" />
                          </svg>
                        </a>
                      )}
                      {github && (
                        <a className="" href={github}>
                          <svg className="w-6 h-6" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <title>GitHub</title>
                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                  <h3 className="mb-4">
                    <a href={link}>{title}</a>
                  </h3>
                </header>
                <div className="mb-4">
                  <p>{description}</p>
                </div>
              </div>
              <footer>
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
        ))}
      </ul>
    </div>
  </section>
);

export default Libs;
