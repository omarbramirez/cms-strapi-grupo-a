'use client'
import React from 'react'
import Link from "next/link"
import {EventData,EventComponentProps} from '@/lib/types'
import { MapPinned,CalendarClock, CircleCheck } from 'lucide-react';
import { motion } from "motion/react"


const Event = ({event, index}: EventComponentProps) => {

  return (
    <motion.div initial={{opacity: 0 }}
    whileInView={{ opacity: 1 }}
    whileHover={{ scale: 0.55 }} 
    transition={{ delay: index * 0.9, duration: 0.5 }}
    viewport={{ once: true }} className='min-h-38 min-w-60 group bg-[var(--color-primary)] transition-colors duration-500 hover:bg-[var(--color-secondary)] rounded-2xl p-5 pt-3 m-2 mt-0 flex flex-col !cursor-pointer flex-1 lg:shrink-0'>
      <span className='w-full text-white opacity-85 group-hover:opacity-100 
             transition-opacity duration-500 flex flex-row justify-right items-center mb-2'><CalendarClock  className='mr-2 my-icon'/>{event.date} | {event.time}</span>
                          <span className='w-full text-white opacity-85 group-hover:opacity-100 
             transition-opacity duration-500 flex flex-row justify-right items-center mb-2'> <MapPinned className='mr-2 my-icon'/> {event.location} </span>   
                                       <span className='text-white opacity-85 group-hover:opacity-100 
             transition-opacity duration-500 flex flex-row justify-right items-center'> <CircleCheck className=' my-icon mr-2'/> {event.dispo} </span>  
             <p className='text-heading text-[var(--color-light)] opacity-75 group-hover:opacity-90 
             transition-opacity duration-500 text-bold text-xs mb-1 mt-3'>{event.categoryName}</p> 
      <Link href="#" className='!text-[var(--color-light)] opacity-85 group-hover:opacity-100 
             transition-opacity duration-500 text-2xl md:text-xl '>{event.title}</Link>
      
    </motion.div>
  )
}

export default Event
