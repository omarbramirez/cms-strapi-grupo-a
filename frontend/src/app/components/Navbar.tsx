'use client'
import React, {useState, useRef, useEffect} from 'react'
import Link from "next/link"
import { CalendarDays } from 'lucide-react';
import Search from './ui/Research';
import Research from './ui/Research';

const Navbar = () => {

const [open, setOpen] = useState(false);
const liRef = useRef<HTMLElement>(null);



    return (
        <nav>
            <div className="hidden lg:flex w-full items-center justify-between mx-auto my-10 border-t border-b py-3 border-gray-700">
                <ul className="sm:flex flex-1 justify-center items-center gap-4">
                    <li>
                        <Link href="#" className="flex flex-row text-xl justify-center items-center">Agenda <CalendarDays className="ml-2" /></Link>
                    </li>
                    <li className='relative hover:[&>ul]:block'>
                        <Link href="#" className='text-xl'>El grupo</Link>

                        <ul className="hidden absolute top-[1rem] bg-light text-white p-4 space-y-2 mt-2 border-gray-700 border-b border-l border-r">
                            <li><Link href="#" className='text-xl'>Fundadores</Link></li>
                            <li><Link href="#" className='text-xl'>Historia</Link></li>
                            <li><Link href="#" className='text-xl'>Objetivos</Link></li>
                            <li><Link href="#" className='text-xl'>Miembros Actuales</Link></li>
                            <li><Link href="#" className='text-xl'>Directiva</Link></li>
                        </ul>
                    </li>
                    <li className='relative hover:[&>ul]:block'>
                        <Link href="#" className='text-xl'>Revista América</Link>
                            <ul className="hidden absolute top-[1rem] bg-light text-white p-4 space-y-2 mt-2 border-gray-700 border-b border-l border-r">
                            <li><Link href="#" className='text-xl'>Historia Revista América</Link></li>
                            <li><Link href="#" className='text-xl'>Descargar Revista América</Link></li>
                        </ul>
                    </li>
                    <li>
                        <Link href="#" className='text-xl'>Contacto</Link>
                    </li>
                    <li>
                        <Research />
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
