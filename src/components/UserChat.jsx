import React from "react";

const UserChat = () => {
  return (
    <div className="text-white flex gap-11 pl-4 mb-4 shadow-sm">
      <img
        className="w-7 rounded-full object-cover"
        src="https://cdn.icon-icons.com/icons2/2468/PNG/512/user_icon_149329.png"
      />
      <div>
        <p className=" font-semibold">Name</p>
        <p>Hello </p>
      </div>
    </div>
  );
};

export default UserChat;
