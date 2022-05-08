import * as React from 'react';
import Home from '../components/home';
import LatestProjects from '../components/latestProjects';
import About from '../components/about';
import Libs from '../components/libs';
import * as indexStyles from './index.module.css';
import Menu from '../components/menu';
import Contact from '../components/contact';
import Footer from '../components/footer';

const Index = () => (
  <main>
    <title>Home Page</title>
    <div className={indexStyles.top}>
      <Menu />

      <div>
        <Home />
      </div>

      <div className="pt-12">
        <LatestProjects />
      </div>

      <div className="px-5 sm:px-10 pt-12">
        <About />
      </div>

      <div className="px-5 sm:px-10 pt-12">
        <Libs />
      </div>

      <div className="px-5 sm:px-10 pt-12">
        <Contact />
      </div>

      <div className="mt-12 py-2 bg-zinc-800">
        <Footer />
      </div>
    </div>
  </main>
);

export default Index;
