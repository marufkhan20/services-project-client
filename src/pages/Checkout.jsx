import React from "react";

const Checkout = () => {
  return (
    <main className="py-[60px] bg-[#F5F7F9]">
      <div className="container mx-auto">
        <h2 className="text-[32px] pb-6 border-b-2">Order Confirmation</h2>

        <div className="flex gap-5 mt-10">
          <div className="w-3/5 bg-white border rounded-md">
            <h3 className="px-5 py-4 text-lg border-b">
              Total Payable Amount : AUD $50.00
            </h3>

            <div className="p-5">
              <div class="pb-7 border-b">
                <h4 class="text-base font-semibold mb-3">Payment Number:</h4>
                <p class="text-[#717171]">+88018XXXXXXXX</p>
              </div>

              <form className="flex flex-col gap-5 mt-5">
                <div className="w-full">
                  <label htmlFor="method" className="font-bold text-sm">
                    Select Payment Method*
                  </label>
                  <select
                    className="block w-full bg-[#F9F9F9] py-[10px] px-3 border rounded-[4px] font-regular text-sm text-[#717171] outline-none focus:ring-1 mt-3"
                    id="method"
                  >
                    <option>Select Payment Method</option>
                    <option value="">Bkash</option>
                    <option value="">Nagad</option>
                    <option value="">Rocket</option>
                    <option value="">Upay</option>
                  </select>
                </div>

                <div className="w-full">
                  <label htmlFor="number" className="font-bold text-sm">
                    Number*
                  </label>
                  <input
                    className="block w-full bg-[#F9F9F9] py-[10px] px-3 border rounded-[4px] font-regular text-sm text-[#717171] outline-none focus:ring-1 mt-3"
                    id="number"
                    type="text"
                    placeholder="Enter your Number"
                  />
                </div>

                <div className="w-full">
                  <label htmlFor="transactionId" className="font-bold text-sm">
                    Transaction ID*
                  </label>
                  <input
                    className="block w-full bg-[#F9F9F9] py-[10px] px-3 border rounded-[4px] font-regular text-sm text-[#717171] outline-none focus:ring-1 mt-3"
                    id="transactionId"
                    type="text"
                    placeholder="Enter your Transaction ID"
                  />
                </div>
              </form>
            </div>
          </div>
          <div className="w-2/5 bg-white border rounded-md h-fit">
            <h3 className="px-5 py-4 text-lg border-b">Service Information</h3>

            <div className="p-5">
              <div className="flex gap-3 pb-5 border-b">
                <img
                  className="w-[130px] rounded-md"
                  src="/img/services/img-6.jpg"
                  alt="service"
                />
                <div>
                  <h4 className="text-lg font-semibold mb-3">
                    Step Up Open Mic Show
                  </h4>
                  <p className="text-black mb-3">Thu, Jun 30, 2022 4:30 AM</p>
                  <h3>Package: RUBY</h3>
                </div>
              </div>

              <div className="flex items-center justify-between py-5">
                <h3>Total</h3>
                <h3>AUD $50.00</h3>
              </div>

              <div>
                <button className="text-white bg-primary px-8 py-3 rounded-[4px] gap-[5px] font-semibold transition hover:bg-primary/70 border border-primary block w-full text-center">
                  <span>Confirm & Pay</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Checkout;
