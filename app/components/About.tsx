import Image from 'next/image';
import React from 'react';
import { raleway } from '../ui/fonts';

const About = () => {
  return (
    <div className="w-full h-[90vh] flex gap-5 bg-black overflow-hidden">
      <div className="w-[80%] flex flex-col justify-center items-center">
        <h1
          className={`${raleway.className} antialiased text-white text-5xl text-center p-2`}
        >
          See the world through our lens.
        </h1>
        <Image src="/hero.png" alt="hero" width={500} height={500} />
      </div>
    </div>
  );
};

export default About;
