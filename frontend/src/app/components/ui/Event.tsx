import React from 'react'
import Link from "next/link"

const Event = ({event}) => {

  return (
    <div  className='bg-[var(--color-primary)] rounded-2xl p-5 pt-3'>
      <Link href="#" className='!text-[var(--color-light)]'>{event.title}</Link>
    </div>
  )
}

export default Event
