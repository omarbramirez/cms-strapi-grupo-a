'use client'
import { useState, useEffect } from 'react';
import Image from 'next/image';

const logos = [
  { src: '/logos/logo01.png', alt: 'Logo 1995', year: '1995' },
  { src: '/logos/logo02bis.png', alt: 'Logo 2005', year: '2005' },
  { src: '/logos/logo03.png', alt: 'Logo 2015', year: '2015' },
  { src: '/logos/logo04.png', alt: 'Logo 2015', year: '2015' }
];

const LogoSlider = () => {
  const [currentLogoIndex, setCurrentLogoIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentLogoIndex((prevIndex) =>
        prevIndex === logos.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); 
    return () => clearInterval(intervalId);
  }, []);

  return (
<div className="h-1/4 sm:h-1/3 flex flex-col justify-center items-center z-3">
      <Image
       src={`/logos/logo.png`}
          alt={`Logo First Part`}
          width={0}
          height={0}
          sizes="50vw"
          className={`w-2/3 sm:w-1/2 h-auto pb-10 object-contain`}
      />
          <div className="w-full relative ">
      {logos.map((logo, index) => (
        <Image
          key={index}
          src={logo.src}
          alt={logo.alt}
          width={0}
          height={0}
          sizes="50vw"
          className={`w-2/3 sm:w-1/2 h-auto absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 logo-image pt-10p t-20 sm:pt-20 ${index === currentLogoIndex ? 'active' : ''}`}
        />
      ))}
    </div>
    </div>
  );
};

export default LogoSlider;