import React from 'react'
import Link from "next/link"
import { CalendarDays } from 'lucide-react';
const Navbar = () => {
    return (
        <nav>
            <div className="hidden sm:flex w-full items-center justify-between mx-auto my-10">
                <ul className="sm:flex flex-1 justify-center gap-4">
                    <li>
                        <Link href="#" className="flex flex-row ">Agenda <CalendarDays className="ml-2"/></Link>
                        
                    </li>
                    <li>
                        <Link href="#">El grupo</Link>
                    </li>
                    <li>
                        <Link href="#">Revista América</Link>
                    </li>
                    <li>
                        <Link href="#">Contacto</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
