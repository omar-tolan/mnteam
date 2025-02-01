import React from 'react'
import PlanButton from '../Buttons/PlanButton'

function PlanCard({duration, price, services}) {
  return (
    <div className='flex flex-col items-center rounded-2xl border-2 border-white px-4 py-6 space-y-3 md:h-full'>
        <div className='flex- flex-col items-center'>
            <p className='text-center text-2xl'>{duration}</p>
            <p className='text-center text-xl font-extralight'>{price}</p>
        </div>
        <div className='h-px w-full bg-white'></div>
        <ul className='flex flex-col flex-grow space-y-1 mb-6'>
            {services.map((service, index) => {
                return(<li key={index} className=''>
                    <div className='flex flex-row'><img className='w-[15px] mx-1' src='assets/bullet.svg' />{service}</div>
                </li>)
            })}
        </ul>
        <PlanButton />    
    </div>
  )
}

export default PlanCard
