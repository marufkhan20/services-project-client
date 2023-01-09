import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <section className="bg-white border-b-2 py-5">
      <div className="px-5 md:px-0 md:w-[80%] mx-auto">
        <div className="flex justify-between items-center">
          <div className="logo">
            <Link to="/">
              <img className="h-12" src="/img/logo.png" alt="logo" />
            </Link>
          </div>
          <div className="hidden md:block">
            <ul className="flex gap-8">
              <li>
                <Link
                  className="text-secondary transition hover:text-[#f35a38] text-[13px] font-bold"
                  to="#"
                >
                  HOME
                </Link>
              </li>
              <li>
                <Link
                  className="text-secondary transition hover:text-[#f35a38] text-[13px] font-bold"
                  to="#about"
                >
                  ABOUT
                </Link>
              </li>
              <li>
                <Link
                  className="text-secondary transition hover:text-[#f35a38] text-[13px] font-bold"
                  to="#services"
                >
                  SERVICES
                </Link>
              </li>
              <li>
                <Link
                  className="text-secondary transition hover:text-[#f35a38] text-[13px] font-bold"
                  to="#projects"
                >
                  PROJECTS
                </Link>
              </li>
              <li>
                <Link
                  className="text-secondary transition hover:text-[#f35a38] text-[13px] font-bold"
                  to="#blog"
                >
                  BLOG
                </Link>
              </li>
              <li>
                <Link
                  className="text-secondary transition hover:text-[#f35a38] text-[13px] font-bold"
                  to="#contact"
                >
                  CONTACT
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex items-center gap-6">
            <Link
              className="bg-primary text-white py-[10px] px-7 inline-block uppercase text-[13px] font-semibold mt-4 transition border border-transparent hover:border-light hover:bg-white hover:text-secondary rounded-md"
              to="/login"
            >
              Login
            </Link>
            <Link
              className="bg-primary text-white py-[10px] px-7 inline-block uppercase text-[13px] font-semibold mt-4 transition border border-transparent hover:border-light hover:bg-white hover:text-secondary rounded-md"
              to="/register"
            >
              Register
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navigation;
