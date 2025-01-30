import React from 'react'

function Footer() {
  return (
    <div className='bg-black bottom-0 flex flex-col w-full mt-10'>
        <div className='flex flex-row space-x-4 py-8'>
            <img src='/logos/footerLogo.svg'/>
            <div className='flex flex-col'>
                <p className='text-[20px]'>Contact Us</p>
                <p className='text-light text-[14px]'>Cairo, Egypt</p>
                <p className='text-light text-[14px]'>+20-012554786</p>
                <p className='text-light text-[14px]'>info@mnteam.com</p>
            </div><div className='flex flex-col'>
                <p className='text-[20px]'>Connect</p>
                <div className='flex flex-row space-x-2'>
                    <img className='h-[20px]' src='/assets/icons8-facebook.svg'/>
                    <img className='h-[20px]' src='/assets/icons8-instagram.svg'/>
                    <img className='h-[20px]' src='/assets/icons8-x.svg'/>
                </div>
            </div>
        </div>
      <p className='w-full text-[14px] text-end pr-2 pb-1'>Powered By Huemane</p>
    </div>
  )
}

export default Footer
