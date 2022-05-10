import * as React from 'react';
import { Helmet } from 'react-helmet';
import Menu from '../components/menu';
import Projects from '../components/projects';
import Footer from '../components/footer';

const ProjectsPage = () => (
  <main className="flex flex-col min-h-screen">
    <Helmet>
      <title>Projects</title>
    </Helmet>
    <div className="flex-1">
      <Menu />
      <div className="px-5 md:px-10 lg:px-20 pt-32 lg:pt-24 animate-wiggle">
        <Projects />
      </div>
    </div>
    <div>
      <Footer />
    </div>
  </main>
);

export default ProjectsPage;
