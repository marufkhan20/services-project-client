import React from "react";

const SendMessage = () => {
  return (
    <div>
      <textarea
        class="block w-full bg-[#F9F9F9] py-[10px] px-3 border rounded-[4px] font-regular text-sm text-[#717171] outline-none focus:ring-1 mt-3 h-40"
        id="bio"
      ></textarea>
      <button
        type="submit"
        class="flex items-center text-white bg-primary px-8 py-2 rounded-[4px] gap-[5px] font-medium transition hover:bg-primary/70 border border-primary mt-3"
      >
        <span>Send Message</span>
      </button>
    </div>
  );
};

export default SendMessage;
