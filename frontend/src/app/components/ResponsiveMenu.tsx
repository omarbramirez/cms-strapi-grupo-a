'use client'
import React, { useState, useEffect, useRef } from 'react'
import { Menu, X, CalendarDays } from "lucide-react";
import Link from "next/link"
import Research from './ui/Research';
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

    return () => {
      window.removeEventListener('scroll', handleScroll);
      
    }
setIsOpen(false)
  }, [])


  return (
    <nav className={`w-full fixed lg:hidden !z-99`}>
      <div className={`flex justify-between items-center w-screen p-3 px-5 bg-light border-b border-gray-700 !z-100 absolute top-[0rem]`}  aria-label="Toggle menu">
        {isOpen ? <X className="text-dark" onClick={closeMenu}/>: <Menu className="text-dark" onClick={ openMenu }/>}
                        <Research/>
                  
      </div>
      <ul
        className={` bg-light ${isOpen ? " absolute top-[0rem]" : "absolute top-[-20rem]"} w-full h-[20rem] shadow-lg flex flex-col justify-center gap-4 p-6 transform transition-all duration-500 ease-in-out !z-98  ${isScroll ? "bg-light/90 backdrop-blur-lg shadow-sm " : " "}`}
      >
        <li>
          <Link href="#" className="flex flex-row text-xl items-center">Agenda <CalendarDays className="ml-2" /></Link>

        </li>
        <li>
          <Link href="#" className='text-xl'>El grupo</Link>
        </li>
        <li>
          <Link href="#" className='text-xl'>Revista América</Link>
        </li>
        <li>
          <Link href="#" className='text-xl'>Contacto</Link>
        </li>
      </ul>
    </nav>
  )
}

export default ResponsiveMenu
