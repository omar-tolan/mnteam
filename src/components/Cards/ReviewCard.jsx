import React from 'react'

function ReviewCard(user) {
    const className = "flex flex-col justify-end min-h-[80vh] min-w-[90vw] rounded-4xl px-8 pb-8 md:max-h-[20vh] md:min-w-[28vw] " + user.thumbnail;
  return (
    <div className={className}>
        <div className='flex flex-row justify-between'>
            <div className='flex flex-col items-start'>
                <p className='text-white font-bold'>{user.name}</p>
                <p className='text-white font-light'>{user.plan}</p>
            </div>
            <img src='play.png' alt='play'></img>
        </div>
        <p>"I have never felt healthier and more comfortable in my own skin and i awe it all to the mn team."</p>
    </div>
  )
}

export default ReviewCard 
