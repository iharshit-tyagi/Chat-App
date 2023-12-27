import React from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
const NavBar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {});
  };
  return (
    <div className="flex h-14 items-center justify-between p-2 bg-orange-400 ">
      <h2 className="text-lg font-semibold text-white">NexTalk</h2>
      <div className=" text-white flex gap-2 items-center">
        <img
          className="w-7 rounded-full object-cover"
          src="https://cdn.icon-icons.com/icons2/2468/PNG/512/user_icon_149329.png"
        />
        <p>Name</p>
        <button
          type="button"
          onClick={handleLogout}
          className="border border-gray-100 rounded-md p-1 text-center "
        >
          Log Out
        </button>
      </div>
    </div>
  );
};

export default NavBar;
