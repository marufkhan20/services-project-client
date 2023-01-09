import React from "react";
import { BsTwitter } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { ImFacebook } from "react-icons/im";

const ProfileInfo = () => {
  return (
    <div className="bg-white py-10 text-center rounded-md shadow-sm -mt-14">
      <div className="w-32 h-32 rounded-full p-[2px] mx-auto border-2 border-primary relative">
        <img
          className="w-full h-full rounded-full"
          src="/img/users/img-13.jpg"
          alt="user"
        />
        <label
          for="profile-pic"
          className="w-10 h-10 rounded-full bg-white border absolute right-0 bottom-0 flex items-center justify-center cursor-pointer"
        >
          <img className="w-4" src="/img/icons/camera.png" alt="camera" />
        </label>
        <input className="hidden" id="profile-pic" type="file" />
      </div>
      <h3 className="text-lg font-bold mt-4">John Doe</h3>
      <p className="mt-2">johndoe@example.com</p>

      {/* orders area start */}
      <div className="flex items-center justify-between text-center w-4/6 mx-auto mt-8">
        <div className="border-r w-full">
          <h4 className="text-lg font-medium">0</h4>
          <p className="text-sm text-black">Accept Orders</p>
        </div>
        <div className="w-full">
          <h4 className="text-lg font-medium">0</h4>
          <p className="text-sm text-black">Active Orders</p>
        </div>
      </div>
      {/* orders area end */}

      {/* social icons start */}
      <div>
        <h3 className="text-base mt-10">Find me on</h3>
        <ul className="flex items-center justify-center gap-3 mt-6">
          <li className="text-xl w-10 h-10 rounded-full border-2 border-primary text-primary flex items-center justify-center transition hover:text-white hover:bg-primary cursor-pointer">
            <ImFacebook />
          </li>
          <li className="text-xl w-10 h-10 rounded-full border-2 border-primary text-primary flex items-center justify-center transition hover:text-white hover:bg-primary cursor-pointer">
            <FiInstagram />
          </li>
          <li className="text-xl w-10 h-10 rounded-full border-2 border-primary text-primary flex items-center justify-center transition hover:text-white hover:bg-primary cursor-pointer">
            <BsTwitter />
          </li>
          <li className="text-xl w-10 h-10 rounded-full border-2 border-primary text-primary flex items-center justify-center transition hover:text-white hover:bg-primary cursor-pointer">
            <FaLinkedinIn />
          </li>
        </ul>
      </div>
      {/* social icons end */}
    </div>
  );
};

export default ProfileInfo;
