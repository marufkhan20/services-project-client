import React from "react";
import { Link } from "react-router-dom";

const CallToActionArea = () => {
  return (
    <section
      className="bg-fixed bg-center w-full xl:w-[90%] mx-auto"
      style={{ backgroundImage: 'url("/img/18.jpg")' }}
    >
      <div
        className="py-[130px]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(52, 110, 223, 0.8), rgba(133, 42, 228, 0.8))",
        }}
      >
        <div className="w-[90%] mx-auto flex flex-col lg:flex-row justify-center items-start xl:items-center lg:justify-between text-white">
          <div className="content">
            <h2 className="text-4xl mb-10 w-full text-center sm:text-left sm:w-[60%] mx-auto lg:mx-0">
              We run all Kinds of IT Services that grow your Business
            </h2>
            <p className="w-full text-center sm:text-left sm:w-[65%] mx-auto lg:mx-0">
              Excellence projecting is devonshire dispatched remarkably on
              estimating. Side in so life past. Continue indulged speaking the
              was.
            </p>
            <div className="flex justify-center lg:justify-start items-center gap-10 mt-7 text-center lg:text-left">
              <div>
                <h3 className="text-[32px] font-black mb-2">18 K</h3>
                <span className="font-semibold">World className Worker</span>
              </div>
              <div>
                <h3 className="text-[32px] font-black mb-2">18 K</h3>
                <span className="font-semibold">World className Worker</span>
              </div>
            </div>
          </div>
          <div className="flex w-full mt-10 lg:mt-0 lg:w-min justify-center lg:justify-start items-center gap-6 lg:gap-3">
            <Link
              className="inline-block py-4 px-9 border-2 border-white rounded-full text-[13px] uppercase text-white font-bold transition bg-transparent hover:bg-white hover:text-secondary min-w-[180px]"
              to="#"
            >
              CONTACT US
            </Link>
            <Link
              className="inline-block py-4 px-9 border-2 border-white rounded-full text-[13px] uppercase text-white font-bold transition bg-transparent hover:bg-white hover:text-secondary min-w-[160px]"
              to="#"
            >
              Lets Talk
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionArea;
