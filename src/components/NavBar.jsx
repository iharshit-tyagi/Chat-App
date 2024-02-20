import React from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../utils/userSlice";
const NavBar = () => {
  const user = useSelector((store) => store.user.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {});
  };
  if (!user) return null;
  return (
    <div className="flex h-16 items-center justify-between p-4 bg-gray-800 ">
      <h2 className="text-lg font-semibold text-white">NexTalk</h2>
      <div className=" text-white flex items-center ">
        <img
          className="w-12 h-12 rounded-full object-cover mr-3"
          src={user?.photoURL}
        />
        <p className="text-xl">{user?.displayName}</p>
        <button
          type="button"
          onClick={handleLogout}
          className="border text-lg border-gray-100 rounded-md p-2 ml-4"
        >
          Log Out
        </button>
      </div>
    </div>
  );
};

export default NavBar;
