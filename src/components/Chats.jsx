import React, { useEffect, useState } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { useDispatch, useSelector } from "react-redux";
import { db } from "../firebase";
import { addChatInfo, clearChatInfo } from "../utils/chatSlice";
const Chats = () => {
  const dispatch = useDispatch();
  const [chats, setChats] = useState([]);
  const user = useSelector((store) => store.user.user);
  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "userChats", user?.uid), (doc) => {
        setChats(doc.data());
      });

      return () => {
        unsub();
      };
    };
    user && getChats();
  }, [user?.uid]);
  const handleChatSelect = (chatId, userInfo) => {
    // dispatch(clearChatInfo());
    dispatch(
      addChatInfo({
        userInfo,
        chatId,
      })
    );
  };

  if (chats?.length === 0) return null;

  const chat = Object.entries(chats);
  return (
    <div className=" mt-4">
      {Object.entries(chats)
        .sort((a, b) => b[1].date - a[1].date)
        .map((chat) => {
          console.log(chat[1]?.lastMessage?.text);
          return (
            <div
              key={chat[0]}
              className="text-white text-lg flex gap-11 pb-2 pl-4 mb-4 h-14 shadow-sm shadow-white"
              onClick={() => handleChatSelect(chat[0], chat[1]?.userInfo)}
            >
              <img
                className="w-11 border-white rounded-full object-cover"
                src={chat[1].userInfo?.photoURL}
              />
              <div>
                <p className=" font-semibold">
                  {chat[1].userInfo?.displayName}
                </p>
                <p>{chat[1]?.lastMessage?.text}</p>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Chats;
