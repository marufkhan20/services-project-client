import React from "react";

const FooterArea = () => {
  return (
    <footer className="bg-[#0e2258] text-white">
      <div className="px-5 md:px-0 container mx-auto">
        {/* <!-- footer top start --> */}
        <div className="py-[120px] flex flex-col sm:flex-row gap-[60px]">
          <div className="w-full sm:w-2/5">
            <h4 className="capitalize font-semibold mb-8 text-xl">
              About Aveit
            </h4>
            <p className="text-[#ccc] text-[15px] leading-6">
              Required honoured trifling eat pleasure man relation. Assurance
              yet bed was improving furniture man. Distrusts delighted Excuse
              few the remain highly feebly add people manner say. It high at my
              mind by roof.
            </p>
            <ul className="flex gap-5 mt-10">
              <li>
                <img
                  className="w-4 cursor-pointer opacity-70 transition img-white hover:opacity-100"
                  src="./img/icons/facebook.png"
                  alt="facebook"
                />
              </li>
              <li>
                <img
                  className="w-4 cursor-pointer opacity-70 transition img-white hover:opacity-100"
                  src="./img/icons/twitter.png"
                  alt="facebook"
                />
              </li>
              <li>
                <img
                  className="w-4 cursor-pointer opacity-70 transition img-white hover:opacity-100"
                  src="./img/icons/github.png"
                  alt="facebook"
                />
              </li>
              <li>
                <img
                  className="w-4 cursor-pointer opacity-70 transition img-white hover:opacity-100"
                  src="./img/icons/facebook.png"
                  alt="facebook"
                />
              </li>
              <li>
                <img
                  className="w-4 cursor-pointer opacity-70 transition img-white hover:opacity-100"
                  src="./img/icons/twitter.png"
                  alt="facebook"
                />
              </li>
            </ul>
          </div>
          <div className="w-full sm:w-3/5 grid sm:grid-cols-2 md:grid-cols-3 gap-7">
            <div>
              <h4 className="capitalize font-semibold mb-8 text-xl">
                Services
              </h4>
              <ul>
                <li>
                  <a
                    className="text-[#ccc] font-medium text-[15px] mb-4 leading-[26px] block"
                    href="#"
                  >
                    SEO Marketing
                  </a>
                </li>
                <li>
                  <a
                    className="text-[#ccc] font-medium text-[15px] mb-4 leading-[26px] block"
                    href="#"
                  >
                    Pay Per Click
                  </a>
                </li>
                <li>
                  <a
                    className="text-[#ccc] font-medium text-[15px] mb-4 leading-[26px] block"
                    href="#"
                  >
                    Social Media
                  </a>
                </li>
                <li>
                  <a
                    className="text-[#ccc] font-medium text-[15px] mb-4 leading-[26px] block"
                    href="#"
                  >
                    SEO Audit
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="capitalize font-semibold mb-8 text-xl">Company</h4>
              <ul>
                <li>
                  <a
                    className="text-[#ccc] font-medium text-[15px] mb-4 leading-[26px] block"
                    href="#"
                  >
                    SEO Marketing
                  </a>
                </li>
                <li>
                  <a
                    className="text-[#ccc] font-medium text-[15px] mb-4 leading-[26px] block"
                    href="#"
                  >
                    Pay Per Click
                  </a>
                </li>
                <li>
                  <a
                    className="text-[#ccc] font-medium text-[15px] mb-4 leading-[26px] block"
                    href="#"
                  >
                    Social Media
                  </a>
                </li>
                <li>
                  <a
                    className="text-[#ccc] font-medium text-[15px] mb-4 leading-[26px] block"
                    href="#"
                  >
                    SEO Audit
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="capitalize font-semibold mb-8 text-xl">
                Contact Us
              </h4>
              <ul>
                <li>
                  <a
                    className="text-[#ccc] font-medium text-[15px] mb-4 leading-[26px] block"
                    href="#"
                  >
                    SEO Marketing
                  </a>
                </li>
                <li>
                  <a
                    className="text-[#ccc] font-medium text-[15px] mb-4 leading-[26px] block"
                    href="#"
                  >
                    Pay Per Click
                  </a>
                </li>
                <li>
                  <a
                    className="text-[#ccc] font-medium text-[15px] mb-4 leading-[26px] block"
                    href="#"
                  >
                    Social Media
                  </a>
                </li>
                <li>
                  <a
                    className="text-[#ccc] font-medium text-[15px] mb-4 leading-[26px] block"
                    href="#"
                  >
                    SEO Audit
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* <!-- footer top end --> */}

        {/* <!-- footer bottom start --> */}
        <div className="py-8 border-t border-white/10 flex items-center justify-between flex-wrap gap-10">
          <p className="text-[#ccc] text-[15px]">
            © Copyright 2021 aveit By WordPressRiver
          </p>
          <img className="w-[140px]" src="./img/logo-light.png" alt="logo" />
          <div className="flex items-center border border-white/20">
            <input
              className="bg-transparent border-none outline-none pl-5 font-regular text-white text-base w-[260px] border-r broder-white/20 h-[50px] placeholder:text-white placeholder:font-regular"
              type="email"
              placeholder="Enter your e-mail"
            />
            <div className="w-[38px] h-[38px] bg-white rounded-md flex justify-center items-center mx-[10px] cursor-pointer">
              <img className="w-5" src="./img/icons/send.png" alt="send" />
            </div>
          </div>
        </div>
        {/* <!-- footer bottom end --> */}
      </div>
    </footer>
  );
};

export default FooterArea;
