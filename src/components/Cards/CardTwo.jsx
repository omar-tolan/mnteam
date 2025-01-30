import React from 'react'

function CardTwo() {
    return (
        <div className='bg-black flex flex-col py-6 px-4 mx-4 rounded-3xl min-w-[90%] md:w-fit md:flex-1 md:min-w-0 md:items-center'>
            <img className='md:w-full' src='/services/cardTwo.svg' alt='guide'/>
            <div className='flex flex-col items-center w-full'>
                <p className='text-center text-bold text-[30px] mt-4'>Assessment</p>
                <p className='text-center text-light text-l mb-8'>We do personalized assissment for each client to tailor their programs</p>
            </div>
        </div>
      )
}

export default CardTwo
