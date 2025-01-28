import React from 'react'
import GuideButton from '../Buttons/GuideButton'

function HomeCard() {
  return (
    <div className='bg-white rounded-3xl flex flex-col justify-center items-center space-y-[17px] mx-[15px] mb-[15px] px-[15px] pb-[20px] pt-[30px] text-black md:w-[345px] md:h-[215px] md:m-[15px]'>
        <div>
           <p className='font-medium'>What do we offer?</p>
           <p className='font-light'>Get to know our services and how will you achieve your dream body.</p>
        </div>
      <GuideButton />
    </div>
  )
}

export default HomeCard
