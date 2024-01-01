import React from "react";

const UserChat = (props) => {
  const { photoURL, displayName, showMessage } = props;
  return (
    <div className="text-white flex gap-11 pl-4 mb-4 shadow-sm">
      <img className="w-7 rounded-full object-cover" src={photoURL} />
      <div>
        <p className=" font-semibold">{displayName}</p>
        {showMessage && <p>Hello </p>}
      </div>
    </div>
  );
};

export default UserChat;
