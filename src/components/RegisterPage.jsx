import React from "react";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  return (
    <div className="h-screen w-screen bg-blue-200 flex justify-center items-center">
      <form className=" flex gap-4 flex-col p-9 w-1/3 bg-white">
        <h2 className="mx-auto text-lg font-semibold ">NexTalk</h2>
        <p className="font-semibold"> Register</p>
        <input
          className="p-1 focus:border-none border-b-2 focus:outline-none"
          type="text"
          placeholder="Display Name"
        />

        <input
          className="p-1 focus:border-none border-b-2 focus:outline-none"
          type="email"
          placeholder="Email"
        />
        <input
          className="p-2 border-b-2 outline-none"
          type="password"
          placeholder="Password"
        />
        <label htmlFor="avatar">
          <img
            className="w-10 inline"
            src="https://cdn-icons-png.flaticon.com/512/8377/8377243.png"
          />{" "}
          <span>Choose an Avatar</span>
        </label>
        <input
          id="avatar"
          className="hidden"
          type="file"
          placeholder="Avatar"
        />
        <button className=" border border-blue-200  text-center p-2">
          Register
        </button>
        <div className=" flex gap-1">
          <p>Already a user? </p>
          <Link to={"/"}>
            <p className=" hover:underline text-gray-700">Sign In</p>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default RegisterPage;
