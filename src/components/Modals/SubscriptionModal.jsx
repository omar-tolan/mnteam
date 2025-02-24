import React from "react";
import SubscribeButton from "../Buttons/SubscibeButton";

const SubscriptionModal = ({ handleSub }) => {
  const close = () => handleSub;
  return (
    <div className="w-full h-screen backdrop-blur-md z-50 fixed inset-0">
      <div className="px-10 py-8 w-[70%] h-[50%] bg-white rounded-3xl fixed inset-0 mx-auto my-auto justify-center bg-opacity-50 backdrop-blur-md">
        <img
          className="w-6 absolute top-5 right-5"
          src="assets/close.svg"
          onClick={close()}
        />
        <div className="flex flex-col items-center mt-8">
          <h1 className="text-black">How to start?</h1>
          <ul className="flex flex-col items-start list-disc mb-4">
            <li className="text-black">Fill the form</li>
            <li className="text-black">We will contact you within 24hrs</li>
          </ul>
          <SubscribeButton />
        </div>
      </div>
    </div>
  );
};

export default SubscriptionModal;
