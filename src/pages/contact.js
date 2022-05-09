import * as React from 'react';
import Menu from '../components/menu';
import Contact from '../components/contact';
import Footer from '../components/footer';

const ContactPage = () => (
  <main className="flex flex-col min-h-screen">
    <title>About Me Page</title>
    <div className="flex-1">
      <Menu />
      <div className="px-5 sm:px-10 lg:px-20 pt-32 lg:pt-24 animate-wiggle">
        <Contact standalone />
      </div>
    </div>
    <div>
      <Footer />
    </div>
  </main>
);

export default ContactPage;