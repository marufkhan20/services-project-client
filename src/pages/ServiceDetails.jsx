import React, { useState } from "react";
import { BiTime } from "react-icons/bi";
import { TfiReload } from "react-icons/tfi";
import { Link } from "react-router-dom";
import AddReview from "../components/Reviews/AddReview";
import Reviews from "../components/Reviews/Reviews";

const ServiceDetails = () => {
  const [packageName, setPackage] = useState("basic");
  return (
    <section className="py-[60px] bg-[#f5f7f9]">
      <div className="px-5 md:px-0 mx-auto container">
        {/* <!-- event title start --> */}
        <div className="flex items-center gap-6">
          <div className="text-center w-[100px] bg-[#fafdf9] border">
            <h4 className="py-[10px] text-lg font-medium text-white bg-primary event-month">
              JUN
            </h4>
            <h3 className="py-[10px] text-2xl font-medium">01</h3>
          </div>
          <div>
            <h2 className="mb-[15px] text-2xl font-semibold">
              Tutorial on Canvas Painting for Beginners
            </h2>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-[10px]">
                <img
                  className="w-5 opacity-50"
                  src="/img/icons/video-camera.png"
                  alt="video-camera"
                />
                <span className="text-base text-body">Online Event</span>
              </div>
              <span className="font-bold text-lg text-dark">-</span>
              <span className="text-base text-body">
                Starts on Wed, Jun 01, 2022 5:30 AM
              </span>
              <span className="font-bold text-lg text-dark">-</span>
              <span className="text-base text-body">1h</span>
            </div>
          </div>
        </div>
        {/* <!-- event title end --> */}

        {/* <!-- event information start --> */}

        <div className="flex flex-col md:flex-row gap-5 mt-10 border-b pb-14">
          {/* <!-- event description start --> */}
          <div className="w-full md:w-[60%] xl:w-[70%]">
            <img
              className="w-full rounded-md"
              src="/img/big-1.jpg"
              alt="event"
            />

            <div className="mt-10">
              <h3 className="mb-5 text-lg">About This Event</h3>
              <p className="leading-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                dolor justo, sodales mattis orci et, mattis faucibus est. Nulla
                semper consectetur sapien a tempor. Ut vel lacus lorem. Nulla
                mauris massa, pharetra a mi ut, mattis euismod libero. Ut
                pretium bibendum urna nec egestas. Etiam tempor vehicula libero.
                Aenean cursus venenatis orci, ac porttitor leo porta sit amet.
                Nulla eleifend mollis enim sed rutrum. Nunc cursus ex a ligula
                consequat aliquet. Donec semper tellus ac ante vestibulum, vitae
                varius leo mattis. In vestibulum blandit tempus. Etiam elit
                turpis, volutpat hendrerit varius ut, posuere a sapien. Maecenas
                molestie bibendum finibus. Nulla euismod neque vel sem hendrerit
                faucibus. Nam sit amet metus sollicitudin, luctus eros at,
                consectetur libero.
              </p>
              <p className="mt-9 leading-6">
                In malesuada luctus libero sed gravida. Suspendisse nunc est,
                maximus vel viverra nec, suscipit non massa. Maecenas efficitur
                vestibulum pellentesque. Ut finibus ullamcorper congue. Sed ut
                libero sit amet lorem venenatis facilisis. Mauris egestas tortor
                vel massa auctor, eget gravida mauris cursus. Etiam elementum
                semper fermentum. Suspendisse potenti. Morbi lobortis leo urna,
                non laoreet enim ultricies id. Integer id felis nec sapien
                consectetur porttitor. Proin tempor mauris in odio iaculis
                semper. Cras ultricies nulla et dui viverra, eu convallis orci
                fermentum.
              </p>
            </div>
          </div>
          {/* <!-- event description end --> */}

          {/* <!-- event details start --> */}
          <div className="w-full md:w-[40%] xl:w-[30%] py-4 rounded-md border bg-white h-fit">
            <h3 className="text-lg pb-5 px-5 border-b">Service Details</h3>
            <div className="px-5">
              {/* <!-- package name start --> */}
              <div className="flex mt-5 gap-1">
                <div
                  className="rounded-sm text-center w-full border cursor-pointer"
                  onClick={() => setPackage("basic")}
                >
                  <h3
                    className={`py-3 border-b-2 border-transparent text-1xl text-gray-500 font-bold ${
                      packageName === "basic" && "text-primary border-primary"
                    }`}
                  >
                    Basic
                  </h3>
                </div>
                <div
                  className="rounded-sm text-center w-full border cursor-pointer"
                  onClick={() => setPackage("standard")}
                >
                  <h3
                    className={`py-3 border-b-2 border-transparent text-1xl text-gray-500 font-bold ${
                      packageName === "standard" &&
                      "text-primary border-primary"
                    }`}
                  >
                    Standard
                  </h3>
                </div>
                <div
                  className="rounded-sm text-center w-full border cursor-pointer"
                  onClick={() => setPackage("premium")}
                >
                  <h3
                    className={`py-3 border-b-2 border-transparent text-1xl ${
                      packageName === "premium" && "text-primary border-primary"
                    } text-gray-500 font-bold`}
                  >
                    Premium
                  </h3>
                </div>
              </div>
              {/* <!-- package name end --> */}

              {/* <!-- package details start --> */}
              <div className="mt-10">
                {packageName === "basic" && (
                  <div>
                    <div className="flex items-center justify-between mb-7">
                      <h3 className="text-gray-700 text-lg">RUBY</h3>
                      <h3 className="text-gray-700 text-lg">$90</h3>
                    </div>
                    <p className="font-semibold text-sm text-gray-600 mb-8">
                      Wordpress and Theme installation + One page scrolling
                      design + Contact form + Social shares
                    </p>

                    <div className="flex items-center gap-5 mb-6">
                      <h4 className="flex items-center gap-1 text-gray-700">
                        <BiTime />
                        <span>3 Days Delivery</span>
                      </h4>
                      <h4 className="flex items-center gap-1 text-gray-700">
                        <TfiReload />
                        <span>3 Revisions</span>
                      </h4>
                    </div>
                  </div>
                )}

                {packageName === "standard" && (
                  <div>
                    <div className="flex items-center justify-between mb-7">
                      <h3 className="text-gray-700 text-lg">Standard</h3>
                      <h3 className="text-gray-700 text-lg">$90</h3>
                    </div>
                    <p className="font-semibold text-sm text-gray-600 mb-8">
                      Wordpress and Theme installation + One page scrolling
                      design + Contact form + Social shares
                    </p>

                    <div className="flex items-center gap-5 mb-6">
                      <h4 className="flex items-center gap-1 text-gray-700">
                        <BiTime />
                        <span>3 Days Delivery</span>
                      </h4>
                      <h4 className="flex items-center gap-1 text-gray-700">
                        <TfiReload />
                        <span>3 Revisions</span>
                      </h4>
                    </div>
                  </div>
                )}

                {packageName === "premium" && (
                  <div>
                    <div className="flex items-center justify-between mb-7">
                      <h3 className="text-gray-700 text-lg">Premium</h3>
                      <h3 className="text-gray-700 text-lg">$90</h3>
                    </div>
                    <p className="font-semibold text-sm text-gray-600 mb-8">
                      Wordpress and Theme installation + One page scrolling
                      design + Contact form + Social shares
                    </p>

                    <div className="flex items-center gap-5 mb-6">
                      <h4 className="flex items-center gap-1 text-gray-700">
                        <BiTime />
                        <span>3 Days Delivery</span>
                      </h4>
                      <h4 className="flex items-center gap-1 text-gray-700">
                        <TfiReload />
                        <span>3 Revisions</span>
                      </h4>
                    </div>
                  </div>
                )}

                <Link
                  to="/checkout/id"
                  className="text-base text-white py-[10px] block bg-primary hover:bg-primary/70 transition text-center rounded-md font-medium"
                >
                  Order Now
                </Link>
              </div>
              {/* <!-- list end --> */}
            </div>
          </div>
          {/* <!-- event details end --> */}
        </div>
        {/* <!-- event information end --> */}

        {/* reviews */}
        <div className="w-3/6">
          <h3 className="mt-8 text-xl mb-8">Service Reviews (10)</h3>
          <div className="mb-8">
            <AddReview />
          </div>
          <Reviews />
        </div>
      </div>
    </section>
  );
};

export default ServiceDetails;
