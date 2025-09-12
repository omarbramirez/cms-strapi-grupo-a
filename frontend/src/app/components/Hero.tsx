import { getHomeInfo } from '@/lib/get';
import React from 'react';
import Image from 'next/image';

const Hero = async () => {
  const { title, description, image } = await getHomeInfo();
  return (
    <div className='block w-full px-10 py-5  box-border text-center '>
      <div className="w-[90%] mx-auto my-20">
        <Image
          src="/logo.svg"
          alt="My Icon"
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-auto"
        />
      </div>
    </div>
  );
};

export default Hero;