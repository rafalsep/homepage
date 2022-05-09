import * as React from 'react';
import Menu from '../components/menu';
import About from '../components/about';
import Footer from '../components/footer';

const AboutPage = () => (
  <main className="flex flex-col min-h-screen">
    <title>About Me Page</title>
    <div className="flex-1 mb-4">
      <Menu />
      <div className="px-5 sm:px-10 lg:px-20 pt-32 lg:pt-24 animate-wiggle">
        <About standalone />
      </div>
    </div>
    <div>
      <Footer />
    </div>
  </main>
);

export default AboutPage;
