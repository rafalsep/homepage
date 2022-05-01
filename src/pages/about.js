import * as React from 'react';
import Menu from '../components/menu';
import About from '../components/about';
import Footer from '../components/footer';

const Index = () => (
  <main className="flex flex-col min-h-screen">
    <title>Home Page</title>
    <div className="flex-1 p-8">
      <Menu />

      <div className="px-5 sm:px-10 lg:px-20 pt-32 lg:pt-24">
        <About />
      </div>
    </div>
    <div>
      <Footer />
    </div>
  </main>
);

export default Index;
