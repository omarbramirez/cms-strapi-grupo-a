'use client'
import { useRef,useState, useEffect } from 'react';
import Image from 'next/image';
import { div } from 'three/tsl';

const logos = [
  { src: '/logos/logo01-light.png', alt: 'Logo 1925', year: '1925', desc: 'En sus orígenes, la revista surge como órgano cultural frente a un vacío editorial.' },
  { src: '/logos/logo02-light.png', alt: 'Logo 1927', year: '1927', desc: 'En sus páginas se gesta y consolida el indigenismo como corriente literaria nacional.' },
  { src: '/logos/logo03-light.png', alt: 'Logo 1944', year: '1944', desc: 'La publicación se diversifica con números monográficos y antologías de poesía.' },
  { src: '/logos/logo02-light.png', alt: 'Logo 1947', year: '1947', desc: 'Desde su seno nacen instituciones culturales claves como la Casa de la Cultura.' },
   { src: '/logos/logo04-light.png', alt: 'Logo 2005', year: '2005', desc: 'Superando crisis y décadas, la revista mantiene vigencia y prestigio intelectual.' }
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

  const spanRef = useRef(null);
  const [spanHeight, setSpanHeight] = useState(0);

  useEffect(() => {
    if (spanRef.current) {
      setSpanHeight(spanRef.current.offsetHeight);
    }
  }, [currentLogoIndex]);

  return (
<div className="w-full h-fit min-h-[50vh] py-5 box-border flex flex-col justify-start items-center z-3">
<div className="w-full">
      <Image
       src={`/logos/logo-light.png`}
          alt={`Logo First Part`}
          width={0}
          height={0}
          sizes="100vw"
          className={`w-1/2 sm:w-auto mx-auto h-auto sm:h-[5rem] !object-scale-down`}
      />
      </div>
          <div className="w-full relative h-[5rem]">
      {logos.map((logo, index) => (
        <Image
          key={index}
          src={logo.src}
          alt={logo.alt}
          width={0}
          height={0}
          sizes="100vw"
          className={`w-1/2 sm:w-auto h-auto sm:h-[5rem] absolute top-0 left-1/2 -translate-x-1/2 logo-image 
 ${index === currentLogoIndex ? 'active' : ''}`}
        />
      ))}
    </div>
      <div className='w-full relative' style={{ height: spanHeight }}>
                {logos.map((logo, index) => (
                  <span  ref={index === currentLogoIndex ? spanRef : null} key={index} className={`w-auto absolute top-0 left-1/2 -translate-x-1/2 !text-light logo-image cursor-default pt-5 ${index === currentLogoIndex ? 'active' : ''}`}> 
                <h2 className={`text-3xl font-bold`}>{logo.year}</h2>
                <p className='text-2xl'>{logo.desc}</p>
</span>
     ))}
        </div>
    </div>
  );
};

export default LogoSlider;