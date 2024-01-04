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
    <div
      className={
        message.senderId === user.uid
          ? "flex flex-row-reverse h-10 gap-5 mt-4 items-center "
          : "flex  gap-10 mt-4 items-center "
      }
    >
      {/* Message Info */}
      <div className="w-16">
        <img
          className="w-14 rounded-full object-cover"
          src={
            message.senderId === user.uid
              ? user.photoURL
              : chatInfo.userInfo.photoURL
          }
        />
        {/* <p className="text-sm">{message.date.toDate().toLocaleString()}</p> */}
      </div>
      {/* Message  Content */}
      <div
        className={
          message.senderId === user.uid
            ? " flex justify-end items-center bg-gray-300 h-10 w-2/5 pr-4  rounded-r-md text-lg rounded-bl-md"
            : " flex items-center justify-start bg-gray-500 h-10 w-2/5 pl-4  rounded-r-md text-lg rounded-bl-md"
        }
      >
        <p>{message?.text}</p>
      </div>
    </div>
  );
};

export default Message;
