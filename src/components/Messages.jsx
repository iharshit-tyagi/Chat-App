import React, { useEffect, useState } from "react";
import Message from "./Message";
import { useSelector } from "react-redux";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
const Messages = () => {
  const [messages, setMessages] = useState([]);
  const chatInfo = useSelector((store) => store.chat.chatInfo);
  console.log(chatInfo);
  useEffect(() => {
    const unSub = onSnapshot(doc(db, "chats", chatInfo.chatId), (doc) => {
      doc.exists() && setMessages(doc.data().messages);
    });

    return () => {
      unSub();
    };
  }, [chatInfo.chatId]);
  return (
    <>
      {messages.map((m) => (
        <Message message={m} key={m.id} />
      ))}
    </>
  );
};

export default Messages;
