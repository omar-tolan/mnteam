import React from 'react'

function CardOne() {
  return (
    <div className='bg-[#DB2E10] flex flex-col items-center space-y-10 py-[40px] px-[45px] mx-4 rounded-3xl min-w-[90%] md:flex-1 md:min-w-0'>
      <div className='flex flex-col items-start w-full'>
        <p className='text-bold text-[30px] '>Assessment</p>
        <p className='text-light text-l mb-8'>We do personalized assissment for each client to tailor their programs</p>
      </div>
        <img className='w-[62%]' src='/services/cardOne.svg' alt='exercise' />
    </div>
  )
}

export default CardOne
