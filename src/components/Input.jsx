import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { db, storage } from "../firebase";
import { v4 as uuid } from "uuid";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

import {
  arrayUnion,
  doc,
  serverTimestamp,
  Timestamp,
  updateDoc,
} from "firebase/firestore";
const Input = () => {
  const [text, setText] = useState("");
  const [img, setImg] = useState(null);
  const user = useSelector((store) => store.user.user);
  const chatInfo = useSelector((store) => store.chat.chatInfo);
  const handleSend = async () => {
    if (img) {
      const storageRef = ref(storage, uuid());
      const uploadTask = uploadBytesResumable(storageRef, img);
      uploadTask.on(
        (error) => {},
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateDoc(doc(db, "chats", chatInfo.chatId), {
              messages: arrayUnion({
                id: uuid(),
                text,
                senderId: user.uid,
                date: Timestamp.now(),
                img: downloadURL,
              }),
            });
          });
        }
      );
    } else {
      await updateDoc(doc(db, "chats", chatInfo.chatId), {
        messages: arrayUnion({
          id: uuid(),
          text,
          senderId: user.uid,
          date: Timestamp.now(),
        }),
      });
    }

    await updateDoc(doc(db, "userChats", user.uid), {
      [chatInfo.chatId + ".lastMessage"]: {
        text,
      },
      [chatInfo.chatId + ".date"]: serverTimestamp(),
    });

    await updateDoc(doc(db, "userChats", chatInfo.userInfo.uid), {
      [chatInfo.chatId + ".lastMessage"]: {
        text,
      },
      [chatInfo.chatId + ".date"]: serverTimestamp(),
    });

    setText("");
    setImg(null);
  };
  return (
    <div className="flex justify-between items-center bg-gray-800 p-2 rounded-lg">
      <input
        className="p-2 text-white bg-gray-800 focus:border-none h-full text-lg focus:outline-none flex-grow"
        type="text"
        placeholder="Type something..."
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <div className="flex gap-2 pr-3 items-center">
        <input
          type="file"
          className="hidden focus:outline-none focus:ring"
          id="attachment"
          onChange={(e) => setImg(e.target.files[0])}
        />
        <label htmlFor="attachment">
          <img
            className="w-6 cursor-pointer"
            src="https://cdn-icons-png.flaticon.com/512/4700/4700815.png"
            alt="Attachment Icon"
          />
        </label>
        <button
          className="px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600"
          onClick={handleSend}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Input;
