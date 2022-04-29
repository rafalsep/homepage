import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import * as indexStyles from './index.module.css';
import Menu from '../components/menu';
import About from '../components/about';
import Projects from '../containers/projects';
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
      <section className="after:content-[''] after:min-h-screen after:bg-hero-pattern after:bg-cover after:h-screen after:w-full after:bg-center after:bg-no-repeat after:block after:blur-md after:transition-all after:duration-1000 after:hover:blur-none">
        <div className="content absolute z-1">
          <div className="flex justify-center">
            <StaticImage src="9027145-modified.png" alt="A dinosaur" />
          </div>
          <h1 className="text-4xl font-semibold leading-tight py-6">
            Hello, I&apos;m <span className="text-green-400">R</span>afal <span className="text-green-400">S</span>zczepankiewicz
          </h1>
          <h2 className="p-6 text-gray-300">I&apos;m web developer working from Cracow, Poland.</h2>
        </div>
      </section>

      <div className="px-5 pt-32">
        <About />
      </div>

      <div className="px-5 pt-32">
        <Projects />
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
