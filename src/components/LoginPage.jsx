import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

import TrackAuthStatus from "./TrackAuthStatus";
import { useDispatch } from "react-redux";
const LoginPage = () => {
  const dispatch = useDispatch();
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const emailId = useRef(null);
  const password = useRef(null);
  const handleSignin = (e) => {
    signInUser();
  };
  const signInUser = async () => {
    signInWithEmailAndPassword(
      auth,
      emailId.current.value,
      password.current.value
    )
      .then((userCredential) => {
        // Signed in
        // navigate("/home");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorMessage);
      });
  };
  return (
    <div className="h-screen w-screen bg-blue-200 flex justify-center items-center">
      <TrackAuthStatus />
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
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        <button
          type="button"
          onClick={handleSignin}
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
