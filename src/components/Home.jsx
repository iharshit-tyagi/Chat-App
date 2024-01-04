import React from "react";
import SideBar from "./SideBar";
import Chat from "./Chat";
import TrackAuthStatus from "./TrackAuthStatus";
import { useDispatch, useSelector } from "react-redux";
const Home = () => {
  const user = useSelector((store) => store.user);
  if (!user) return <h2>Loading</h2>;
  return (
    <div className=" bg-slate-600 flex justify-center items-center h-screen">
      <TrackAuthStatus />
      <div className=" h-screen w-screen bg-white rounded-lg grid grid-cols-12 overflow-hidden">
        <div className=" bg-black col-span-4 ">
          <SideBar />
        </div>
        <Chat />
      </div>
    </div>
  );
};

export default Home;
