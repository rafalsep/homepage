import * as React from 'react';
import Menu from '../components/menu';
import Projects from '../components/projects';
import Footer from '../components/footer';

const Index = () => (
  <main className="flex flex-col min-h-screen">
    <title>Home Page</title>
    <div className="flex-1 p-8">
      <Menu />

      <div className="pt-32 lg:pt-24">
        <Projects />
      </div>
    </div>
    <div>
      <Footer />
    </div>
  </main>
);

export default Index;
