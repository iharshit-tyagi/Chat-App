import React, { useRef } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const emailId = useRef(null);
  const password = useRef(null);
  const handleClick = (e) => {
    navigate("/home");
  };

  return (
    <div className="h-screen w-screen bg-blue-200 flex justify-center items-center">
      <form className=" flex gap-4 flex-col p-10 w-1/3 bg-white">
        <h2 className="mx-auto text-lg font-semibold ">NexTalk </h2>
        <p className="font-semibold">Login</p>
        <input
          ref={emailId}
          className="p-2 focus:border-none border-b-2 focus:outline-none"
          type="email"
          placeholder="Email"
        />
        <input
          ref={password}
          className="p-2 border-b-2 outline-none"
          type="password"
          placeholder="Password"
        />
        <button
          type="button"
          onClick={handleClick}
          className=" border border-blue-200  text-center p-2"
        >
          Sign In
        </button>
        <div className=" flex gap-1">
          <p>Don't have an account? </p>
          <Link to={"/register"}>
            <p className="hover:underline">Register</p>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
