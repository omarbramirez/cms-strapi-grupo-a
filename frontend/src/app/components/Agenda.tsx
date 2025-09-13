import { getEvents } from '@/lib/get'
import React from 'react'
import Event from './ui/Event';

export interface EventData {
  id: string;
  name: string;
  date: string;
}

const Agenda = async () => {
  const events: EventData[] = await getEvents();
   

  return (
    <div className='w-full box-border lg:w-2/8 mt-10 lg:mt-0'>
      <h1 className='text-2xl text-center  lg:text-left truncate'>PRÓXIMOS EVENTOS</h1>
<div className="flex flex-row lg:flex-col  overflow-x-scroll lg:overflow-x-visible my-5 pb-5">

      {events.map((event, index) => (
        <Event event={event} key={index}/>
      ))
      
    }
    </div>

    </div>
  )
}

export default Agenda
