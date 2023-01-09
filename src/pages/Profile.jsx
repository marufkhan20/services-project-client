import React from "react";
import ProfileInfo from "../components/Profile/ProfileInfo";

const Profile = () => {
  return (
    <main>
      <header
        className="h-[270px] bg-center"
        style={{ backgroundImage: "url('/img/hero-cover-01.jpg')" }}
      ></header>

      <section className="pb-[60px] bg-light">
        <div className="container mx-auto">
          <div className="flex justify-between gap-5">
            <div className="w-[30%]">
              <ProfileInfo />
            </div>
            <div className="w-[70%]">hello</div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Profile;
