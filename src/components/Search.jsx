import React, { useState } from "react";
import UserChat from "./UserChat";
import {
  collection,
  query,
  where,
  getDocs,
  getDoc,
  setDoc,
  doc,
  updateDoc,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../firebase";
import { useDispatch, useSelector } from "react-redux";

const Search = () => {
  const [userQuery, setQuery] = useState("");
  const dispatch = useDispatch();
  const searchResults = useSelector((store) => store.user.searchResults);
  const [searchResultsState, setSearchResultsState] = useState([]);
  const currentUser = useSelector((store) => store.user.user);
  const usersRef = collection(db, "users");
  const q = query(usersRef, where("displayName", "==", userQuery));
  const handleSearch = async () => {
    const querySnapshot = await getDocs(q);
    setSearchResultsState(querySnapshot.docs);

    // querySnapshot.forEach((doc) => {

    // });
  };
  const handleSelect = async (user) => {
    //CHeck if chat exists or not , if not then create

    const userID = user._document.data.value.mapValue.fields.uid.stringValue;
    const photoURL =
      user._document.data.value.mapValue.fields.photoURL.stringValue;
    const displayName =
      user._document.data.value.mapValue.fields.displayName.stringValue;
    const combinedId =
      currentUser.uid > userID
        ? currentUser.uid + userID
        : userID + currentUser.uid;

    try {
      const res = await getDoc(doc(db, "chats", combinedId));
      //create user Chats
      if (!res.exists()) {
        //create a chat in chats collection
        await setDoc(doc(db, "chats", combinedId), { messages: [] });

        //create user chats
        await updateDoc(doc(db, "userChats", currentUser.uid), {
          [combinedId + ".userInfo"]: {
            uid: userID,
            displayName: displayName,
            photoURL: photoURL,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });
        await updateDoc(doc(db, "userChats", userID), {
          [combinedId + ".userInfo"]: {
            uid: currentUser.uid,
            displayName: currentUser.displayName,
            photoURL: currentUser.photoURL,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });
      }
      setQuery("");
      setSearchResultsState([]);
    } catch (err) {
      console.log(err);
    }
  };
  const handleKeyDown = (e) => {
    e.key === "Enter" && handleSearch();
  };
  return (
    <div className="border-b-2">
      <input
        type="text"
        placeholder="Find User"
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        className="w-full px-3 py-2 mt-2 text-lg border border-gray-700 bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
        value={userQuery}
        onFocus={() => {
          setShowSearchResults(true);
        }}
        onBlur={() => {
          setShowSearchResults(false);
        }}
      />
      {searchResultsState.length != 0 && (
        <div className="   mt-2 bg-gray-800 border  border-gray-700 rounded-lg  z-10 max-h-48 overflow-y-auto">
          {searchResultsState.map((user) => (
            <div
              key={user._document.data.value.mapValue.fields.uid.stringValue}
              onClick={() => handleSelect(user)}
              className="p-1 cursor-pointer   "
            >
              <UserChat
                photoURL={
                  user._document.data.value.mapValue.fields.photoURL.stringValue
                }
                displayName={
                  user._document.data.value.mapValue.fields.displayName
                    .stringValue
                }
                showMessage={true}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
