import React from "react";
import { AiFillStar } from "react-icons/ai";

const Reviews = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="bg-white border rounded-md py-6 px-5">
        <div className="flex gap-5">
          <div className="w-10 h-10">
            <img
              className="w-10 h-10 rounded-full"
              src="/img/users/1.jpg"
              alt="user"
            />
          </div>
          <div className="w-full">
            <div className="flex items-center gap-3">
              <h3>mdmaruf</h3>
              <div className="flex items-center gap-1 text-orange-300 font-bold">
                <AiFillStar />
                <span>5</span>
              </div>
            </div>
            <h4 className="mt-2 text-gray-500">United State</h4>
            <p className="mt-2 font-medium">
              He is a great listener and a very collaborative person and deliver
              project on time. Looking forward to doing more projects with him
              for the long-term.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-white border rounded-md py-6 px-5">
        <div className="flex gap-5 pb-5">
          <div className="w-10 h-10">
            <img
              className="w-10 h-10 rounded-full"
              src="/img/users/1.jpg"
              alt="user"
            />
          </div>
          <div className="w-full">
            <div className="flex items-center gap-3">
              <h3>mdmaruf</h3>
              <div className="flex items-center gap-1 text-orange-300 font-bold">
                <AiFillStar />
                <span>5</span>
              </div>
            </div>
            <h4 className="mt-2 text-gray-500">United State</h4>
            <p className="mt-2 font-medium">
              He is a great listener and a very collaborative person and deliver
              project on time. Looking forward to doing more projects with him
              for the long-term.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
