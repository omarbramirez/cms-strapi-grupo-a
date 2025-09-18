'use client'
import React, { useState, useEffect, useRef } from 'react'
import { Menu, X, CalendarDays } from "lucide-react";
import Link from "next/link"
import Research from './ui/Research';
import Image from 'next/image';

const ResponsiveMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScroll, setIsScroll] = useState(false);
  const closeMenu = () => {
    return setIsOpen(false)
  };

  const openMenu  = () => {
    return setIsOpen(true)
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    }

    window.addEventListener('scroll', handleScroll);

    handleScroll();
setIsOpen(false)
    return () => {
      window.removeEventListener('scroll', handleScroll);
      
    }

  }, [])

  return (
    <nav className={`w-full lg:hidden !z-99 fixed`}>
      <div className={`flex justify-between items-center w-screen p-2 px-5 bg-light border-b border-gray-700 !z-100 absolute top-[0rem]`}  aria-label="Toggle menu">
        {isOpen ? <X className="text-dark" onClick={closeMenu}/>: <Menu className="text-dark" onClick={ openMenu }/>}
                                <a href="#hero" className={`w-2/5 mx-auto opacity-0  ${isScroll ? "opacity-100" : ""} transform transition-all duration-500`}>
                          <Image
                            src="/logo.svg"
                            alt="My Icon"
                            width={0}
                            height={0}
                            sizes="100vw"
                            className="w-full h-full"
                          />
                        </a>
                        <Research/>

      </div>
      <ul
        className={` bg-light ${isOpen ? " absolute top-[0rem]" : "absolute top-[-100vh]"} w-full h-[100vh] shadow-lg flex flex-col justify-center gap-4 p-6 transform transition-all duration-500 ease-in-out !z-98 bg-light/80 backdrop-blur-lg shadow-sm`}
      >
        <li>
          <Link href="#" className="flex flex-row text-xl items-center text-dark">Agenda <CalendarDays className="ml-2" /></Link>

        </li>
                    <li>
                        <Link href="#" className='text-xl text-dark'>El grupo</Link>

                        <ul className="block p-4 space-y-2 mt-2 ">
                            <li><Link href="#" className='text-xl'>Fundadores</Link></li>
                            <li><Link href="#" className='text-xl'>Historia</Link></li>
                            <li><Link href="#" className='text-xl'>Objetivos</Link></li>
                            <li><Link href="#" className='text-xl'>Miembros Actuales</Link></li>
                            <li><Link href="#" className='text-xl'>Directiva</Link></li>
                        </ul>
                    </li>
                    <li>
                        <Link href="#" className='text-xl'>Revista América</Link>
                            <ul className="block text-white p-4 space-y-2 mt-2">
                            <li><Link href="#" className='text-xl'>Historia Revista América</Link></li>
                            <li><Link href="#" className='text-xl'>Descargar Revista América</Link></li>
                        </ul>
                    </li>
        <li>
          <Link href="#" className='text-xl'>Contacto</Link>
        </li>
      </ul>
    </nav>
  )
}

export default ResponsiveMenu
