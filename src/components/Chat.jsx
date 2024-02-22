import React from "react";
import Message from "./Message";
import Input from "./Input";
import { useSelector, useDispatch } from "react-redux";
import Messages from "./Messages";
const Chat = () => {
  const chatInfo = useSelector((store) => store.chat.chatInfo);
  if (chatInfo.length === 0)
    return (
      <div className="col-span-8 flex items-center justify-center">
        <div className="h-1/2 w-4/6 flex items-center justify-center bg-gray-200 rounded-lg shadow-md">
          <h2 className="text-center font-semibold text-xl text-gray-800">
            Select a chat to start a conversation!
          </h2>
        </div>
      </div>
    );

  return (
    <div className="col-span-8  ">
      <div className="pl-7 bg-gray-800 items-center px-4 flex justify-start   h-16">
        <img
          className="w-9 h-9 rounded-full object-cover mr-4"
          src={chatInfo.userInfo.photoURL}
        />
        <p className="text-xl font-semibold text-white">
          {chatInfo?.userInfo?.displayName}
        </p>
      </div>

      <div className="bg-slate-100 pt-2 pl-2 h-[calc(100%-110px)] overflow-y-scroll">
        <Messages />
      </div>

      <Input />
    </div>
  );
};

export default Chat;
