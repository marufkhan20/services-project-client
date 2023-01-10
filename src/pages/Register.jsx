import React from "react";

const Register = () => {
  return (
    <main>
      <div className="container mx-auto my-14">
        <div className="w-3/6 mx-auto shadow-md p-10 rounded-lg border">
          <h2 className="text-2xl">Sign up to Trusted Tool</h2>

          <div className="mt-8">
            {/* edit form */}
            <div>
              <form className="flex flex-col gap-5">
                <div className="flex gap-6">
                  <div className="w-full">
                    <label htmlFor="firstName" className="font-bold text-sm">
                      First Name*
                    </label>
                    <input
                      className="block w-full bg-[#F9F9F9] py-4 px-3 border rounded-[4px] font-regular text-sm text-[#717171] outline-none focus:ring-1 mt-3"
                      id="firstName"
                      type="text"
                    />
                  </div>
                  <div className="w-full">
                    <label htmlFor="lastName" className="font-bold text-sm">
                      Last Name*
                    </label>
                    <input
                      className="block w-full bg-[#F9F9F9] py-4 px-3 border rounded-[4px] font-regular text-sm text-[#717171] outline-none focus:ring-1 mt-3"
                      id="lastName"
                      type="text"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="font-bold text-sm">
                    Email*
                  </label>
                  <input
                    className="block w-full bg-[#F9F9F9] py-4 px-3 border rounded-[4px] font-regular text-sm text-[#717171] outline-none focus:ring-1 mt-3"
                    id="email"
                    type="email"
                  />
                </div>

                <div>
                  <label htmlFor="password" className="font-bold text-sm">
                    Password*
                  </label>
                  <input
                    className="block w-full bg-[#F9F9F9] py-4 px-3 border rounded-[4px] font-regular text-sm text-[#717171] outline-none focus:ring-1 mt-3"
                    id="password"
                    type="password"
                  />
                </div>

                <button
                  type="submit"
                  className="block text-center text-white bg-primary px-8 py-3 rounded-[4px] gap-[5px] font-medium transition hover:bg-primary/70 border border-primary"
                >
                  <span>Sign Up</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Register;
