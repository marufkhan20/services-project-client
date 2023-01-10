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
