import React from 'react'
import Link from "next/link"

const Event = ({event, index}) => {

  return (
    <div className='w-auto md:min-w-40 max-w-80 min-h-38 group bg-[var(--color-primary)] transition-colors duration-500 hover:bg-[var(--color-secondary)] rounded-2xl p-5 pt-3 m-1 mt-0 flex flex-col !cursor-pointer'>
      <span className='text-white opacity-85 group-hover:opacity-100 
             transition-opacity duration-500'>{event.date} | {event.time}</span>
      <p className='text-heading text-[var(--color-light)] opacity-75 group-hover:opacity-90 
             transition-opacity duration-500 text-bold text-xs'>{event.categoryName}</p>     
      <Link href="#" className='!text-[var(--color-light)] opacity-85 group-hover:opacity-100 
             transition-opacity duration-500 text-2xl md:text-xl mt-2'>{event.title}</Link>
    </div>
  )
}

export default Event
