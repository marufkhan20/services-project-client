import React from "react";

const Navigation = () => {
  return (
    <section className="bg-white border-b-2 py-5">
      <div className="w-[80%] mx-auto">
        <div className="flex justify-between items-center">
          <div className="logo">
            <a href="/">
              <img className="h-12" src="./img/logo.png" alt="logo" />
            </a>
          </div>
          <div className="hidden md:block">
            <ul className="flex gap-8">
              <li>
                <a
                  className="text-secondary transition hover:text-[#f35a38] text-[13px] font-bold"
                  href="#"
                >
                  HOME
                </a>
              </li>
              <li>
                <a
                  className="text-secondary transition hover:text-[#f35a38] text-[13px] font-bold"
                  href="#about"
                >
                  ABOUT
                </a>
              </li>
              <li>
                <a
                  className="text-secondary transition hover:text-[#f35a38] text-[13px] font-bold"
                  href="#services"
                >
                  SERVICES
                </a>
              </li>
              <li>
                <a
                  className="text-secondary transition hover:text-[#f35a38] text-[13px] font-bold"
                  href="#projects"
                >
                  PROJECTS
                </a>
              </li>
              <li>
                <a
                  className="text-secondary transition hover:text-[#f35a38] text-[13px] font-bold"
                  href="#blog"
                >
                  BLOG
                </a>
              </li>
              <li>
                <a
                  className="text-secondary transition hover:text-[#f35a38] text-[13px] font-bold"
                  href="#contact"
                >
                  CONTACT
                </a>
              </li>
            </ul>
          </div>
          <div>{/* add authentication icon later */}</div>
        </div>
      </div>
    </section>
  );
};

export default Navigation;
