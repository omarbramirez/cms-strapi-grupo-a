
import React from 'react';
import Image from 'next/image';
import LogoSlider from './animations/LogoSlider';
import GridDistortion from '@/app/components/animations/GridDistortion';
import { CircleChevronDown } from 'lucide-react';

const Hero = async () => {
  return (
    <div className='block w-full h-screen box-border text-center flex flex-col justify-start pt-20'>
      <div className=" w-11/12 sm:w-2/3 h-auto mx-auto mb-0 sm:mb-3 z-3">
      <a href="#content">
      <CircleChevronDown size={45} className='text-white z-3 m-auto mb-5 text-4xl cursor-pointer transition-all duration-300 ease-in-out hover:translate-y-2'/>
      </a>
          <h1 className='text-3xl text-center !text-light'>¡Un legado de casi un siglo, forjado en cada página!</h1>
      </div>
      <div className='block lg:hidden h-screen w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
       <GridDistortion
    imageSrc="/personajes.png"
    grid={10}
    mouse={0.1}
    strength={0.15}
    relaxation={0.9}
    className=" custom-class w-full w-screen"
    />

    </div>
          <div className='hidden lg:block h-screen w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
       <GridDistortion
    imageSrc="/Cabecera2.png"
    grid={10}
    mouse={0.1}
    strength={0.15}
    relaxation={0.9}
    className=" custom-class w-full w-screen"
    />

    </div>
        <LogoSlider/>
    </div>
  );
};

export default Hero;