import React from 'react';
import Home from '../components/home';
import LatestProjects from '../components/latestProjects';
import About from '../components/about';
import Libs from '../components/libs';
import Menu from '../components/menu';
import Contact from '../components/contact';
import Footer from '../components/footer';
import Seo from '../components/seo';

const Index = () => (
  <main>
    <Seo title="Rafal Szczepankiewicz Homepage" description="This is personal homepage of Rafal Szczepankiewicz" />
    <div>
      <Menu />
      <div>
        <div data-test-id="home-section">
          <Home />
        </div>

        <div className="pt-12" data-test-id="projects-section">
          <LatestProjects />
        </div>

        <div className="px-5 sm:px-10 lg:px-20 pt-12" data-test-id="about-section">
          <About />
        </div>

        <div className="px-5 sm:px-10 lg:px-20 pt-12" data-test-id="libs-section">
          <Libs />
        </div>

        <div className="px-5 sm:px-10 lg:px-20 pt-12" data-test-id="contact-section">
          <Contact />
        </div>
      </div>

      <div className="mt-12 py-2 bg-zinc-800" data-test-id="footer-section">
        <Footer />
      </div>
    </div>
  </main>
);

export default Index;
