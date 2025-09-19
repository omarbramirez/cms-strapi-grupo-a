import { getEvents } from '@/lib/get'
import React from 'react'
import Event from './ui/Event';

import {EventData} from '@/lib/types'
import { div } from 'three/tsl';

const Agenda = async () => {
  let events: EventData[] = [];
  
  try {
    events = await getEvents();
  } catch (error) {
    console.error('Error al obtener eventos:', error);
  }
   
  
  
  return (
    <div className='w-full box-border lg:w-2/8 mt-10 lg:mt-0'>
      <h1 className='text-2xl text-center  lg:text-left truncate mx-2'>PRÓXIMOS EVENTOS</h1>
<div className="flex flex-row lg:flex-col  overflow-x-scroll lg:overflow-x-visible my-5 pb-5">

      {events && events.map((event, index) => (
        <div  key={index}>
<Event event={event} index={index}/>
        </div>
        
      ))
      
    }
    </div>

    </div>
  )
}

export default Agenda
