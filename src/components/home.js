import React from 'react';
import BackgroundImage from 'gatsby-background-image';
import { StaticImage } from 'gatsby-plugin-image';
import { graphql, useStaticQuery } from 'gatsby';
import HomeBackground from './homeBackground/homeBackground';

const Home = () => {
  const data = useStaticQuery(
    graphql`
      query {
        desktop: file(relativePath: { eq: "background.webp" }) {
          childImageSharp {
            fluid(quality: 70, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `,
  );

  return (
    <BackgroundImage fluid={data.desktop.childImageSharp.fluid} loading="eager" className="bg-transparent overflow-hidden" preserveStackingContext>
      <HomeBackground />
      <section className="min-h-screen bg-cover w-full bg-center bg-no-repeat flex items-center relative">
        <div className="content text-center md:text-left w-full p-10 md:flex md:flex-row-reverse">
          <div className="grid justify-center md:-mt-12 relative">
            <div
              className="w-48 h-48 md:w-60 md:h-60 lg:w-72 lg:h-72 xl:w-80 xl:h-80 absolute border-4 border-lime-500 rounded-full justify-self-center hover:animate-spin-slow z-10"
              style={{ borderStyle: 'outset' }}
            />
            <StaticImage className="w-48 h-48 md:w-60 md:h-60 lg:w-72 lg:h-72 xl:w-80 xl:h-80" src="../images/avatar.png" alt="Rafal Szczepankiewicz" loading="eager" data-test-id="avatar" />
          </div>
          <div className="flex-1">
            <h1 className="font-semibold py-12 bg-transparent">
              Hello, I&apos;m{' '}
              <div className="inline-block">
                <div className="text-lime-500 inline-block hover:animate-rubber">R</div>afal
              </div>
              <div>
                <div className="msm:hidden text-lime-500 inline-block hover:animate-rubber">S</div>
                <div className="msm:hidden inline-block">zczepankiewicz</div>
              </div>
            </h1>
            <p className="pb-6 text-gray-300 text-4xl">Software architect working from Cracow, Poland.</p>
            <div className="max-w-[12rem] mt-4 mx-auto md:ml-0 w-screen mb-12">
              <ul className="flex justify-center md:justify-start items-center">
                <li>
                  <a href="https://github.com/rafalsep" data-test-id="home-github-link">
                    <svg className="w-8 h-8 sm:w-10 sm:h-10" fill="#FFFFFF" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <title>GitHub</title>
                      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                    </svg>
                  </a>
                </li>
                <li className="pl-5">
                  <a href="https://www.linkedin.com/in/rafalsep" data-test-id="home-linkedin-link">
                    <svg className="w-8 h-8 sm:w-10 sm:h-10 fill-[#0A66C2]" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <title>LinkedIn</title>
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                </li>
                <li className="pl-5">
                  <a href="mailto:szczepankiewicz.rafal@gmail.com" data-test-id="home-gmail-link">
                    <svg className="w-8 h-8 sm:w-10 sm:h-10" fill="#EA4335" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <title>Gmail</title>
                      <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-10 h-8 absolute left-[calc(50%_-_20px)] bottom-4">
          <svg className="w-10 h-8 fill-[#ffffff] rotate-180" viewBox="45.87 4.75 111.491 192.633" role="presentation">
            <g>
              <path d="M156.124 46.421L103.09 5.431a3.245 3.245 0 0 0-4.003.019L47.109 46.44a3.252 3.252 0 0 0-.54 4.568c1.112 1.411 3.233 1.655 4.644.54L98 14.711V194.13c0 1.798 1.202 3.253 3 3.253s3-1.455 3-3.253V14.63l47.969 36.937c.591.457 1.379.68 2.077.68.972 0 1.976-.435 2.618-1.264 1.1-1.42.883-3.463-.54-4.562z" />
            </g>
          </svg>
        </div>
      </section>
    </BackgroundImage>
  );
};

export default Home;
