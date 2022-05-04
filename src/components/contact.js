/* eslint-disable */
import React from 'react';

const Contact = () => {
  const handleSubmit = event => {
    const request = new Request(`https://getform.io/f/73fb3edb-f813-4bb1-94ee-b2d0f7d755e7`, {
      method: 'POST',
      body: new FormData(event.target),
    });
    fetch(request)
      .then(resp => {
        console.log(resp);
        return resp.text();
      })
      .then(resp => {
        console.log(resp);
      });

    event.preventDefault();
  };

  return (
    <section className="">
      <div>
        <header>
          <h1 className="pb-10 font-bold">Get in Touch</h1>
        </header>
        <p>Want to work together or have any questions?</p>
        <div className="py-10">
          <form className="w-full max-w-lg" action="https://getform.io/f/73fb3edb-f813-4bb1-94ee-b2d0f7d755e7" method="POST" onSubmit={handleSubmit}>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-500 text-xs font-bold mb-2" htmlFor="grid-first-name">
                  Name
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="text"
                  placeholder="Jane"
                  name="name"
                />
              </div>
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-500 text-xs font-bold mb-2" htmlFor="grid-email">
                  Email
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-email"
                  type="email"
                  placeholder="doe@gmail.com"
                  required
                  name="email"
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-500 text-xs font-bold mb-2" htmlFor="grid-subject">
                  Subject
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-subject"
                  type="text"
                  placeholder="Hello!"
                  name="subject"
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-500 text-xs font-bold mb-2" htmlFor="grid-message">
                  Message
                </label>
                <textarea
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-message"
                  placeholder="Message goes here"
                  rows="6"
                  required
                  name="message"
                />
              </div>
            </div>
            <div className="text-right">
              <button className="text-lime-500 border border-lime-500 py-4 px-8 rounded bg-zinc-900 hover:bg-zinc-700" type="submit">
                Send message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
