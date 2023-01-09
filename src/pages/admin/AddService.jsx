import React from "react";
import { MdHomeRepairService } from "react-icons/md";
import AdminLayout from "../../components/admin/AdminLayout";

const AddService = () => {
  return (
    <AdminLayout title="Add New Service" icon={<MdHomeRepairService />}>
      <div className=" bg-white mt-5 rounded-md">
        {/* edit form */}
        <div className="py-6 px-5">
          <form className="flex flex-col gap-5">
            <div className="flex gap-6">
              <div className="w-full">
                <label htmlFor="firstName" className="font-bold text-sm">
                  First Name*
                </label>
                <input
                  className="block w-full bg-[#F9F9F9] py-[10px] px-3 border rounded-[4px] font-regular text-sm text-[#717171] outline-none focus:ring-1 mt-3"
                  id="firstName"
                  type="text"
                  placeholder="John"
                />
              </div>
              <div className="w-full">
                <label htmlFor="lastName" className="font-bold text-sm">
                  Last Name*
                </label>
                <input
                  className="block w-full bg-[#F9F9F9] py-[10px] px-3 border rounded-[4px] font-regular text-sm text-[#717171] outline-none focus:ring-1 mt-3"
                  id="lastName"
                  type="text"
                  placeholder="Doe"
                />
              </div>
            </div>

            <div>
              <label htmlFor="bio" className="font-bold text-sm">
                Bio
              </label>
              <textarea
                className="block w-full bg-[#F9F9F9] py-[10px] px-3 border rounded-[4px] font-regular text-sm text-[#717171] outline-none focus:ring-1 mt-3 h-24"
                id="bio"
              />
            </div>

            <div className="flex gap-6">
              <div className="w-full">
                <label htmlFor="email" className="font-bold text-sm">
                  Email*
                </label>
                <input
                  className="block w-full bg-[#F9F9F9] py-[10px] px-3 border rounded-[4px] font-regular text-sm text-[#717171] outline-none focus:ring-1 mt-3"
                  id="email"
                  type="email"
                  disabled
                  placeholder="email"
                />
              </div>
              <div className="w-full">
                <label htmlFor="phone" className="font-bold text-sm">
                  Phone*
                </label>
                <input
                  className="block w-full bg-[#F9F9F9] py-[10px] px-3 border rounded-[4px] font-regular text-sm text-[#717171] outline-none focus:ring-1 mt-3"
                  id="phone"
                  type="text"
                  placeholder="Phone"
                />
              </div>
            </div>

            <div className="flex gap-6">
              <div className="w-full">
                <label htmlFor="facebook" className="font-bold text-sm">
                  Facebook*
                </label>
                <input
                  className="block w-full bg-[#F9F9F9] py-[10px] px-3 border rounded-[4px] font-regular text-sm text-[#717171] outline-none focus:ring-1 mt-3"
                  id="facebook"
                  type="url"
                  placeholder="facebook"
                />
              </div>
              <div className="w-full">
                <label htmlFor="website" className="font-bold text-sm">
                  Website*
                </label>
                <input
                  className="block w-full bg-[#F9F9F9] py-[10px] px-3 border rounded-[4px] font-regular text-sm text-[#717171] outline-none focus:ring-1 mt-3"
                  id="website"
                  type="url"
                  placeholder="website"
                />
              </div>
            </div>

            <div className="flex gap-6">
              <div className="w-full">
                <label htmlFor="instagram" className="font-bold text-sm">
                  Instagram*
                </label>
                <input
                  className="block w-full bg-[#F9F9F9] py-[10px] px-3 border rounded-[4px] font-regular text-sm text-[#717171] outline-none focus:ring-1 mt-3"
                  id="instagram"
                  type="url"
                  placeholder="instagram"
                />
              </div>
              <div className="w-full">
                <label htmlFor="twitter" className="font-bold text-sm">
                  Twitter*
                </label>
                <input
                  className="block w-full bg-[#F9F9F9] py-[10px] px-3 border rounded-[4px] font-regular text-sm text-[#717171] outline-none focus:ring-1 mt-3"
                  id="twitter"
                  type="url"
                  placeholder="twitter"
                />
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-full">
                <label htmlFor="linkedin" className="font-bold text-sm">
                  Linkedin*
                </label>
                <input
                  className="block w-full bg-[#F9F9F9] py-[10px] px-3 border rounded-[4px] font-regular text-sm text-[#717171] outline-none focus:ring-1 mt-3"
                  id="linkedin"
                  type="url"
                  placeholder="linkedin"
                />
              </div>
              <div className="w-full">
                <label htmlFor="youtube" className="font-bold text-sm">
                  Youtube*
                </label>
                <input
                  className="block w-full bg-[#F9F9F9] py-[10px] px-3 border rounded-[4px] font-regular text-sm text-[#717171] outline-none focus:ring-1 mt-3"
                  id="youtube"
                  type="url"
                  placeholder="youtube"
                />
              </div>
            </div>

            <h3 className="text-xl pb-3 border-b">Address</h3>

            <div className="flex gap-6">
              <div className="w-full">
                <label htmlFor="address1" className="font-bold text-sm">
                  Address 1*
                </label>
                <input
                  className="block w-full bg-[#F9F9F9] py-[10px] px-3 border rounded-[4px] font-regular text-sm text-[#717171] outline-none focus:ring-1 mt-3"
                  id="address1"
                  type="text"
                  placeholder="Address 1"
                />
              </div>
              <div className="w-full">
                <label htmlFor="address2" className="font-bold text-sm">
                  Address 2*
                </label>
                <input
                  className="block w-full bg-[#F9F9F9] py-[10px] px-3 border rounded-[4px] font-regular text-sm text-[#717171] outline-none focus:ring-1 mt-3"
                  id="address2"
                  type="text"
                  placeholder="Address 2"
                />
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-full">
                <label htmlFor="Country" className="font-bold text-sm">
                  Country*
                </label>
                <input
                  className="block w-full bg-[#F9F9F9] py-[10px] px-3 border rounded-[4px] font-regular text-sm text-[#717171] outline-none focus:ring-1 mt-3"
                  id="Country"
                  type="text"
                  placeholder="Country"
                />
              </div>
              <div className="w-full">
                <label htmlFor="State" className="font-bold text-sm">
                  State*
                </label>
                <input
                  className="block w-full bg-[#F9F9F9] py-[10px] px-3 border rounded-[4px] font-regular text-sm text-[#717171] outline-none focus:ring-1 mt-3"
                  id="State"
                  type="text"
                  placeholder="State"
                />
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-full">
                <label htmlFor="City" className="font-bold text-sm">
                  City*
                </label>
                <input
                  className="block w-full bg-[#F9F9F9] py-[10px] px-3 border rounded-[4px] font-regular text-sm text-[#717171] outline-none focus:ring-1 mt-3"
                  id="City"
                  type="text"
                  placeholder="City"
                />
              </div>
              <div className="w-full">
                <label htmlFor="ZipCode" className="font-bold text-sm">
                  Zip Code*
                </label>
                <input
                  className="block w-full bg-[#F9F9F9] py-[10px] px-3 border rounded-[4px] font-regular text-sm text-[#717171] outline-none focus:ring-1 mt-3"
                  id="ZipCode"
                  type="text"
                  placeholder="Zip Code"
                />
              </div>
            </div>

            <div className="flex items-center justify-end gap-2">
              <div className="flex items-center hover:bg-light px-8 py-2 rounded-[4px] gap-[5px] font-medium transition cursor-pointer border">
                <span>Cancel</span>
              </div>
              <button
                type="submit"
                className="flex items-center text-white bg-primary px-8 py-2 rounded-[4px] gap-[5px] font-medium transition hover:bg-primary/70 border border-primary"
              >
                <span>Update</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AddService;
