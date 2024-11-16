import Image from 'next/image';
import React from 'react';

const Photos = () => {
  return (
    <div
      id="photos"
      className="w-full h-[100vh] flex gap-5 bg-black overflow-hidden"
    >
      <div className="w-[50%] lg:w-[80%] grid grid-cols-1 grid-rows-4 lg:grid-cols-2 lg:grid-rows-2 ml-60 md:ml-80">
        <div className="w-full h-full p-2">
          <Image
            className="w-full h-full object-cover transition-all duration-500 hover:scale-105"
            src="/photo_1.jpg"
            alt="photo_1"
            width={1920}
            height={1280}
          />
        </div>
        <div className="w-full h-full p-2">
          <Image
            className="w-full h-full object-cover transition-all duration-500 hover:scale-105"
            src="/photo_2.jpg"
            alt="photo_2"
            width={1920}
            height={1280}
          />
        </div>
        <div className="w-full h-full p-2">
          <Image
            className="w-full h-full object-cover transition-all duration-500 hover:scale-105"
            src="/photo_3.jpg"
            alt="photo_3"
            width={1920}
            height={1280}
          />
        </div>
        <div className="w-full h-full p-2">
          <Image
            className="w-full h-full object-cover transition-all duration-500 hover:scale-105"
            src="/photo_4.jpg"
            alt="photo_4"
            width={1920}
            height={1280}
          />
        </div>
      </div>
    </div>
  );
};

export default Photos;
