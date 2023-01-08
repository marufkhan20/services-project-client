import React from "react";

const ExperienceArea = () => {
  return (
    <section id="about" className="py-[120px]">
      <div className="px-5 md:px-0 container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-20">
          <div className="w-full lg:w-[45%] relative">
            <img
              className="w-full rounded-xl"
              src="./img/experience.jpeg"
              alt="experience"
            />
            <div
              className="absolute bottom-12 -left-10 py-9 px-6 rounded-br-[30px] hidden md:block"
              style={{
                backgroundImage: "linear-gradient(to right, #0554f2, #8407fd)",
              }}
            >
              <h2 className="text-4xl text-white font-semibold">2500+</h2>
              <h5 className="text-xl text-white">Customers worldwide</h5>
            </div>
          </div>
          <div className="line hidden lg:block w-[2%]"></div>
          <div className="w-full lg:w-[53%]">
            <h4 className="mb-6 text-lg text-primary">
              25 YEARS OF EXPERIENCE
            </h4>
            <h2 className="mb-6 text-3xl md:text-4xl">
              We Help IT Companies <br />
              Engineering Capacity Scale
            </h2>
            <p className="mb-10">
              Integer pretium molestie nisl, non blandit lectus suscipit in.
              Vivamus tellus diam, iaculis eget nulla sit amet, tincidunt
              consectetur sem. Suspendisse laoreet, quam sed faucibus feugiat,
              tortor velit suscipit orci, sed consectetur.
            </p>
            <div>
              <ul className="flex flex-row gap-10 lg:flex-col">
                <li className="flex gap-6">
                  <div>
                    <div className="w-[50px] h-[50px] rounded-full bg-[#f0f5fe] text-center flex items-center justify-center">
                      <img
                        className="w-5"
                        src="./img/icons/check.png"
                        alt="check"
                      />
                    </div>
                  </div>
                  <div>
                    <h5 className="font-black text-xl capitalize mb-5">
                      Certified Company
                    </h5>
                    <p>
                      Resolved entrance together graceful. Mrs assured add
                      private married removed believe did she regret wished an
                      branch
                    </p>
                  </div>
                </li>
                <li className="flex gap-6">
                  <div>
                    <div className="w-[50px] h-[50px] rounded-full bg-[#f0f5fe] text-center flex items-center justify-center">
                      <img
                        className="w-5"
                        src="./img/icons/check.png"
                        alt="check"
                      />
                    </div>
                  </div>
                  <div>
                    <h5 className="font-black text-xl capitalize mb-5">
                      Award Ceremony
                    </h5>
                    <p>
                      Resolved entrance together graceful. Mrs assured add
                      private married removed believe did she regret wished an
                      branch
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceArea;
