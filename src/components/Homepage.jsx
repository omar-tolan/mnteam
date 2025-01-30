import React from 'react'
import Navbar from './Navbar'
import HomeCard from './Cards/HomeCard'
import Trainer from './Cards/Trainer'
import Testimonials from './Testimonials'
import Services from './Services'
import Plans from './Plans'

function Homepage() {
  return (
    <div className='flex flex-col justify-center items-center'>
      <Navbar />
      <div className='w-full min-h-screen bg-custom-image flex flex-col justify-end items-center md:max-w-[98%] md:my-2 md:mx-2 md:rounded-4xl md:items-end'> 
          <HomeCard />
      </div>    
      <Trainer />
      <Testimonials />
      <Services />
      <Plans />
    </div>
  )
}

export default Homepage
