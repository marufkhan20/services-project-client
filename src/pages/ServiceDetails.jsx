import React from "react";

const ServiceDetails = () => {
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
                  src="./img/icons/video-camera.png"
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
              src="./img/big-1.jpg"
              alt="event"
            />

            <div className="flex items-center justify-center gap-[10px] mt-7">
              <button className="flex items-center gap-2 px-6 py-1 bg-white border font-semibold cursor-pointer event-public-button transition">
                <img
                  className="w-4"
                  src="./img/icons/bookmark-white.png"
                  alt="bookmark"
                />
                <span className="text-base text-dark">Save</span>
              </button>
              <button className="flex items-center gap-2 px-6 py-1 bg-white border font-semibold cursor-pointer event-public-button transition">
                <img className="w-4" src="./img/icons/share.png" alt="share" />
                <span className="text-base text-dark">Share</span>
              </button>
            </div>

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
            <h3 className="text-lg pb-5 px-5 border-b">Event Details</h3>
            <div className="px-5">
              {/* <!-- countdown start --> */}
              <div className="grid grid-cols-4 gap-1 mt-5">
                <div className="bg-primary rounded-sm text-center">
                  <h3 className="mt-5 text-white text-1xl font-regular">143</h3>
                  <h4 className="text-white text-xs font-medium mb-[10px]">
                    DAYS
                  </h4>
                </div>
                <div className="bg-primary rounded-sm text-center">
                  <h3 className="mt-5 text-white text-1xl font-regular">3</h3>
                  <h4 className="text-white text-xs font-medium mb-[10px]">
                    HOURS
                  </h4>
                </div>
                <div className="bg-primary rounded-sm text-center">
                  <h3 className="mt-5 text-white text-1xl font-regular">38</h3>
                  <h4 className="text-white text-xs font-medium mb-[10px]">
                    MINUTES
                  </h4>
                </div>
                <div className="bg-primary rounded-sm text-center">
                  <h3 className="mt-5 text-white text-1xl font-regular">32</h3>
                  <h4 className="text-white text-xs font-medium mb-[10px]">
                    SECONDS
                  </h4>
                </div>
              </div>
              {/* <!-- countdown end --> */}

              {/* <!-- list start --> */}
              <div className="mt-10">
                <div className="flex gap-[10px] mb-9">
                  <div className="h-10 w-10 rounded-full bg-light flex items-center justify-center">
                    <img className="w-5" src="./img/icons/man.png" alt="user" />
                  </div>
                  <div>
                    <span>Organised by</span>
                    <h4 className="my-2 text-base font-medium">
                      Story Tellers
                    </h4>
                    <a className="font-medium text-primary" href="#">
                      View Profile
                    </a>
                  </div>
                </div>
                <div className="flex gap-[10px] mb-9">
                  <div className="h-10 w-10 rounded-full bg-light flex items-center justify-center">
                    <img className="w-5" src="./img/icons/man.png" alt="user" />
                  </div>
                  <div>
                    <span>Organised by</span>
                    <h4 className="my-2 text-base font-medium">
                      Story Tellers
                    </h4>
                    <a className="font-medium text-primary" href="#">
                      View Profile
                    </a>
                  </div>
                </div>
                <div className="flex gap-[10px] mb-9">
                  <div className="h-10 w-10 rounded-full bg-light flex items-center justify-center">
                    <img className="w-5" src="./img/icons/man.png" alt="user" />
                  </div>
                  <div>
                    <span>Organised by</span>
                    <h4 className="my-2 text-base font-medium">
                      Story Tellers
                    </h4>
                    <a className="font-medium text-primary" href="#">
                      View Profile
                    </a>
                  </div>
                </div>
                <div className="flex gap-[10px] mb-9">
                  <div className="h-10 w-10 rounded-full bg-light flex items-center justify-center">
                    <img className="w-5" src="./img/icons/man.png" alt="user" />
                  </div>
                  <div>
                    <span>Organised by</span>
                    <h4 className="my-2 text-base font-medium">
                      Story Tellers
                    </h4>
                    <a className="font-medium text-primary" href="#">
                      View Profile
                    </a>
                  </div>
                </div>

                <a
                  href="#"
                  className="text-base text-white py-[10px] block bg-primary hover:bg-primary/70 transition text-center rounded-md font-medium"
                >
                  Order Now
                </a>
              </div>
              {/* <!-- list end --> */}
            </div>
          </div>
          {/* <!-- event details end --> */}
        </div>
        {/* <!-- event information end --> */}
      </div>
    </section>
  );
};

export default ServiceDetails;
