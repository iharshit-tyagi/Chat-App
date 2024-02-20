import React from "react";

const UserChat = (props) => {
  const { photoURL, displayName, showMessage } = props;
  return (
    <div className=" flex items-center gap-4 p-2 bg-gray-800 hover:bg-gray-700 shadow-md w-11/12">
      <img className="w-12 h-12 rounded-full object-cover" src={photoURL} />
      <div>
        <p className=" text-white font-semibold">{displayName}</p>
        {showMessage && <p className="text-gray-400">Hello </p>}
      </div>
    </div>
  );
};

export default UserChat;
