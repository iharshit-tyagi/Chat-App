import React from "react";
import Message from "./Message";
import Input from "./Input";
import { useSelector, useDispatch } from "react-redux";
import Messages from "./Messages";
const Chat = () => {
  const chatInfo = useSelector((store) => store.chat.chatInfo);
  if (chatInfo.length === 0)
    return (
      <div>
        <h2> Select a Chat To View Message</h2>
      </div>
    );

  return (
    <div className="col-span-8 ">
      <div className=" bg-gray-600 items-center px-4 flex justify-between   h-14 ">
        <p className="text-lg text-white">{chatInfo?.userInfo?.displayName}</p>
        <p>kb</p>
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
