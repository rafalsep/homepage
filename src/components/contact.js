import React from 'react';

const Contact = () => (
  <section className="">
    <div>
      <header>
        <h1 className="pb-10 font-bold">Get in Touch</h1>
      </header>
      <p>Want to work together or have any questions?</p>
      <div className="py-10">
        <a
          className="text-lime-500 border border-lime-500 py-4 px-8 rounded hover:bg-zinc-800 transition-colors duration-300"
          href="mailto:szczepankiewicz.rafal@gmail.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          Contact me
        </a>
      </div>
    </div>
  </section>
);

export default Contact;
