import * as React from 'react';
import Menu from '../components/menu';
import Libs from '../components/libs';
import Footer from '../components/footer';

const LibsPage = () => (
  <main className="flex flex-col min-h-screen">
    <title>Libs/Gists Page</title>
    <div className="flex-1">
      <Menu />
      <div className="px-5 sm:px-10 lg:px-20 pt-32 lg:pt-24 mb-5 sm:mb-10 animate-wiggle">
        <Libs standalone />
      </div>
    </div>
    <div>
      <Footer />
    </div>
  </main>
);

export default LibsPage;
