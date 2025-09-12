import React from 'react'
import Link from "next/link"
import { CalendarDays } from 'lucide-react';
import Search from './ui/Research';
import Research from './ui/Research';

const Navbar = () => {
    
   

    return (
        <nav>
            <div className="hidden lg:flex w-full items-center justify-between mx-auto my-10 border-t border-b py-3 border-gray-700">
                <ul className="sm:flex flex-1 justify-center items-center gap-4">
                    <li>
                        <Link href="#" className="flex flex-row text-xl justify-center items-center">Agenda <CalendarDays className="ml-2"/></Link>
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
                    <li>
                        <Research/>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
