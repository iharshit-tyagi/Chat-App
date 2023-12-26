import React from "react";
import Message from "./Message";
import Input from "./Input";

const Chat = () => {
  return (
    <div className="col-span-8 ">
      <div className=" bg-gray-600 items-center px-4 flex justify-between   h-14 ">
        <p className="text-lg text-white">Harshit </p>
        <p>kb</p>
      </div>
      <div className="bg-slate-100 pt-2 pl-2 h-[calc(100%-110px)] overflow-y-scroll">
        <Message />
        <Message />
        <Message />
        <Message />
      </div>
      <div>
        <Input />
      </div>
    </div>
  );
};

export default Chat;
