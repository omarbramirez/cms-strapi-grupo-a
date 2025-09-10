import { getEvents } from '@/lib/get'
import React from 'react'
import Event from './ui/Event';

const Agenda = async () => {
  const events = await getEvents();
  return (
    <div className='w-auto box-border lg:w-2/6 px-[2vw] '>
      <h1 className='text-2xl text-center  lg:text-left tracking-tight truncate'>PRÓXIMOS EVENTOS</h1>
      {events.map((event, index) => (
        <Event event={event} key={index}/>
      ))

      }

    </div>
  )
}

export default Agenda
