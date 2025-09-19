import Image from 'next/image'
import React from 'react'

const Template = () => {
  return (
<div className="w-screen h-screen flex flex-col items-center justify-center bg-primary uppercase">
    <div className='relative w-10/12 mx-auto mb-5 h-20 border-box '>
              <Image
                src={`/logos/logo-full-light.png`}
                fill
                alt=""
                className="object-scale-down"
              />
    </div>

        <h1 className='text-2xl text-center  lg:text-left truncate !text-light'>Espere un momento</h1>
        
<span className="loader"></span>
        
      
    </div>
  )
}

export default Template
