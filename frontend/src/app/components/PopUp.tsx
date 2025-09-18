'use client'
import React, { useEffect, useState } from 'react'
import { X } from 'lucide-react';
import Image from 'next/image';

const PopUp = () => {

  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setShow(true);
        window.removeEventListener("scroll", handleScroll)
      } else {
        setShow(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll)
  }, []);

  if (!show) return null;
  return (

    <div className={`fixed inset-0 m-auto w-[80vw] max-w-[600px] sm:w-[50vw] h-[80vh] sm:h-[60vh] bg-white z-50 shadow-xl/50 flex flex-col sm:flex-row justify-center items-start rounded-2xl overflow-hidden`}>
               <X onClick={() => setShow(false)} className="absolute top-3 right-3 w-[2em] h-[2em] rounded-md  cursor-pointer text-dark bg-white z-51  block sm:hidden"
/>

        <div className="relative w-full sm:w-1/2 h-1/2 sm:h-full">

          <Image
            src={`/mag-cover.png`}
            fill
            alt=""
            className=" object-cover object-top"
          />
        </div>
        <section className="relative flex flex-col justify-center items-start w-full sm:w-1/2 h-1/2 sm:h-auto p-5 text-center sm:text-left">
        <X onClick={() => setShow(false)} className=' shrink-0 w-[2em] h-[2em] !cursor-pointer self-end mb-3 hidden sm:block' />
          <span className="block font-heading font-normal text-3xl text-[var(--color-dark)] transition-colors duration-500 group-hover:text-[var(--color-secondary)]">Descargar Revista América</span>
           <p className='block mt-4 font-body font-normal text-xl text-[var(--color-dark)] '>El Grupo América se complace en poner a su disposición su Revista América desde el primer número de agosto de 1925.

</p>
                    <button
            type="submit"
            className="px-6 mx-auto sm:mx-0 py-3 bg-primary opacity-90  text-white font-semibold hover:opacity-100 transition-all duration-300 ease-in-out mt-3 rounded-xl"
          >
            Descargar
          </button>
        </section>
    </div>
  )
}

export default PopUp
