import React from "react";
import Message from "./Message";
import Input from "./Input";
import { useSelector, useDispatch } from "react-redux";
import Messages from "./Messages";
const Chat = () => {
  const chatInfo = useSelector((store) => store.chat.chatInfo);
  if (chatInfo.length === 0)
    return (
      <div className="col-span-8 flex items-center justify-center ">
        <h2 className="h-2/4 w-2/4 flex items-center justify-center font-semibold text-xl bg-gray-200">
          <p>Select a chat to Start Conversation!</p>
        </h2>
      </div>
    );

  return (
    <div className="col-span-8  ">
      <div className=" bg-black items-center px-4 flex justify-center   h-14 ">
        <p className="text-lg font-semibold text-white">
          {chatInfo?.userInfo?.displayName}
        </p>
      </div>
      <div className="bg-slate-100 pt-2 pl-2 h-[calc(100%-110px)] overflow-y-scroll">
        <Messages />
      </div>
      <div>
        <Input />
      </div>
    </div>
  );
};

export default Chat;
