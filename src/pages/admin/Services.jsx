import React, { useState } from "react";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { FaEye, FaRegEdit } from "react-icons/fa";
import { IoIosCopy } from "react-icons/io";
import { MdHomeRepairService } from "react-icons/md";
import { RiDeleteBin5Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import AdminLayout from "../../components/admin/AdminLayout";

const Services = () => {
  const [action, setAction] = useState();
  return (
    <AdminLayout title="Servcices" icon={<MdHomeRepairService />}>
      <div className="py-4 px-5 rounded-md bg-white border">
        <h3 className="text-lg mb-4">Service Lists (2)</h3>
        <div className="flex items-center justify-between">
          <input
            className="py-2 px-4 border w-[280px] rounded-[5px] outline-none focus:ring-1 inline-block"
            type="text"
            placeholder="Search by service title"
          />
          <Link
            class="bg-primary text-white py-[10px] px-7 inline-block uppercase text-[13px] font-semibold mt-4 transition border border-transparent hover:border-light hover:bg-white hover:text-secondary rounded-md"
            to="/admin/services/add-service"
          >
            Create New Service
          </Link>
        </div>
      </div>

      <div className="py-4 px-5 rounded-md bg-white border mt-5 flex items-center justify-between">
        <div className="flex items-center gap-5">
          <img
            className="w-[130px] h-[70px] rounded-md"
            src="/img/services/img-6.jpg"
            alt="service"
          />
          <h3 className="text-lg">Tutorial on Canvas Painting for Beginners</h3>
        </div>
        <div>
          <h3>Completed Order: 3</h3>
        </div>
        <div>
          <h3>Active Order: 3</h3>
        </div>
        <div className="relative">
          <div
            className="w-[35px] h-[40px] border rounded flex items-center justify-center cursor-pointer"
            onClick={() => setAction(action === 1 ? 0 : 1)}
          >
            <BiDotsVerticalRounded />
          </div>

          {action === 1 && (
            <div className="py-1 rounded border bg-white absolute top-12 right-0 min-w-[170px]">
              <li className="flex items-center gap-2 font-medium w-full py-2 px-5 cursor-pointer transition hover:bg-light hover:text-primary">
                <FaRegEdit />
                <span>Edit</span>
              </li>
              <li className="flex items-center gap-2 font-medium w-full py-2 px-5 cursor-pointer transition hover:bg-light hover:text-primary">
                <FaEye />
                <span>Preview Item</span>
              </li>
              <li className="flex items-center gap-2 font-medium w-full py-2 px-5 cursor-pointer transition hover:bg-light hover:text-primary">
                <IoIosCopy />
                <span>Dublicate</span>
              </li>
              <li className="flex items-center gap-2 font-medium w-full py-2 px-5 cursor-pointer transition hover:bg-light hover:text-primary">
                <RiDeleteBin5Line />
                <span>Delete</span>
              </li>
            </div>
          )}
        </div>
      </div>

      <div className="py-4 px-5 rounded-md bg-white border mt-5 flex items-center justify-between">
        <div className="flex items-center gap-5">
          <img
            className="w-[130px] h-[70px] rounded-md"
            src="/img/services/img-6.jpg"
            alt="service"
          />
          <h3 className="text-lg">Tutorial on Canvas Painting for Beginners</h3>
        </div>
        <div>
          <h3>Completed Order: 3</h3>
        </div>
        <div>
          <h3>Active Order: 3</h3>
        </div>
        <div className="relative">
          <div
            className="w-[35px] h-[40px] border rounded flex items-center justify-center cursor-pointer"
            onClick={() => setAction(action === 1 ? 0 : 1)}
          >
            <BiDotsVerticalRounded />
          </div>

          {action === 1 && (
            <div className="py-1 rounded border bg-white absolute top-12 right-0 min-w-[170px]">
              <li className="flex items-center gap-2 font-medium w-full py-2 px-5 cursor-pointer transition hover:bg-light hover:text-primary">
                <FaRegEdit />
                <span>Edit</span>
              </li>
              <li className="flex items-center gap-2 font-medium w-full py-2 px-5 cursor-pointer transition hover:bg-light hover:text-primary">
                <FaEye />
                <span>Preview Item</span>
              </li>
              <li className="flex items-center gap-2 font-medium w-full py-2 px-5 cursor-pointer transition hover:bg-light hover:text-primary">
                <IoIosCopy />
                <span>Dublicate</span>
              </li>
              <li className="flex items-center gap-2 font-medium w-full py-2 px-5 cursor-pointer transition hover:bg-light hover:text-primary">
                <RiDeleteBin5Line />
                <span>Delete</span>
              </li>
            </div>
          )}
        </div>
      </div>

      <div className="py-4 px-5 rounded-md bg-white border mt-5 flex items-center justify-between">
        <div className="flex items-center gap-5">
          <img
            className="w-[130px] h-[70px] rounded-md"
            src="/img/services/img-6.jpg"
            alt="service"
          />
          <h3 className="text-lg">Tutorial on Canvas Painting for Beginners</h3>
        </div>
        <div>
          <h3>Completed Order: 3</h3>
        </div>
        <div>
          <h3>Active Order: 3</h3>
        </div>
        <div className="relative">
          <div
            className="w-[35px] h-[40px] border rounded flex items-center justify-center cursor-pointer"
            onClick={() => setAction(action === 1 ? 0 : 1)}
          >
            <BiDotsVerticalRounded />
          </div>

          {action === 1 && (
            <div className="py-1 rounded border bg-white absolute top-12 right-0 min-w-[170px]">
              <li className="flex items-center gap-2 font-medium w-full py-2 px-5 cursor-pointer transition hover:bg-light hover:text-primary">
                <FaRegEdit />
                <span>Edit</span>
              </li>
              <li className="flex items-center gap-2 font-medium w-full py-2 px-5 cursor-pointer transition hover:bg-light hover:text-primary">
                <FaEye />
                <span>Preview Item</span>
              </li>
              <li className="flex items-center gap-2 font-medium w-full py-2 px-5 cursor-pointer transition hover:bg-light hover:text-primary">
                <IoIosCopy />
                <span>Dublicate</span>
              </li>
              <li className="flex items-center gap-2 font-medium w-full py-2 px-5 cursor-pointer transition hover:bg-light hover:text-primary">
                <RiDeleteBin5Line />
                <span>Delete</span>
              </li>
            </div>
          )}
        </div>
      </div>
    </AdminLayout>
  );
};

export default Services;
