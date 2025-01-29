import React from 'react'
import CardOne from './Cards/CardOne'
import CardTwo from './Cards/CardTwo'

function Services() {
  return (
    <div className='flex flex-col items-center'>
        <p className='text-black text-3xl mt-5 mb-4'>Our Services</p>
        <div className='flex flex-col items-center md:flex-wrap md:flex-row space-y-2'>
            <CardOne />
            <CardTwo />
        </div>
    </div>

  )
}

export default Services
