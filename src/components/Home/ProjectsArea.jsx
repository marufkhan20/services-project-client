import React from "react";

const ProjectsArea = () => {
  return (
    <section id="projects" className="py-[130px] projects-area">
      <div className="px-5 md:px-0 container mx-auto">
        <div className="section-title">
          <h5>PROJECTS</h5>
          <h2>
            Our Recent popular awesome <br />
            completed projects
          </h2>
        </div>

        {/* <!-- project nav start --> */}
        <nav className="mt-[60px]">
          <ul className="flex items-center justify-center gap-1 flex-wrap">
            <li className="border-2 font-bold py-[10px] px-[25px] rounded-full outline-none cursor-pointer transition border-[#b6d4ef] text-[#0e2258]">
              All
            </li>
            <li className="border-2 border-transparent font-bold py-[10px] px-[25px] rounded-full text-[#666] outline-none cursor-pointer transition hover:border-[#b6d4ef] hover:text-[#0e2258]">
              Development
            </li>
            <li className="border-2 border-transparent font-bold py-[10px] px-[25px] rounded-full text-[#666] outline-none cursor-pointer transition hover:border-[#b6d4ef] hover:text-[#0e2258]">
              Consulting
            </li>
            <li className="border-2 border-transparent font-bold py-[10px] px-[25px] rounded-full text-[#666] outline-none cursor-pointer transition hover:border-[#b6d4ef] hover:text-[#0e2258]">
              Finance
            </li>
            <li className="border-2 border-transparent font-bold py-[10px] px-[25px] rounded-full text-[#666] outline-none cursor-pointer transition hover:border-[#b6d4ef] hover:text-[#0e2258]">
              Branding
            </li>
            <li className="border-2 border-transparent font-bold py-[10px] px-[25px] rounded-full text-[#666] outline-none cursor-pointer transition hover:border-[#b6d4ef] hover:text-[#0e2258]">
              Capital
            </li>
          </ul>
        </nav>
        {/* <!-- project nav end --> */}

        {/* <!-- projects wrapper start --> */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          <div class="single-project">
            <img src="./img/projects/1-5.jpg" alt="project" />
            <div class="project-details">
              <h4>FINANCE</h4>
              <h3>Business Matching</h3>
            </div>
            <div class="see-project">
              <span>+</span>
            </div>
          </div>
          <div class="single-project">
            <img src="./img/projects/2-4.jpg" alt="project" />
            <div class="project-details">
              <h4>FINANCE</h4>
              <h3>Business Matching</h3>
            </div>
            <div class="see-project">
              <span>+</span>
            </div>
          </div>
          <div class="single-project">
            <img src="./img/projects/22.jpg" alt="project" />
            <div class="project-details">
              <h4>FINANCE</h4>
              <h3>Business Matching</h3>
            </div>
            <div class="see-project">
              <span>+</span>
            </div>
          </div>
          <div class="single-project">
            <img src="./img/projects/3-4.jpg" alt="project" />
            <div class="project-details">
              <h4>FINANCE</h4>
              <h3>Business Matching</h3>
            </div>
            <div class="see-project">
              <span>+</span>
            </div>
          </div>
          <div class="single-project">
            <img src="./img/projects/1-5.jpg" alt="project" />
            <div class="project-details">
              <h4>FINANCE</h4>
              <h3>Business Matching</h3>
            </div>
            <div class="see-project">
              <span>+</span>
            </div>
          </div>
          <div class="single-project">
            <img src="./img/projects/11-1.jpg" alt="project" />
            <div class="project-details">
              <h4>FINANCE</h4>
              <h3>Business Matching</h3>
            </div>
            <div class="see-project">
              <span>+</span>
            </div>
          </div>
        </div>
        {/* <!-- projects wrapper end --> */}
      </div>
    </section>
  );
};

export default ProjectsArea;
