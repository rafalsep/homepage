import React, { useState } from 'react';

export default () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <>
      <header>
        <div className="absolute top-3 left-5 z-10 border-2 border-lime-500 rounded-full px-2.5 py-1.5" style={{ borderStyle: 'outset' }}>
          <a className="no-underline flex" href="/">
            <div className="font-logo text-4xl font-bold">R</div>
            <div className="font-logo text-4xl font-bold">S</div>
          </a>
        </div>
        <div className="absolute top-5 right-5 z-10">
          {!isNavOpen && (
            <button type="button" className={`${isNavOpen ? 'hidden' : ''} sm:hidden`} onClick={() => setIsNavOpen(true)} aria-label="Menu">
              <svg className="fill-lime-500" viewBox="0 0 100 80" width="40" height="40">
                <rect width="100" height="10" />
                <rect y="30" width="100" height="10" />
                <rect y="60" width="100" height="10" />
              </svg>
            </button>
          )}
        </div>
      </header>
      {isNavOpen && (
        <nav className={`fixed top-0 left-0 w-screen h-full bg-black/90 flex flex-col z-20 ${!isNavOpen ? 'hidden' : ''} sm:hidden animate-show`}>
          <div className="">
            <button type="button" className="absolute top-4 right-4" onClick={() => setIsNavOpen(false)}>
              <svg className="w-12 h-12" viewBox="0 0 40 40">
                <path className="close-x stroke-lime-500 stroke-3" d="M 10,10 L 30,30 M 30,10 L 10,30" />
              </svg>
            </button>
            <ul className="absolute left-1/2 inline -translate-x-2/4 top-36 text-center">
              <li className="p-4">
                <a className="text-4xl" href="/about" onClick={() => setIsNavOpen(false)}>
                  About
                </a>
              </li>
              <li className="p-4">
                <a className="text-4xl" href="/projects" onClick={() => setIsNavOpen(false)}>
                  Projects
                </a>
              </li>
              <li className="p-4">
                <a className="text-4xl" href="/libs" onClick={() => setIsNavOpen(false)}>
                  Libs/Gists
                </a>
              </li>
              <li className="p-4">
                <a className="text-4xl" href="/contact" onClick={() => setIsNavOpen(false)}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
      )}
      <nav className="absolute top-0 right-5 z-20 msm:hidden">
        <div className="">
          <ol className="flex text-2xl">
            <li className="p-4">
              <a className="" href="/about">
                About
              </a>
            </li>
            <li className="p-4">
              <a className="" href="/projects">
                Projects
              </a>
            </li>
            <li className="p-4">
              <a className="" href="/libs">
                Libs/Gists
              </a>
            </li>
            <li className="p-4">
              <a className="" href="/contact">
                Contact
              </a>
            </li>
          </ol>
        </div>
      </nav>
    </>
  );
};
