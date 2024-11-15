import Image from 'next/image';
import { anon_pro, raleway } from './ui/fonts';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="w-full h-[90vh] flex gap-5 bg-black overflow-hidden">
      <div className="w-[30%] flex flex-col justify-center items-start gap-5">
        <div className="bg-white w-[150px] md:w-[300px] h-[50px] rounded-r-3xl flex justify-center items-center">
          <Link
            className={`${anon_pro.className} antialiased text-black text-xl`}
            href="/"
          >
            Home
          </Link>
        </div>
        <div className="bg-white w-[150px] md:w-[300px] h-[50px] rounded-r-3xl flex justify-center items-center">
          <Link
            className={`${anon_pro.className} antialiased text-black text-xl`}
            href="/about"
          >
            About
          </Link>
        </div>
        <div className="bg-white w-[150px] md:w-[300px] h-[50px] rounded-r-3xl flex justify-center items-center">
          <Link
            className={`${anon_pro.className} antialiased text-black text-xl`}
            href="/photos"
          >
            Photos
          </Link>
        </div>
        <div className="bg-white w-[150px] md:w-[300px] h-[50px] rounded-r-3xl flex justify-center items-center">
          <Link
            className={`${anon_pro.className} antialiased text-black text-xl`}
            href="/contact"
          >
            Contact
          </Link>
        </div>
      </div>
      <div className="w-[70%] flex flex-col justify-center items-center">
        <h1
          className={`${raleway.className} antialiased text-white text-5xl text-center p-2`}
        >
          See the world through our lens.
        </h1>
        <Image src="/hero.png" alt="hero" width={500} height={500} />
      </div>
    </div>
  );
}
