import * as React from 'react';
import Menu from '../components/menu';
import Projects from '../components/projects';
import Footer from '../components/footer';

const ProjectsPage = () => (
  <main className="flex flex-col min-h-screen">
    <title>Projects Page</title>
    <div className="flex-1">
      <Menu />
      <div className="px-5 sm:px-10 pt-32 lg:pt-24">
        <Projects />
      </div>
    </div>
    <div>
      <Footer />
    </div>
  </main>
);

export default ProjectsPage;
