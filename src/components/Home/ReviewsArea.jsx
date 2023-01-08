import React from "react";

const ReviewsArea = () => {
  return (
    <section className="py-[130px] reviews-area bg-slate-100">
      <div className="container mx-auto">
        <div className="section-title">
          <h5>REVIEW</h5>
          <h2>10,000+ Happy Customers</h2>
        </div>

        <div className="text-center w-[90%] sm:w-[60%] mx-auto mt-[70px]">
          <div className="single-review">
            <h3 className="text-[#666] text-[15px] mb-5">(Bug Fixing)</h3>
            <ul className="flex items-center gap-1 justify-center">
              <li>
                <img className="w-4" src="./img/icons/star.png" alt="star" />
              </li>
              <li>
                <img className="w-4" src="./img/icons/star.png" alt="star" />
              </li>
              <li>
                <img className="w-4" src="./img/icons/star.png" alt="star" />
              </li>
              <li>
                <img className="w-4" src="./img/icons/star.png" alt="star" />
              </li>
              <li>
                <img className="w-4" src="./img/icons/star.png" alt="star" />
              </li>
            </ul>
            <p className="italic text-[22px] leading-[38px] font-light text-[#0e2258] my-7">
              Ashamed no inhabit ferrars it ye besides resolve. Own judgment
              directly few trifling. Elderly as pursuit at regular do parlors.
              Rank what has into fond pursuit at regular.
            </p>
            <hr />
            <div className="relative inline-block">
              <img
                className="w-[100px] h-[100px] rounded-full border-4 border-white shadow-lg inline-block"
                src="img/users/1.jpg"
                alt="user"
              />
              <div
                className="absolute top-[10px] right-0 h-10 w-10 flex items-center justify-center rounded-full"
                style={{
                  background: `linear-gradient(
                90deg,
                rgba(5, 84, 242, 1) 35%,
                rgba(144, 0, 254, 1) 100%
              )`,
                }}
              >
                <img
                  className="w-[15px] fill-white"
                  src="./img/icons/quote.png"
                  alt="quote"
                />
              </div>
              <h4 className="uppercase text-[13px] mt-5 mb-1 text-base">
                Maruf Khan
              </h4>
              <span className="text-base">CUSTOMER SUPPORT</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsArea;
