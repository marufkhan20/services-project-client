import React from "react";
import BannerArea from "../components/Home/BannerArea";
import CallToActionArea from "../components/Home/CallToActionArea";
import ContactArea from "../components/Home/ContactArea";
import ExperienceArea from "../components/Home/ExperienceArea";
import ProjectsArea from "../components/Home/ProjectsArea";
import ReviewsArea from "../components/Home/ReviewsArea";
import FooterArea from "../components/common/FooterArea";
import Navigation from "../components/common/Navigation";

const Home = () => {
  return (
    <div>
      <Navigation />
      <BannerArea />
      <ExperienceArea />
      <CallToActionArea />
      <ProjectsArea />
      <ReviewsArea />
      <ContactArea />
      <FooterArea />
    </div>
  );
};

export default Home;
