import React from 'react'
import NavButton from './Buttons/NavButton'

function Navbar() {
  return (
    <div className='bg-[rgba(55,55,55,0.5)] rounded-3xl h-[46px] mx-auto pr-[8px] pl-[21px] py-[6px] space-x-[20px] backdrop-blur-3xl flex flex-row justify-center items-center top-[30px] z-50 fixed'>
      <img src='/logos/navlogo.svg' alt='logo' className='h-[16px] w-[40px]'/>
      <button className='text-[12px] font-bold hover:text-[#DB2E10]'>البرامج</button>
      <button className='text-[12px] font-bold hover:text-[#DB2E10]'>اتصل بنا</button>
      <NavButton />
    </div>
  )
}

export default Navbar
