
import React from 'react';
import Image from 'next/image';
import LogoSlider from './animations/LogoSlider';
import Typewriter from './animations/Typewriter';
import { CircleChevronDown } from 'lucide-react';



const Hero = () => {

  return (
    <div id="hero" className='w-full h-fit min-h-screen box-border text-center flex flex-col justify-center items-center'>
      <div className='absolute top-0 z-2 w-full h-screen bg-gradient-to-t from-black/75 to-transparent'></div>
      <div className=" w-11/12 sm:w-2/3 h-auto pt-15 z-3 ">
      <a href="#navbar">
      <CircleChevronDown size={45} className="text-white z-3 m-auto mb-5 text-4xl cursor-pointer animate-[bounceY_3s_ease-in-out_infinite]"/>
      </a>
          <h1 className='text-3xl text-center !text-light cursor-default'><Typewriter text="¡Un legado de casi un siglo, forjado en cada página!" delay={20}/></h1>
      </div>
    
      <div className='block lg:hidden h-screen w-full absolute '>
      <Image src={`/personajes.png`} alt={`Logo First Part`}
          width={0}
          height={0}
          sizes="50vw"
          className={`w-full h-screen object-cover`}/>

    </div>
          <div className='hidden lg:block h-screen w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
           <Image src={`/Cabecera2.png`} alt={`Logo First Part`}
          width={0}
          height={0}
          sizes="50vw"
          className={`w-full h-screen object-cover `}/>
      
    </div>
        <LogoSlider/>

    </div>
  );
};

export default Hero;