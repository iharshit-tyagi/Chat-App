import React from "react";
import SideBar from "./SideBar";
import Chat from "./Chat";
import TrackAuthStatus from "./TrackAuthStatus";
import { useDispatch, useSelector } from "react-redux";
import Input from "./Input";
const Home = () => {
  const user = useSelector((store) => store.user);
  if (!user) return <h2>Loading</h2>;
  return (
    <div className=" bg-gray-900 flex justify-center  text-white items-center h-screen">
      <TrackAuthStatus />
      <div className=" h-screen w-screen bg-gray-800 rounded-lg grid grid-cols-12 overflow-hidden">
        <div className=" bg-gray-900 col-span-4 p-4 ">
          <SideBar />
        </div>
        <Chat />
      </div>
    </div>
  );
};

export default Home;
