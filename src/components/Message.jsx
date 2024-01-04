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
  console.log(message.date.toDate().toDateString());
  console.log(message.date.toDate().toLocaleString());

  return (
    <div className="flex  gap-10 mt-2 ">
      {/* Message Info */}
      <div>
        <img
          className="w-5 rounded-full object-cover"
          src={
            message.senderId === user.uid
              ? user.photoURL
              : chatInfo.userInfo.photoURL
          }
        />
        <p className="text-sm">
          {message.date.toDate().toLocaleString().valueOf()}
        </p>
      </div>
      {/* Message  Content */}
      <div className="bg-gray-200 w-2/3 pl-2 pt-2 rounded-r-md text-lg rounded-bl-md">
        <p>{message?.text}</p>
      </div>
    </div>
  );
};

export default Message;
