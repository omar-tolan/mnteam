import React from 'react'
import PlanCard from './Cards/PlanCard'

function Plans() {
  return (
    <div className='bg-black flex flex-col space-y-6 mt-4 md:w-full md:flex-1 md:space-x-8 md:items-stretch'>
        <p className='text-[35px] text-center mt-4 md:text-[50px]'>Check out our plans.</p>
        <div className='flex flex-col space-y-6 px-[30px] pb-[50px] md:w-full md:flex-row md:flex-1 md:space-x-8 md:items-stretch'>
            <PlanCard 
                duration='3 Months'
                price='3000EGP'
                services={['Sed ut perspiciatis unde omnis iste natus error sit voluptatem.', 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem.', 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem.', 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem.']}
            />
            <PlanCard 
                duration='6 Months'
                price='5500EGP'
                services={['Sed ut perspiciatis unde omnis iste natus error sit voluptatem.', 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem.', 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem.', 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem.']}
            />
            <PlanCard 
                duration='9 Months'
                price='7500EGP'
                services={['Sed ut perspiciatis unde omnis iste natus error sit voluptatem.', 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem.', 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem.', 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem.']}
            />
            <PlanCard 
                duration='12 Months'
                price='10,000EGP'
                services={['Sed ut perspiciatis unde omnis iste natus error sit voluptatem.', 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem.', 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem.', 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem.']}
            />
        </div>
        
    </div>
  )
}

export default Plans
