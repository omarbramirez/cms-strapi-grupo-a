'use client'
import React from 'react'
import Link from "next/link"
import { EventComponentProps } from '@/lib/types'
import { MapPinned, CalendarClock, CircleCheck } from 'lucide-react';
import { motion } from "motion/react"
import { img } from 'motion/react-client';

const calendars = [
  {icon: "icons/google-calendar.svg", iconLight: "icons/google-calendar-light.svg",service: "Google Calendar"},
  {icon: "icons/microsoft-outlook.svg", iconLight: "icons/microsoft-outlook-light.svg",service: "Microsoft Outlook Calendar"},
  {icon: "icons/cloud-calendar.svg", iconLight: "icons/cloud-calendar-light.svg",service: "iCloud Calendar"}
]

const Event = ({ event, index }: EventComponentProps) => {
  return (
    <motion.div
        whileHover={{ scale: 0.97 }} 
        transition={{ delay: 0.1, duration: 0.3 }}
      className="
        relative overflow-hidden group
        min-h-38 min-w-60 flex flex-col flex-1 lg:shrink-0
        bg-[var(--color-primary)] rounded-2xl p-5 pt-3 m-2 mt-0 !cursor-pointer
        transition-colors duration-500 shadow-md
      "
    >
      {/* overlay animado */}
      <div
        className="
          absolute inset-0  after:content-[''] after:absolute
          after:w-full after:h-full after:top-full after:left-0
          after:bg-[var(--color-secondary)] after:opacity-70
          after:transition-all after:duration-400
          group-hover:after:top-0
        "
      />

      <span className="relative w-full text-white opacity-85 group-hover:opacity-100 transition-opacity duration-500 flex flex-row justify-right items-center mb-2">
        <CalendarClock className="mr-2 my-icon" />{event.date} | {event.time}
      </span>

      <span className="relative w-full text-white opacity-85 group-hover:opacity-100 transition-opacity duration-500 flex flex-row justify-right items-center mb-2">
        <MapPinned className="mr-2 my-icon" /> {event.location}
      </span>

      <span className="relative text-white opacity-85 group-hover:opacity-100 transition-opacity duration-500 flex flex-row justify-right items-center">
        <CircleCheck className="mr-2 my-icon" /> {event.dispo}
      </span>

      <p className="relative text-heading text-[var(--color-light)] opacity-75 group-hover:opacity-90 transition-opacity duration-500 text-bold text-xs mb-1 mt-3">
        {event.categoryName}
      </p>

      <Link
        href="#"
        className="relative !text-[var(--color-light)] opacity-85 group-hover:opacity-100 transition-opacity duration-500 text-2xl md:text-xl"
      >
        {event.title}
      </Link>
      <div className='bg-secondary p-2 rounded-2xl mt-3 shadow-lg group-hover:bg-light transition-all duration-500 z-2'>

      
            <span className="relative w-full text-dark font-bold opacity-85 group-hover:opacity-100 transition-opacity duration-500 flex flex-row justify-right items-center mb-2">Agregar recordatorio</span>
      <div className='relative flex flex-row justify-start '>
        {calendars && calendars.map((calendar, index) =>(
                <span key={index} className="relative w-fit text-white opacity-85 group-hover:opacity-100 transition-opacity duration-500 flex flex-row justify-right items-center mb-2">
          <img src={calendar.icon} alt="" className="my-calendar object-scale-down opacity-75 group-hover:opacity-100 transition-all duration-500" />
              <span className="
     absolute top-0 ml-3
      opacity-0 hover:opacity-100
      transition-opacity duration-300
      text-xs bg-black/80 text-white px-2 py-1 rounded-lg
      whitespace-nowrap z-3
    ">
      {calendar.service}
    </span>
            </span>
        ))}
        </div>
      </div>
    </motion.div>
  )
}

export default Event
