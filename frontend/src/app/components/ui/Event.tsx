import React from 'react'
import Link from "next/link"
import {EventData,EventComponentProps} from '@/lib/types'

const Event = ({event, key}: EventComponentProps) => {

  return (
    <div className='min-h-38 min-w-60 group bg-[var(--color-primary)] transition-colors duration-500 hover:bg-[var(--color-secondary)] rounded-2xl p-5 pt-3 m-2 mt-0 flex flex-col !cursor-pointer flex-1 lg:shrink-0'>
      <span className='text-white opacity-85 group-hover:opacity-100 
             transition-opacity duration-500'>{event.date} | {event.time}</span>
      <p className='text-heading text-[var(--color-light)] opacity-75 group-hover:opacity-90 
             transition-opacity duration-500 text-bold text-xs my-1'>{event.categoryName}</p>     
      <Link href="#" className='!text-[var(--color-light)] opacity-85 group-hover:opacity-100 
             transition-opacity duration-500 text-2xl md:text-xl mt-2'>{event.title}</Link>
    </div>
  )
}

export default Event
