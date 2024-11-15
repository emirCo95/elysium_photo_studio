import Image from 'next/image';
import React from 'react';
import { raleway } from '../ui/fonts';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="w-full h-[10vh] flex justify-between items-center px-20">
      <Link href="/">
        <Image src="/logo.png" alt="logo" width={100} height={80} />
      </Link>
      <div className="">
        <span className={`${raleway.className} antialiased text-xl`}>
          Elysium Photo Studio 2024.
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
