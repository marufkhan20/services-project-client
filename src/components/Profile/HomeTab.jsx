import React from "react";
import { Link } from "react-router-dom";

const HomeTab = ({ userInfo }) => {
  return (
    <div className="p-5 bg-white shadow-sm mt-6 rounded-md flex items-center gap-3">
      <img
        className="w-[180px] h-[120px] rounded-md"
        src="/img/services/img-6.jpg"
        alt="service"
      />
      <div>
        <h4 className="text-lg font-semibold mb-3">Step Up Open Mic Show</h4>
        <p className="text-black mb-3">Thu, Jun 30, 2022 4:30 AM</p>

        <Link
          to="/"
          className="py-[10px] px-6 gap-2 transition bg-primary text-white rounded-md inline-block border border-primary hover:bg-transparent hover:text-primary font-medium
          "
        >
          <span>View Order</span>
        </Link>
      </div>
    </div>
  );
};

export default HomeTab;
