import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { BsStar } from "react-icons/bs";

const AddReview = () => {
  const [ratting, setRatting] = useState(0);
  return (
    <div className="bg-white py-6 px-5 rounded-md border">
      <div>
        <label for="review" class="font-bold text-sm">
          Add Ratting
        </label>
        <div className="flex gap-2 mt-3">
          {ratting >= 1 ? (
            <AiFillStar
              onClick={() => setRatting(1)}
              className="text-orange-500 text-lg"
            />
          ) : (
            <BsStar
              onClick={() => setRatting(1)}
              className={`cursor-pointer font-bold ${
                ratting >= 1 && "text-orange-500"
              }`}
            />
          )}

          {ratting >= 2 ? (
            <AiFillStar
              onClick={() => setRatting(2)}
              className="text-orange-500 text-lg"
            />
          ) : (
            <BsStar
              onClick={() => setRatting(2)}
              className={`cursor-pointer font-bold ${
                ratting >= 2 && "text-orange-500"
              }`}
            />
          )}

          {ratting >= 3 ? (
            <AiFillStar
              onClick={() => setRatting(3)}
              className="text-orange-500 text-lg"
            />
          ) : (
            <BsStar
              onClick={() => setRatting(3)}
              className={`cursor-pointer font-bold ${
                ratting >= 3 && "text-orange-500"
              }`}
            />
          )}

          {ratting >= 4 ? (
            <AiFillStar
              onClick={() => setRatting(4)}
              className="text-orange-500 text-lg"
            />
          ) : (
            <BsStar
              onClick={() => setRatting(4)}
              className={`cursor-pointer font-bold ${
                ratting >= 4 && "text-orange-500"
              }`}
            />
          )}

          {ratting >= 5 ? (
            <AiFillStar
              onClick={() => setRatting(5)}
              className="text-orange-500 text-lg"
            />
          ) : (
            <BsStar
              onClick={() => setRatting(5)}
              className={`cursor-pointer font-bold ${
                ratting >= 5 && "text-orange-500"
              }`}
            />
          )}
        </div>
      </div>
      <div className="mt-5">
        <label for="review" class="font-bold text-sm">
          Write Review
        </label>
        <textarea
          class="block w-full bg-[#F9F9F9] py-[10px] px-3 border rounded-[4px] font-regular text-sm text-[#717171] outline-none focus:ring-1 mt-3 h-36"
          id="review"
        ></textarea>
      </div>
      <div className="flex justify-end mt-5">
        <button class="text-base text-white px-5 py-[10px] block bg-primary hover:bg-primary/70 transition text-center rounded-md font-medium">
          Submit Review
        </button>
      </div>
    </div>
  );
};

export default AddReview;
