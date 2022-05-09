import * as React from 'react';
import { Helmet } from 'react-helmet';
import Home from '../components/home';
import LatestProjects from '../components/latestProjects';
import About from '../components/about';
import Libs from '../components/libs';
import Menu from '../components/menu';
import Contact from '../components/contact';
import Footer from '../components/footer';

const Index = () => (
  <main>
    <Helmet>
      <title>Home Page</title>
    </Helmet>
    <div>
      <Menu />
      <div className="animate-wiggle">
        <div>
          <Home />
        </div>

        <div className="px-5 md:px-10 lg:px-20 pt-12">
          <LatestProjects />
        </div>

        <div className="px-5 sm:px-10 lg:px-20 pt-12">
          <About />
        </div>

        <div className="px-5 sm:px-10 lg:px-20 pt-12">
          <Libs />
        </div>

        <div className="px-5 sm:px-10 lg:px-20 pt-12">
          <Contact />
        </div>
      </div>

      <div className="mt-12 py-2 bg-zinc-800">
        <Footer />
      </div>
    </div>
  </main>
);

export default Index;
