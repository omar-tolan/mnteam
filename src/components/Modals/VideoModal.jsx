import React from "react";

const VideoModal = ({ handleVid, user }) => {
  const close = () => handleVid;
  return (
    <div className="w-full h-screen backdrop-blur-md z-50 fixed inset-0">
      <div className="w-[90%] h-[90%] flex-grow overflow-y-auto px-10 py-8 rounded-3xl bg-black fixed mx-auto my-auto inset-0 z-50 flex flex-col">
        <div className="flex flex-row justify-end w-full">
          <div className="rounded-full h-8 w-8 p-2 bg-[#DB2E10] mb-8">
            <img src="assets/close.svg" onClick={close()} />
          </div>
        </div>
        <p className="text-2xl text-center">{user.name}'s Success Story</p>
        <div className="w-full h-auto justify-center px-1 py-1 mt-6 ">
          <video width="320" height="240" controls autoPlay={false} poster="clients/nadia.svg">
            <source src="clients/testVid.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <p className="text-xl mt-5">Check out {user.name}'s Transformation</p>
        <img className="mt-4" src="clients/laylat.jpg" alt="layla-transformation"></img>
        <p className="text-2xl mt-4">Review</p>
        <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos 
sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
recusandae alias error harum maxime adipisci amet laborum. Perspiciatis 
minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit 
quibusdam sed amet tempora. Sit laborum ab, eius fugit doloribus tenetur 
fugiat, temporibus enim commodi iusto libero magni deleniti quod quam 
consequuntur! Commodi minima excepturi repudiandae velit hic maxime
doloremque. Quaerat provident commodi consectetur veniam similique ad 
earum omnis ipsum saepe, voluptas, hic voluptates pariatur est explicabo 
fugiat, dolorum eligendi quam cupiditate excepturi mollitia maiores labore 
suscipit quas? Nulla, placeat. Voluptatem quaerat non architecto ab laudantium
modi minima sunt esse temporibus sint culpa, recusandae aliquam numquam 
totam ratione voluptas quod exercitationem fuga. Possimus quis earum veniam 
quasi aliquam eligendi, placeat qui corporis!</p>
      </div>
    </div>
  );
};

export default VideoModal;
