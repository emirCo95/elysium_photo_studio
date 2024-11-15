import React from 'react';
import { raleway } from '../ui/fonts';

const About = () => {
  return (
    <div
      id="about"
      className="w-full h-[100vh] flex gap-5 bg-slate-100 overflow-hidden"
    >
      <div
        className={`${raleway.className} antialiased w-[80%] flex flex-col justify-center items-center ml-40 md:ml-60 `}
      >
        <h1 className="w-[500px] md:w-[500px]  text-black text-3xl md:text-5xl text-center p-2">
          About Our Photo Studio
        </h1>
        <p className="w-[500px] md:w-[500px] text-black text-xl text-center p-2">
          Welcome to Elysium, where creativity meets professionalism! Our studio
          is dedicated to capturing life&apos;s most beautiful moments with
          style and precision.
        </p>
        <ul className="w-[500px] md:w-[700px] text-black text-xl p-2">
          <li className="p-3">
            <strong>Who We Are:</strong> A team of passionate photographers and
            creatives with years of experience in portrait, event, and
            commercial photography.
          </li>
          <li className="w-[500px] md:w-[700px] text-black text-xl p-2">
            <strong>What We Offer:</strong> State-of-the-art equipment, a modern
            studio setting, and a commitment to delivering high-quality images
            that exceed your expectations.
          </li>
          <li className="w-[500px] md:w-[700px] text-black text-xl p-2">
            <strong>Our Philosophy:</strong> We believe every photo tells a
            story, and our mission is to ensure yours is unforgettable.
          </li>
        </ul>
        <p className="w-[500px] md:w-[700px] text-black text-xl p-2">
          Whether you&apos;re looking for a family portrait, a corporate
          headshot, or a creative concept shoot, we&apos;ve got you covered! Let
          us help bring your vision to life.
        </p>
      </div>
    </div>
  );
};

export default About;
