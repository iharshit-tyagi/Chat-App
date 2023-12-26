import React from "react";

const Message = () => {
  return (
    <div className="flex  gap-10 mt-2 ">
      {/* Message Info */}
      <div>
        <img
          className="w-5 rounded-full object-cover"
          src="https://cdn.icon-icons.com/icons2/2468/PNG/512/user_icon_149329.png"
        />
        <p>Just Now</p>
      </div>
      {/* Message  Content */}
      <div className="bg-gray-200 w-2/3 pl-2 pt-2 rounded-r-md rounded-bl-md">
        <p>Hello world</p>
      </div>
    </div>
  );
};

export default Message;
