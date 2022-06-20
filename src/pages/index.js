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
    <Helmet
      htmlAttributes={{
        lang: 'en',
      }}
      title="Rafal Szczepankiewicz Homepage"
      link={[
        {
          rel: 'canonical',
          href: 'https://rafalsep.com',
        },
        {
          rel: 'shortlink',
          href: 'https://rafalsep.com',
        },
      ]}
      meta={[
        {
          name: 'robots',
          content: 'max-image-preview:large',
        },
        {
          name: `description`,
          content: 'This is personal homepage of Rafal Szczepankiewicz',
        },
        {
          property: `og:title`,
          content: 'Rafal Szczepankiewicz',
        },
        {
          property: `og:description`,
          content: 'This is personal homepage of Rafal Szczepankiewicz',
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:site_name`,
          content: `Rafal Szczepankiewicz`,
        },
        {
          property: `og:locale`,
          content: `en_US`,
        },
        {
          property: `og:url`,
          content: `https://rafalsep.com`,
        },
        {
          name: `twitter:creator`,
          content: '@rafalsep',
        },
        {
          name: `twitter:title`,
          content: 'Rafal Szczepankiewicz',
        },
        {
          name: `twitter:description`,
          content: 'This is personal homepage of Rafal Szczepankiewicz',
        },
        {
          name: `fb:profile_id`,
          content: 'rafalsep',
        },
      ]}
    />
    <div>
      <Menu />
      <div className="animate-wiggle">
        <div data-test-id="home-section">
          <Home />
        </div>

        <div className="px-5 md:px-10 lg:px-20 pt-12" data-test-id="projects-section">
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
