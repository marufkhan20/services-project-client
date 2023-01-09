import React, { useState } from "react";
import { BsTwitter } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { ImFacebook } from "react-icons/im";
import { TbEdit } from "react-icons/tb";
import EditProfileModal from "./EditProfileModal";

const AboutTab = () => {
  const [editable, setEditable] = useState(false);
  return (
    <>
      <div className="bg-white border rounded-md mt-6">
        <div className="flex items-center justify-between px-6 py-2 border-b">
          <h3 className="text-lg font-semibold">About</h3>
          <button
            className="flex items-center text-white bg-primary px-4 py-2 rounded-[4px] gap-[5px] font-medium transition hover:bg-primary/70"
            onClick={() => setEditable(true)}
          >
            <TbEdit />
            <span>Edit</span>
          </button>
        </div>

        <div className="px-7">
          <div className="py-7 border-b">
            <h4 className="text-base font-semibold mb-3">Name</h4>
            <span className="text-lg text-[#717171] font-semibold">
              Md Maruf
            </span>
          </div>
          <div className="py-7 border-b">
            <h4 className="text-base font-semibold mb-3">
              Tell us about yourself and let people know who you are
            </h4>
            <p className="text-[#717171]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              tincidunt interdum nunc et auctor. Phasellus quis pharetra sapien.
              Integer ligula sem, sodales vitae varius in, varius eget augue.
            </p>
          </div>
          <div className="py-7 border-b">
            <h4 className="text-base font-semibold mb-3">Find me on</h4>
            <ul className="flex items-center gap-3 mt-3">
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
          <div className="py-7">
            <h4 className="text-base font-semibold mb-3">Address</h4>
            <p className="text-[#717171]">
              00 Challis St, Newport, Victoria, 0000, Australia
            </p>
          </div>
        </div>
      </div>

      {/* edit profile modal */}
      <EditProfileModal editable={editable} setEditable={setEditable} />
    </>
  );
};

export default AboutTab;
