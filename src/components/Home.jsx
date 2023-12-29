import React from "react";
import SideBar from "./SideBar";
import Chat from "./Chat";
import TrackAuthStatus from "./TrackAuthStatus";

const Home = () => {
  return (
    <div className=" bg-slate-600 flex justify-center items-center h-screen">
      <TrackAuthStatus />
      <div className="w-4/6 h-5/6 bg-white rounded-lg grid grid-cols-12 overflow-hidden">
        <div className=" bg-slate-500 col-span-4 ">
          <SideBar />
        </div>

        <Chat />
      </div>
    </div>
  );
};

export default Home;
