import React from "react";
import { Link } from "react-router-dom";
import Inbox from "../components/Inbox/Inbox";

const OrderView = () => {
  return (
    <main className="bg-[#F5F7F9] py-[60px]">
      <div className="container mx-auto">
        <div className="flex justify-between gap-12">
          <div className="w-[80%] bg-white py-5 px-6 rounded-md border shadow-md">
            <Inbox />
          </div>
          <div className="w-[20%]">
            <div className="bg-white border rounded-md h-fit shadow-md">
              <h3 className="px-5 py-4 text-lg border-b">Order Information</h3>

              <div className="p-5">
                <div className="flex gap-3 pb-5 border-b">
                  <img
                    className="h-[80px] rounded-md"
                    src="/img/services/img-6.jpg"
                    alt="service"
                  />
                  <div>
                    <h4 className="text-base font-semibold mb-1">
                      Step Up Open Mic Show
                    </h4>
                    <button className="py-1 px-2 block text-xs font-bold rounded bg-purple-700 text-white">
                      In Progress
                    </button>
                  </div>
                </div>

                <div className="flex flex-col gap-2 py-6">
                  <li className="flex items-center justify-between">
                    <span className="text-[15px] text-[#95979d] font-medium">
                      Ordered by
                    </span>
                    <span className="text-[15px] text-primary font-semibold">
                      <Link to="#">mdmaruf</Link>
                    </span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span className="text-[15px] text-[#95979d] font-medium">
                      Delivery date
                    </span>
                    <span className="text-[15px] font-semibold">
                      Oct 9, 1:07 AM
                    </span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span className="text-[15px] text-[#95979d] font-medium">
                      Total price
                    </span>
                    <span className="text-[15px] font-semibold">$500</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span className="text-[15px] text-[#95979d] font-medium">
                      Order number
                    </span>
                    <span className="text-[15px] font-semibold">
                      #FO827863DC308
                    </span>
                  </li>
                </div>

                <div>
                  <button className="text-white bg-primary px-8 py-3 rounded-[4px] gap-[5px] font-semibold transition hover:bg-primary/70 border border-primary block w-full text-center">
                    <span>Delivery Now</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default OrderView;
