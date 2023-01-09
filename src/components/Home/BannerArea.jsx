import React from "react";
import { Link } from "react-router-dom";

const BannerArea = () => {
  return (
    <section
      className="bg-center text-white"
      style={{ backgroundImage: 'url("/img/bg.jpeg")' }}
    >
      <div className="bg-black/50">
        <div className="px-5 md:px-0 container mx-auto">
          <div className="py-20 flex flex-col lg:flex-row justify-between items-center gap-[150px] min-h-[80vh] z-50">
            <div className="w-full lg:w-3/5 text-center lg:text-left">
              <h4 className="text-lg lg:text-xl">Best IT solution provider</h4>
              <h2 className="text-4xl sm:text-6xl mt-4 mb-5">
                Creating a better <br />
                IT solutions
              </h2>
              <p className="text-lg">
                Affixed pretend account ten natural. Need eat week even
                <br />
                yet that. Incommode delighted he resolving sportsmen.
              </p>
              <Link
                className="bg-primary text-white py-[14px] px-9 inline-block uppercase text-[13px] font-semibold mt-4 transition hover:bg-white hover:text-secondary rounded-md"
                to="#"
              >
                get details
              </Link>
            </div>
            <div className="bg-white text-[#0e2b3d] py-[60px] px-9 z-50 relative rounded-xl form w-full lg:w-2/5">
              <h3 className="text-2xl text-center mb-5">Appointment</h3>
              <p className="text-[15px] leading-[26px] mx-auto text-[#0e2b3d] mb-14 w-[70%] text-center">
                Country man his pressed shewing. No gate dare rose he. Eyes year
                if miss he as upon
              </p>
              <form>
                <input
                  className="block w-full border-b border-[#e6e6e6] pb-4 outline-none text-[15px] mb-7"
                  type="text"
                  placeholder="Name"
                />
                <input
                  className="block w-full border-b border-[#e6e6e6] pb-4 outline-none text-[15px] mb-7"
                  type="email"
                  placeholder="Email*"
                />
                <select className="block w-full border-b border-[#e6e6e6] pb-4 outline-none text-[15px] mb-7">
                  <option>Select Department to email</option>
                  <option>Your inquiry about</option>
                </select>
                <input
                  className="block w-full border border-transparent outline-none text-[15px] bg-primary py-3 text-white font-bold cursor-pointer transition rounded-full hover:bg-white hover:text-[#0e2b3d] hover:border-[#e6e6e6]"
                  type="submit"
                  value="Submit Query"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerArea;
