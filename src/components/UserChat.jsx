import React from "react";

const UserChat = (props) => {
  const { photoURL, displayName, showMessage } = props;
  return (
    <div className="ext-white text-lg flex gap-11 pb-2 pl-4  h-14 shadow-sm shadow-white">
      <img className="w-10 rounded-full object-cover" src={photoURL} />
      <div>
        <p className=" text-white font-semibold">{displayName}</p>
        {showMessage && <p>Hello </p>}
      </div>
    </div>
  );
};

export default UserChat;
