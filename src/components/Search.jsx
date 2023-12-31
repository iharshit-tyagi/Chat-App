import React, { useState } from "react";
import UserChat from "./UserChat";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase";
const Search = () => {
  const [userQuery, setQuery] = useState("");
  const [users, setUsers] = useState([]);
  const usersRef = collection(db, "users");
  const q = query(usersRef, where("displayName", "==", userQuery));
  const handleSearch = async () => {
    const querySnapshot = await getDocs(q);
    setUsers(querySnapshot.docs);
    console.log(querySnapshot);
    // querySnapshot.forEach((doc) => {

    // });
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
        className="w-full px-3 py-1"
      />
      {users.length === 0 || (
        <div>
          {users.map((user) => (
            <UserChat
              photoURL={
                user._document.data.value.mapValue.fields.photoURL.stringValue
              }
              displayName={
                user._document.data.value.mapValue.fields.displayName
                  .stringValue
              }
            />
          ))}
        </div>
      )}
      {/* <UserChat /> */}
    </div>
  );
};

export default Search;
