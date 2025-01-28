import React from 'react'
import Navbar from './Navbar'
import HomeCard from './Cards/HomeCard'

function Homepage() {
  return (
    <div className='flex flex-col justify-center items-center'>
      <Navbar />
    <div className='w-full min-h-screen bg-custom-image top-0 fixed flex flex-col justify-end items-center'> 
      <HomeCard />
    </div>
    </div>
  )
}

export default Homepage
