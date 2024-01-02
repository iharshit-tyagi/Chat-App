import React from "react";
import { useSelector } from "react-redux";
import { useEffect, useRef } from "react";

const Message = ({ message }) => {
  const user = useSelector((store) => store.user.user);
  const chatInfo = useSelector((store) => store.chat.chatInfo);
  const ref = useRef(null);
  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  return (
    <div className="flex  gap-10 mt-2 ">
      {/* Message Info */}
      <div>
        <img
          className="w-5 rounded-full object-cover"
          src={
            message.senderId == user.uid
              ? chatInfo.userInfo.photoURL
              : chatInfo.userInfo.photoURL
          }
        />
        <p>Just Now</p>
      </div>
      {/* Message  Content */}
      <div className="bg-gray-200 w-2/3 pl-2 pt-2 rounded-r-md rounded-bl-md">
        <p>{message?.text}</p>
      </div>
    </div>
  );
};

export default Message;
