import React from 'react'

function CardOne() {
  return (
    <div className='bg-[#DB2E10] flex flex-col py-6 px-5 mx-4 rounded-3xl'>
        <p className='text-bold text-[30px]'>Assessment</p>
        <p className='text-light text-l mb-8'>We do personalized assissment for each client to tailor their programs</p>
        <img src='/services/cardOne.svg' alt='exercise' />
    </div>
  )
}

export default CardOne
