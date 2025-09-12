'use client'
import React, {useState} from 'react'
import { Search } from 'lucide-react';

const Research = () => {
const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='flex justify-center items-center'>
      <Search onClick={()=> setIsOpen(!isOpen)} className='text-secondary mx-1 !cursor-pointer'/>
               <input
            type="text"
            placeholder="Buscar..."
            className= {`text-dark px-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300 ease-in-out w-0 cursor-pointer ${isOpen ? "w-48 cursor-text": ""}`}
          />
    </div>
  )
}

export default Research
