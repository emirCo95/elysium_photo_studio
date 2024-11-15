import Image from 'next/image';
import React from 'react';

const Navbar = () => {
  return (
    <nav className="w-full h-[10vh] flex justify-between items-center px-10">
      <div className="">
        <Image src="/logo.png" alt="logo" width={100} height={80} />
      </div>
      <div className="">
        <span>Elysium Photo Studio 2024.</span>
      </div>
    </nav>
  );
};

export default Navbar;
