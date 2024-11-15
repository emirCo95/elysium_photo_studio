import Image from 'next/image';
import React from 'react';

const Photos = () => {
  return (
    <div
      id="photos"
      className="w-full h-[100vh] flex gap-5 bg-black overflow-hidden"
    >
      <div className="w-[30%] lg:w-[80%] grid grid-cols-1 grid-rows-4 lg:grid-cols-2 lg:grid-rows-2 ml-60 md:ml-80">
        <div className="w-full h-full">
          <Image
            className="object-cover"
            src="/photo_1.jpg"
            alt="photo_1"
            width={1920}
            height={1280}
          />
        </div>
      </div>
    </div>
  );
};

export default Photos;
