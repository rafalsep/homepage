import React from 'react';

const Contact = ({ standalone }) => {
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
        <header>{standalone ? <h1 className="pb-10">Get in Touch</h1> : <h2 className="pb-10">Get in Touch</h2>}</header>
        <p>Want to work together or have any questions?</p>
        <div className="py-4">
          <form className="w-full max-w-lg" action="https://getform.io/f/73fb3edb-f813-4bb1-94ee-b2d0f7d755e7" method="POST" onSubmit={handleSubmit} data-test-id="contact-me-form">
            <div className="flex flex-wrap -mx-3">
              <div className="w-full md:w-1/2 px-3 mb-3 md:mb-0">
                <label className="block uppercase tracking-wide text-zinc-400 text-xs font-bold mb-2" htmlFor="contact-name">
                  Name
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 mt-2 leading-tight focus:outline-none focus:bg-white"
                    id="contact-name"
                    type="text"
                    placeholder="Jane"
                    name="name"
                  />
                </label>
              </div>
              <div className="w-full md:w-1/2 px-3 mb-3 md:mb-0">
                <label className="block uppercase tracking-wide text-zinc-400 text-xs font-bold mb-2" htmlFor="contact-email">
                  Email
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 mt-2 leading-tight focus:outline-none focus:bg-white"
                    id="contact-email"
                    type="email"
                    placeholder="some.email@somewhere.com"
                    required
                    name="email"
                  />
                </label>
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-3 md:mb-0">
              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-zinc-400 text-xs font-bold mb-2" htmlFor="contact-subject">
                  Subject
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 mt-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="contact-subject"
                    type="text"
                    placeholder="Hello!"
                    name="subject"
                  />
                </label>
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-3">
              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-zinc-400 text-xs font-bold mb-2" htmlFor="contact-message">
                  Message
                  <textarea
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 mt-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="contact-message"
                    placeholder="Message goes here"
                    rows="6"
                    required
                    name="message"
                  />
                </label>
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
