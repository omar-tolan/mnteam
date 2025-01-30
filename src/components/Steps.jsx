import React from 'react'
import StepCard from './Cards/StepCard'

function Steps() {
  return (
    <div>
      <p className='text-black text-[35px] text-center mb-4 mt-4 md:text-[50px] md:mb-10'>Steps to greatness.</p>
      <div className='flex flex-col w-full px-4'>
        <div className='steps-image flex flex-col w-full px-6 py-6 space-y-4 rounded-3xl md:flex-row md:space-x-4 md:h-[30vh]'>
            <StepCard />
            <StepCard />
            <StepCard />
            <StepCard />
            <StepCard />
        </div>
      </div>
    </div>

  )
}

export default Steps
