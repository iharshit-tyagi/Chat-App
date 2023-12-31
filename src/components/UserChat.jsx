import React from "react";

const UserChat = (props) => {
  console.log(props);
  const { photoURL, displayName } = props;
  return (
    <div className="text-white flex gap-11 pl-4 mb-4 shadow-sm">
      <img className="w-7 rounded-full object-cover" src={photoURL} />
      <div>
        <p className=" font-semibold">{displayName}</p>
        <p>Hello </p>
      </div>
    </div>
  );
};

export default UserChat;
