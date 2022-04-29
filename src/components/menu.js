/* eslint-disable */
import React, { useState } from 'react';
import { StaticImage } from 'gatsby-plugin-image';

export default () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <>
      <header>
        <div className="absolute top-5 left-5 z-10">
          <StaticImage width={100} src="../images/logo.png" alt="A dinosaur" />
        </div>
        <div className="absolute top-5 right-5 z-10">
          {!isNavOpen && (
            <button type="button" onClick={() => setIsNavOpen(true)}>
              <svg fill="white" viewBox="0 0 100 80" width="40" height="40">
                <rect width="100" height="10" />
                <rect y="30" width="100" height="10" />
                <rect y="60" width="100" height="10" />
              </svg>
            </button>
          )}
        </div>
      </header>
      {isNavOpen && (
        <nav className="fixed top-0 left-0 w-screen h-full bg-black/80 flex flex-col z-20 testaaa">
          <div className="">
            <button type="button" className="w-10 h-10 absolute top-5 right-9" onClick={() => setIsNavOpen(false)}>
              <svg fill="white" viewBox="0 0 40 40">
                <path className="close-x stroke-white stroke-5 fill-transparent" d="M 10,10 L 30,30 M 30,10 L 10,30" />
              </svg>
            </button>
            <ul className="absolute left-1/2 inline -translate-x-2/4 top-36 text-center">
              <li className="p-4">
                <a className="text-white text-4xl no-underline" onClick={() => setIsNavOpen(false)}>
                  About
                </a>
              </li>
              <li className="p-4">
                <a className="text-white text-4xl no-underline" onClick={() => setIsNavOpen(false)}>
                  Portfolio
                </a>
              </li>
              <li className="p-4">
                <a className="text-white text-4xl no-underline" onClick={() => setIsNavOpen(false)}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
      )}
    </>
  );
};
