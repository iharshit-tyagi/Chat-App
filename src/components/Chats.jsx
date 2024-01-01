import React, { useEffect, useState } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import UserChat from "./UserChat";
import { useDispatch, useSelector } from "react-redux";
import { db } from "../firebase";
import {
  addChatList,
  clearChatList,
  addChatInfo,
  clearChatInfo,
} from "../utils/chatSlice";
const Chats = () => {
  const dispatch = useDispatch();
  const [chats, setChats] = useState([]);
  const user = useSelector((store) => store.user.user);
  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "userChats", user.uid), (doc) => {
        setChats(doc.data());
        // dispatch(addChatList(doc.data()));
      });

      return () => {
        unsub();
      };
    };
    user && getChats();
  }, []);
  const handleChatSelect = (chatId, userInfo) => {
    dispatch(
      addChatInfo({
        userInfo,
        chatId,
      })
    );
  };

  if (chats.length === 0) return null;

  const chat = Object.entries(chats);
  return (
    <div className=" mt-4">
      {Object.entries(chats).map((chat) => {
        return (
          <div
            key={chat[0]}
            className="text-white flex gap-11 pl-4 mb-4 shadow-sm"
            onClick={() => handleChatSelect(chat[0], chat[1].userInfo)}
          >
            <img
              className="w-7 rounded-full object-cover"
              src={chat[1].userInfo.photoURL}
            />
            <div>
              <p className=" font-semibold">{chat[1].userInfo.displayName}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Chats;
