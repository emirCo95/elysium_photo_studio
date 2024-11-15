import Image from 'next/image';
import { raleway } from './ui/fonts';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="w-full h-[90vh] flex bg-black overflow-hidden">
      <div className="w-[30%] flex justify-center items-center">
        <div className="">
          <Link href="/">Home</Link>
        </div>
      </div>
      <div className="w-[70%] flex flex-col justify-center items-center">
        <h1
          className={`${raleway.className} antialiased text-white text-5xl text-center`}
        >
          See the world through our lens.
        </h1>
        <Image src="/hero.jpg" alt="hero" width={500} height={500} />
      </div>
    </div>
  );
}
