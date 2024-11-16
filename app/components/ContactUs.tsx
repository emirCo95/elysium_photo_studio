import React from 'react';
import { raleway } from '../ui/fonts';

const ContactUs = () => {
  return (
    <div
      id="contact"
      className="w-full h-[100vh] flex justify-center items-center gap-5 bg-slate-100 overflow-hidden pl-10"
    >
      <div className={`${raleway.className} w-[50%]`}>
        <h1 className="text-3xl text-gray-800 font-extrabold text-center">
          Contact us
        </h1>
        <form className="mt-8 space-y-4 flex flex-col justify-center items-center">
          <input
            type="text"
            placeholder="Name"
            className="w-full rounded-md py-3 px-4 text-gray-800 bg-white focus:bg-transparent text-sm outline-black"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full rounded-md py-3 px-4 text-gray-800 bg-white focus:bg-transparent text-sm outline-black"
          />
          <input
            type="text"
            placeholder="Subject"
            className="w-full rounded-md py-3 px-4 text-gray-800 bg-white focus:bg-transparent text-sm outline-black"
          />
          <textarea
            placeholder="Message"
            rows={6}
            className="w-full rounded-md py-3 px-4 text-gray-800 bg-white focus:bg-transparent text-sm outline-black"
          ></textarea>
          <button
            type="button"
            className="text-black bg-white hover:bg-black hover:text-white tracking-wide rounded-md text-sm px-4 py-3 w-[50%]"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
