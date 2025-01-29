import React from 'react'
import ReviewCard from './Cards/ReviewCard'

function Testimonials() {
  return (
    <div className='flex flex-col justify-center w-full md:mt-2'>
        <p className='text-black text-[35px] text-center mb-4 mt-4 md:text-[50px] md:mb-10'>Check out our success stories.</p>
        <div className='flex flex-row overflow-y-auto justify-start space-x-6 px-4 md:justify-center md:px-10'>
            <ReviewCard name="Nadia" plan="3 Months" thumbnail="nadia"/>
            <ReviewCard name="Aly" plan="12 Months" thumbnail="aly"/>
            <ReviewCard name="Layla" plan="4 Months" thumbnail="layla"/>
        </div>
    </div>
  )
}

export default Testimonials
