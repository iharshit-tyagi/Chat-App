import React from "react";
import Message from "./Message";
import Input from "./Input";

const Chat = () => {
  return (
    <>
      <div className=" bg-gray-600 col-span-8 items-center px-4 flex justify-between   h-14 ">
        <p className="text-lg text-white">Harshit </p>
        <p>kb</p>
      </div>
      <div className="bg-slate-100">
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
      </div>
      <Input />
    </>
  );
};

export default Chat;
