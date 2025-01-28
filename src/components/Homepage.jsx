import React from 'react'
import Navbar from './Navbar'
import HomeCard from './Cards/HomeCard'
import Trainer from './Cards/Trainer'

function Homepage() {
  return (
    <div className='flex flex-col justify-center items-center'>
      <Navbar />
      <div className='w-full min-h-screen bg-custom-image flex flex-col justify-end items-center md:max-w-[99%] md:my-2 md:mx-2 md:rounded-4xl md:items-end'> 
          <HomeCard />
      </div>    
      <Trainer />
    </div>
  )
}

export default Homepage
