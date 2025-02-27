import React, { useState } from 'react'
import VideoModal from './Modals/VideoModal'
import ReviewCard from './Cards/ReviewCard'

function Testimonials({handleVid, isVidShown}) {
  const users = {
    "aly": {name:"Aly", plan:"12 Months", thumbnail:"aly"},
    "layla": {name:"Layla", plan:"4 Months", thumbnail:"layla"},
    "nadia": {name:"Nadia", plan:"3 Months", thumbnail:"nadia"}
  }
  const [selectedUser, setSelectedUser] = useState(null)
  const handleUser = (user) => {
    setSelectedUser(user)
    handleVid();
  }
  return (
    <div className='flex flex-col justify-center w-full md:mt-2'>
        {isVidShown && <VideoModal handleVid={handleVid} user={selectedUser} />}
        <p className='text-black text-[35px] text-center mb-4 mt-4 md:text-[50px] md:mb-10'>اسمع قصص النجاح</p>
        <div className='flex flex-row overflow-y-auto justify-start space-x-6 px-4 md:justify-center md:px-10'>
            <ReviewCard user={users["nadia"]} handleVid={() => handleUser(users['nadia'])}/>
            <ReviewCard user={users["aly"]} handleVid={() => handleUser(users['aly'])} />
            <ReviewCard user={users["layla"]} handleVid={() => handleUser(users['layla'])} />
        </div>
    </div>
  )
}

export default Testimonials
