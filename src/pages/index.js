import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import * as indexStyles from './index.module.css';
import Menu from '../components/menu';
import About from '../components/about';
import Projects from '../containers/projects';
import Contact from '../components/contact';
import Footer from '../components/footer';
import ScrollDown from '../images/scrollDown.inline.svg';

const Index = () => (
  <main>
    <title>Home Page</title>
    <div className={indexStyles.top}>
      <Menu />
      <div className="absolute bottom-2 left-0 z-10 bounce">
        <ScrollDown />
      </div>
      <div className="absolute bottom-2 right-0 z-10 bounce">
        <ScrollDown />
      </div>
      <section className="after:content-[''] after:min-h-screen after:bg-hero-pattern after:bg-cover after:h-screen after:w-full after:bg-center after:bg-no-repeat after:block after:blur-md">
        <div className="content absolute z-10 top-[10%] left-2/4 mt-28 -ml-36 w-80 text-center">
          <div className="flex justify-center">
            <StaticImage src="9027145-modified.png" alt="A dinosaur" />
          </div>
          <h1 className="text-4xl font-semibold leading-tight py-6">
            Hello, I&apos;m <span className="text-green-400">R</span>afal <span className="text-green-400">S</span>zczepankiewicz
          </h1>
          <h2 className="p-6 pt-0 text-2xl text-gray-100">I&apos;m web developer working from Cracow, Poland.</h2>
          <div className="py-6">
            <a
              className="text-lime-500 border border-lime-500 py-4 px-8 rounded hover:bg-zinc-800 transition-colors duration-300"
              href="mailto:szczepankiewicz.rafal@gmail.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </section>

      <div className="px-5 sm:px-10 lg:px-20 pt-32">
        <About />
      </div>

      <div className="px-5 sm:px-10 lg:px-20 pt-32">
        <Projects />
      </div>

      <div className="px-5 sm:px-10 lg:px-20 pt-32">
        <Contact />
      </div>

      <div className="mt-32 bg-zinc-800">
        <Footer />
      </div>

      {/* <section className="py-9 px-3 flex items-center min-h-screen justify-center"> */}
      {/*  <div className="pl-0 pr-0 relative z-1"> */}
      {/*    <h1> */}
      {/*      {[...'Hello'].map((val, ind) => <span className={colors[Math.floor(Math.random() * colors.length)]} key={ind}>{val}</span>)}, */}
      {/*      <br/> */}
      {/*      {[...'I\'m Rafal'].map((val, ind) => <span className={colors[Math.floor(Math.random() * colors.length)]} key={ind}>{val}</span>)}, */}
      {/*      <br/> */}
      {/*      web developer */}
      {/*    </h1> */}
      {/*    <p className="text-slate-500 py-1 mt-2">Front End Developer</p> */}
      {/*  </div> */}
      {/* </section> */}
    </div>
  </main>
);

export default Index;
