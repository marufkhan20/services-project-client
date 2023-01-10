import React from "react";

const Message = ({ user }) => {
  return (
    <>
      {user === "admin" && (
        <div>
          <div className="flex items-center gap-2">
            <img
              className="w-10 h-10 rounded-full block"
              src="/img/users/1.jpg"
              alt="user"
            />
            <h3>mdmaruf</h3>
            <span>-</span>
            <span className="text-gray-400 font-medium text-sm">
              Sep 14, 1:06 AM
            </span>
          </div>
          <div className="ml-10 py-5 border rounded-md px-3 mt-2 bg-light">
            <p>
              I tried a lot but couldn't. I have never deployed like this
              before. sorry
            </p>
          </div>
        </div>
      )}

      {user === "me" && (
        <div>
          <div className="flex items-center gap-2 justify-start flex-row-reverse">
            <img
              className="w-10 h-10 rounded-full block"
              src="/img/users/img-13.jpg"
              alt="user"
            />
            <h3>You</h3>
            <span>-</span>
            <span className="text-gray-400 font-medium text-sm">
              Sep 14, 1:06 AM
            </span>
          </div>
          <div className="mr-10 py-5 border rounded-md px-3 mt-2">
            <p>
              I tried a lot but couldn't. I have never deployed like this
              before. sorry
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Message;
